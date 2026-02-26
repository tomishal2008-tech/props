// function Child(props) {
//       console.log(props.name);
//       console.log(props.age);
//   return (
//     <div>
        
//       <h2>Name: {props.name}</h2>
//       <h3>Age: {props.age}</h3>
//     </div>
//   );
// }


// function Child({ greet }) {
//   return <button onClick={greet}>Click Me</button>;
// }

// function Child({ skills }) {
//   return (
//     <ul>
//       {skills.map((skill, index) => (
//         <li key={index}>{skill}</li>
//       ))}
//     </ul>
//   );
// }

// function Child({ user }) {
//   return (
//     <div>
//       <h2>Name: {user.name}</h2>
//       <h3>Age: {user.age}</h3>
//       <p>City: {user.city}</p>
//     </div>
//   );
// }
// export default Child;

// 

function Child({ videos }) {
  return (
    <div>
      {videos.map((video, index) => (
        <video
          key={index}
          width="400"
          controls muted
          style={{ display: "block", marginBottom: "20px" }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}

export default Child;