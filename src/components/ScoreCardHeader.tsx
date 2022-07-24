import React from "react";

export type ScoreCardHeaderProps = React.PropsWithChildren & {
  onClickHandler?(event: React.MouseEvent<HTMLElement>): void;
};

const ScoreCardHeader: React.FC<ScoreCardHeaderProps> = ({
  children,
  onClickHandler,
}) => {
  return (
    <th
      onClick={onClickHandler}
      className="w-1/4 border border-black bg-yellow-200"
    >
      {children}
    </th>
  );
};

export default ScoreCardHeader;
