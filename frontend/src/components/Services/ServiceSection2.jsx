import ServiceList from "./ServiceList";

function ServiceSection2() {
  return (
    <section>
      <div className="container lg:mt-32 md:mt-0">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our medical services</h2>
          <p className="text_para text-center">
            World-class care for everyone.
          </p>
        </div>
        <ServiceList />
      </div>
    </section>
  );
}

export default ServiceSection2;
