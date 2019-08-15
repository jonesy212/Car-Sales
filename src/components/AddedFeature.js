import React from 'react';

const AddedFeature = ({feature, removeItem}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> removeItem(feature)} className="button">X</button>
      {feature.name} (-{feature.price})
    </li>
  );
};

export default AddedFeature;
