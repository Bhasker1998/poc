import React from "react";
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <div className="h-screen w-1/4 bg-slate-400">
      <Outlet/>
      </div>
    </>
  );
}

export default Root;
