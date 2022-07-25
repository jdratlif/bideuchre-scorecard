import { useContext } from "react";
import { Formik, FormikHelpers, Form } from "formik";

import Button from "./Button";
import PlayerNames from "./PlayerNames";
import TeamNames from "./TeamNames";

import { AppContext } from "../store/store";

import { ActionEnum } from "../types/actions";
import { MainContentEnum } from "../types/common";

interface PlayerFormValues {
  team_name_1: string;
  team_name_2: string;
  player_name_1: string;
  player_name_2: string;
  player_name_3: string;
  player_name_4: string;
  player_name_5: string | null;
  player_name_6: string | null;
}

const PlayerForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const initialValues: PlayerFormValues = {
    team_name_1: state.teams[0],
    team_name_2: state.teams[1],
    player_name_1: state.players[0],
    player_name_2: state.players[1],
    player_name_3: state.players[2],
    player_name_4: state.players[3],
    player_name_5: state.playerCount == 6 ? state.players[4] : null,
    player_name_6: state.playerCount == 6 ? state.players[5] : null,
  };

  const onSubmitForm = (
    values: PlayerFormValues,
    actions: FormikHelpers<PlayerFormValues>
  ) => {
    dispatch({
      type: ActionEnum.SetTeamNames,
      payload: { teams: [values.team_name_1, values.team_name_2] },
    });

    dispatch({
      type: ActionEnum.SetPlayerNames,
      payload: {
        players: [
          values.player_name_1,
          values.player_name_2,
          values.player_name_3,
          values.player_name_4,
          values.player_name_5 ?? "",
          values.player_name_6 ?? "",
        ],
      },
    });

    dispatch({
      type: ActionEnum.SetMainContent,
      payload: {
        content: MainContentEnum.ScoreCard,
      },
    });

    actions.setSubmitting(false);
  };

  return (
    <div className="m-2 border border-black bg-gray-200 p-2">
      <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
        <Form>
          <TeamNames />
          <PlayerNames />
          <div className="text-center">
            <Button label="Save" type="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PlayerForm;
