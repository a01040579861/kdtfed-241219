import React, { useRef, useReducer, useCallback, useMemo } from "react";
import "./App.scss";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

/* State Function */
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

/* Context Obj = API Component */
export const TodoStateContext = React.createContext();
export const TodoDispatchCotext = React.createContext();

function App() {
  const [todo, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback(
    (content) => {
      dispatch({
        type: "CREATE",
        newItem: {
          id: idRef.current,
          isDone: false,
          content,
          createdDate: new Date().getTime(),
        },
      });
      idRef.current += 1;
    },
    [todo]
  );

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const memoizeDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchCotext.Provider value={memoizeDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchCotext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
