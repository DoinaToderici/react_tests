import React, { useState } from "react";
import Form from "./partials/Form";
import List from "./partials/List";

export default function ToDoList() {
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newList = [
      ...list,
      {
        task: formData.get("taskInput"),
        isChecked: false,
        id: new Date().getMilliseconds(),
      },
    ];
    setList(newList);
    console.log(e.target);
    e.target.reset();
  };
  return (
    <div className="w-50 py-3 mx-auto bg-indigo-100 p-3">
      <Form onSubmit={(e) => handleSubmit(e)} />
      {list && list !== [] && (
        <div>
          <List list={list} setList={setList} />

          {list.length > 0 && (
            <button
              onClick={() => setList([])}
              className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
}
