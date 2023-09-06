import { CreateUser, Home, UpdateUser } from "pages";

import { PageURL } from "./pageURL";
import { RouteProps } from "./types";

export const routes: RouteProps[] = [
  {
    path: PageURL.ROOT,
    component: Home,
  },
  {
    path: PageURL.BASE,
    component: Home,
  },
  {
    path: PageURL.CREATE_USER,
    component: CreateUser,
  },
  {
    path: PageURL.UPDATE_USER,
    component: UpdateUser,
  },
];
