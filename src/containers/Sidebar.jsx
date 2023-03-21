import { BsPlus, BsGearFill } from 'react-icons/bs';
import { AiFillHome, AiOutlineCloud } from 'react-icons/ai';
import { VscDebugRestart } from 'react-icons/vsc';
import { MdLeaderboard } from 'react-icons/md';

const Sidebar = ({resetGame}) => {



  return (
    <div
      className="top-[1/2] h-full w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
    >
        <SidebarIcon icon={<AiFillHome size="28" />} text="Main Menu" />
        <SidebarIcon icon={<BsPlus size="32" />} text="Start New Game"/>
        <SidebarIcon icon={<AiOutlineCloud size="32" />} text="Load Existing Game"/>
        <SidebarIcon icon={<MdLeaderboard size="20" />} text="Leaderboard" />
        <SidebarIcon icon={<VscDebugRestart size="20" />} text="Reset Game" resetGame={resetGame}/>
        <SidebarIcon icon={<BsGearFill size="22" />} text="Settings" />
    </div>
  );
};
 
const SidebarIcon = ({icon, text, resetGame}) => {

  const handleClick = () => {
    resetGame();
  };

  return (
    <div className="sidebar-icon group" onClick={handleClick}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
  )
};

// The group class is a special class provided by Tailwind CSS that can be used to group multiple elements together in a component. 
// It allows you to apply styles to the group as a whole, as well as individual elements within the group.
// The group-hover class is a variant of the group class that allows you to apply styles to child elements when the parent element is hovered over. In this case, the group-hover:scale-100 class is applied to the .sidebar-tooltip element, which sets its scale to 100 when the parent .sidebar-icon element is hovered over.

export default Sidebar;
