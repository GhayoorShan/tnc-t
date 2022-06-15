import "./App.css";

import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import AddQuestion from "./features/QuestionAndAnswers/AddQuestion";
import Result from "./components/Result";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <AddQuestion /> },
    { path: "/result", element: <Result /> },
  ]);
  return routes;
}
function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
