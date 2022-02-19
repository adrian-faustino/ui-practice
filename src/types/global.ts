export interface IKeyStringValMap {
  [key: string]: string;
}

export type IInputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type IInputKeyDownEvent = React.KeyboardEvent<HTMLInputElement>;

export interface IUseInput {
  values: IKeyStringValMap;
  errors: IKeyStringValMap;
  setValues: React.Dispatch<React.SetStateAction<IKeyStringValMap>>;
  onSetErrors: (name: string, errMsg: string) => any;
  onHandleChange: (e: IInputChangeEvent) => any;
  onHandleClearValues: (name: string) => any;
  onHandleClearErrors: (name: string) => any;
}

export interface ISvgIconProps {
  width?: string;
  height?: string;
  className?: string;
}
