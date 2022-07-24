import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardEntry from "./ScoreCardEntry";
import ScoreIcon from "./ScoreIcon";
import { ScoreIconEnum } from "./ScoreIcon";

const ScoreCard = () => {
  return (
    <div className="mx-4 mt-4 mb-2">
      <table className="min-w-full table-fixed border-2 border-black">
        <thead>
          <tr>
            <ScoreCardHeader>Team A</ScoreCardHeader>
            <ScoreCardHeader>Team B</ScoreCardHeader>
            <ScoreCardHeader>Bid</ScoreCardHeader>
            <ScoreCardHeader>Dealer</ScoreCardHeader>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr className="bg-slate-100">
            <ScoreCardEntry>0</ScoreCardEntry>
            <ScoreCardEntry>0</ScoreCardEntry>
            <ScoreCardEntry>
              Team A<br />5<ScoreIcon icon={ScoreIconEnum.spades} />
              <ScoreIcon icon={ScoreIconEnum.smile} />
            </ScoreCardEntry>
            <ScoreCardEntry>Jackie</ScoreCardEntry>
          </tr>
          <tr className="bg-slate-300">
            <ScoreCardEntry>5</ScoreCardEntry>
            <ScoreCardEntry>3</ScoreCardEntry>
            <ScoreCardEntry>
              Team B<br />4<ScoreIcon icon={ScoreIconEnum.clubs} />
              <ScoreIcon icon={ScoreIconEnum.smile} />
            </ScoreCardEntry>
            <ScoreCardEntry>Thelma</ScoreCardEntry>
          </tr>
          <tr className="bg-slate-100">
            <ScoreCardEntry>9</ScoreCardEntry>
            <ScoreCardEntry>7</ScoreCardEntry>
            <ScoreCardEntry>
              Team A<br />6<ScoreIcon icon={ScoreIconEnum.hearts} />
              <ScoreIcon icon={ScoreIconEnum.storm} />
            </ScoreCardEntry>
            <ScoreCardEntry>Keith</ScoreCardEntry>
          </tr>
          <tr className="bg-slate-300">
            <ScoreCardEntry>3</ScoreCardEntry>
            <ScoreCardEntry>10</ScoreCardEntry>
            <ScoreCardEntry>
              Team B<br />5<ScoreIcon icon={ScoreIconEnum.diamonds} />
              <ScoreIcon icon={ScoreIconEnum.smile} />
            </ScoreCardEntry>
            <ScoreCardEntry>Geri</ScoreCardEntry>
          </tr>
          <tr className="bg-slate-100">
            <ScoreCardEntry>6</ScoreCardEntry>
            <ScoreCardEntry>15</ScoreCardEntry>
            <ScoreCardEntry>
              Team A<br />
              <ScoreIcon icon={ScoreIconEnum.star} />
              <ScoreIcon icon={ScoreIconEnum.high} />
              <ScoreIcon icon={ScoreIconEnum.smile} />
            </ScoreCardEntry>
            <ScoreCardEntry>Jon</ScoreCardEntry>
          </tr>
          <tr className="bg-slate-300">
            <ScoreCardEntry>22</ScoreCardEntry>
            <ScoreCardEntry>15</ScoreCardEntry>
            <ScoreCardEntry>
              Team B<br />
              <ScoreIcon icon={ScoreIconEnum.moon} />
              <ScoreIcon icon={ScoreIconEnum.low} />
              <ScoreIcon icon={ScoreIconEnum.smile} />
            </ScoreCardEntry>
            <ScoreCardEntry>David</ScoreCardEntry>
          </tr>
          <tr className="bg-slate-100">
            <ScoreCardEntry>22</ScoreCardEntry>
            <ScoreCardEntry>63</ScoreCardEntry>
            <ScoreCardEntry>None</ScoreCardEntry>
            <ScoreCardEntry>Jackie</ScoreCardEntry>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreCard;
