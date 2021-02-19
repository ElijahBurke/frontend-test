/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './RenderMetrics.scss';

function RenderMetrics({ metrics }) {
  const [selected, setSelected] = useState('confusionMetric');
  return (
    <>
      {metrics && metrics[selected]
    && (
    <div className="predictions__render-metrics">
      <div className="metrics__title">
        Model Metrics
      </div>
      {Object.keys(metrics[selected]).map((key) => (
        <div key={key} className="metrics__item">
          <div className="item__key">
            {key}
            :
          </div>
          <div className="item__value">{metrics[selected][key]}</div>
        </div>
      ))}
      <div className="metrics__buttons">
        <button className={selected === 'confusionMetric' ? 'active' : ''} type="button" onClick={() => setSelected('confusionMetric')}>
          Confusion
        </button>
        <button className={selected === 'detailedScoring' ? 'active' : ''} type="button" onClick={() => setSelected('detailedScoring')}>
          Detailed
        </button>
        <button className={selected === 'overallScores' ? 'active' : ''} type="button" onClick={() => setSelected('overallScores')}>
          Overall
        </button>
      </div>
    </div>
    )}
    </>
  );
}

export default RenderMetrics;
