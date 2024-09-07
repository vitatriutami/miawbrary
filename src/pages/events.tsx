import MathCat from "@/assets/math_cat.jpg";
import MeowCat from "@/assets/meow_cat.jpg";
import ReadCat from "@/assets/read_cat.jpg";
import SelfieCat from "@/assets/selfie-cat.jpg";
import SempoaCat from "@/assets/sempoa_cat.jpg";
import TeacherCat from "@/assets/teacher_cat.jpg";
import WriteCat from "@/assets/write_cat.jpg";

export default function Events() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="flex flex-col items-center space-y-8 mb-10">
        <h1 className="text-3xl font-semibold">Miawbrary Events</h1>
        <div className="flex flex-wrap justify-center items-center gap-8 px-10">
          {/* CARD EVENT */}
          <section className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center ">
              <img src={MathCat} className="h-60" alt="Miawbrary Events" />
              <h1 className="font-semibold text-2xl">
                Book Talk: Miaw Miaw Miaw
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td className="pl-2">June 1, 2024</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                    <td className="pl-2">3 PM</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Place</td>
                    <td>:</td>
                    <td className="pl-2">Lapangan Banteng, DKI Jakarta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center ">
              <img src={MeowCat} className="h-60" alt="Miawbrary Events" />
              <h1 className="font-semibold text-2xl">
                Book Talk: Miaw Miaw Miaw
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td className="pl-2">June 1, 2024</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                    <td className="pl-2">3 PM</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Place</td>
                    <td>:</td>
                    <td className="pl-2">Lapangan Banteng, DKI Jakarta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center ">
              <img src={ReadCat} className="h-60" alt="Miawbrary Events" />
              <h1 className="font-semibold text-2xl">
                Book Talk: Miaw Miaw Miaw
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td className="pl-2">June 1, 2024</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                    <td className="pl-2">3 PM</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Place</td>
                    <td>:</td>
                    <td className="pl-2">Lapangan Banteng, DKI Jakarta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center ">
              <img src={SelfieCat} className="h-60" alt="Miawbrary Events" />
              <h1 className="font-semibold text-2xl">
                Book Talk: Miaw Miaw Miaw
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td className="pl-2">June 1, 2024</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                    <td className="pl-2">3 PM</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Place</td>
                    <td>:</td>
                    <td className="pl-2">Lapangan Banteng, DKI Jakarta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center ">
              <img src={SempoaCat} className="h-60" alt="Miawbrary Events" />
              <h1 className="font-semibold text-2xl">
                Book Talk: Miaw Miaw Miaw
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td className="pl-2">June 1, 2024</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                    <td className="pl-2">3 PM</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Place</td>
                    <td>:</td>
                    <td className="pl-2">Lapangan Banteng, DKI Jakarta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center ">
              <img src={TeacherCat} className="h-60" alt="Miawbrary Events" />
              <h1 className="font-semibold text-2xl">
                Book Talk: Miaw Miaw Miaw
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td className="pl-2">June 1, 2024</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                    <td className="pl-2">3 PM</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Place</td>
                    <td>:</td>
                    <td className="pl-2">Lapangan Banteng, DKI Jakarta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card-border cursor-pointer hover:scale-105 p-4 flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center ">
              <img src={WriteCat} className="h-60" alt="Miawbrary Events" />
              <h1 className="font-semibold text-2xl">
                Book Talk: Miaw Miaw Miaw
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td className="pl-2">June 1, 2024</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Time</td>
                    <td>:</td>
                    <td className="pl-2">3 PM</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Place</td>
                    <td>:</td>
                    <td className="pl-2">Lapangan Banteng, DKI Jakarta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
