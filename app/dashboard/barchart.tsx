'use client'
import {
  Card, ProgressBar, BarChart, Grid, Col, DonutChart, Legend, Badge,
  Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
  },
  {
    name: 'Ferns',
    'Number of threatened species': 281,
  },
  {
    name: 'Arachnids',
    'Number of threatened species': 251,
  },
  {
    name: 'Corals',
    'Number of threatened species': 232,
  },
  {
    name: 'Algae',
    'Number of threatened species': 98,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('jp').format(number).toString();

export default function Barchart() {
    return (
        <>
          <Card className="mx-auto max-w-xl">
            <BarChart
              data={chartdata}
              index="name"
              categories={['Number of threatened species']}
              colors={['blue']}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
              onValueChange={(v) => console.log(v)}
            />
          </Card>
        </>
    )
}