// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// const products = [
//   { title: "Cabbage", id: 1 },
//   { title: "Garlic", id: 2 },
//   { title: "Apple", id: 3 },
// ];
// const listItems = products.map((product) => (
//   <li key={product.id}>{product.title}</li>
// ));
// export default function pro() {
//   return <ul>{listItems}</ul>;
// }
"use client";
import React, { useState } from "react";

// setAge value using function useState //
// const Page = () => {
//   const [age, setAge] = useState(20);
//   console.log(age);
//   return (
//     <div>
//       <h2>My Age in {age}</h2>
//       <button
//         className="shadow border px-2 mt-6 text-xs"
//         onClick={() => setAge(age + 1)}
//       >
//         Age Update
//       </button>
//     </div>
//   );
// };
// export default Page;

// counting value using useState function //

// const page = () => {
// const [counter, setCounter] = useState(0);
// // console.log(counter);

//   return (
//     <div>
//       <h1>Counting .... {counter}</h1>
//       <button onClick={()=>setCounter(counter+1)}> Click me</button>
//     </div>
//   );
// };

// export default page;









// const page = (props :{name:string}) => {
//   const [count, setCount] = useState(0);
//   const incNum = () => {
//     setCount(count + 1);
//   };
//   const decNum = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     } else {
//       alert("Sorry, Zero Limit is Reached....!");
//       setCount(0);
//     }
//   };
//   return (
//     <div className="flex flex-col justify-center items-center mt-4">
//       <h1>{count}</h1>
//       <div className="space-x-5 mt-6">
//         <button
//           className="space-x-6 border-2 shadow-lg px-4 rounded-md"
//           onClick={incNum}
//         >
//           Increment
//         </button>
//         <button
//           className="space-x-6 border-2 shadow-lg px-4 rounded-md"
//           onClick={decNum}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// };

// export default page;

//   const isLogin = true;
//   return (
//     <div>
//       {/* <h1 className="bg-gray-300 text-2xl mt-4 text-center">
//         PIAIC KARACHI BATCH 42 Q-2{" "}
//       </h1>
//       <h2 className="bg-gray-400 text-center hover:text-blue-600 cursor-pointer">
//         Tailwind CSS
//       </h2>

//       <div
//         className={`text-5xl ${isLogin} ? "bg-green-500" : "bg-red-500"`}
//       ></div> */}

//     </div>

//   );
// }

// Array.map method
// const myAwesomeArray1 = [5, 4, 3, 2, 1];

// myAwesomeArray1.map(x => x * x);
// console.log();

// Array.forEach method

// const myAwesomeArray = [
//   { id: 1, name: "john" },
//   { id: 2, name: "Ali" },
//   { id: 3, name: "Mass" },
// ]

// myAwesomeArray.forEach(element => console.log(element.name))

// function Profile() {
//   return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
// }

// export  function Profile1() {
//   return(
//     <h1>hello world</h1>
//   )
// }
