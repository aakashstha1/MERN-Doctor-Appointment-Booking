import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";
function FaqList() {
  return (
    <section>
      <div className="container lg:mt-32 md:mt-0">
        <h2 className="heading text-center">
          Most questions by our beloved patients
        </h2>
        <div className="mt-[40px] flex flex-col items-center justify-center">
          <ul className="w-2/3">
            {faqs.map((item, index) => (
              <FaqItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FaqList;
