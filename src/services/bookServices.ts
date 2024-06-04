import { API_URL } from "@/config/ApiUrl";
import { IBook } from "../types/entity";

export const bookServices = {
  getData: async (searchKey: string | null) => {
    const query = searchKey ? `?search=${searchKey}` : "";
    // tambah query
    const res = await fetch(`${API_URL}/api/v1/books${query}`);
    const data = (await res.json()) as IBook[];
    return data;
  },

  getSingleData: async (id: string) => {
    const res = await fetch(`${API_URL}/api/v1/books/${id}`);
    const data = (await res.json()) as IBook;
    return data;
  },

  createData: async ({ name, description, isbn, author, file }: IBook) => {
    if (!name || !description || !isbn || !author || !file) {
      throw new Error("All field must be filled");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("isbn", isbn);
    formData.append("author", author);
    formData.append("file", file[0]); // kirim satu. banyak pakai loop

    const res = await fetch(`${API_URL}/api/v1/books`, {
      method: "POST",
      // headers: {"Content-Type": "application/json"},
      body: formData,
    });
    const data = (await res.json()) as IBook;
    return data;
  },
  updateData: async (id: string) => {
    const res = await fetch(`${API_URL}/api/v1/books/${id}`, {
      method: "PATCH",
    });
    const data = await res.json();
    return data;
  },
  // updateData: async (id: string) => {
  //   const res = await fetch(`${API_URL}/books/${id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ bookId: id }),
  //   });
  //   const data = await res.json();
  //   return data;
  // },
};

// deleteData: async (id: string) => {
//   const res = await fetch(`${API_URL}/api/v1/books/${id}`, {
//     method: "DELETE",
//   });
//   const data = await res.json();
//   return data;
// },
