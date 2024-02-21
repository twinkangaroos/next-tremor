'use client'
import { Card, BarChart } from '@tremor/react';

const chartdata = [
  {
    name: '2024/2/5',
    'PV数': 2370,
  },
  {
    name: '2024/2/6',
    'PV数': 2162,
  },
  {
    name: '2024/2/7',
    'PV数': 1680,
  },
  {
    name: '2024/2/8',
    'PV数': 2002,
  },
  {
    name: '2024/2/9',
    'PV数': 1934,
  },
  {
    name: '2024/2/10',
    'PV数': 2112,
  },
  {
    name: '2024/2/11',
    'PV数': 1898,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('jp').format(number).toString();

export default function Barchart() {
    return (
        <>
          <Card className="mx-auto">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              全PV数の遷移（操作ログより）</h3>
            <BarChart
              data={chartdata}
              index="name"
              categories={['PV数']}
              colors={['blue']}
              valueFormatter={dataFormatter}
              // yAxisWidth={48}
              onValueChange={(v) => console.log(v)}
            />
          </Card>
        </>
    )
}