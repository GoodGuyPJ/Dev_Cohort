import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  // fetch("https://api.exchangeratesapi.io/latest", async (res) => {
  //   const json = await res.json();
  //   setExchangeData(json);
  // })

  setTimeout(() => {
    setBankData({
      income: 1000,
    });
  }, 3000);

  setTimeout(() => {
    setExchangeData({
      returns: 100,
    });
  }, 1000);

  const incomeTax = (bankData.income + (exchangeData.returns || 0)) * 0.3;

  return (
    <div>
      <h1>Bank</h1>
      <p>Income: {bankData.income}</p>
      <p>Income tax: {incomeTax}</p>
      <h1>Exchange</h1>
      <p>Exchange returns: {exchangeData.returns}</p>
    </div>
  );
}

export default App;
