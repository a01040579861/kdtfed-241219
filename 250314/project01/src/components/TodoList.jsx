import React, { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const TodoList = () => {
  const todo = useContext(TodoStateContext) ?? [];

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  // 사용자가 검색바에 입력한 값이 todocontent의 값과 같을시 반환
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(
    () => ({
      totalCount: todo.length,
      doneCount: todo.filter((it) => it.isDone).length,
      notDoneCount: todo.filter((it) => !it.isDone).length,
    }),
    [todo]
  );

  // const analyzeTodo = useMemo(() => {
  //   const totalCount = todo.length;
  //   const doneCount = todo.filter((it) => it.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>TodoList </h4>
      <div>총개수 : {totalCount}</div>
      <div>완료된 할 일 : {doneCount}</div>
      <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      <input
        className="searchbar"
        type="text"
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => {
          return <TodoItem key={it.id} {...it} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
