import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="max-w-[83rem] mx-auto border-[5px] border-lime-300 min-h-screen">
      <h1 className="bg-green-500 py-3 font-semibold w-full text-3xl">
        User Management System{" "}
      </h1>
      <Outlet />
    </div>
  );
}

export default App;
