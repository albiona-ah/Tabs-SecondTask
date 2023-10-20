import React from "react";
import { useState } from "react";
import "../style.css";
const Data = [
  {
    tittle: ".COM",
    sum1: "$5.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".AL",
    sum1: "$55.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".NET",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".HEALTH",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".CO.Uk",
    sum1: "$3.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".ORG",
    sum1: "$15.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".CO",
    sum1: "$26.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".SEA",
    sum1: "$25.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];

const Data1 = [
  {
    tittle: ".MOC",
    sum1: "$5.999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".LA",
    sum1: "$2.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".TEN",
    sum1: "$1.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".HEALTH",
    sum1: "$1.9999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".CK.OK",
    sum1: "$4.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".GRO",
    sum1: "$13.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".OC",
    sum1: "$50.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".ASE",
    sum1: "$41.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];
const Data2 = [
  {
    tittle: ".GEN",
    sum1: "$51.999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".NEG",
    sum1: "$95.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".NEW",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".HELLO",
    sum1: "$2.9999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".FREE",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".GROW",
    sum1: "$13.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".OCK",
    sum1: "$66.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".ASET",
    sum1: "$21.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];
const Data3 = [
  {
    tittle: ".GO",
    sum1: "$5.999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".SAY",
    sum1: "$55.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".LARGE",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".SAFE",
    sum1: "$7.9999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".SECURE",
    sum1: "$3.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".GOOD",
    sum1: "$15.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".OC",
    sum1: "$26.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".ASE",
    sum1: "$21.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];
const Data4 = [
  {
    tittle: "FIX",
    sum1: "$5.999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".LAYOUT",
    sum1: "$55.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".SEE",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".NO",
    sum1: "$7.9999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: "BUY",
    sum1: "$3.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".RGO",
    sum1: "$15.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".DOC",
    sum1: "$26.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".SEA",
    sum1: "$21.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];
const Data5 = [
  {
    tittle: ".OPEN",
    sum1: "$5.999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".CLOSE",
    sum1: "$55.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".SAVE",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".COPY",
    sum1: "$7.9999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".READ",
    sum1: "$3.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".WRITE",
    sum1: "$15.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".KEPP",
    sum1: "$26.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".LAKE",
    sum1: "$21.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];
const Data6 = [
  {
    tittle: ".AUTH",
    sum1: "$5.999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".LOOK",
    sum1: "$55.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".WORK",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".DOWN",
    sum1: "$7.9999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".UP",
    sum1: "$3.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".KEEP",
    sum1: "$15.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".THROUGH",
    sum1: "$26.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".STRAIGHT",
    sum1: "$21.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];
const Data7 = [
  {
    tittle: ".YES",
    sum1: "$5.999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".LAS",
    sum1: "$55.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".HELLO",
    sum1: "$7.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".HEALTH",
    sum1: "$7.9999/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".CKOK",
    sum1: "$3.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".RGO",
    sum1: "$15.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".KOS",
    sum1: "$26.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
  {
    tittle: ".OUT",
    sum1: "$21.99/yr",
    sum2: "Instead of $10.99/yr",
    button: "Buy Now",
  },
];

export default function Tabs() {
  const [count, setCount] = useState(0);
  return (
    <div className="Tabs">
      <div className="TabsList">
        <div
          className={`Tab ${count === 0 ? "active" : null}`}
          onClick={() => {
            setCount(0);
          }}
        >
          Domain
        </div>
        <div
          className={`Tab ${count === 1 ? "active" : null}`}
          onClick={() => {
            setCount(1);
          }}
        >
          Web Hosting
        </div>
        <div
          className={`Tab ${count === 2 ? "active" : null}`}
          onClick={() => {
            setCount(2);
          }}
        >
          Dedicated services
        </div>
        <div
          className={`Tab ${count === 3 ? "active" : null}`}
          onClick={() => {
            setCount(3);
          }}
        >
          Virtual cloud servers
        </div>
        <div
          className={`Tab ${count === 4 ? "active" : null}`}
          onClick={() => {
            setCount(4);
          }}
        >
          {" "}
          Wordpress Hosting
        </div>
        <div
          className={`Tab ${count === 5 ? "active" : null}`}
          onClick={() => {
            setCount(5);
          }}
        >
          Emaill Hosting
        </div>
        <div
          className={`Tab ${count === 6 ? "active" : null}`}
          onClick={() => {
            setCount(6);
          }}
        >
          VPS Hosting Service
        </div>
        <div
          className={`Tab ${count === 7 ? "active" : null}`}
          onClick={() => {
            setCount(7);
          }}
        >
          Free Hosting
        </div>
      </div>

      <div className="tableContent1" hidden={count !== 0}>
        <div className="map">
          {Data.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="tableContent2" hidden={count !== 1}>
        <div className="map">
          {Data1.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="tableContent3" hidden={count !== 2}>
        <div className="map">
          {Data2.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="tableContent4" hidden={count !== 3}>
        <div className="map">
          {Data3.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="tableContent5" hidden={count !== 4}>
        <div className="map">
          {Data4.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="tableContent6" hidden={count !== 5}>
        <div className="map">
          {Data5.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="tableContent7" hidden={count !== 6}>
        <div className="map">
          {Data6.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="tableContent8" hidden={count !== 7}>
        <div className="map">
          {Data7.map((mapping) => (
            <div className="Table">
              <h2>{mapping.tittle}</h2>
              <h4>{mapping.sum1}</h4>
              <p>{mapping.sum2}</p>
              <button className="button">{mapping.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
