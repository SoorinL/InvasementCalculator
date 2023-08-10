const ResultItem = (props) => {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.totalSavings}</td>
      <td>{props.interest}</td>
      <td>{props.totalInterest}</td>
      <td>{props.investedCapital}</td>
    </tr>
  );
};

export default ResultItem;
