import Container from "./components/Container";
import ScoreCard from "./components/ScoreCard";

import { AppProvider } from "./store/store";

const App = () => {
  return (
    <AppProvider>
      <Container>
        <h1 className="text-center text-3xl">Bid Euchre Score Card</h1>

        <ScoreCard />
      </Container>
    </AppProvider>
  );
};

export default App;
