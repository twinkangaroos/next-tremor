'use client'
import { Grid, Col } from '@tremor/react';
import TablechartIphone from './tablechart_iphone'

export default function Main() {
    return (
        <>
            <Grid numItems={4} className="gap-4 py-4">
                <Col numColSpan={4}>
                    <TablechartIphone />
                </Col>
            </Grid>
        </>
    )
}