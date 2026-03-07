import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'

const xLabels = ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022']

const achieved = [5, 7, 6, 7, 6, 6]
const target = [3, 5, 3, 5, 5, 4]

export default function ProjectDeliveriesCard() {
  return (
    <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid rgba(17,24,39,0.06)' }}>
      <CardContent sx={{ p: 2.25 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 800, fontSize: 14, color: '#111827' }}>Project Deliveries</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#F4845F' }} />
              <Typography sx={{ fontSize: 11, color: '#9ca3af' }}>Achieved</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#6C63FF' }} />
              <Typography sx={{ fontSize: 11, color: '#9ca3af' }}>Target</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 2.5,
            height: 250,
            borderRadius: 3,
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}
        >
          <LineChart
            height={250}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            yAxis={[{ min: 0, max: 12, tickMinStep: 2, tickNumber: 7 }]}
            series={[
              {
                data: achieved,
                label: 'Achieved',
                color: '#F4845F',
                showMark: true,
              },
              {
                data: target,
                label: 'Target',
                color: '#6C63FF',
                showMark: true,
              },
            ]}
            grid={{ horizontal: true, vertical: false }}
            margin={{ top: 20, right: 16, bottom: 34, left: 26 }}
            slotProps={{
              legend: { position: { vertical: 'top', horizontal: 'end' } },
            }}
            sx={{
              '.MuiChartsAxis-line': { display: 'none' },
              '.MuiChartsAxis-tick': { display: 'none' },
              '.MuiChartsAxis-tickLabel': {
                fill: '#9ca3af',
                fontSize: 11,
                fontWeight: 600,
              },
              '.MuiChartsGrid-line': {
                stroke: 'rgba(17,24,39,0.06)',
              },
              '.MuiMarkElement-root': {
                strokeWidth: 2,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}
