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
  { platform: "Vimeo", url: "https://player.vimeo.com/video/1168599612"},
  { platform: "Cloudinary", url: "https://res.cloudinary.com/dpvrhpdhz/video/upload/v1772129835/video5_zcijqj.mp4" },
  { platform: "Vimeo", url: "https://player.vimeo.com/video/1168596817" },
  { platform: "Vimeo", url: "https://player.vimeo.com/video/1168597902" },
  { platform: "Cloudinary", url: "https://res.cloudinary.com/dpvrhpdhz/video/upload/v1772130427/video2_eyvj4t.mp4" }
];
  return (
    <div>
      <Child videos={videos} />
    </div>
  );
}

export default Parent;