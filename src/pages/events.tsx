import MathCat from "@/assets/math_cat.jpg";
import MeowCat from "@/assets/meow_cat.jpg";
import ReadCat from "@/assets/read_cat.jpg";
import SelfieCat from "@/assets/selfie-cat.jpg";
import SempoaCat from "@/assets/sempoa_cat.jpg";
import TeacherCat from "@/assets/teacher_cat.jpg";
import WriteCat from "@/assets/write_cat.jpg";

const events = [
  {
    imgSrc: MathCat,
    title: "Book Talk: Miaw Miaw Miaw",
    date: "June 1, 2024",
    time: "3 PM",
    place: "Lapangan Banteng, DKI Jakarta",
  },
  {
    imgSrc: MeowCat,
    title: "Book Talk: Miaw Miaw Miaw",
    date: "June 1, 2024",
    time: "3 PM",
    place: "Lapangan Banteng, DKI Jakarta",
  },
  {
    imgSrc: ReadCat,
    title: "Book Talk: Miaw Miaw Miaw",
    date: "June 1, 2024",
    time: "3 PM",
    place: "Lapangan Banteng, DKI Jakarta",
  },
  {
    imgSrc: SelfieCat,
    title: "Book Talk: Miaw Miaw Miaw",
    date: "June 1, 2024",
    time: "3 PM",
    place: "Lapangan Banteng, DKI Jakarta",
  },
  {
    imgSrc: SempoaCat,
    title: "Book Talk: Miaw Miaw Miaw",
    date: "June 1, 2024",
    time: "3 PM",
    place: "Lapangan Banteng, DKI Jakarta",
  },
  {
    imgSrc: TeacherCat,
    title: "Book Talk: Miaw Miaw Miaw",
    date: "June 1, 2024",
    time: "3 PM",
    place: "Lapangan Banteng, DKI Jakarta",
  },
  {
    imgSrc: WriteCat,
    title: "Book Talk: Miaw Miaw Miaw",
    date: "June 1, 2024",
    time: "3 PM",
    place: "Lapangan Banteng, DKI Jakarta",
  },
];

export default function Events() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="flex flex-col items-center space-y-8 mb-10">
        <h1 className="text-3xl font-semibold">Miawbrary Events</h1>
        <div className="flex flex-wrap justify-center items-center gap-8 px-10">
          {events.map((event, index) => (
            <section
              key={index}
              className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2"
            >
              <div className="flex flex-col items-center">
                <img src={event.imgSrc} className="h-60" alt="Miawbrary Events" />
                <h1 className="font-semibold text-2xl">{event.title}</h1>
              </div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Date</td>
                      <td>:</td>
                      <td className="pl-2">{event.date}</td>
                    </tr>
                    <tr>
                      <td>Time</td>
                      <td>:</td>
                      <td className="pl-2">{event.time}</td>
                    </tr>
                    <tr>
                      <td>Place</td>
                      <td>:</td>
                      <td className="pl-2">{event.place}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
