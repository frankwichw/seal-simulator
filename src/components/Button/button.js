import React from "react";

const Button = props => (
    <div className={props.class} id={props.id} onClick={props.onClick}>
        &#8988; _______ &#8989;<br />
        | {props.name} | <br />
        &#8990; _______ &#8991;
    </div>
);

export default Button;