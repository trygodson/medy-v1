import { InputField, Item, FormGroup, InputCheckBox } from './styles/ForrmInputs';

export const Input = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>;
};

Input.InputField = ({ children, ...props }) => {
  return <InputField {...props}>{children}</InputField>;
};

Input.FormGroup = ({ children, ...props }) => {
  return <FormGroup {...props}>{children}</FormGroup>;
};
Input.CheckBox = ({ children, ...props }) => {
  return <InputCheckBox {...props}>{children}</InputCheckBox>;
};
