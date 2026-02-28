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
        <div key={index}>
          {video.platform === "Vimeo" && (
            <iframe
              src={video.url}
              width="640"
              height="560"
              allowFullScreen
              title={`video-${index}`}
            />
          )}

          {video.platform === "Cloudinary" && (
            <video width="640" controls muted>
              <source src={video.url} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
    </div>
  );
}

export default Child;   