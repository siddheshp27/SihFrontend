import { useRef, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import CertificateGenerator from './components/CertificateGenrator';
import Certificate from './components/Certificate';
import SuccessPage from './components/SuccessPage';
import Admin from './components/Admin';
function App() {
  const initialState = {
    name: 'Your Name',
    course: 'Your Course',
    dateOfConductStart: '2020-05-20',
    dateOfConductEnd: '2023-05-20',
    signature: '',
    signatureDetails: 'Signature'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TEXT_CHANGE':
        return { ...state, [action.field]: action.payload };

      default:
        break;
    }
  };

  const [formState, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/generate" element={<CertificateGenerator formState={formState} dispatch={dispatch} />}></Route>
        <Route path="/generated-certificate" element={<Certificate {...formState} />}></Route>
        <Route path="/addDetails" element={<SuccessPage />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
