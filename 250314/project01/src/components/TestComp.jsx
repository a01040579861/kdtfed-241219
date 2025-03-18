import React, { useState, useEffect, useReducer } from "react";

// 횡단관심사 대상
const CompA = () => {
  console.log("컴포넌트A 호출!");
  return <div>CompA</div>;
};

// 횡단관심사 대상
const CompB = () => {
  console.log("컴포넌트B 호출!");
  return <div>CompB</div>;
};

const withLifeCycle = (WrapperComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("마운트!!!!");
      return () => console.log("언마운트!");
    }, []);

    useEffect(() => {
      console.log("업데이트!");
    });

    return <WrapperComponent {...props} />;
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;

    default:
      state;
  }
};

const TestComp = () => {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  /* 상태 변화 코드 함수 */
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const onDecrease = () => {
  //   setCount(count - 1);
  // };
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "INCREASE", data: 1 });
          }}
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
        <button
          onClick={() => {
            dispatch({ type: "DECREASE", data: 1 });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
