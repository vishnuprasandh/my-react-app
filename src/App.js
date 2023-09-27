
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./comonents/auth/LoginPage";
// import RegisterPage from "./comonents/auth/RegisterPage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/register" element={< RegisterPage/>}></Route>
    //     <Route path="/login" element={<LoginPage />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <LoginPage/>
    </div>
  );
}

export default App;