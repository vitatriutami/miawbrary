import { useAuth } from "@/hooks/useAuth";
import Avatar from "boring-avatars";

export default function Profile() {
  const { user } = useAuth({});

  return (
    <main className="min-h-screen space-y-4 flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-3xl">My Profile</h1>
      <div className="lg:flex lg:colums-2 justify-center md:columns-1 sm:columns-1 md:flex-col h-[600px] lg:w-[1000px] md:w-[700px] card-border">
        {/* right */}
        <div className="flex flex-col items-center">
          <div className="p-6 lg:w-2/3 sm:w-full flex justify-between items-center ">
            <div className="flex gap-2 items-center">
              {user ? (
                <Avatar
                  name={user.name}
                  size={32}
                  variant="bauhaus"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
              ) : null}
              <div>
                <h2>{user ? <span> {user.name}</span> : null}</h2>
                <p>{user ? <span> {user.email}</span> : null}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <h3>
                <span className="font-semibold">0</span> Following
              </h3>
              <h3>
                <span className="font-semibold">0</span> Followers
              </h3>
            </div>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-col p-6 lg:w-1/3 sm:w-full space-y-2">
          <div>
            <div className="font-semibold bg-rose-100 pl-2 rounded-xl">
              {user ? <span> {user.name}</span> : null}
            </div>
            <div className="ml-4 flex flex-col items-start">
              <button className="hover:text-blue-800 hover:font-semibold">
                My Loans
              </button>
              <button className="hover:text-blue-800 hover:font-semibold">
                Loan History
              </button>
              <button className="hover:text-blue-800 hover:font-semibold">
                My Feed
              </button>
            </div>
          </div>
          <div>
            <div className="font-semibold  bg-rose-100 pl-2 rounded-xl">
              Reading Log
            </div>
            <div className="ml-4 mr-1 flex flex-col">
              <div className="flex justify-between hover:text-blue-800 hover:font-semibold">
                <div>Currently Reading</div>
                <div>0</div>
              </div>
              <div className="flex justify-between hover:text-blue-800 hover:font-semibold">
                <div>Want to Read</div>
                <div>0</div>
              </div>
              <div className="flex justify-between hover:text-blue-800 hover:font-semibold">
                <div>Already Read</div>
                <div>0</div>
              </div>
              <hr />
              <div className="flex justify-between hover:text-blue-800 hover:font-semibold">
                <div>My Notes</div>
                <div>0</div>
              </div>
              <div className="flex justify-between hover:text-blue-800 hover:font-semibold">
                <div>My Reviews</div>
                <div>0</div>
              </div>
              <hr />
              <div className="flex justify-between hover:text-blue-800 hover:font-semibold">
                <div>My Reading Stats</div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
