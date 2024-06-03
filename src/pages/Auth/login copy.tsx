import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import LoginImg from "@/assets/girl_cat.jpg";
import { Eye } from "lucide-react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useAuth(user);
  
  return (
    <main className="bg-gray-50 min-h-screen flex justify-center items-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-16">
          <div className="font-bold text-2xl text-blue-700">Login</div>
          <div className="text-sm mt-4 text-blue-900">
            If you already a member, easily log in
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 rounded-xl border mt-8 "
              type="text"
              name="email"
              placeholder="youremail@mail.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <Eye className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-300 w-5 h-5" />
            </div>
            <button
              className="bg-blue-900 rounded-xl text-white py-2 hover:scale-105 duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <div className="text-center text-sm">OR</div>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
            {" "}
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            Login with Google
          </button>

          <div className="mt-5 text-xs border-b border-gray-400 py-4">
            Forgot your password?{" "}
            <span className="text-blue-700 cursor-pointer hover:text-blue-900">
              Click here
            </span>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center">
            <div>Don't have an account?</div>
            <Link to="/register">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="w-1/2 md:block hidden ">
          <img
            className="rounded-2xl object-cover h-[475px] m-auto"
            src={LoginImg}
            alt=""
          />
        </div>
      </div>

      {/* <div className="w-[320px] space-y-2">
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
      </div> */}
    </main>
  );
}
