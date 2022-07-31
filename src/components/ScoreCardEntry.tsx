type ScoreCardEntryProps = React.PropsWithChildren & {
  onClick?: () => void;
};

const ScoreCardEntry: React.FC<ScoreCardEntryProps> = ({
  children,
  onClick,
}) => {
  return (
    <td className="border border-black px-2 text-center" onClick={onClick}>
      {children}
    </td>
  );
};

export default ScoreCardEntry;
