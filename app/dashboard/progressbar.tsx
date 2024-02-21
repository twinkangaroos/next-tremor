'use client'
import {
  Card, ProgressBar, BarChart, Grid, Col, DonutChart, Legend, Badge,
  Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

export default function Progressbar() {
    return (
        <>
          <Card className="mx-auto max-w-xl">
                <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Sales
                </h4>
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                $71,465
                </p>
                <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                <span>32% of annual target</span>
                <span>$225,000</span>
                </p>
                <ProgressBar value={32} className="mt-2" />
            </Card>
        </>
    )
}