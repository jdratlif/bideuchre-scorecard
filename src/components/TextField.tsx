import { Field } from "formik";

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({ name, label, placeholder }) => {
  return (
    <div className="my-1">
      <label htmlFor={name} className="inline-block w-1/5">
        {label}:{" "}
      </label>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-4/5 px-1"
      />
    </div>
  );
};

export default TextField;
