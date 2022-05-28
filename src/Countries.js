const Countries = (props) => {
  return (
    <div>
      <img src={props.flag} alt={props.name} />
      <h1> {props.name}</h1>
      <h1> {props.capital}</h1>
      <h1> {props.region}</h1>
    </div>
  );
};
export default Countries;
