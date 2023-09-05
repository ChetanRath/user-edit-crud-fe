import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map( ({ component: Component, layout: Layout, path }, index ) => (
        <Route
          path={path}
          key={index}
          element={
            <>
              {Layout ? (
                <Layout>
                  <Component />
                </Layout>
              ) : (
                <Component />
              )}
            </>
          }
        />
      ) )}
      <Route path={"*"} element={<Navigate to={"/404"} />} />
    </Routes>
  </BrowserRouter>
);
