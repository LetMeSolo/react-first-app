import React, { useState } from 'react';

const ButtonProp = (props: any) => {
  return (
    <button type="button" className="btn btn-success">{props.text}</button>
  );
};

export default ButtonProp;