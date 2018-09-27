import React from "react";

const NotFound = ({location}) => (
    <h3 className="alert-danger alert-primary">
        No match for <code>{location.pathname}</code>
    </h3>
)

export default NotFound;
