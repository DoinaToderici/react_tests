import React, { useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";

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
      {list.map((item, key) => {
        return (
          <li
            key={key}
            data-testid="item"
            className="flex align-center justify-between"
          >
            {modifyItem === item ? (
              <form
                className="flex w-100"
                onSubmit={(e) => handleUpdate(e, item)}
              >
                <input
                  ref={modifyInputRef}
                  defaultValue={item.task}
                  name="updateInput"
                  type="text"
                  placeholder="Tap your new task here"
                  className="w-100 block mr-3 p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                />
                <button type="submit">
                  <GrUpdate />
                </button>
              </form>
            ) : (
              <>
                <div className="text-align-left flex items-center w-95">
                  <span className="mr-1" onClick={() => handleCheck(item.id)}>
                    {item.isChecked ? (
                      <MdOutlineRadioButtonChecked
                        size="17"
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaRegCircle size="15" className="cursor-pointer" />
                    )}
                  </span>
                  <p
                    className={`${
                      item.isChecked && "line-through italic"
                    }  mb-1`}
                  >
                    <b>{item.task} </b>
                  </p>
                </div>
                <div>
                  <button
                    className="mr-2 cursor-pointer"
                    onClick={(e) => handleModify(e, item)}
                  >
                    <FiEdit2 size="15" />
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  >
                    <TiDeleteOutline size="17" />
                  </button>
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
