

// destructring the 'props' parameter to access the properties indivisually
function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title} </h3>
      <p>{description}</p>
    </li>
  );
}
export default CoreConcepts

// normal 'props' parameter to access the properties passed to the component
// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}></img>
//       <h3>{props.title} </h3>
//       <p>{props.description} </p>
//     </li>
//   );
// }