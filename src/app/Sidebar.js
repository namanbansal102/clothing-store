import React, { useState } from 'react';
import styled from 'styled-components';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { IconContext } from 'react-icons/lib';
import Link from 'next/link';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled.div `
    background: black;

  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    console.log(sidebar);
    setSidebar(!sidebar)};

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
          
            <h1  className='text-gray-300 underline cursor-pointer hover:text-black' onClick={showSidebar}>Sort</h1>
         
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            
              <AiIcons.AiOutlineClose className='my-5' onClick={showSidebar} />
            
            
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
