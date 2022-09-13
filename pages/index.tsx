import Page from "@components/layout/Page";
import { useAppDispatch } from "@lib/hooks";
import { AppDispatch } from "@store/index";
import { addTodo, selectTodos } from "@store/modules/todo";
import type { NextPage } from "next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const todos = useSelector(selectTodos);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: any) => {
    setInputVal(e.target.value);
  };

  return (
    <Page>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Add Todo</h2>
        <section className="mt-10">
          <label htmlFor="input" className="text-2xl font-bold mb-2">
            Todo
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
            id="username"
            type="text"
            value={inputVal}
            onChange={handleChange}
          />
          <button
            className="bg-cyan-500 p-2 w-24 text-white rounded-sm mt-4"
            onClick={() =>
              dispatch(addTodo({ text: inputVal, isCompleted: false }))
            }
          >
            Add
          </button>
        </section>
      </div>
    </Page>
  );
};

export default Home;
