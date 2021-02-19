/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Predict.scss';
import { getPrediction } from '../../API/apiService';
import RenderGraph from '../Home/RenderGraph/RenderGraph';
import RenderSummary from './RenderSummary/RenderSummary';
import RenderMetrics from './RenderMetrics/RenderMetrics';

function Predict({ name, data }) {
  const [predictions, setPredictions] = useState(false);

  useEffect(() => {
    getPrediction(name)
      .then(setPredictions);
  }, []);

  return (
    <section className="section__predictions">
      <div className="predictions__title">
        Predictions for
        {' '}
        {name}
      </div>
      <div className="predictions__comparison">
        {data && name && predictions
        && (
        <RenderGraph
          data={[
            {
              x: [...data].reverse().map((d) => d.index),
              y: [...data].reverse().map((d) => d[name]),
              type: 'scatter',
              name: 'Actual',
            },
            {
              x: [...data].reverse().map((d) => d.index),
              y: predictions.predictions.slice(2).reverse(),
              name: 'Predicted',
            },
          ]}
          title={`Compare actual vs predictions for ${name}`}
        />
        )}
      </div>
      <div className="predictions__stats">
        <RenderSummary summary={predictions.modelSummary} />
        <RenderMetrics metrics={predictions.metrics} />
      </div>
    </section>
  );
}

export default Predict;
