import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const { handleTab } = useContext(MenuContext);
  const location = useLocation();


  // sidebarMenu.js (create this file in `src/data` or `src/constants`)
  const sidebarMenu = [
    {
      label: 'Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 
             1.591 0L21.75 12M4.5 9.75v10.125c0 
             .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
             1.125-1.125h2.25c.621 0 1.125.504 
             1.125 1.125V21h4.125c.621 0 1.125-.504 
             1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      path: '/admin/dashboard'
    },
    {
      section: 'Explore',
      children: [
        {
          label: 'AI Assistants',
          icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 32 32"><path fill="#000" d="M17 3a1 1 0 1 0-2 0v1h-4.75A3.25 3.25 0 0 0 7 7.25v5.5A3.25 3.25 0 0 0 10.25 16h10.665l.505-1.58a2.2 2.2 0 0 1 .22-.42H10.25C9.56 14 9 13.44 9 12.75v-5.5C9 6.56 9.56 6 10.25 6h11.5c.69 0 1.25.56 1.25 1.25v5.5q0 .173-.044.331q.252-.061.514-.061a2.16 2.16 0 0 1 1.428.542q.101-.391.102-.812v-5.5A3.25 3.25 0 0 0 21.75 4H17zM8.25 19h8.496c-.16.307-.245.65-.246 1c.008.351.1.694.27 1H8.25C7.56 21 7 21.56 7 22.25v.45c0 1.43.68 2.707 2.122 3.668C10.594 27.348 12.879 28 16 28c2.79 0 4.913-.521 6.384-1.333a2.16 2.16 0 0 0 2.366-.088a1.9 1.9 0 0 0-.25.9q0 .09.008.176a8 8 0 0 1-.521.377C22.08 29.302 19.366 30 16 30s-6.08-.698-7.987-1.968C6.077 26.742 5 24.871 5 22.7v-.45A3.25 3.25 0 0 1 8.25 19m6-9a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m5.25 1.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m1.988 10.261a3.5 3.5 0 0 1 .837 1.363l.548 1.683a.664.664 0 0 0 1.254 0l.548-1.683a3.47 3.47 0 0 1 2.197-2.196l1.684-.547a.665.665 0 0 0 0-1.254l-.034-.008l-1.683-.547a3.47 3.47 0 0 1-2.198-2.196l-.547-1.683a.664.664 0 0 0-1.255 0l-.547 1.683l-.014.042a3.47 3.47 0 0 1-2.15 2.154l-1.684.547a.665.665 0 0 0 0 1.254l1.684.546c.513.171.979.46 1.36.842m9.333 4.847l.918.298l.019.004a.362.362 0 0 1 0 .684l-.919.298a1.9 1.9 0 0 0-1.198 1.198l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.362.362 0 0 1 0-.684l.919-.298a1.9 1.9 0 0 0 1.18-1.198l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.198"></path></svg>,
          path: '/admin/dashboard/ai-assistants'
        },
        {
          label: 'Analytics',
          icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>,
          path: '/admin/dashboard/analytics'
        },
        {
          label: 'Reports',
          icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeLinecap="round" strokeWidth={1.5}><path strokeLinejoin="round" d="M11.688 3.063a3.5 3.5 0 0 1 1.027.712l5.968 5.97c.3.3.54.647.711 1.026m-7.706-7.708a3.5 3.5 0 0 0-1.448-.313H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53c0-.505-.109-.999-.314-1.45m-7.706-7.707V8.77a2 2 0 0 0 2 2h5.706"></path><path d="M7.29 13.77h9.42m-9.42 3.48h6.42"></path></g></svg>,
          path: '/admin/dashboard/reports'
        },
        {
          label: 'Settings',
          icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>,
          path: '/admin/dashboard/settings'
        }
      ]
    }
  ];


  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <i className="fas fa-circle text-white text-sm"></i>
            </div>
            <span className="text-xl font-semibold text-gray-800">OTG Cares</span>
          </div>
          <div className="bg-orange-500 rounded-md p-1 block md:hidden">
            <svg
              onClick={() => handleTab()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden">
        {sidebarMenu.map((item, index) =>
          item.section ? (
            <div key={index} className="mt-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 px-5">{item.section}</p>
              <ul className="space-y-4">
                {item.children.map((child, idx) => (
                  <li key={idx}>
                    <div className="relative">
                      {isActive(child.path) && (
                        <span className="absolute top-1 bottom-1 left-0 w-1 bg-orange-500 rounded" />
                      )}
                      <Link
                        to={child.path}
                        className={`mx-5 flex items-center space-x-3 p-2 pl-4 rounded-lg  ${isActive(child.path)
                            ? ' bg-white border border-[#d5d5d5] '
                            : 'text-gray-500 '
                          }`}
                      >
                        {child.icon}
                        <span>{child.label}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={index} className="relative mt-3">
              {isActive(item.path) && (
                <span className="absolute top-1 bottom-1 left-0 w-1 bg-orange-500 rounded" />
              )}
              <Link
                to={item.path}
                className={`m-5 flex items-center space-x-3 p-2 pl-4 rounded-lg  ${isActive(item.path)
                    ? 'border border-[#d5d5d5]  bg-white '
                    : 'text-gray-500 '
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </div>
          )
        )}
      </nav>
    </>
  );
}

export default Sidebar;
