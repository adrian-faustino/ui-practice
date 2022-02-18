import { useState } from "react";
import { IKeyStringValMap, IUseInput } from "types/global";

/* This hook handles state manipulation of data related to input fields. Declare this in the parent component of where you intend to use the <Input.tsx> component */

const useInput = (): IUseInput => {
  const [values, setValues] = useState<IKeyStringValMap>({});
  const [errors, setErrors] = useState<IKeyStringValMap>({});

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

  // const onHandleClearErrors = () => {

  // }

  return {
    values,
    errors,
    onSetErrors,
    onHandleChange,
    onHandleClearValues,
  };
};

export default useInput;
