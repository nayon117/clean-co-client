import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen gap-2">
      <div className="flex-[1] bg-green-500">sidebar</div>
      <div className="flex-[3] bg-red-500">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default AdminLayout;
