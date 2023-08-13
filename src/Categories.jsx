import React from "react";

export const Categories = ({ allCategories, filteredCategory }) => {
  return (
    <>
      <article className="btn-container">
        {allCategories.map((data) => {
          return (
            <button
              type="button"
              key={data}
              className="btn"
              onClick={() => filteredCategory(data)}
            >
              {data}
            </button>
          );
        })}
      </article>
    </>
  );
};
