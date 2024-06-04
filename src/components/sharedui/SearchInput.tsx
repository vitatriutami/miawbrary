import { useState } from "react";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      navigate(`/books/?search=${searchKey}`);
    }
  }
  return (
    <main className="lg:w-[700px] ">
      <Input
        placeholder="Search book, author, description"
        className="placeholder:text-slate-700 border-2 font-semibold tracking-widest border-red-700 hover:border-red-500"
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyUp={handleSearch}
      />
    </main>
  );
};
