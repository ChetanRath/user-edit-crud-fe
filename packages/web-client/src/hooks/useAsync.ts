import { useState } from "react";

import { AsyncFn, AsyncFunctionUtility } from "./types";

export function useAsyncFn<Response, Params>( fn: AsyncFn<Response, Params> ) {
  const [ state, setState ] = useState<AsyncFunctionUtility<Response>>({
    isLoading: false,
    err: null,
    res: null,
  });
  const asyncFunc = async ( ...args: Params[] ) => {
    setState({ isLoading: true, err: null, res: null });
    try {
      const data: Response = await fn( args[0] );
      setTimeout( () => setState({ ...state, isLoading: false, res: data, err: null }), 1500 );
    } catch ( err: unknown ) {
      setState({ ...state, isLoading: false, err });
    }
  };

  return { ...state, asyncFunc };
}
