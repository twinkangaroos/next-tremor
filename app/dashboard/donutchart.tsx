'use client'
import { Card, DonutChart, Legend } from '@tremor/react';
// import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ratio = [
  {
    name: 'PC',
    ratio: 5097,
  },
  {
    name: 'iPad',
    ratio: 101,
  },
  {
    name: 'iPhone',
    ratio: 24,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('jp').format(number).toString()}`;

export default function Donutchart() {
    const router = useRouter()
    // const [value, setValue] = useState<any>("")
    const valueChange = (v: any) => {
      // setValue(v)
      console.log("v.name", v.name)
      // iPadが選択された場合
      if (v.name === 'iPad') {
        router.push('/dashboard/device/ipad')
      }
      else if (v.name === 'iPhone') {
        router.push('/dashboard/device/iphone')
      }
      else {
        router.push('/dashboard/device/pc')
      }
    }

    return (
        <>
          <Card className="mx-auto">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                  利用デバイスの割合（操作ログより）</h3>
            <div className="flex items-center justify-center space-x-6">
              <DonutChart
                data={ratio}
                category="ratio"
                index="name"
                valueFormatter={valueFormatter}
                colors={['blue', 'cyan', 'indigo']}
                className="h-60"
                label=""
                showLabel={true}
                onValueChange={(v) => valueChange(v)}
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