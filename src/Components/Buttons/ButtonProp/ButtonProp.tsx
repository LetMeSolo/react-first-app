import React, { useState } from 'react';

const ButtonProp = (props: any) => {
  return (
    <button className="primary">{props.text}</button>
  );
};

export default ButtonProp;