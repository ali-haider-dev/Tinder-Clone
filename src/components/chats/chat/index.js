import React from 'react'
import { Avatar, } from '@material-ui/core'
import { Link } from 'react-router-dom'
import "./style.css"
function Chat({ Name, Message, timeStamp, profilePic, }) {
    return (
        <Link to={`/chat/${Name}`}>
            <div className="chat">
                <Avatar className="chat__message" alt={Name} src={profilePic} />
                <div className="chat__details">
                    <h2>{Name}</h2>
                    <p>{Message}</p>
                </div>
                <p className="chat__time">{timeStamp}</p>

            </div>
        </Link>

    )
}

export default Chat
