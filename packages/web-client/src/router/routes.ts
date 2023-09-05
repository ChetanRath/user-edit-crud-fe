import { CreateUser } from "pages/CreateUser";
import { Home } from "pages/Home";
import { UpdateUser } from "pages/UpdateUser";

import { PageURL } from "./pageURL";
import { RouteProps } from "./types";

export const routes: RouteProps[] = [
  {
    path: PageURL.ROOT,
    component: Home,
  },
  {
    path: PageURL.CREATE_USER,
    component: CreateUser,
  },
  {
    path: PageURL.ROOT,
    component: UpdateUser,
  },
];
