import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
        <Toaster
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
              fontSize: "18px",
            },
          }}
        />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
