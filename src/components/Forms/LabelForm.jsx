import React from 'react';

import './style.css';

const LabelForm = ({name, color = '#fff'}) => {
  return (
    <label className='label-form' style={{color}}>
      {name}
    </label>
  );
};

export default LabelForm;