import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';


function SidebarChat() {
    return (
       <div className="sidebarChat">
          <Avatar className="avatarchat" src="https://lh3.googleusercontent.com/-uralpemLchg/X3-c7-Pk4dI/AAAAAAAAI78/wQ95GdozfgkWQ1Wnxpzev8CZeEWMozWUwCPYEGAsYHg/s427/MVIMG_20191025_161947.jpg" />
            <div className="sidebarChat__info">
                 <h2>Room name</h2>
                  <p>This is the last name</p>
            </div>
       </div>
    )
}

export default SidebarChat;