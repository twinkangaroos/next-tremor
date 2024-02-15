'use client'

import {
  Card, ProgressBar, BarChart, Grid, Col, DonutChart, Legend, Badge,
  Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

import { RiFlag2Line } from '@remixicon/react';

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

const chartdata2 = [
  {
    name: 'Topic 1',
    'Group A': 890,
    'Group B': 338,
    'Group C': 538,
    'Group D': 396,
    'Group E': 138,
    'Group F': 436,
  },
  {
    name: 'Topic 2',
    'Group A': 289,
    'Group B': 233,
    'Group C': 253,
    'Group D': 333,
    'Group E': 133,
    'Group F': 533,
  },
  {
    name: 'Topic 3',
    'Group A': 380,
    'Group B': 535,
    'Group C': 352,
    'Group D': 718,
    'Group E': 539,
    'Group F': 234,
  },
  {
    name: 'Topic 4',
    'Group A': 90,
    'Group B': 98,
    'Group C': 28,
    'Group D': 33,
    'Group E': 61,
    'Group F': 53,
  },
];

const sales = [
  {
    name: 'New York',
    sales: 980,
  },
  {
    name: 'London',
    sales: 456,
  },
  {
    name: 'Hong Kong',
    sales: 390,
  },
  {
    name: 'San Francisco',
    sales: 240,
  },
  {
    name: 'Singapore',
    sales: 190,
  },
];

const dataTable = [
  {
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'active',
  },
  {
    name: 'Albert Rösti',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'active',
  },
  {
    name: 'Beat Jans',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'active',
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'active',
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'active',
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'active',
  },
  {
    name: 'Elisabeth Baume-Schneider',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'active',
  },
];


const dataFormatter = (number: number) =>
  Intl.NumberFormat('jp').format(number).toString();

const valueFormatter = (number: number) =>
  `¥ ${Intl.NumberFormat('jp').format(number).toString()}`;

export default function Example() {
  return (
    <>
      <header className="sticky z-40 top-0 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto flex items-center">
            <div className="flex h-16 w-full items-center justify-between">
              <a aria-label="Tremor Logo and Home Link" href="/">
                <svg aria-hidden="true" viewBox="0 0 252 109" xmlns="http://www.w3.org/2000/svg" className="h-8">
                  <path d="M20.88 83.2C23.68 83.2 26.56 82.64 27.6 82.32V72.64C26.72 72.88 25.6 73.12 24.4 73.12C20.64 73.12 18.88 71.36 18.88 67.84V52.16H27.6V42.88H18.88V28.24L8.08 32.24V42.88H1.04V52.16H7.68V70.48C7.68 79.6 13.76 83.2 20.88 83.2ZM34.9563 82H46.1563V59.36C47.1163 55.6 51.0363 52.8 55.2763 52.8C56.7963 52.8 58.0763 52.88 59.3563 53.2V41.84C58.8763 41.76 57.2763 41.6 56.4763 41.6C51.5163 41.6 47.9163 44.24 45.9963 48.56V42.88H34.9563V82ZM82.8819 83.2C90.7219 83.2 95.3619 81.12 98.9619 78.8V69.12C93.8419 72.48 89.3619 73.92 84.0819 73.92C79.2019 73.92 74.2419 70.96 74.0019 65.6H101.682C101.762 64.96 101.842 63.28 101.842 62.32C101.842 50.24 94.8019 41.6 82.4019 41.6C71.2019 41.6 62.3219 49.84 62.3219 62.16C62.3219 75.68 71.6019 83.2 82.8819 83.2ZM74.2419 58.08C74.4819 54.56 77.5219 50.88 82.4019 50.88C87.7619 50.88 90.3219 54.4 90.5619 58.08H74.2419ZM154.139 41.6C147.659 41.6 143.739 44.88 141.739 47.2C139.259 43.52 135.019 41.6 130.459 41.6C125.499 41.6 122.219 43.52 120.059 46V42.88H109.019V82H120.219V55.92C121.819 53.52 124.059 51.84 127.019 51.84C130.779 51.84 133.019 54.48 133.019 58.72V82H144.219V55.92V55.68C145.819 53.44 148.059 51.84 150.859 51.84C154.619 51.84 156.939 54.48 156.939 58.72V82H168.139V55.92C168.139 46.64 161.499 41.6 154.139 41.6ZM195.789 83.2C208.429 83.2 217.149 74.08 217.149 62.32C217.149 50.64 208.429 41.6 195.789 41.6C183.149 41.6 174.509 50.64 174.509 62.32C174.509 74.08 183.149 83.2 195.789 83.2ZM195.789 72.64C190.429 72.64 186.109 68.8 186.109 62.32C186.109 56 190.429 52.08 195.789 52.08C201.229 52.08 205.549 56 205.549 62.32C205.549 68.8 201.229 72.64 195.789 72.64ZM224.331 82H235.531V59.36C236.491 55.6 240.411 52.8 244.651 52.8C246.171 52.8 247.451 52.88 248.731 53.2V41.84C248.251 41.76 246.651 41.6 245.851 41.6C240.891 41.6 237.291 44.24 235.371 48.56V42.88H224.331V82Z" fill="currentColor"></path>
                </svg>
              </a>
              <nav className="flex space-x-6">
                <div className="hidden items-center gap-8 lg:flex">
                  <a target="" className="cursor-pointer font-medium capitalize text-slate-900 transition-colors sm:text-sm" href="/components">
                    <span className="flex">Components</span></a>
                  <a target="_blank" className="cursor-pointer font-medium capitalize text-slate-900 transition-colors sm:text-sm" href="https://blocks.tremor.so">
                    <span className="flex">Blocks<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon h-4 w-4 pb-0.5">
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></span></a>
                  <a target="" className="cursor-pointer font-medium capitalize text-slate-900 transition-colors sm:text-sm" href="/docs/getting-started/installation">
                    <span className="flex">Documentation</span></a>
                  <div className="h-6 lg:border-l"></div>
                </div>
                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:border-slate-200">
                  <a title="Go to GitHub Repository" aria-label="Go to GitHub Repository" href="https://github.com/tremorlabs/tremor">
                    <div className="flex items-center gap-2">
                      <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-900">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
                      <span className="inline-flex w-12 items-center rounded-md py-0.5 text-sm font-medium text-slate-900">14.5K+</span></div></a>
                </div>
                <div className="flex lg:hidden">
                  <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700">
                    <span className="sr-only">Open main menu</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" className="remixicon h-6 w-6">
                      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></button>
                </div>
                <div className="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex-1 overflow-hidden">
        <div className="scrollbar fixed bottom-0 right-auto top-[4rem] z-20 hidden w-64 overflow-y-auto border-r pb-10 pt-[2.7rem] lg:block">
          <aside className="space-y-5">
            <div>
              <h4 className="w-full cursor-default">
                <div className="flex justify-between">
                  <p className=" mb-4 text-lg font-semibold tracking-wide text-slate-800 md:text-sm">Getting Started</p>
                </div>
              </h4>
              <ul>
                <li className="items-center"><a href="/docs/getting-started/installation">
                  <span className="border-current pl-4 font-medium text-blue-500 relative ml-1 block border-l-2 py-1.5 pl-4  font-normal transition-all md:text-sm" aria-hidden="true">
                    <div className=""><span>Installation</span></div></span></a></li>
                <li className="items-center"><a href="/docs/getting-started/theming">
                  <span className="pl-4 text-slate-600 hover:border-slate-400 hover:text-slate-700 relative ml-1 block border-l-2 py-1.5 pl-4  font-normal transition-all md:text-sm" aria-hidden="true">
                    <div className=""><span>Theming</span></div></span></a></li>
                <li className="items-center"><a href="/docs/getting-started/first-component">
                  <span className="pl-4 text-slate-600 hover:border-slate-400 hover:text-slate-700 relative ml-1 block border-l-2 py-1.5 pl-4  font-normal transition-all md:text-sm" aria-hidden="true">
                    <div className=""><span>Your First Component</span></div></span></a></li>
                <li className="items-center"><a href="/docs/getting-started/migration">
                  <span className="pl-4 text-slate-600 hover:border-slate-400 hover:text-slate-700 relative ml-1 block border-l-2 py-1.5 pl-4  font-normal transition-all md:text-sm" aria-hidden="true">
                    <div className=""><span>Updating to v3</span></div></span></a></li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="min-h-screen max-w-3xl flex-1 pr-1 pt-10 lg:ml-[22rem]">
          <Grid numItems={4} className="gap-4 py-4">
            <Col numColSpan={2}>
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
            </Col>
            <Col numColSpan={2}>
              <Card className="mx-auto max-w-xl">
                <div className="flex items-center justify-center space-x-6">
                  <DonutChart
                    data={sales}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="w-40"
                  />
                  <Legend
                    categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="max-w-xs"
                  />
                </div>
              </Card>
            </Col>

            <Col numColSpan={2}>
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
            </Col>
            <Col numColSpan={2}>
              <Card className="mx-auto max-w-xl">
                <BarChart
                  className="mt-6"
                  data={chartdata2}
                  index="name"
                  categories={[
                    'Group A',
                    'Group B',
                    'Group C',
                    'Group D',
                    'Group E',
                    'Group F',
                  ]}
                  colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
                  valueFormatter={dataFormatter}
                  yAxisWidth={48}
                />
              </Card>
            </Col>

            <Col numColSpan={4}>
              <Card className="mx-auto max-w-7xl">
                <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">List of Swiss Federal Councillours</h3>
                <Table className="mt-5">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Name</TableHeaderCell>
                      <TableHeaderCell>Position</TableHeaderCell>
                      <TableHeaderCell>Department</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataTable.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          {item.Role}
                        </TableCell>
                        <TableCell>
                          {item.departement}
                        </TableCell>
                        <TableCell>
                          <Badge color="emerald" icon={RiFlag2Line}>
                            {item.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </Col>



          </Grid>
        </div>
      </div>





    </>
  );
}