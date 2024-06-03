import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useAuth(user);
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px] space-y-2">
        <section>
          <h2>Login</h2>
          <p>Welcome Back!</p>
        </section>
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
        <section className="text-center">
          Don't have an account?{" "}
          <span className="text-blue-500">
            <Link to="/register"> Register</Link>
          </span>
        </section>
      </div>
    </main>
  );
}
