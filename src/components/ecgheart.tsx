import React, { useRef, useEffect, useState, PropsWithChildren } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  LineElement, 
  LineController, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';

// 필요한 요소들을 명시적으로 등록합니다.
ChartJS.register(
  LineElement, 
  LineController, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  Title, 
  Tooltip, 
  Legend
);


const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

type Props = {
    test:string
}

const ECGChart = ({test,children}:Props & PropsWithChildren) => {
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDataPoint = Math.random() * 100; // 실제 데이터로 대체
      setData((prevData) => [...prevData.slice(-99), newDataPoint]); // 마지막 100개 데이터 유지
      setLabels((prevLabels) => [
        ...prevLabels.slice(-99),
        new Date().toLocaleTimeString(), // 또는 타임스탬프 사용
      ]);
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(intervalId);
  }, []);

  const chartData: ChartData<'line'> = {
    labels: labels,
    datasets: [
      {
        label: 'ECG Data',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: {
        duration: 0,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'ECG Value',
        },
      },
    },
  };

  return (
    <div>
      <h2>Real-Time ECG Data</h2>
      <Line ref={chartRef} data={chartData} options={options} />
      {children}
    </div>
  );
};

export default ECGChart;