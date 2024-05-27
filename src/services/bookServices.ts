import { IBook } from "../types/entity";

export const bookServices = {
  getData: async () => {
    const res = await fetch("http://localhost:8000/books");
    const data = (await res.json()) as IBook[];
    return data;
  },
};
