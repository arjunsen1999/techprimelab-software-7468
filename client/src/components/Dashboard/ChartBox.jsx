import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import ChartBoxLoading from "../../loading-page/dashboard/ChartBoxLoading";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function ChartBox() {
  const [isLoading, seIsLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    total_project: [],
    total_close: [],
  });
  const [projectStatus, setProjectStatus] = useState([]);
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Total",
        data: chartData.total_project,
        backgroundColor: "#025AAB",
        width: "4px",
      },
      {
        label: "Close",
        data: chartData.total_close,
        backgroundColor: "#5AA647",
      },
    ],
  };
  const getChartData = async () => {
    seIsLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/project/chart`
      );
      setChartData((prev) => {
        return {
          ...prev,
          labels: data.labels,
          total_project: data.total_project,
          total_close: data.total_close,
        };
      });
    } catch (error) {
      console.log(error);
    }
    seIsLoading(false);
  };

  useEffect(() => {
    getChartData();
  }, []);
  return <Box>{isLoading ? <ChartBoxLoading /> : <Bar data={data} />}</Box>;
}
