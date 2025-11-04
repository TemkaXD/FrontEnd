import { useState } from "react";

export default function Calculate() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [number1, setNum1] = useState(0);
  const [number2, setNum2] = useState(0);
  const [number3, setNum3] = useState(0);

  const CalculateSum = (a, b) => {
    const result = a + b;
    setSum(result);
  };

  const MaxSum = (a, b, c) => {
    let ih = a;
    if (b > ih) ih = b;
    if (c > ih) ih = c;
    setMax(ih);
  };

  const AverageSum = (a, b, c) => {
    const average = (a + b + c) / 3;
    setAverage(average);
  };

  const addData = () => {
    if (inputValue.trim() !== "") {
      setData([...data, inputValue]);
      setInputValue("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CalculateSum(number1, number2);
    MaxSum(number1, number2, number3);
    AverageSum(number1, number2, number3);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Page</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="number"
            placeholder="Number 1"
            value={number1}
            onChange={(e) => setNum1(Number(e.target.value))}
            className="border p-2 rounded w-24 mr-2"
          />
          <input
            type="number"
            placeholder="Number 2"
            value={number2}
            onChange={(e) => setNum2(Number(e.target.value))}
            className="border p-2 rounded w-24"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Number 3"
            value={number3}
            onChange={(e) => setNum3(Number(e.target.value))}
            className="border p-2 rounded w-24"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Hereglegch ner"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 rounded w-64 mr-2"
          />
          <button
            type="button"
            onClick={addData}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Nemeh
          </button>
        </div>

        <button type="submit" className="bg-white text-black px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <div className="mt-5 space-y-2">
        <p>
          <strong>Data:</strong>{" "}
          <span className="text-white">{data.join(", ")}</span>
        </p>
        <p>
          <strong>Sum:</strong> <span className="text-white">{sum}</span>
        </p>
        <p>
          <strong>Max:</strong> <span className="text-white">{max}</span>
        </p>
        <p>
          <strong>Average:</strong> <span className="text-white">{average}</span>
        </p>
      </div>
    </div>
  );
}
