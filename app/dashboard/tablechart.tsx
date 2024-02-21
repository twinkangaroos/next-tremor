'use client'
import {
  Card, Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

import { RiUserLine } from '@remixicon/react';

const dataTable = [
  {
    name: 'ログイン技術情報システム',
    pv: 995,
    uu: 530,
    pvPerCapita: 1.9,
  },
  {
    name: '技術者経歴検索・一覧　個人から探す',
    pv: 960,
    uu: 170,
    pvPerCapita: 5.6,
  },
  {
    name: '技術・安全品質　情報検索',
    pv: 805,
    uu: 219,
    pvPerCapita: 3.7,
  },
  {
    name: 'プレビュー',
    pv: 633,
    uu: 175,
    pvPerCapita: 3.6,
  },
  {
    name: 'ログイン安全品質システム',
    pv: 399,
    uu: 152,
    pvPerCapita: 2.6,
  },
  {
    name: '技術情報・安全品質システムTOP',
    pv: 374,
    uu: 184,
    pvPerCapita: 2.0,
  },
  {
    name: '',
    pv: 338,
    uu: 84,
    pvPerCapita: 4.0,
  },
  {
    name: '工事情報検索・一覧',
    pv: 231,
    uu: 37,
    pvPerCapita: 6.2,
  },
  {
    name: 'お知らせ詳細',
    pv: 190,
    uu: 92,
    pvPerCapita: 2.1,
  },
  {
    name: '技術者経歴検索・一覧　資格から探す',
    pv: 87,
    uu: 15,
    pvPerCapita: 5.8,
  },
  {
    name: '文献詳細',
    pv: 58,
    uu: 26,
    pvPerCapita: 2.2,
  },
  {
    name: '聞いてみよう！技術110番　質問詳細',
    pv: 44,
    uu: 24,
    pvPerCapita: 1.8,
  },
];

export default function Tablechart() {
    return (
        <>
          <Card className="mx-auto max-w-7xl">
                <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                  見られているページ</h3>
                <Table className="mt-5">
                <TableHead>
                    <TableRow>
                    <TableHeaderCell>ページタイトル</TableHeaderCell>
                    <TableHeaderCell>PV</TableHeaderCell>
                    <TableHeaderCell>ユーザー数</TableHeaderCell>
                    <TableHeaderCell>1人あたりPV</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataTable.map((item) => (
                    <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          {item.pv}
                        </TableCell>
                        <TableCell>
                          {item.uu}
                        </TableCell>
                        <TableCell>
                        <Badge color="emerald" icon={RiUserLine}>
                            {item.pvPerCapita}
                        </Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </Card>
        </>
    )
}