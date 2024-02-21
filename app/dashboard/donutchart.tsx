'use client'
import {
  Card, ProgressBar, BarChart, Grid, Col, DonutChart, Legend, Badge,
  Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

const sales = [
  {
    name: 'PC',
    sales: 5097,
  },
  {
    name: 'iPad',
    sales: 101,
  },
  {
    name: 'iPhone',
    sales: 24,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('jp').format(number).toString()}`;

export default function Donutchart() {
    return (
        <>
          <Card className="mx-auto max-w-xl">
            <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              ユーザー（デバイスカテゴリ）
            </span>
            <div className="flex items-center justify-center space-x-6">
              <DonutChart
                data={sales}
                category="sales"
                index="name"
                valueFormatter={valueFormatter}
                colors={['blue', 'cyan', 'indigo']}
                className="w-60 h-60"
                label=""
                showLabel={true}
              />
              <Legend
                categories={['PC: ' + (Math.round((5097/(5097+101+24))*1000) / 10) + '%', 
                  'iPad: ' + (Math.round((101/(5097+101+24))*1000) / 10) + '%',
                  'iPhone: ' + (Math.round((24/(5097+101+24))*1000) / 10) + '%']}
                colors={['blue', 'cyan', 'indigo']}
                className="max-w-xs"
              />
            </div>
          </Card>
        </>
    )
}