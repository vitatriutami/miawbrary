import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import BookDetail from "./pages/Books/bookDetail";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Landing from "./pages/landing";
import Admin from "./pages/Admin/admin";
import BookCatalog from "./pages/Books/bookCatalog";
import DashboardLayout from "./layout/PagesLayout";
import Profile from "./pages/profile";
import Events from "./pages/events";
import Faq from "./pages/faq";
import About from "./pages/about";
import Settings from "./pages/settings";
import SingleDataAdmin from "./pages/Admin/singleDataAdmin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="books" element={<BookCatalog />} />
        <Route path="books/:id" element={<BookDetail />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/:id" element={<SingleDataAdmin />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="faq" element={<Faq />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
