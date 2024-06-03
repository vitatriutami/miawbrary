import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { handleRegister } = useAuth(user);

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px] space-y-2">
        <section>
          <h2>Register</h2>
          <p>Create an account to get started</p>
        </section>

        <Input
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button className="w-full" onClick={handleRegister}>
          Register
        </Button>
        <section className="text-center">
          Already have an account?{" "}
          <span className="text-blue-500 hover:text-blue-800">
            <Link to="/login">Login</Link>
          </span>
        </section>
      </div>
    </main>
  );
}
