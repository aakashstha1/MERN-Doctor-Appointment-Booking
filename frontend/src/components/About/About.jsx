import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <div className="container lg:mt-32 md:mt-0">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* === about img ===  */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] left-[40%]">
              <img src={aboutCard} alt="" />
            </div>
          </div>
          {/* === about content === */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading"> Proud to be one of the nations best.</h2>
            <p className="text_para">
              The Comparative Analysis Model involves comparing two or more
              entities (e.g., systems, approaches, methods, technologies) based
              on predefined criteria to evaluate their similarities,
              differences, strengths, and weaknesses. This model is used to
              identify the best option or to gain insights for optimization and
              improvement.
            </p>
            <p className="text_para mt-[30px]">
              The Comparative Analysis Model involves comparing two or more
              entities (e.g., systems, approaches, methods, technologies) based
              on predefined criteria to evaluate their similarities,
              differences, strengths, and weaknesses. This model is used to
              identify the best option or to gain insights for optimization and
              improvement.
            </p>

            <Link to={"/"}>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
