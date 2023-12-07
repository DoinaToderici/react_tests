import React, { useRef, useState } from "react";

import { ItemList } from "./ItemList";

export default function List({ list, setList }) {
  const [modifyItem, setModifyItem] = useState({});
  const modifyInputRef = useRef("");

  const handleCheck = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setList(newList);
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };

  const handleUpdate = (e, item) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updateInputData = formData.get("updateInput");
    const newList = list.map((newItem) => {
      if (newItem.task === modifyItem.task) {
        return { ...item, task: updateInputData };
      }
      return newItem;
    });

    setList(newList);
    setModifyItem("");
  };

  const handleModify = async (e, item) => {
    await setModifyItem(item);
    modifyInputRef.current.focus();
  };

  return (
    <ul
      className="text-align-left text-indigo-500  align-center justify-center mt-3 p-0"
      data-testid="list"
    >
      {list !== [] &&
        list !== undefined &&
        list.map((item, key) => {
          return (
            <ItemList
              onUpdate={handleUpdate}
              onCheck={handleCheck}
              onModify={handleModify}
              onDelete={handleDelete}
              modifyItem={modifyItem}
              setModifyItem={setModifyItem}
              item={item}
              key={key}
              ref={modifyInputRef}
            />
          );
        })}
    </ul>
  );
}
