
function SidePanel() {
  return (
    <div className=" shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] font-bold lg:leading-8 text-headingColor">
          Rs. 750
        </span>
      </div>
    </div>
  );
}

export default SidePanel;
