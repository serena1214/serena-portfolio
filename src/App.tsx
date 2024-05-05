import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import useViewport from "./hooks/useViewport";
import "./App.css";

export const APP_ID = "app_id";

function App() {
  useViewport();

  return (
    <main id={APP_ID}>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
