export interface IKeyStringValMap {
  [key: string]: string;
}

export interface IUseInput {
  values: IKeyStringValMap;
  errors: IKeyStringValMap;
  onSetErrors: (name: string, errMsg: string) => any;
  onHandleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => any;
  onHandleClearValues: (name: string) => any;
  onHandleClearErrors: (name: string) => any;
}
