import React from 'react';
import * as Recharts from "recharts/umd/Recharts";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

// ALELUYAAAAAAAA ça a marché
// Si tu lis ce message c'est que tu as voulu relire le code et tu as bien fait
// C'est trop dur de s'endormir quand la fille la plus forte en ML a une idée,
// et qu'elle veut à tout prix la réaliser
// et quand elle me demande de la faire marcher
// Maintenant que ça marche tu peux dormir paisiblement et faire de beaux rêves
// Bonne nuit :)

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload)
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].dataKey} : ${payload[0].value}`}</p>
        <p className="label">{`${payload[1].dataKey} : ${payload[1].value}`}</p>
        <p className="label">{`z : ${payload[0].payload.z}`}</p>
      </div>
    );
  }
  return null;
};


function App() {
  return (
    <div className="App">
      <Recharts.ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <Recharts.CartesianGrid />
        <Recharts.XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <Recharts.YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Recharts.Tooltip content={<CustomTooltip />} />
        <Recharts.Scatter name="A school" data={data} fill="#8884d8" />
      </Recharts.ScatterChart>
    </div>
  );
}

export default App;
