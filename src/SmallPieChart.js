import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const SmallPieChart = ({ total, attended }) => {
  const present = total ? (attended / total) * 100 : 0;
  const absent = 100 - present;

  const data = {
    datasets: [
      {
        data: [present, absent],
        backgroundColor: ["#4CAF50", "#F44336"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SmallPieChart;