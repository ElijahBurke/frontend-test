/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import './SelectButton.scss';

function SelectButton({ val, setCurr, curr }) {
  const [mouseDownPos, setMouseDownPos] = useState({});
  const mouseDown = useCallback(({ clientX, clientY }) => {
    setMouseDownPos({ clientX, clientY });
  }, []);

  const changeVal = useCallback(({ clientX, clientY }) => {
    if (
      Math.abs(mouseDownPos.clientX - clientX) < 10
      && Math.abs(mouseDownPos.clientY - clientY) < 10
    ) {
      setCurr(val);
    }
  }, [mouseDownPos]);
  return (
    <button type="button" className={`select__button ${curr === val ? 'active' : ''}`} onMouseDown={mouseDown} onClick={changeVal}>
      {val}
    </button>
  );
}

export default SelectButton;
