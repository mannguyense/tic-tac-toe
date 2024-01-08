// eslint-disable-next-line react/prop-types
export default function Square({ value, onSquareClick }) {
  // TODO: Introduce students to the concept of props, state. Why shouldn't we choose use state here
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
