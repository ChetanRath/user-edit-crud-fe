import { useState } from "react";

import { AsyncFn, AsyncFunctionUtility } from "./types";

export function useAsyncFn<T, P>( fn: AsyncFn<T, P> ) {
  const [ state, setState ] = useState<AsyncFunctionUtility<T>>({
    isLoading: false,
    err: null,
    res: null,
  });
  const asyncFunc = async ( ...args: P[] ) => {
    setState({ isLoading: true, err: null, res: null });
    try {
      const data: T = await fn( args[0] );
      setState({ ...state, isLoading: false, res: data });
    } catch ( err: unknown ) {
      setState({ ...state, isLoading: false, err });
    }
  };

  return { ...state, asyncFunc };
}
