import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function ChartBox() {
  const data = {
    labels: ["STR", "FIN", "QLT", "MAN", "STO", "HR"],
    datasets: [
      {
        label: "Total",
        data: [19, 7, 9, 15, 5, 10],
        backgroundColor: "#025AAB",
        width:"4px"
      },
      {
        label: "Close",
        data: [14, 6, 8, 15, 5, 9],
        backgroundColor: "#5AA647",
      },
    ],
  };
  return (
    <Box>
      <Bar data={data} />
    </Box>
  );
}
