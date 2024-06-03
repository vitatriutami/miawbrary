import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { bookServices } from "@/services/bookServices";
import { API_URL } from "@/config/ApiUrl";
// import { useState } from "react";

export default function SingleDataAdmin() {
  const { id } = useParams();

  // Fetching data bds ID
  const query = useQuery({
    queryKey: [`book-${id}`], // hash bds id
    queryFn: () => bookServices.getSingleData(id as string),
  });

  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="space-y-4 flex flex-col items-center">
        <section className="grid grid-cols-2 gap-8 max-w-7xl m-auto">
          <div>
            <img
              src={`${API_URL}/${query.data?.file}`}
              width={400}
              height={400}
              alt="book_cover"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">{query.data?.name}</h1>
            <p>{query.data?.author}</p>
            <p>{query.data?.description}</p>
            <p>{query.data?.isbn}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
