import "./App.css";
import Header from "./features/header/Header";

export const APP_ID = "app_id";

function App() {
  return (
    <main id={APP_ID}>
      <Header />
    </main>
  );
}

export default App;
