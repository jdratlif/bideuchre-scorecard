interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  foreground?: string;
  background?: string;
  highlight?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  onClick,
  foreground,
  background,
  highlight,
}) => {
  if (!foreground) {
    foreground = "text-white";
  }

  if (!background) {
    background = "bg-emerald-600";
  }

  if (!highlight) {
    highlight = "hover:bg-emerald-400";
  }

  if (!type) {
    type = "button";
  }

  const classes = `border border-black px-3 py-1 text-center text-lg font-semibold ${foreground} ${background} ${highlight}`;

  return (
    <button className={classes} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
