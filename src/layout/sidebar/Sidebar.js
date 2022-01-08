import React from 'react';
import { useSelector } from 'react-redux';
import SidebarMenu from "./SidebarMenu";
import {
    CCreateElement,
    CSidebar,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarNavDropdown,
    CSidebarNavItem,
  } from '@coreui/react'

  import './sidebar.scss'


const Sidebar = (props) => {

// const open_dropside_arrow = 'c-sidebar-nav-dropdown';

// const styleSide = open_dropside_arrow ? '.c-sidebar-nav-dropdown-toggle::before'  : '.c-sidebar-nav-dropdown-toggle:after' ;

const { is_toggleMenu } = useSelector((state) => state.menuToggle);

const sidebarClass = is_toggleMenu ? 'sidebar-small' : 'sidebar';

return (
<div>
    <div id="mySidebar" className={sidebarClass}>
    <CSidebar
      show={true}>
      <CSidebarNav>
        <CCreateElement
          items={SidebarMenu}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
    </CSidebar>
</div>
</div>
)
}

export default Sidebar;


