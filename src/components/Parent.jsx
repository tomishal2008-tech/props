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

// import Child from "./Child";

// function Parent() {
//   const imagePath = "/images/motivational-quote.PNG";
//   const videoPath = "/videos/mov_bbb.mp4";

//   return (
//     <div>
//       <Child image={imagePath} />
//       <Child video={videoPath} />
//     </div>
//   );
// }

// export default Parent;

import Child from "./Child";

function Parent() {
  const videos = [
  { platform: "Claudinary", url: "https://res.cloudinary.com/dpvrhpdhz/video/upload/v1772291008/video1_tb9bn3.mp4"},
  { platform: "Cloudinary", url: "https://res.cloudinary.com/dpvrhpdhz/video/upload/v1772129835/video5_zcijqj.mp4" },
  { platform: "Claudinary", url: "https://res.cloudinary.com/dpvrhpdhz/video/upload/v1772291180/video3_vposmw.mp4" },
  { platform: "Claudinary", url: "https://res.cloudinary.com/dpvrhpdhz/video/upload/v1772290876/video4_r9sopt.mp4" },
  { platform: "Cloudinary", url: "https://res.cloudinary.com/dpvrhpdhz/video/upload/v1772130427/video2_eyvj4t.mp4" }
];
  return (
    <div>
      <Child videos={videos} />
    </div>
  );
}

export default Parent;