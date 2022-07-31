import { useContext } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";

import Button from "./Button";
import ScoreIcon from "./ScoreIcon";

import { TrumpIcon } from "../store/globals";
import { AppContext } from "../store/store";

import { ActionEnum } from "../types/actions";
import {
  Bid,
  MainContentEnum,
  ScoreIconEnum,
  TrumpEnum,
} from "../types/common";

interface BidChangeFormValues {
  team: string;
  tricks: string;
  trump: string;
  loner: string;
  contractTricks: string | undefined;
}

const BidChangeForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const onSubmitForm = (
    values: BidChangeFormValues,
    actions: FormikHelpers<BidChangeFormValues>
  ) => {
    const partnersBest = values.loner == "1" ? true : false;
    const shootTheMoon = values.loner == "2" ? true : false;

    let tricks =
      partnersBest || shootTheMoon
        ? state.playerCount == 6
          ? 8
          : 12
        : +values.tricks;

    const bid: Bid = {
      team: +values.team,
      tricks,
      trump: +values.trump as TrumpEnum,
      partnersBest,
      shootTheMoon,
    };

    dispatch({
      type: ActionEnum.SubmitChangedBid,
      payload: {
        handNumber: state.bidChangeHand,
        bid,
        contractTricks: values.contractTricks
          ? +values.contractTricks
          : undefined,
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

  const round = state.rounds[state.bidChangeHand];

  const newBid: Bid = {
    team: round.bid ? round.bid.team : 0,
    tricks: round.bid ? round.bid.tricks : 1,
    trump: round.bid ? round.bid.trump : TrumpEnum.Clubs,
    partnersBest: round.bid ? round.bid.partnersBest : false,
    shootTheMoon: round.bid ? round.bid.shootTheMoon : false,
  };

  const trickValues =
    state.playerCount == 6
      ? [1, 2, 3, 4, 5, 6, 7, 8]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const trumpValues = Object.keys(TrumpEnum)
    .filter((v) => Number.isNaN(+v))
    .map((v) => TrumpEnum[v as keyof typeof TrumpEnum]);

  let loner = 0;

  if (round.bid?.partnersBest) {
    loner = 1;
  }

  if (round.bid?.shootTheMoon) {
    loner = 2;
  }

  const initialValues: BidChangeFormValues = {
    team: `${newBid.team}`,
    tricks: `${newBid.tricks}`,
    trump: `${newBid.trump}`,
    loner: `${loner}`,
    contractTricks: round.contractTricks
      ? round.contractTricks.toString()
      : undefined,
  };

  return (
    <div className="m-2 border border-black bg-gray-200 p-2">
      <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
        <Form>
          <div className="mb-2">
            <p className="border-b border-black text-center text-2xl font-semibold text-red-600">
              Bid Change
            </p>
          </div>

          <div className="my-1 flex">
            <div className="mx-2 w-10">Team: </div>
            <div className="mx-1">
              <label>
                <Field type="radio" name="team" value="0" /> {state.teams[0]}
              </label>
            </div>
            <div className="mx-1">
              <label>
                <Field type="radio" name="team" value="1" /> {state.teams[1]}
              </label>
            </div>
          </div>

          <div className="my-1 flex">
            <div className="mx-2 w-10">Tricks: </div>
            {trickValues.map((value, index) => (
              <div key={index} className="mx-1">
                <label>
                  <Field type="radio" name="tricks" value={`${value}`} />{" "}
                  {value}
                </label>
              </div>
            ))}
          </div>

          <div className="my-1 flex">
            <div className="mx-2 w-10">Suit: </div>
            {trumpValues.map((value, index) => (
              <div key={index} className="mx-1">
                <label>
                  <Field type="radio" name="trump" value={`${value}`} />{" "}
                  <ScoreIcon icon={TrumpIcon[value]} />
                </label>
              </div>
            ))}
          </div>

          <div className="my-1 flex">
            <div className="mx-2 w-10">Loner: </div>
            <div className="mx-1">
              <label>
                <Field type="radio" name="loner" value="0" /> No
              </label>
            </div>

            <div className="mx-1">
              <label>
                <Field type="radio" name="loner" value="1" />{" "}
                <ScoreIcon icon={ScoreIconEnum.star} />
              </label>
            </div>

            <div className="mx-1">
              <label>
                <Field type="radio" name="loner" value="2" />{" "}
                <ScoreIcon icon={ScoreIconEnum.moon} />
              </label>
            </div>
          </div>

          <div className="mb-4 border-b border-black"></div>

          <div>
            <p className="text-center text-2xl font-semibold text-red-600">
              Contract Tricks Taken
            </p>
          </div>

          <div className="mx-auto my-1 flex">
            <div className="mx-2 w-10">Tricks: </div>
            <div className="mx-1">
              <label>
                <Field type="radio" name="contractTricks" value="0" /> 0
              </label>
            </div>
            {trickValues.map((value, index) => (
              <div key={index} className="mx-1">
                <label>
                  <Field
                    type="radio"
                    name="contractTricks"
                    value={`${value}`}
                  />{" "}
                  {value}
                </label>
              </div>
            ))}
          </div>

          <div className="mx-auto mb-4 border-t border-black py-4 text-center">
            <Button label="Save" type="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BidChangeForm;
