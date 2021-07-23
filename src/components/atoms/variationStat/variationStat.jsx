import React from 'react'

function VariationStat({variation, variationText}) {
  return (
    <p className="variation">
      <span className="variation__stat">{variation}</span> 
      {variationText}  
    </p>
  );
}

export default VariationStat;
