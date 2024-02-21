'use client'
import {
  Card, Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

const dataTable = [
  {
    name: '佐々木',
    department: '-',
    qualifications: '-',
    pv: 110,
  },
  {
    name: '杉本',
    department: '情報通信企画部',
    qualifications: '-',
    pv: 99,
  },
  {
    name: '笹川',
    department: '本店',
    qualifications: '-',
    pv: 77,
  },
  {
    name: '岡田',
    department: '京都市店',
    qualifications: '嘱託',
    pv: 59,
  },
  {
    name: '齋藤',
    department: '-',
    qualifications: '-',
    pv: 58,
  },
  {
    name: '川端',
    department: '-',
    qualifications: '-',
    pv: 53,
  },
  {
    name: '戸田',
    department: '-',
    qualifications: '-',
    pv: 52,
  },
];

export default function TablechartPc() {
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