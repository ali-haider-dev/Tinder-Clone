import React from 'react'
import Chat from './chat'
function Chats() {
    return (
        <div className="chats">
            <Chat
                Name="JeffBezos"
                Message="Hey Young man how are you "
                timeStamp="40 seconds ago "
                profilePic="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
            />
            <Chat
                Name="Mark Zuckerburg"
                Message="Hey Ali Whats up! "
                timeStamp="2 minutes ago "
                profilePic="https://media.architecturaldigest.com/photos/5cc722c6711f0037e73fb519/16:9/w_2560%2Cc_limit/GettyImages-1057466684.jpg"
            />
        </div>
    )
}

export default Chats
