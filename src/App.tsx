import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Input } from "./components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "./components/ui/button";

const initialBookVal = {
  name: "",
  description: "",
  isbn: "",
  author: "",
};

export default function App() {
  const [data, setData] = useState([]);
  const [book, setBook] = useState(initialBookVal);

  // const query = useQuery({
  //   queryKey: ["books"],
  //   queryFn: () => {},
  // });
  // async function getData() {
  //   const res = await fetch("http://localhost:8000/books");
  //   const data = await res.json();
  //   setData(data);
  // }

  // async function createData() {
  //   const res = await fetch("http://localhost:8000/books", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(book),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   getData();
  //   setBook(initialBookVal);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="flex justify-center my-20">
      <main className="w-[400px] space-y-4">
        <h1 className="text-2xl font-bold">Books</h1>
        {/* <div>
          {data.map((book: any) => {
            return <div key={book._id}>{book.name}</div>;
          })}
        </div> */}
        <div className="p-2">
          {/* input form */}
          <div className="mb-4 space-y-2">
            <div>
              <Label htmlFor="name" className="font-semibold">
                Book Title
              </Label>
              <Input
                id="name"
                value={book.name}
                placeholder="name"
                onChange={(e) => setBook({ ...book, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="description" className="font-semibold">
                Description
              </Label>
              <Input
                id="description"
                value={book.description}
                placeholder="description"
                onChange={(e) =>
                  setBook({ ...book, description: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="isbn" className="font-semibold">
                ISBN
              </Label>
              <Input
                id="isbn"
                value={book.isbn}
                placeholder="isbn"
                onChange={(e) => setBook({ ...book, isbn: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="author" className="font-semibold">
                Author
              </Label>
              <Input
                id="author"
                value={book.author}
                placeholder="author"
                onChange={(e) => setBook({ ...book, author: e.target.value })}
              />
            </div>
          </div>
          <Button>Submit book</Button>
        </div>
      </main>
    </div>
  );
}
