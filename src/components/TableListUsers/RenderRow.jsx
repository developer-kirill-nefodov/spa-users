import React from 'react';

const RenderRow = (value, data) => {
  return (
    <div className={`render-row${data.status === 'active' ? ' col-g' : ' col-r'}`}>
      {value}
    </div>
  )
};

export default RenderRow;