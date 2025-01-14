import Header from "../../components/header.jsx";
import { Outlet } from "react-router-dom";
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
