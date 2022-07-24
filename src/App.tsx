import { useContext } from "react";

import Container from "./components/Container";
import PlayerForm from "./components/PlayerForm";
import ScoreCard from "./components/ScoreCard";

import { AppContext } from "./store/store";
import { MainContentEnum } from "./types/common";

const App = () => {
  const { state } = useContext(AppContext);

  return (
    <Container>
      <h1 className="text-center text-3xl">Bid Euchre Score Card</h1>

      {state.content == MainContentEnum.ScoreCard && <ScoreCard />}
      {state.content == MainContentEnum.PlayerForm && <PlayerForm />}
    </Container>
  );
};

export default App;
