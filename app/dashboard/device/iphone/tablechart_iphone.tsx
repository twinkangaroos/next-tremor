'use client'
import {
  Card, Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

const dataTable = [
  {
    name: '新垣',
    department: '-',
    qualifications: '-',
    pv: 3,
  },
  {
    name: '吉田',
    department: '-',
    qualifications: '-',
    pv: 2,
  },
  {
    name: '山脇',
    department: '-',
    qualifications: '-',
    pv: 2,
  },
  {
    name: '前川',
    department: '-',
    qualifications: '-',
    pv: 2,
  },
  {
    name: '中井',
    department: '-',
    qualifications: '-',
    pv: 2,
  },
  {
    name: '納谷',
    department: '-',
    qualifications: '-',
    pv: 2,
  },
  {
    name: '山田',
    department: '滋賀支店',
    qualifications: 'Ｇ５',
    pv: 1,
  },
];

export default function TablechartIphone() {
    return (
        <>
          <Card className="mx-auto max-w-7xl">
                <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                  利用者内訳</h3>
                <Table className="mt-5">
                <TableHead>
                    <TableRow>
                    <TableHeaderCell>氏名</TableHeaderCell>
                    <TableHeaderCell>部支店社名</TableHeaderCell>
                    <TableHeaderCell>資格</TableHeaderCell>
                    <TableHeaderCell>PV</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataTable.map((item) => (
                    <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          {item.department}
                        </TableCell>
                        <TableCell>
                          {item.qualifications}
                        </TableCell>
                        <TableCell>
                          {item.pv}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </Card>
        </>
    )
}