import React from "react";

export default function Form({ onSubmit }) {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        data-testid="form"
        className="flex align-center justify-center "
      >
        <input
          name="taskInput"
          type="text"
          placeholder="Tap your task here"
          className="block mr-2 px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add in list
        </button>
      </form>
    </div>
  );
}
