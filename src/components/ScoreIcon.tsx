import { ScoreIconEnum } from "../types/common";

export interface ScoreIconProps {
  icon: ScoreIconEnum;
}

const IconColor: { [key in ScoreIconEnum]: string } = {
  [ScoreIconEnum.clubs]: "text-green-700",
  [ScoreIconEnum.diamonds]: "text-blue-600",
  [ScoreIconEnum.hearts]: "text-red-500",
  [ScoreIconEnum.spades]: "text-black",
  [ScoreIconEnum.high]: "text-purple-700",
  [ScoreIconEnum.low]: "text-rose-400",
  [ScoreIconEnum.star]: "text-orange-600",
  [ScoreIconEnum.moon]: "text-black",
  [ScoreIconEnum.smile]: "text-black",
  [ScoreIconEnum.storm]: "text-black",
};

const Icon: { [key in ScoreIconEnum]: string } = {
  [ScoreIconEnum.clubs]: "♣",
  [ScoreIconEnum.diamonds]: "♦",
  [ScoreIconEnum.hearts]: "♥",
  [ScoreIconEnum.spades]: "♠",
  [ScoreIconEnum.high]: "🡱",
  [ScoreIconEnum.low]: "🡳",
  [ScoreIconEnum.star]: "★",
  [ScoreIconEnum.moon]: "🌕",
  [ScoreIconEnum.smile]: "🙂",
  [ScoreIconEnum.storm]: "⛈",
};

const ScoreIcon: React.FC<ScoreIconProps> = ({ icon }) => {
  return <span className={IconColor[icon]}>{Icon[icon]}</span>;
};

export default ScoreIcon;
