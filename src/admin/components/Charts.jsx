import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const userData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 300 },
  { month: "Apr", users: 250 },
  { month: "May", users: 400 },
];

const depositData = [
  { month: "Jan", amount: 10000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 20000 },
  { month: "Apr", amount: 18000 },
  { month: "May", amount: 25000 },
];

export default function Charts() {
  return (
    <div className="charts-wrapper">
      <div className="chart-box">
        <h3>User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#2196f3"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Monthly Deposits</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={depositData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#4caf50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
