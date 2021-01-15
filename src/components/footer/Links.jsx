import React from 'react';

const Links = (props) => {
  const { className, title, name1, link1, name2, link2, name3, link3, name4, link4 } = props;
  return (
    <div className={className}>
      <h4>{title}</h4>
      <div>
        <div>
          <a href={link1}>{name1}</a>
        </div>

        <div>
          <a href={link2}>{name2}</a>
        </div>

        <div>
          <a href={link3}>{name3}</a>
        </div>
        <div>
          <a href={link4}>{name4}</a>
        </div>

      </div>
    </div>
  );
};
export default Links;
