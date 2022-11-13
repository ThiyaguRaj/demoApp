import React from "react";

function UISection({ heading, content }) {
  return (
    <div>
      <div className="text-3xl font-bold mb-3">{heading}</div>
      <p className="text-gray-500">{content}</p>
    </div>
  );
}

export default UISection;
