/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import RenderGraph from './RenderGraph/RenderGraph';
import DragAndScroll from './DragAndScroll/DragAndScroll';
import SelectButton from './SelectButton/SelectButton';
import './Home.scss';

function Home({
  curr, data, targets, setCurr,
}) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/predict/${curr}`);
  };

  return (
    <section className="section__dashboard">
      <DragAndScroll>
        <div className="dashboard__buttons">
          {targets && targets.map((target) => (
            <SelectButton
              key={target}
              val={target}
              curr={curr}
              setCurr={setCurr}
            />
          ))}
        </div>
      </DragAndScroll>
      <div className="dashboard__plot">
        {data && curr
        && (
        <RenderGraph
          data={[
            {
              x: [...data].reverse().map((d) => d.index),
              y: [...data].reverse().map((d) => d[curr]),
              type: 'scatter',
            },
          ]}
          title={`Time Plot for ${curr}`}
        />
        )}
      </div>
      <div className="dashboard__predict">
        <button className="predict__btn" type="button" onClick={handleClick}>
          Predict for
          {' '}
          {curr}
        </button>
      </div>
    </section>
  );
}

export default Home;
