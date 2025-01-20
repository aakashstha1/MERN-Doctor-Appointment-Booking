import React from "react";

function Feature() {
  return (
    <section>
      <div className="container lg:mt-32 md:mt-0">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* === feature content ===   */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> anytime.
            </h2>
            <ul className="pl-4">
              <li className="text_para">
                1. Schedule the appointment directly.
              </li>
              <li className="text_para">
                2. Search for Physician here, and contact their office.
              </li>
              <li className="text_para">
                3. View our physicians who are accepting new patients, use the
                online scheduling tool to select an appoinment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
