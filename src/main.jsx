import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactHookForm from "./ReactHookForm.jsx";
import './index.css'
import OnlyJavaScript from "./OnlyJavaScript.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactHookForm />
    <OnlyJavaScript />
  </React.StrictMode>
);
