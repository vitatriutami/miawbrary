import { API_URL } from "@/config/ApiUrl";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { userAtom } from "@/context/user";
import { useNavigate } from "react-router-dom";

interface useAuthProps {
  name?: string;
  email?: string;
  password?: string;
}

export const useAuth = ({ name, email, password }: useAuthProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  async function handleLogin() {
    if (!email || !password) {
      alert("All field must be filled!");
      return;
    }
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    localStorage.setItem("user", JSON.stringify(data.user));
    Cookies.set("token", data.token);

    setUser(data.user);
    navigate("/home", { replace: true });
  }
  async function handleLogout() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }
  async function handleRegister() {
    if (!name || !email || !password) {
      alert("All field must be filled!");
      return;
    }
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    navigate("/login", { replace: true });
    return data;
  }
  async function isLoggedIn() {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  async function loggedInUserData() {
    localStorage.getItem("user");
  }

  return { handleRegister, handleLogin, handleLogout, isLoggedIn, loggedInUserData, user };
};
