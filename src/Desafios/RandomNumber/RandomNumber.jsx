import React from "react";

export default props => {
  console.log(props.number1)
  let numberrandom = (n1, n2) => {
    n1 = props.number1;
    n2 = props.number2;
    let rn = Math.floor(Math.random() * (n2 - n1) + n1);
    return rn;
  };

  return (
    <React.Fragment>
      <p>
        <b>Min:</b> {props.number1}
      </p>
      <p>
        <b>Max:</b> {props.number2}
      </p>

      <p>
        <b>Numero aleatório: </b>
        {numberrandom(props.number1, props.number2)}
      </p>
    </React.Fragment>
  );
};
