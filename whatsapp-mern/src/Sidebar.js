import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat.js'

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar src="https://lh3.googleusercontent.com/-uralpemLchg/X3-c7-Pk4dI/AAAAAAAAI78/wQ95GdozfgkWQ1Wnxpzev8CZeEWMozWUwCPYEGAsYHg/s427/MVIMG_20191025_161947.jpg" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text"/> 
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;