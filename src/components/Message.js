// function Message(){

// }

// const Message = function(){

// }
import { useState } from "react";
import React from "react";

const Message = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter a message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>
        <strong>{message}</strong>
      </p>
    </div>
  );
};

export default Message;
