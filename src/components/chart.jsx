import React, { useEffect } from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Chart() {
  // console.log(setarea, setnames);
  const [data2, setData2] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7",
      ],
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true,
        },
      },
      xaxis: {
        categories: [],
      },
    },
  });
  const [data, setData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: [],
      },
    },
  });
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((countires) => {
        const names = countires
          .sort((a, b) => b.area - a.area)
          .map((country) => {
            return country.name.common;
          });
        const names2 = countires
          .sort((a, b) => b.population - a.population)
          .map((country) => {
            return country.name.common;
          });
        const populitions = countires
          .sort((a, b) => b.population - a.population)
          .map((country) => {
            return country.population;
          });
        const areas = countires
          .sort((a, b) => b.area - a.area)
          .map((country) => {
            return country.area;
          });
        setData2({
          series: [{ data: populitions }],
          options: {
            ...data.options,
            xaxis: {
              categories: names2,
            },
          },
        });
        setData({
          series: [{ data: areas }],
          options: {
            ...data.options,
            xaxis: {
              categories: names,
            },
          },
        });

        console.log(names2);
        console.log(names);
      });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div>
        aholisi
        <div id="chart">
          <ReactApexChart
            series={data2.series}
            options={data2.options}
            type="bar"
            height={4100}
            width={700}
          />
        </div>
      </div>
      <div>
        maydoni
        <div id="chart">
          <ReactApexChart
            series={data.series}
            options={data.options}
            type="bar"
            height={4100}
            width={700}
          />
        </div>
      </div>
    </div>
  );
}

export default Chart;
