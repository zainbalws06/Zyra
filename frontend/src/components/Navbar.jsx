import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chat">Chats</NavLink>
    </>
  );
}

export default Navbar;
