import { doctors } from "../../assets/data/doctor";
import DoctorCard from "../../components/Doctors/DoctorCard";
function Doctors() {
  return (
    <>
      <section className="bg-[#fff9ea] ">
        <div className="container text-center">
          <h2 className="heading pt-[30px]">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-none rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container lg:mt-32 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
