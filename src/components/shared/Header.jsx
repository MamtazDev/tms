import React from "react";
import "./Header.css";

const buttons = [
  {
    name: "Find Storage",
    link: "/",
  },
  {
    name: "Sign In",
    link: "/signin",
  },
  {
    name: "List Storage",
    link: "/list",
  },
  {
    name: "Sign Up",
    link: "/signup",
  },
];

const Header = () => {
  return (
    <section className="flex justify-around my-16">
      <div>
        <div className="logo">TMS</div>
        <p>Take My Stuff</p>
      </div>
      <div className="text-white grid grid-cols-2 gap-4">
        {buttons.map((button, idx) => (
          <div className="border-2 text-center p-4">
            <button>{button.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
