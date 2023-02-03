import React from 'react';

import './render-styles.css';

const RenderRow = (value, data) => {
  return (
    <div className={`render-row${data.status === 'active' ? ' col-g' : ' col-r'}`}>
      {value}
    </div>
  )
};

export default RenderRow;