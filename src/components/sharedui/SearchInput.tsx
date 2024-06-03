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
        className="placeholder:text-slate-500 border-2"
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyUp={handleSearch}
      />
    </main>
  );
};
