import React from "react";

function Option(props) {
  const { aName, href } = props;
  return (
    <li>
      <a href={href}>{aName}</a>
    </li>
  );
}

export default Option;
