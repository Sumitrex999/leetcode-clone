import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {
        <ProtectedRoute>
          <Landing />
        </ProtectedRoute>} />
      <Route path = "/signup" element = {<SignUp />} />
      <Route path = "/signin" element = {<SignIn />} />
    </Routes>
  );  
}

export default App;