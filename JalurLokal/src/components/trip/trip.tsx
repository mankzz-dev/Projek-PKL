import { Link } from "react-router-dom";
import { tripdata } from "../../data/tripdata";

export default function Trip() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#eafff5] to-[#d4faff] text-[#1C1C1C] py-20 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
          Pilihan Trip Pendakian
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {tripdata.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <img
                src={trip.image}
                alt={trip.name}
                className="w-full h-48 sm:h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-[#1C1C1C]">
                  {trip.name} - {trip.altitude}
                </h3>
                <Link
                  to={`/trip/${trip.slug}`}
                  className="inline-block text-xs sm:text-sm font-semibold text-white bg-[#26C3AE] hover:bg-[#1faf9a] px-4 py-1 mt-2 rounded transition-all"
                >
                  Lihat Detail
                </Link>
              </div>

              <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500 shadow-md animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}