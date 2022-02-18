import { useState } from "react";
import { IKeyStringValMap, IUseInput } from "types/global";

const useInput = (): IUseInput => {
  const [values, setValues] = useState<IKeyStringValMap>({});

  const onHandleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.persist();
    const { name, value } = e.target;

    setValues((state = {}) => ({
      ...state,
      [name]: value,
    }));
  };

  const onHandleClear = (name: string) => {
    return () => {
      setValues((state = {}) => ({
        ...state,
        [name]: "",
      }));
    };
  };

  return {
    values,
    setValues,
    onHandleChange,
    onHandleClear,
  };
};

export default useInput;
