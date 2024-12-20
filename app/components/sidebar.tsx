import React from 'react';
import Link from 'next/link';
import { AiOutlineStock } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaHome, FaUser, FaInbox } from 'react-icons/fa';
import { GoOrganization, GoProject } from 'react-icons/go';
import { IoIosPeople } from 'react-icons/io';
import { LuAlarmClockPlus } from 'react-icons/lu';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';


function Sidebar() {
  const menuItems = [
    { name: 'Home', icon: <FaHome />,path:'/' },
    { name: 'Me', icon: <FaUser /> },
    { name: 'Inbox', icon: <FaInbox />, path: '/inbox' }, // Added `path` for Inbox
    { name: 'Teams', icon: <IoIosPeople /> },
    { name: 'Finances', icon: <RiMoneyDollarCircleFill /> },
    { name: 'Org', icon: <GoOrganization /> },
    { name: 'Engage', icon: <TiMessages /> },
    { name: 'Hire', icon: <BsFillBagCheckFill /> },
    { name: 'Performance', icon: <AiOutlineStock /> },
    { name: 'Project', icon: <GoProject /> },
    { name: 'Time', icon: <LuAlarmClockPlus /> },
  ];

  return (
    <div className="w-14 bg-gray-800 text-white h-screen fixed flex flex-col items-center">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center gap-1 p-2 rounded-lg cursor-pointer"
          >
            {item.path ? ( 
              <Link href={item.path}>
                
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[0.6rem] text-center leading-tight">
                    {item.name}
                  </span>
              </Link>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[0.6rem] text-center leading-tight">
                  {item.name}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
