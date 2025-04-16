import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound notfound-body">
      <div class="container">
        <img src="/img/hauntedhouse.png" alt="Haunted House" />
        <h1>Hey user!</h1>
        <p>This looks like an eerie place, you should head back home right now.</p>
        <button class="btn" onClick={() => window.location.replace("/home")}>Back to Home</button>
      </div>
    </div>
  )
}

export default NotFound;