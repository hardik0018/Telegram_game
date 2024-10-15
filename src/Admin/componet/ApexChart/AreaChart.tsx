import { ApexOptions } from 'apexcharts';
import  { FC } from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';

const AreaChart:FC = (props:Props) => {
  const series = [
    {
      name: "Sales",
      data: props.data.map((e:any) => e),
    },
  ];
  const options:ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: props.offsetY,
      style: {
        fontSize: "13px",
        colors: ["black"],
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val:any) {
          return val + " Orders";
        },
      },
    },
    title: {
      text: props.text,
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "black",
      },
    },
  };
  return (
    <div>
      <ReactApexChart options={options} series={series} type={props.type} height={350} />
    </div>
  );
}

export default AreaChart;

