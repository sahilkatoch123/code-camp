import React, { useState } from 'react'

const Msg = () => {
    const [msg, setMsg] = useState(["k","k"])


    {/* {
    msg.length > 0 && <p> you have {msg.length} unread message.</p>
    } */}
    return (
        <div>
          {msg.length===0 ? <p>You all caught up!</p>  : <p>Unread msg</p>}
        </div>
    )
}

export default Msg
