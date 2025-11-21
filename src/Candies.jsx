import React from "react";
import "./Candies.css";

const Candies = () => {
  const ages = [8, 23, 12, 50, 3, 62];
  // console.log(ages);
  const results = ages.map((age) => {
    // console.log(age);
    return <p>My Age is: {age}</p>;
  });

  return results;
};

export default Candies;
