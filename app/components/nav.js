"use client";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="center">
        <div className="logo">
          <img src="/index/btc.jpg" alt="Logo" />
          <span>NTF</span>
        </div>
        <ul>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
        <div className="btn_inp">
          <button className="btn_up">
            <a>Sign Up</a>
          </button>
        </div>
      </div>
    </nav>
  );
}
