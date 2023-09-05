import { GenericType } from "utils/types";

export type AsyncFn<T> = ( args: T ) => Promise<Record<string, unknown>>;

export interface AsyncFunctionUtility {
  isLoading: boolean;
  err: null | unknown;
  res: GenericType;
}
