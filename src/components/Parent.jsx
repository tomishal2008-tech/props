// import Child from "./Child";

// function Parent() {
//   const name = "Mishii";
//   const age = 20;

//   return (
//     <div>
//       <Child name={name} age={age} />
//     </div>
//   );
// }

// function Parent() {
//   const sayHello = () => {
//     alert("Hello from Parent 👋");
//   };

//   return <Child greet={sayHello} />;
// }


// function Parent() {
//   const skills = ["HTML", "CSS", "JavaScript", "React"];

//   return <Child skills={skills} />;
// }


// function Parent() {
//   const user = {
//     name: "Mishii",
//     age: 20,
//     city: "Lahore"
//   };

//   return <Child user={user} />;
// }

// export default Parent;

import Child from "./Child";

function Parent() {
  const imagePath = "/images/motivational-quote.PNG";
  const videoPath = "/videos/mov_bbb.mp4";

  return (
    <div>
      <Child image={imagePath} />
      <Child video={videoPath} />
    </div>
  );
}

export default Parent;