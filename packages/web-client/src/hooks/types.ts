export type AsyncFn<T, P> = ( args: P ) => Promise<T>;

export interface AsyncFunctionUtility<T> {
  isLoading: boolean;
  err: null | unknown;
  res: T | null;
}
