'use client'
import { Card, BarChart } from '@tremor/react';

const chartdata = [
  {
    name: '2024/2/5',
    '技術者経歴検索': 453,
    '文献キーワード検索': 455,
    '文献ダウンロード': 180,
    '工事情報検索': 110,
  },
  {
    name: '2024/2/6',
    '技術者経歴検索': 535,
    '文献キーワード検索': 289,
    '文献ダウンロード': 107,
    '工事情報検索': 89,
  },
  {
    name: '2024/2/7',
    '技術者経歴検索': 98,
    '文献キーワード検索': 97,
    '文献ダウンロード': 51,
    '工事情報検索': 32,
  },
  {
    name: '2024/2/8',
    '技術者経歴検索': 128,
    '文献キーワード検索': 124,
    '文献ダウンロード': 98,
    '工事情報検索': 33,
  },
  {
    name: '2024/2/9',
    '技術者経歴検索': 188,
    '文献キーワード検索': 184,
    '文献ダウンロード': 88,
    '工事情報検索': 23,
  },
  {
    name: '2024/2/10',
    '技術者経歴検索': 208,
    '文献キーワード検索': 184,
    '文献ダウンロード': 68,
    '工事情報検索': 43,
  },
  {
    name: '2024/2/11',
    '技術者経歴検索': 234,
    '文献キーワード検索': 214,
    '文献ダウンロード': 138,
    '工事情報検索': 73,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('jp').format(number).toString();

export default function Barchart2() {
    return (
        <>
          <Card className="mx-auto">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            カテゴリ別PV数（操作ログより）</h3>
            <BarChart
              // className="mt-6"
              data={chartdata}
              index="name"
              categories={[
                '技術者経歴検索',
                '文献キーワード検索',
                '文献ダウンロード',
                '工事情報検索',
              ]}
              colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
              valueFormatter={dataFormatter}
              // yAxisWidth={48}
            />
          </Card>
        </>
    )
}