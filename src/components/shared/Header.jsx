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
      <div className="flex flex-col items-center">
        <div data-text="TMS" className="logo">
          TMS
        </div>
        <p className="logo-footer m-0 p-0">Take My Stuff</p>
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
