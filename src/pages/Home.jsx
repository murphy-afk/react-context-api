import { useContext } from "react";
import Carousel from "../components/Carousel";
import { BudgetContext } from "../context/BudgetContext";

export default function Home() {
  const value = useContext(BudgetContext);
  console.log(value);
  
  return (
    <>
      <div className="container home-container d-flex flex-column align-items-center w-100 m-0 p-0">
        <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Welcome to Boomazon</h1>
        <Carousel />
      </div>
    </>
  )
}