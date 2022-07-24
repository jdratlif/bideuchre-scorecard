const ScoreCardHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <th className="w-1/4 border border-black bg-yellow-200">{children}</th>
  );
};

export default ScoreCardHeader;
