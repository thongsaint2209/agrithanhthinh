import "./App.css";
import { AppProvider } from "./providers/provider-app";
import { AppRoutes } from "./router";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
