import React from 'react';

function OptionSearch(props) {
  const { value, pasillo } = props;
  return <option value={value}>{pasillo}</option>;
}
export default OptionSearch;
