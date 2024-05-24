import { Fragment, useState } from "react";

function ListGroup({ items, heading, onSelectItem }) {
  // a componenent cannot return more than one element

  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> // elements in react need their own keys so that the DOM knows what to update. Here we can apply just the item name as a key since they're all unique, but in the real world we would probably expect something like an id for each unique item.
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
