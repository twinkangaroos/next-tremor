'use client'
import { Grid, Col } from '@tremor/react';

import Barchart from './barchart'
import Barchart2 from './barchart2'
import Donutchart from './donutchart'
import Tablechart from './tablechart'
// import Progressbar from './progressbar'
import Linechart from './linechart'


export default function Main() {
    return (
        <>
            <Grid numItems={4} className="gap-4 py-4">
                {/* <Col numColSpan={2}>
                    <Progressbar />
                </Col> */}
                <Col numColSpan={4}>
                    <Donutchart />
                </Col>
                <Col numColSpan={4}>
                    <Barchart />
                </Col>
                <Col numColSpan={4}>
                    <Linechart />
                </Col>
                <Col numColSpan={4}>
                    <Barchart2 />
                </Col>
                <Col numColSpan={4}>
                    <Tablechart />
                </Col>
            </Grid>
        </>
    )
}