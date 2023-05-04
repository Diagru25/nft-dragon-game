import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Rewards to AICHICK/ETH LP", value: 5, des: "" },
  { name: "For marketing", value: 7, des: "" },
  { name: "Dividends to AIChick Holders", value: 3, des: "" },
];

const COLORS = [
  "#f67711",
  "#3ecf52",
  "#1077e8",
  "#d4f031",
  "#ffc43a",
  "#8c30fa",
];

const CustomTooltip = (props: any) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border py-3 px-5 bg-light border-lime-500">
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function TaxBurnChart() {
  const renderLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value, index, fill } =
      props;
    const RADIAN = Math.PI / 180;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill={COLORS[index]}
          className="text-lg font-bold"
        >{`${value}%`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          //fill="#999"
        >
          {data[index].name}
        </text>
      </g>
    );
  };

  const renderLabelSmallPie = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${value}%`}
      </text>
    );
  };

  return (
    <div className=" bg-primary-light py-4">
      <div className="relative max-w-[1200px] w-full m-auto sm:hidden">
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={150}
              innerRadius={120}
              // @ts-ignore
              label={renderLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-[2rem] font-bold">
            <span className="text-primary">15%</span> tax burn
          </div>
          <div>in each transaction</div>
        </div>
      </div>

      <div className="hidden w-full sm:flex sm:flex-col sm:items-center">
        <div className="text-[2rem] font-bold pt-2">
          <span className="text-primary">15%</span> tax burn
        </div>
        <div>in each transaction</div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50}
              // @ts-ignore
              label={renderLabelSmallPie}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              iconSize={16}
              iconType="circle"
              payload={data.map((item, index) => ({
                value: (
                  <span>
                    {item.name}
                    <span className="text-primary pl-2 font-bold text-lg">
                      {item.value}%
                    </span>
                  </span>
                ),
                color: COLORS[index],
              }))}
            />
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
