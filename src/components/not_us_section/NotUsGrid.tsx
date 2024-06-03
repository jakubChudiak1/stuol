import React from "react";
import NotUsItem from "./NotUsItem";
import { notUsItems } from "../../config/notUsItems";

const NotUsGrid = () => {
  return (
    <div className="not-us-content">
      <h1>we are not</h1>
      <div className="not-us-grid">
        {notUsItems.map((item) => (
          <NotUsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NotUsGrid;
