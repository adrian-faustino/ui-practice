import { useState } from "react";
import { IKeyStringValMap, IUseInput } from "types/global";

/* This hook handles state manipulation of data related to input fields. Declare this in the parent component of where you intend to use the <Input.tsx> component */

const useInput = (): IUseInput => {
  const [values, setValues] = useState<IKeyStringValMap>({});
  const [errors, setErrors] = useState<IKeyStringValMap>({});

  const onHandleClearValues = (name: string) => {
    return () => {
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

  const onHandleClearErrors = (name: string) => {
    return () => {
      setErrors((state = {}) => ({
        ...state,
        [name]: "",
      }));
    };
  };

  const onHandleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
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
    onSetErrors,
    onHandleChange,
    onHandleClearValues,
    onHandleClearErrors,
  };
};

export default useInput;
