import { useState } from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIndex = (Id) => {
    if (Index !== Id) {
      setIndex(Id);
      setIsOpen(true);
    } else {
      setIndex(null);
      setIsOpen(false);
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIndex(null);
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-[#68d2d3] hover:bg-[#1825e1] hover:shadow-lg focus:bg-white-500 "
      >
        <div className="flex group cursor-pointer">
          <div className="text-[#ffffff] font-semibold pl-10 group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {isOpen ? (
            <HiX
              className="w-6 h-6 group-hover:text-white text-pink-100 cursor-pointer"
              onClick={handleCloseClick}
            />
          ) : (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-primary-black" />
          )}
        </div>
      </div>

      {isOpen && Index === Id && (
        <div className="bg-[#d7fff5] pl-10  font-normal text-black w-3/4 h-auto  rounded-md p-4 border-l-4 border-[#1825e1] mb-2 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;





