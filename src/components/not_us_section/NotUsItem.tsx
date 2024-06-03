import React from "react";
import HTMLReactParser from "html-react-parser";
type NotUsItemProps = {
  id: number;
  image: string;
  text: string;
};
const NotUsItem = ({ item }: { item: NotUsItemProps }) => {
  return (
    <div className="not-us-item">
      <div className="not-us-item-content">
        <img src={item.image} alt={"s"} />
        {HTMLReactParser(item.text)}
      </div>
    </div>
  );
};

export default NotUsItem;
