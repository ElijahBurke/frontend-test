/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';
import './RenderGraph.scss';

function RenderGraph({ data, title }) {
  return (
    <>
      {data
      && (
      <Plot
        data={data}
        layout={{ width: 1000, height: 500, title }}
      />
      )}
    </>
  );
}

export default RenderGraph;
