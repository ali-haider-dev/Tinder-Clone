import React from 'react'
import './style.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum'
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom"
import { ArrowBackIos } from '@material-ui/icons';
import { useHistory } from 'react-router';
function Header({ backButton }) {
    const history = useHistory()
    return (
        <div className="header">

            {backButton ?
                (
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIos className="header__icons" fontSize="large" />
                    </IconButton>
                )
                :
                (<IconButton>
                    <PersonIcon className="header__icons" fontSize="large" />
                </IconButton>)
            }


            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
                alt="tinder logo" />

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icons" fontSize="large" />
                </IconButton>
            </Link>

        </div>
    )
}

export default Header
