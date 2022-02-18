export interface IKeyStringValMap {
  [key: string]: string;
}

export interface IUseInput {
  values: IKeyStringValMap;
  setValues: any; // todo any
  onHandleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onHandleClear: any; // todo any
}
