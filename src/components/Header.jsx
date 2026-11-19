import { useState } from "react";
import heroImg from "../assets/hero3.png";
import "./Header.css";

export default function Header() {
  const [count, setCount] = useState(0);
  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        
      </div>
      <div>
        <h1>Project Sandbox Application</h1>
        <p>Everything can happens here!</p>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </section>
  );
}
