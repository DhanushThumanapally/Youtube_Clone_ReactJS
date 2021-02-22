import React from 'react'
import './Sidebar.css';
import  SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const Sidebar = () => {
    let selected=true;
    return (
        <div className="sidebar">
    
          <SidebarRow Icon={HomeIcon} title="Home" selected={selected}/>
          <SidebarRow Icon={WhatshotIcon} title="Trending"/>
          <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
          <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
          <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
          <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>

        </div>
    )
}

export default Sidebar
