import React from "react";

const Excises = () => {
  let array = [1, 2, 3, 4, 1];

  function filterNumbers(arr, number) {
    return arr.filter((a) => a === number);
  }

  function findNumberCount(arr) {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      const result = filterNumbers(arr, i);
      console.log(i, "--", result.length);
      const resultObject = {
        i: result.length,
      };
      newArr = [...newArr, resultObject]
    }
    return newArr;
  }
  const numbers = findNumberCount(array);


  return (
    <div>
      <h1>Duplicate counter</h1>
      {numbers &&
        numbers.map((n, index) => {
          return (
            <div key={index}>
              <p>{index} : {n.i}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Excises;
