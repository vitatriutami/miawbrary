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
    <>
      <div className="fixed inset-0 -z-50 h-screen w-screen flex flex-col justify-center items-center bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        <div className="w-[320px] z-50 space-y-6 p-6 card-border flex flex-col justify-center items-center">
          <section className="flex flex-col items-center">
            <h2 className="font-bold text-3xl">Register</h2>
            <p>Create an account to get started</p>
          </section>
          <Input
            placeholder="your name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <Input
            placeholder="yourmail@mail.com"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            placeholder="******"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button
            className="bg-gradient-to-t from-red-500 to-red-300 rounded-xl hover:scale-105 transition-all duration-400 hover:font-bold"
            onClick={handleRegister}
          >
            Create Account
          </Button>
          <section className="text-center">
            Already have an account?{" "}
            <span className="text-blue-400 hover:text-blue-600">
              <Link to="/login"> Login</Link>
            </span>
          </section>
        </div>
      </div>
    </>
  );
}
