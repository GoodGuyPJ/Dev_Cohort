import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 200,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 1000,
      });
    }, 5000);
  }, []);

  const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return (
    <div>
      <h1>Bank</h1>
      <p>Income: {bankData.income}</p>
      <p>Income tax: {incomeTax}</p>
      <h1>Exchange 1</h1>
      <p>Exchange 1 returns: {exchange1Data.returns}</p>
      <h1>Exchange 2</h1>
      <p>Exchange 2 returns: {exchange2Data.returns}</p>
    </div>
  );
}

export default App;

/*
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

  useEffect(function () {
    setTimeout(() => {
      setBankData({
        income: 1000,
      });
    }, 3000);
  }, []);

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

*/
