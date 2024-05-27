import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const initialBookVal = {
  name: "",
  description: "",
  isbn: "",
  author: "",
};

export default function App() {
  const [data, setData] = useState([]);
  const [book, setBook] = useState(initialBookVal);

  const query = useQuery({
    queryKey: ["books"],
    queryFn: ()=>{}
  })
  async function getData() {
    const res = await fetch("http://localhost:8000/books");
    const data = await res.json();
    setData(data);
  }

  async function createData() {
    const res = await fetch("http://localhost:8000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = await res.json();
    console.log(data);
    getData();
    setBook(initialBookVal);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div>
        {data.map((book: any) => {
          return <div key={book._id}>{book.name}</div>;
        })}
      </div>
      <div>
        <input
          value={book.name}
          placeholder="name"
          onChange={(e) => setBook({ ...book, name: e.target.value })}
        />
        <input
          value={book.description}
          placeholder="description"
          onChange={(e) => setBook({ ...book, description: e.target.value })}
        />
        <input
          value={book.isbn}
          placeholder="isbn"
          onChange={(e) => setBook({ ...book, isbn: e.target.value })}
        />
        <input
          value={book.author}
          placeholder="author"
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <button onClick={createData}>Submit book</button>
      </div>
    </div>
  );
}
