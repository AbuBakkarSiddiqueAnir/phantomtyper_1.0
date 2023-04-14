import React from "react";

const DetailCard = ({ scoreUpdatingValue, cardDetail }) => {
  return (
    <div className="mt-2 ">
      <h3 className="text-lg rounded-lg border-1 border-[#000] border bg-[#F6F1F1] border-cc  text-gray-800 pl-0 text-center py-4 font-bold">
        {cardDetail}
        <br></br>
        <span className="text-xl">{scoreUpdatingValue}</span>
      </h3>
    </div>
  );
};

export default DetailCard;
