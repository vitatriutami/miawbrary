import { IBook } from "@/types/entity";
import { Button } from "../ui/button";
import { API_URL } from "@/config/ApiUrl";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

export const BookCard = ({ book }: { book: IBook }) => {
  return (
    <main className="card-border relative space-y-2 w-[200px] h-[300px]">
      <div className="w-[160px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[53%]">
        <div className="flex flex-col justify-between items-center">
          <img
            src={`${API_URL}/${book.file}`}
            alt="book cover"
            width={100}
            height={100}
          />
          <section className="text-center">
            <h3 className="font-semibold line-clamp-2">{book.name}</h3>
            <p>{book.author}</p>
            <p className="text-xs text-slate-600 line-clamp-1">
              {book.description}
            </p>
          </section>
        </div>
      </div>
      <div className="absolute left-2">
        <Link to="#">
          <FaHeart
            title="Add to My Reading List"
            className="text-red-300 text-xl hover:text-red-500 hover:scale-110"
          />
        </Link>
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to={`/books/${book._id}`}>
          <Button
            size="sm"
            className=" bg-red-100 border-2 border-black rounded-xl mx-auto hover:scale-105 hover:bg-red-700 hover:text-white"
          >
            See more
          </Button>
        </Link>
      </div>
    </main>
  );
};
