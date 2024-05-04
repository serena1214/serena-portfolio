import "./App.css";
import Header from "./features/header/Header";
import useViewport from "./hooks/useViewport";
import Landing from "./views/landing/Landing";

export const APP_ID = "app_id";

function App() {
  useViewport();

  return (
    <main id={APP_ID}>
      <Header />
      <Landing />
    </main>
  );
}

export default App;
