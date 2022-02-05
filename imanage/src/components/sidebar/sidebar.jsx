import React from 'react';
import "./sidebar.css";
import {Home as HomeIcon,
       Settings as SettingsIcon,
       History as HistoryIcon,
       Star as StarIcon,
       OfflineBolt as OfflineBoltIcon,} from '@material-ui/icons';
import {Link} from "react-router-dom";


export default function sidebar() {
      return (
            <div className="sidebar">
                  <ul className="sidebarList">

                  <li className="sidebarFirstListItem">
                        <OfflineBoltIcon style={{ fontSize: "3vw" }}/> 
                  </li>

                  <Link to="/">
                  <li className="sidebarListItem">
                        <HomeIcon className="sideBarIcon" style={{ fontSize: "2vw" }}/>
                        <span className="link-text">Home</span>

                  </li>
                  </Link>
                  <li className="sidebarListItem">
                        <StarIcon className="sideBarIcon" style={{ fontSize: "2vw" }}/>
                        <span className="link-text">Popular</span>
                  </li> 
                  <li className="sidebarListItem">
                        <HistoryIcon className="sideBarIcon" style={{ fontSize: "2vw" }}/>
                        <span className="link-text">Recent</span>
                  </li>

                  <li className="sidebarListItem">
                        <SettingsIcon className="sideBarIcon" style={{ fontSize: "2vw" }}/>
                        <span className="link-text">Settings</span>
                  </li>   
                  </ul>
            </div>
      );
}
