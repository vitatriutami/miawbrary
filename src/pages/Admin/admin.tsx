import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { bookServices } from "@/services/bookServices";
import { toast } from "sonner";
import { IBook } from "@/types/entity";
import { API_URL } from "@/config/ApiUrl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const initialBookVal: IBook = {
  name: "",
  description: "",
  isbn: "",
  author: "",
  file: null,
};

export default function Admin() {
  const [book, setBook] = useState(initialBookVal);
  const queryClient = useQueryClient();

  // Hooks useQuery untuk bantu cache
  const query = useQuery({
    queryKey: ["books"], // key untuk caching ke browser dengan nama/label apa, untuk invalidate (dihapus - dicache ulang)
    queryFn: () => bookServices.getData(""),
  });

  // Untuk melakukan C/U/D
  const { mutate: handleAddBook } = useMutation({
    mutationFn: bookServices.createData,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Buku berhasil ditambahkan");
      setBook(initialBookVal);
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });
  // const { mutate: handleDeleteBook } = useMutation({
  //   mutationFn: bookServices.deleteData,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries();
  //     toast.success("Buku berhasil dihapus");
  //     setBook(initialBookVal);
  //   },
  //   onError: (error: { message: string }) => {
  //     toast.error(error.message);
  //   },
  // });

  return (
    <>
      <div className="flex flex-col items-center">
        <main className="space-y-4 flex flex-col items-center">
          <section className="flex flex-col items-center">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-center">Admin Page</h1>
              <p className="text-center">
                Add a new book by open the dialog here!
              </p>
            </div>
            <div className="mb-10">
              {/* --- ADD A BOOK HERE --- */}
              {/* Open the dialog to add book */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="destructive"
                    className="bg-blue-900 shadow-lg hover:transition hover:duration-300 hover:-translate-y-1 text-white rounded-2xl hover:bg-slate-700"
                  >
                    Add a New Book
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add a New Book</DialogTitle>
                    <DialogDescription>
                      Add a new book here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="name"
                        className="text-right font-semibold"
                      >
                        Book Title
                      </Label>
                      <Input
                        className="col-span-3 placeholder:text-slate-400"
                        id="name"
                        value={book.name}
                        placeholder="name"
                        onChange={(e) =>
                          setBook({ ...book, name: e.target.value })
                        }
                      />
                      <Label
                        htmlFor="desc"
                        className="text-right font-semibold"
                      >
                        Description
                      </Label>
                      <Input
                        className="col-span-3 placeholder:text-slate-400"
                        id="desc"
                        value={book.description}
                        placeholder="description"
                        onChange={(e) =>
                          setBook({ ...book, description: e.target.value })
                        }
                      />
                      <Label
                        htmlFor="isbn"
                        className="text-right font-semibold"
                      >
                        ISBN
                      </Label>
                      <Input
                        className="col-span-3 placeholder:text-slate-400"
                        id="isbn"
                        value={book.isbn}
                        placeholder="isbn"
                        onChange={(e) =>
                          setBook({ ...book, isbn: e.target.value })
                        }
                      />
                      <Label
                        htmlFor="author"
                        className="text-right font-semibold"
                      >
                        Author
                      </Label>
                      <Input
                        className="col-span-3 placeholder:text-slate-400"
                        id="author"
                        value={book.author}
                        placeholder="author"
                        onChange={(e) =>
                          setBook({ ...book, author: e.target.value })
                        }
                      />
                      <Label
                        htmlFor="upload"
                        className="text-right font-semibold"
                      >
                        Upload Cover
                      </Label>
                      <Input
                        className="col-span-3 placeholder:text-slate-400"
                        id="upload"
                        type="file"
                        onChange={(e) =>
                          setBook({ ...book, file: e.target.files as FileList })
                        }
                      />
                    </div>
                  </div>
                  <DialogFooter className="mx-auto">
                    <Button
                      className="bg-black text-white w-fit rounded-xl hover:bg-slate-700"
                      type="submit"
                      onClick={() => {
                        handleAddBook(book);
                      }}
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          {/* --- BOOK ADDED --- */}
          {query.data?.length === 0 ? <div>There is no data</div> : null}
          {query.isLoading ? <div>Loading...</div> : null}
          {query.isError ? (
            <div>Page error</div>
          ) : (
            <section className="flex flex-wrap gap-8 m-auto">
              {query.data?.map((book) => {
                return (
                  <div
                    key={book._id}
                    className="card-border h-140 w-60 p-7 flex flex-col items-center justify-center"
                  >
                    <div>
                      <img
                        src={`${API_URL}/${book.file}`}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h1 className="font-semibold line-clamp-1">{book.name}</h1>
                    <div>{book.author}</div>
                    <p className="line-clamp-2">{book.description}</p>
                    <p className="text-slate-700">{book.isbn}</p>
                    <div className="flex gap-2">
                      <Link to={`/admin/${book._id}`}>
                        <Button
                          size="sm"
                          className="bg-red-400 rounded-xl mt-4"
                        >
                          See detail
                        </Button>
                      </Link>
                      <Button size="sm" className="bg-red-400 rounded-xl mt-4">
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
            </section>
          )}
        </main>
      </div>
    </>
  );
}
