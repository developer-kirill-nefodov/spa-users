import React from 'react';

import './styles.css';

const LabelForm = ({name, color = '#fff'}) => {
  return (
    <label className='label-form' style={{color}}>
      {name}
    </label>
  );
};

export default LabelForm;
