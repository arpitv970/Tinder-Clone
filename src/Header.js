import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>

            <img className='header_logo' src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png' alt='Tinder Logo' />

            <IconButton>
                <ForumIcon fontSize='large' className='header_icon'/>
            </IconButton>
        </div>
    )
}

export default Header
