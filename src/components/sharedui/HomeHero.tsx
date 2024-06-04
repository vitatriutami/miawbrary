import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import HiCat from "@/assets/cat walk 1.png";

export const HomeHero = () => {
  const { user } = useAuth({});

  return (
    <main className="relative lg:w-[800px] md:w-[500px] w-[300px] py-10 bg-gradient-to-r from-yellow-400 to-yellow-200 p-3 rounded-xl  flex flex-col justify-center items-center text-center space-y-4 mb-14">
      <img
        src={HiCat}
        alt="Cat Welcoming"
        className="lg:w-52 sm:w-32 w-32 md:w-44 absolute -bottom-10 md:-bottom-16  md:-right-16 -right-12 lg:-right-18 lg:-bottom-16"
      />
      <div>
        <h1 className="text-3xl">
          Hi,
          {user ? (
            <span className="text-red-500 font-semibold text-4xl">
              {" "}
              {user.name}!
            </span>
          ) : null}
        </h1>
        <p>The library serves as a welcoming home for knowledge</p>
      </div>
      <Button className="bg-gradient-to-t from-red-500 to-red-300 rounded-xl hover:scale-105 transition-all duration-400 hover:font-bold">
        Learn more
      </Button>
    </main>
  );
};
