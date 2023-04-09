import { FC } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
