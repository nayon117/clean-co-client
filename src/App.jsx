import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <div>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </div>
  );
};
export default App;
