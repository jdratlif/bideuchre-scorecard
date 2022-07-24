import Container from "./components/Container";
import ScoreCard from "./components/ScoreCard";

const App = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center text-3xl">Bid Euchre Score Card</h1>

        <ScoreCard />

        <div className="mt-4 text-center">
          <p>Winner: Team B</p>
        </div>

        <div className="text-center">
          <button>New Game</button>
        </div>
      </div>
    </Container>
  );
};

export default App;
