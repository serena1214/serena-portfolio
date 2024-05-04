import "./App.css";
import Header from "./features/header/Header";
import useViewport from "./hooks/useViewport";

export const APP_ID = "app_id";

function App() {
  useViewport();

  return (
    <main id={APP_ID}>
      <Header />
    </main>
  );
}

export default App;
