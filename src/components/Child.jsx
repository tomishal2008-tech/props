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

function Child({ image, video }) {
  return (
    <div>
      {image && (
        <img
          src={image}
          alt="motivational"
          width="250"
          style={{ border: "3px solid red" }}
        />
      )}

      {video && (
        <video width="400" controls>
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default Child;