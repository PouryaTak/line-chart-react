import LineChart from "./component/lineChart";

const chart = {
  Aug: 0,
  Jul: 10,
  Jun: 4,

};

function App() {
  return (
    <>
      <LineChart data={chart} />
    </>
  );
}

export default App;
