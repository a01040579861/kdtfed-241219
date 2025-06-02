import React from "react";
import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import { useRecoilValue, useRecoilState } from "recoil";
import { toDoSelector, categoryState } from "../atoms";
import ToDo from "./ToDo";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  hr {
    width: 100%;
  }
`;

const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  // const [todo, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Container>
      <h1>ToDo's List</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateToDo />
      {/* <h2>TODO</h2>
      <ul>
        {todo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>DOING</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>DONE</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
      {/* {category === "TODO" &&
        todo.map((aTodo) => <ToDo key={aTodo.id} {...aTodo} />)}
      {category === "DOING" &&
        doing.map((aDoing) => <ToDo key={aDoing.id} {...aDoing} />)}
      {category === "DONE" &&
        done.map((aDone) => <ToDo key={aDone.id} {...aDone} />)} */}
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
};

export default ToDoList;
