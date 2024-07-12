import React from "react";
import ListItem from "./ListItem";
import ListItem2 from "./ListItem2";

function List(props) {
  function deleteItem(id) {
    props.removeItem(id);
  }
  return (
    <ul>
      {props.listOfItems.map((item, index) => {
        return <ListItem item={item} id={index} onChecked={deleteItem}/>;
        // return <ListItem2 id={index} item={item} onChecked={deleteItem} />;
      })}
    </ul>
  );
}

export default List;
