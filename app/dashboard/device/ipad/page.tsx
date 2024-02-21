'use client'
import { Grid, Col } from '@tremor/react';
import TablechartIpad from './tablechart_ipad'

export default function Main() {
    return (
        <>
            <Grid numItems={4} className="gap-4 py-4">
                <Col numColSpan={4}>
                    <TablechartIpad />
                </Col>
            </Grid>
        </>
    )
}