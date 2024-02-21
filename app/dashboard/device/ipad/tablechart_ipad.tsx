'use client'
import {
  Card, Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

const dataTable = [
  {
    name: '藤本',
    department: '-',
    qualifications: '-',
    pv: 45,
  },
  {
    name: '栄永',
    department: '-',
    qualifications: '-',
    pv: 11,
  },
  {
    name: '松原',
    department: '-',
    qualifications: '-',
    pv: 8,
  },
  {
    name: '松村',
    department: '京都市店',
    qualifications: '-',
    pv: 5,
  },
  {
    name: '福原',
    department: '中国支社',
    qualifications: '-',
    pv: 5,
  },
  {
    name: '野津',
    department: '九州支社',
    qualifications: 'Ｇ６',
    pv: 3,
  },
  {
    name: '濱口',
    department: '-',
    qualifications: '-',
    pv: 3,
  },
];

export default function TablechartIpad() {
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