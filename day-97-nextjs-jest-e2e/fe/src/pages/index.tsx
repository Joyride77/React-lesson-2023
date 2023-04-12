import { useState } from "react"

export default function Home() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  function Add() {
    setResult(Number(num1) + Number(num2));
  }
  function Subtract() {
    setResult(num1 - num2);
  }
  function Multiply() {
    setResult(num1 * num2);
  }
  function Divide() {
    setResult(num1 / num2)
  }

  return (
    <div className="container">
      <div data-testid="result" className="result">
        {result}
      </div>
      <input type="number" value={num1} data-testid="num1" onChange={(e: any) => setNum1(parseInt(e.target.value))} />
      <input type="number" value={num2} data-testid="num2" onChange={(e: any) => setNum2(parseInt(e.target.value))} />
      <button data-testid="add" onClick={Add}>Add</button>
      <button data-testid="subtract" onClick={Subtract}>Subtract</button>
      <button data-testid="multiply" onClick={Multiply}>Multiply</button>
      <button data-testid="divide" onClick={Divide}>Divide</button>
    </div>
  )
}
