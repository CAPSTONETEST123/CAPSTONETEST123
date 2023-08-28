import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //  function clickHandler(){}
  // 위 방식으로 이벤트 핸들러를 생성해도 되지만,
  // 함수로 만들면 디버깅될 때 한번 실행되므로, 방식고려해야 함
  const [title, setTitle] = useState(props.title);
  //useState 함수는 늘 값을 2개 리턴함

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change Title</button>
    </Card>
  );
};

export default ExpenseItem;
