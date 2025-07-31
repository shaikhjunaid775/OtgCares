import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer
]);

const EChartsPieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: true // Hide legend to save space
      },
      series: [
        {
          name: 'Sales',
          type: 'pie',
          radius: ['0%', '80%'],     // Maximize outer radius
          center: ['50%', '50%'],    // Keep chart centered
          data: [
            { value: 5, name: 'Shirts' },
            { value: 20, name: 'Cardigans' },
            { value: 36, name: 'Chiffons' },
            { value: 10, name: 'Pants' },
            { value: 10, name: 'Heels' },
            { value: 20, name: 'Socks' }
          ],
          label: {
            show: true,
            position: 'inside',
            formatter: '{d}%'        // Show percentage only
          },
          itemStyle: {
            borderRadius: 10,        // Optional: rounded edges
            borderColor: '#fff',
            borderWidth: 2
          }
        }
      ]
    };
    

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartsPieChart;
