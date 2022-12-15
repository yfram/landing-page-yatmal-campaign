import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DesktopLayout from "./Layouts/DesktopLayout";
import MobileLayout from "./Layouts/MobileLayout";
import PaymentPage from "./Pages/PaymentPage";
import mobileCheck from "./Helpers/mobileCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/0"/>} />
        <Route path='/:teamId' element={mobileCheck() ? <MobileLayout /> : <DesktopLayout />} />
        <Route path='/payment:teamId' element={<PaymentPage />} />
        <Route path='/takanon' element={<iframe style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          zIndex: 9999
        }} src='/html/Takanon.html' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
