import React, { useEffect } from "react";
import { useState } from "react";
import Digit from "./Digit";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [count, setCount] = useState(0);
	useEffect(()=>{
		setInterval(() => {
			setCount(count++)
			
		},1000);

	},[])
	const increment = () => {
	  setCount(count + 1);
	};
  
	const decrement = () => {
	  setCount(count - 1);
	};
	return (
		<div>
		<h1>Counter</h1>
		<div className="digit-cont"> 
			<Digit count={Math.floor(count/100000)}/> 
			<Digit count={Math.floor(count/10000)}/> 
			<Digit count={Math.floor(count/1000)}/> 
			<Digit count={Math.floor(count/100)}/> 
			<Digit count={Math.floor(count/10)}/> 
			<Digit count={Math.floor(count/1)}/> 
		</div>
		{/* <p>Count: {count}</p>
		<button onClick={increment}>Increment</button>
		<button onClick={decrement}>Decrement</button> */}
	  </div>
	);
};

export default Home;
