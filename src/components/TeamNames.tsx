import TextField from "./TextField";

const TeamNames = () => {
  return (
    <div className="mb-2">
      <h4 className="mb-2 border-b border-black text-center font-bold">
        Team Names
      </h4>
      <TextField
        name="team_name_1"
        label="First"
        placeholder="Enter team name"
      />
      <TextField
        name="team_name_2"
        label="Second"
        placeholder="Enter team name"
      />
    </div>
  );
};

export default TeamNames;
