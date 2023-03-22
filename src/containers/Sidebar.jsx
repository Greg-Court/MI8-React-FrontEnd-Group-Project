import { BsPlus, BsGearFill } from 'react-icons/bs';
import { AiOutlineCloud } from 'react-icons/ai';
import { VscDebugRestart } from 'react-icons/vsc';
import { MdLeaderboard } from 'react-icons/md';

const Sidebar = ({resetGame}) => {

  const handleResetClick = () => {
    resetGame();
  };

  return (
    <div
      className="fixed top-1/2 w-16 h-1/2 m-0 flex flex-col bg-transparent text-white justify-center flex-gro"
    >
        <SidebarIcon icon={<BsPlus size="32" />} text="Start New Game"/>
        <SidebarIcon icon={<AiOutlineCloud size="28" />} text="Load Existing Game"/>
        <SidebarIcon icon={<MdLeaderboard size="20" />} text="Leaderboard" />
        <SidebarIcon icon={<VscDebugRestart size="20" />} text="Restart Game" onClick={handleResetClick}/>
        <SidebarIcon icon={<BsGearFill size="22" />} text="Settings" />
    </div>
  );
};
 
const SidebarIcon = ({icon, text, onClick}) => {

  return (
    <div className="sidebar-icon group" onClick={onClick}>
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
