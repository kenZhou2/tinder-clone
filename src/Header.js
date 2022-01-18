import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <div className = 'header'>
           
            {/* <h1>his is test</h1> */}
            <IconButton>
                <PersonIcon fontSize= "Large" className='person_icon'/>
            </IconButton>
            
            <img 
                className='header_logo'
                src = "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.jpg"
                alt = ""
                
            />

            <IconButton>
                <ForumIcon fontSize= "Large" className='forum_icon'/>
            </IconButton>
        </div>
    );
}

export default Header; 
