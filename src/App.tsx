import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { SharedContent } from "./components/SharedContent";
import { MainComponent } from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<MainComponent />} />
        <Route path="/brain/:shareLink" element={<SharedContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
