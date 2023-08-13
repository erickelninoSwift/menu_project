import React from "react";

export const Menuitem = ({ item }) => {
  const { id, title, category, price, img, desc } = item;
  return (
    <article className="menu-item">
      <img src={img} alt={`${title} image`} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">R{price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
