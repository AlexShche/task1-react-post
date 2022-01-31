import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainPages from "./pages/MainPages";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            element={userInfo ? <MainPages /> : <Login />} // Add private router
            path="/*"
          ></Route>
          <Route element={<Notfound />} path="*"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
