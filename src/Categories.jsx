import React from "react";

export const Categories = ({ allCategories }) => {
  return (
    <>
      <article className="btn-container">
        {allCategories.map((data, index) => {
          return (
            <button key={index} className="btn">
              {data}
            </button>
          );
        })}
      </article>
    </>
  );
};
