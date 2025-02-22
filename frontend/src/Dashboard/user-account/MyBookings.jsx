import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "../../components/Doctors/DoctorCard";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
function MyBookings() {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );
  const appointments = data || [];
  console.log(appointments);
  return (
    <div>
      {loading && <Loading />}

      {error && <Error errMessage={error} />}

      {!loading &&
      !error &&
      Array.isArray(appointments) &&
      appointments.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      ) : (
        <h2 className="mt-5 text-center  text-headingColor leading-7 text-[20px] font-semibold">
          You haven&apos;t booked any doctor yet!
        </h2>
      )}
    </div>
  );
}

export default MyBookings;
