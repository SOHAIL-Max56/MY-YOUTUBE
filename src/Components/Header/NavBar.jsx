import Logo from "../../assets/logo.jpg";
import hamburger from "../../assets/Hamburger_icon.png";
import Search from "../../assets/search_icon.jpg";
import Profile from "../../assets/Profile_icon.jpg";
import Notification from "../../assets/notification_icon.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
const NavBar = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-1 m-2 gap-4 shadow-md">
      <div className="flex col-span-1 gap-4">
        <img
          src={hamburger}
          alt="menu"
          className="h-6 my-6 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img src={Logo} alt="logo" className="h-20" />
      </div>

      <div className="col-span-10 my-6 gap-6">
        <input
          type="text"
          placeholder="Search"
          className="w-lg text-center rounded-l-xl border border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400"
        />
        <button className="rounded-r-xl w-8 bg-gray-200">🔍</button>
      </div>
      <div className="flex col-span-1 gap-8">
        <img src={Notification} alt="notification" className="h-6 my-3" />
        <img src={Profile} alt="profile" className="h-12" />
      </div>
    </div>
  );
};

export default NavBar;
