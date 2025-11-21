import React from "react";
import "./CandyList.css";
import CandyCard from "./CandyCard";

import aeroimg from "./assets/aero.jpg";
import reeseimg from "./assets/reese.jpg";
import wunderimg from "./assets/wunderbar.jpg";

const CandyList = () => {
  const listing = [
    {
      brand: "Aero",
      desc: "A popular brand of milk chocolate bar made by Nestlé that is filled with tiny air bubbles. Aero is half about the taste, and half about the texture. The bubbles change the way the chocolate dissolves in the mouth -- it's a different sensation than with a piece of solid chocolate.",
      canImage: aeroimg,
    },
    {
      brand: "Reese's",
      desc: "Reese's Peanut Butter Cups are a classic candy featuring a peanut butter filling encased in a milk chocolate shell, creating a popular combination of sweet and salty, smooth and creamy flavors. The candy was created by H.B. Reese in 1928 and is now produced by The Hershey Company. They are available in various sizes and are known for their unique multi-sensory experience, from the ridges of the chocolate to the melting peanut butter filling.",
      canImage: reeseimg,
    },
    {
      brand: "Wonderbar",
      desc: "The Cadbury Wunderbar is a Canadian chocolate bar with a filling of creamy peanut butter and chewy caramel, which is then coated in rich Cadbury milk chocolate. Some versions also include light rice crisps for added crunch. It is known for its rich, sweet flavor with a combination of smooth and chewy textures.",
      canImage: wunderimg,
    },
    {
      brand: "Aero",
      desc: "A popular brand of milk chocolate bar made by Nestlé that is filled with tiny air bubbles. Aero is half about the taste, and half about the texture. The bubbles change the way the chocolate dissolves in the mouth -- it's a different sensation than with a piece of solid chocolate.",
      canImage: aeroimg,
    },
    {
      brand: "Reese's",
      desc: "Reese's Peanut Butter Cups are a classic candy featuring a peanut butter filling encased in a milk chocolate shell, creating a popular combination of sweet and salty, smooth and creamy flavors. The candy was created by H.B. Reese in 1928 and is now produced by The Hershey Company. They are available in various sizes and are known for their unique multi-sensory experience, from the ridges of the chocolate to the melting peanut butter filling.",
      canImage: reeseimg,
    },
    {
      brand: "Wonderbar",
      desc: "The Cadbury Wunderbar is a Canadian chocolate bar with a filling of creamy peanut butter and chewy caramel, which is then coated in rich Cadbury milk chocolate. Some versions also include light rice crisps for added crunch. It is known for its rich, sweet flavor with a combination of smooth and chewy textures.",
      canImage: wunderimg,
    },
  ];

  return (
    <div className="wraparound">
      {listing.map((candy) => (
        // console.log(candy.brand);
        <CandyCard candy={candy} />
      ))}
    </div>
  );
};

export default CandyList;
