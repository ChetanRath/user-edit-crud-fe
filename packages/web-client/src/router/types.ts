import { ReactElement } from "react";

import { PageURL } from "./pageURL";

export interface RouteProps {
  component: React.FC<any>;
  layout?: React.FC<any>;
  path: PageURL;
}

export interface ProtectedRouteProps {
  children: ReactElement;
}
