import React from "react";

const SectionHeading = (props) => {
  const { heading } = props;
  return (
    <div className="heading--container shadow__lighter">
      <h2>{heading}</h2>
    </div>
  );
};

export default SectionHeading;
