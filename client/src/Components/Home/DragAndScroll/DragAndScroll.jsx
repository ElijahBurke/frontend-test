/* eslint-disable react/prop-types */
import React, {
  useLayoutEffect, useRef, useState, useCallback,
} from 'react';
import './DragAndScroll.scss';

function DragAndScroll({ children }) {
  const [state, setState] = useState({
    sizes: ['150', '250', '350', '450', '550', '650', '750'],
    isDown: false,
    isDragging: false,
    startX: null,
    scrollLeft: null,
  });

  const slider = useRef();

  const handleMouseDown = useCallback((e) => {
    setState((curr) => ({
      ...curr,
      isDown: true,
      startX: e.pageX - slider.current.offsetLeft,
      scrollLeft: slider.current.scrollLeft,
    }));
  }, [slider.current]);

  const handleMouseLeaveAndUp = useCallback(() => {
    setState((curr) => ({
      ...curr,
      isDown: false,
      isDragging: false,
    }));
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!state.isDown) return;
    setState((curr) => ({
      ...curr,
      isDragging: true,
    }));
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - state.startX;
    slider.current.scrollLeft = state.scrollLeft - walk;
  }, [state.isDown, state.scrollLeft, slider.current]);

  useLayoutEffect(() => {
    slider.current.addEventListener('mousedown', handleMouseDown);
    slider.current.addEventListener('mouseleave', handleMouseLeaveAndUp);
    slider.current.addEventListener('mouseup', handleMouseLeaveAndUp);
    slider.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      slider.current.removeEventListener('mousedown', handleMouseDown);
      slider.current.removeEventListener('mouseleave', handleMouseLeaveAndUp);
      slider.current.removeEventListener('mouseup', handleMouseLeaveAndUp);
      slider.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, [state.isDown, state.scrollLeft]);
  return (
    <div className={`drag-scroll__container ${state.isDragging ? 'active' : ''}`} ref={slider}>
      {children}
    </div>
  );
}

export default DragAndScroll;
