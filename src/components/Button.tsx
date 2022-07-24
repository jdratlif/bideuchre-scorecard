export interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  foreground?: string;
  background?: string;
  highlight?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
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
    highlight = "bg-emerald-400";
  }

  if (!type) {
    type = "button";
  }

  const classes = `border border-black px-3 py-1 text-center text-lg font-semibold ${foreground} ${background} hover:${highlight}`;

  return (
    <button className={classes} type={type}>
      {label}
    </button>
  );
};

export default Button;
