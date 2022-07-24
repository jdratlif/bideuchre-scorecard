import Container from "./components/Container";
import ScoreCard from "./components/ScoreCard";

import { AppProvider } from "./store/store";

const App = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
};

export default App;
