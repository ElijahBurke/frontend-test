/* eslint-disable react/prop-types */
import React from 'react';
import './RenderSummary.scss';

function RenderSummary({ summary }) {
  return (
    <>
      {summary
    && (
    <div className="predictions__render-summary">
      <div className="summary__title">
        Model Summary
      </div>
      {Object.keys(summary).map((key) => (
        <div key={key} className="summary__item">
          <div className="item__key">
            {key}
            :
          </div>
          <div className="item__value">{summary[key]}</div>
        </div>
      ))}
    </div>
    )}
    </>
  );
}

export default RenderSummary;
