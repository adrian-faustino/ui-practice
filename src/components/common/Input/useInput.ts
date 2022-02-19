import { useState } from "react";
import { IKeyStringValMap, IUseInput, IInputChangeEvent } from "types/global";

/* This hook handles state manipulation of data related to input fields. Declare this in the parent component of where you intend to use the <Input.tsx> component */

const useInput = (): IUseInput => {
  const [values, setValues] = useState<IKeyStringValMap>({});
  const [errors, setErrors] = useState<IKeyStringValMap>({});

  const onHandleClearErrors = (name: string) => {
    return () => {
      setErrors((state = {}) => ({
        ...state,
        [name]: "",
      }));
    };
  };

  const onHandleClearValues = (name: string) => {
    return () => {
      onHandleClearErrors(name)();
      setValues((state = {}) => ({
        ...state,
        [name]: "",
      }));
    };
  };

  const onSetErrors = (name: string, errMsg: string) => {
    setErrors((state = {}) => ({
      ...state,
      [name]: errMsg,
    }));
  };

  const onHandleChange = (e: IInputChangeEvent) => {
    e.persist();
    const { name, value } = e.target;

    onHandleClearErrors(name)();

    setValues((state = {}) => ({
      ...state,
      [name]: value,
    }));
  };

  return {
    values,
    errors,
    setValues,
    onSetErrors,
    onHandleChange,
    onHandleClearValues,
    onHandleClearErrors,
  };
};

export default useInput;
