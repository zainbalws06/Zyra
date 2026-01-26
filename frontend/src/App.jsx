import { useState } from "react";
import Homepage from "./components/Pages/Homepage";
import Chatpage from "./components/Pages/Chatpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home></Home>
          <Homepage />
        </>
      ),
    },
    {
      path: "/chat",
      element: (
        <>
          <Chatpage />
        </>
      ),
    },
  ]);
  return (
    <>
      {" "}
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
