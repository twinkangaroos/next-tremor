'use client'
import { Card, LineChart } from '@tremor/react';

const chartdata = [
  {
    date: '2024/2/5',
    'PV数': 2370,
    'ユーザー数': 357,
  },
  {
    date: '2024/2/6',
    'PV数': 2162,
    'ユーザー数': 347,
  },
  {
    date: '2024/2/7',
    'PV数': 1680,
    'ユーザー数': 142,
  },
  {
    date: '2024/2/8',
    'PV数': 2002,
    'ユーザー数': 282,
  },
  {
    date: '2024/2/9',
    'PV数': 1934,
    'ユーザー数': 273,
  },
  {
    date: '2024/2/10',
    'PV数': 2112,
    'ユーザー数': 298,
  },
  {
    date: '2024/2/11',
    'PV数': 1898,
    'ユーザー数': 199,
  },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('jp').format(number).toString()}`;

export default function LineChartHero() {
  return (
    <>
        <Card className="mx-auto">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                全PV数・ユーザー数の遷移（操作ログより）</h3>
            <div className="flex items-center justify-center space-x-6">
                <LineChart
                className="h-80"
                data={chartdata}
                index="date"
                categories={['PV数', 'ユーザー数']}
                colors={['indigo', 'rose']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
                />
            </div>
        </Card>
    </>
  );
}