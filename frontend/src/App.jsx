import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Pages/Homepage";
import Chatpage from "./components/Pages/Chatpage";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Homepage />
        </>
      ),
    },
    {
      path: "/chat",
      element: (
        <>
          <Navbar />
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
