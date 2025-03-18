import React, { useContext } from "react";
import { TodoDispatchCotext } from "../App";

const TodoItem = ({ content, createdDate, id, isDone }) => {
  console.log(`${id} TodoItem 업데이트`);
  const { onUpdate, onDelete } = useContext(TodoDispatchCotext);
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={() => onUpdate(id)} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleTimeString()}
      </div>
      <div className="btn_col">
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
