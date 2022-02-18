import { IKeyStringValMap } from "types/global";

export const INPUT_NAMES: IKeyStringValMap = {
  ccNumber: "ccNumber",
};

export const INPUT_ERROR_MESSAGES: IKeyStringValMap = {
  [INPUT_NAMES.ccNumber]: "Invalid number",
};

export const VALID_CC_NUMBER_LENGTH: number = 16;
