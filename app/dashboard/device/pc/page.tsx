'use client'
import { Grid, Col } from '@tremor/react';
import TablechartPc from './tablechart_pc'

export default function Main() {
    return (
        <>
            <Grid numItems={4} className="gap-4 py-4">
                <Col numColSpan={4}>
                    <TablechartPc />
                </Col>
            </Grid>
        </>
    )
}