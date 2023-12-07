import React, { forwardRef } from "react";
import { FiEdit2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";

export const ItemList = forwardRef(
  ({ item, modifyItem, onUpdate, onCheck, onModify, onDelete }, ref) => {
    return (
      item.task !== "" && (
        <li data-testid="item" className="flex align-center justify-between">
          {modifyItem === item ? (
            <form className="flex w-100" onSubmit={(e) => onUpdate(e, item)}>
              <input
                ref={ref}
                defaultValue={item.task}
                name="updateInput"
                type="text"
                placeholder="Here is your new task"
                className="w-100 block mr-3 p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
              />
              <button type="submit">
                <GrUpdate />
              </button>
            </form>
          ) : (
            <>
              <div className="text-align-left flex items-center w-95">
                <p
                  onClick={() => onCheck(item.id)}
                  className={`${
                    item.isChecked && "line-through italic"
                  }  mb-1 cursor-pointer`}
                  data-testid="textItem"
                >
                  <b>{item.task} </b>
                </p>
              </div>
              <div>
                <button
                  title="modifyBtn"
                  className="mr-2 cursor-pointer"
                  onClick={(e) => onModify(e, item)}
                >
                  <FiEdit2 size="15" />
                </button>
                <button
                  title="deleteBtn"
                  className="cursor-pointer"
                  onClick={() => onDelete(item.id)}
                >
                  <TiDeleteOutline size="17" />
                </button>
              </div>
            </>
          )}
        </li>
      )
    );
  }
);
