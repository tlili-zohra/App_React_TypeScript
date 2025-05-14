import React from "react";
interface GreetingProps {
  name: string;
}
const Greeting = ({ name }: GreetingProps) => {
  return <div className="greeting">Hello, {name}!</div>;
};
export default Greeting;
