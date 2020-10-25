import React from 'react';

function Option(props) {
  const { aName, href, className } = props;
  return (
    <li className={className}>
      <a href={href}>{aName}</a>
    </li>
  );
}

export default Option;
