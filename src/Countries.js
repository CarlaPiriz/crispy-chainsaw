const Countries = (props) => {
  return (
    <tr key="">
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.capital}</td>
      <td>{props.region}</td>
      <td>{props.population}</td>
      <td>{props.subregion}</td>
    </tr>
  );
};
export default Countries;
