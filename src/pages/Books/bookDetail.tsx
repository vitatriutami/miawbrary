import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { bookServices } from "@/services/bookServices";
import { API_URL } from "@/config/ApiUrl";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FaHeart } from "react-icons/fa6";
import Loading from "@/assets/loading.png";
import ErrorNull from "@/assets/data_error.png";
// import { useState } from "react";

export default function BookDetail() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  // Fetching data bds ID
  const query = useQuery({
    queryKey: [`book-${id}`], // hash bds id
    queryFn: () => bookServices.getSingleData(id as string),
  });

  const { mutate: handleBorrowBook } = useMutation({
    mutationFn: () => bookServices.updateData(id as string),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("You just borrowed book!");
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });

  return (
    <div className="min-h-screen">
      <main className="space-y-12 px-10">
        <section className="grid md:grid-cols-2 gap-8 max-w-7xl m-auto bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-2xl">
          <div className="border-r-2 border-black bg-gradient-to-l from-emerald-400 to-emerald-200 flex justify-center items-center rounded-s-2xl p-10">
            {query.isLoading ? (
              <div className="flex flex-col justify-center items-center space-y-6 m-auto">
                <img
                  src={Loading}
                  className="h-40 drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.4)]"
                  alt="loading"
                />
                <h1 className="text-3xl">Loading...</h1>
              </div>
            ) : null}
            {query.isError ? (
              <div className="flex flex-col justify-center items-center space-y-6">
                <img
                  src={ErrorNull}
                  className="h-40 drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.4)]"
                  alt="loading"
                />
                <h1 className="text-3xl">Opss! Data error!</h1>
              </div>
            ) : (
              <img
                src={`${API_URL}/${query.data?.file}`}
                alt="book_cover"
                className="rounded-lg"
              />
            )}
          </div>
          <div className="space-y-4 pt-10">
            <div className="border-b-2 border-black pb-4">
              {query.data?.isAvailable === true ||
              query.data?.isAvailable === undefined ? (
                <div className="flex gap-3 items-center">
                  <Button
                    className="bg-gradient-to-t from-red-500 to-red-400 rounded-xl hover:scale-105 transition-all duration-400 hover:font-bold"
                    onClick={() => handleBorrowBook()}
                  >
                    Borrow
                  </Button>
                  <Button className="rounded-xl border-2 border-black">
                    <div className="flex gap-1 items-center hover:font-bold">
                      <FaHeart className="text-red-300 text-xl hover:text-red-500 hover:scale-110" />
                      Add to My Reading List
                    </div>
                  </Button>
                </div>
              ) : (
                <div className="flex gap-4 ">
                  <Button disabled className="bg-red-50 rounded-xl">
                    Borrowed
                  </Button>
                  <Button>Read</Button>
                </div>
              )}
              <div className="py-4">
                <h1 className="font-bold text-3xl">{query.data?.name}</h1>
                <p>{query.data?.author}</p>
              </div>
            </div>
            <p className="mx-4">{query.data?.description}</p>
            <p className="text-slate-700 py-6">ISBN: {query.data?.isbn}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
