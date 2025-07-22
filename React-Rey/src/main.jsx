import { createRoot } from 'react-dom/client'
import './index.css'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyDPwO5fJibMfMIfQhEXcJG8lQPEuMa42TQ",
  authDomain: "coder-react-7e688.firebaseapp.com",
  projectId: "coder-react-7e688",
  storageBucket: "coder-react-7e688.firebasestorage.app",
  messagingSenderId: "623486984892",
  appId: "1:623486984892:web:ec152c71478ccadf8e66b9"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>,
)
