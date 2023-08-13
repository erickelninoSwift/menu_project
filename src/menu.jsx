import React from "react";
import { Menuitem } from "./Menuitem";

export const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((data) => {
        return <Menuitem key={data.id} item={data} />;
      })}
    </div>
  );
};
