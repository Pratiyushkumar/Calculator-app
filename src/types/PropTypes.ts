export type ButtonProps = {
  buttonTitle: string;
  btnId: string;
  handleButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type InputProps = {
  id: string;
value:string|number;
  handleOutputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
