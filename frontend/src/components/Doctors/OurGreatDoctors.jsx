import DoctorList from "./DoctorList";

function OurGreatDoctors() {
  return (
    <section>
      <div className="container lg:mt-32 md:mt-0">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text_para text-center">
            World-class care for everyone.
          </p>
        </div>
        <DoctorList />
      </div>
    </section>
  );
}

export default OurGreatDoctors;
