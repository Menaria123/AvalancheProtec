import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './App.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Area = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    datasets: [
      {
        label: 'Avalanche Prediction',
        data: [5, 10, 8, 15, 12, 18, 10, 20, 22, 18, 25, 22, 30, 25, 28],
        fill: false,
        borderColor: 'white',
        backgroundColor: 'white',
        pointBackgroundColor: [
          'black', 'red', 'orange', 'brown', 'yellow', 'green', 'lightgreen', 'blue', 'navy', 'purple', 'magenta', 'pink', 'cyan'
        ],
        pointBorderColor: 'black',
        pointBorderWidth: 2,
        pointRadius: 6,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Avalanche Prediction Over Time',
        color: 'white',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'SENSOR DATA',
          color: 'black',
          font: {
            size: 18,
          },
        },
        ticks: {
          color: 'black',
        },
      },
      y: {
        title: {
          display: true,
          text: 'SERVER DATA',
          color: 'black',
          font: {
            size: 18,
          },
        },
        ticks: {
          color: 'black',
        },
      },
    },
  };

  return (
    <div className='container-area'>
      <div className='header-area'>
        <h1>AREA WISE DATA ANALYSIS</h1>
      </div>
      <div className='location'>
        <h3>
          LOCATION(S)
          <select>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>
        </h3>
      </div>
      <div className='chart-area'>
        <div className="legend">
          <span style={{ color: 'red' }}>■■</span>
          <span style={{ color: 'blue' }}>■■</span>
          <span style={{ color: 'brown' }}>■■</span>
          <span style={{ color: 'yellow' }}>■■</span>
          <span style={{ color: 'green' }}>■■</span>
          <span style={{ color: 'lightgreen' }}>■■</span>
          <span style={{ color: 'navy' }}>■■</span>
          <span style={{ color: 'purple' }}>■■</span>
          <span style={{ color: 'magenta' }}>■■</span>
          <span style={{ color: 'pink' }}>■■</span>
          <span style={{ color: 'cyan' }}>■■</span>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Area;
