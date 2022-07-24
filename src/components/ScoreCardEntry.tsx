const ScoreCardEntry: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <td className="border border-black px-2">{children}</td>;
};

export default ScoreCardEntry;
