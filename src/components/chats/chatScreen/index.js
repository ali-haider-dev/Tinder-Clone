import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./style.css"

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "Mark Zuckerburg",
            message: "hey whats up!",
            image: "https://media.architecturaldigest.com/photos/5cc722c6711f0037e73fb519/16:9/w_2560%2Cc_limit/GettyImages-1057466684.jpg"
        },
        {
            name: "Mark Zuckerburg",
            message: "are u free at 7pm",
            image: "https://media.architecturaldigest.com/photos/5cc722c6711f0037e73fb519/16:9/w_2560%2Cc_limit/GettyImages-1057466684.jpg"
        },
        {
            name: "Mark Zuckerburg",
            message: "i have something to discuss to you",
            image: "https://media.architecturaldigest.com/photos/5cc722c6711f0037e73fb519/16:9/w_2560%2Cc_limit/GettyImages-1057466684.jpg"
        },
        {
            message: "Yeah i am free "
        },
        {
            message: "lets meet at my house"
        }
    ])
    return (
        <div className="chatScreen">
            <p className="chatScreen__Timestamp"> You MATCHED WITH MARK ZUCKERBURG ON 9/19/21 </p>
            {
                messages.map(person => (
                    person.name ? (
                        <div className="chatScreen__messges">
                            <Avatar
                                className="chatScreen__image"
                                src={person.image}
                                alt={person.name}
                            />

                            <p className="chatScreen__text">{person.message}</p>
                        </div>
                    ) :
                        <div className="chatScreen__messges">
                            <p className="chatScreen__Usertext">{person.message}</p>
                        </div>

                ))
            }
        </div>
    )
}

export default ChatScreen
