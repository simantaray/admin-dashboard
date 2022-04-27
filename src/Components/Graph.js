import React from "react";

import { Chart as ChartJS, registerables } from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

export default function App({ initialBalance, monthly }) {
  let array1 = [20,41,41,57,82,40];
  let array2 = [50,71,21,37,52,60];



  return (
    <div className="w-[100%] pt-12">
      <Line
        className="graph2"
        data={{
          labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
          ],
          datasets: [
            {
              label: "Assignments",
              data: array1,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: .5
            },
            {
                label: "Exams",
                data: array2,
                fill: false,
                borderColor: 'rgb(99, 227, 52)',
                tension: .5
              },
          ],
        }}
      />
    </div>
  );
}