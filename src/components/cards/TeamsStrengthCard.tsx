import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { BarChart } from '@mui/x-charts/BarChart'

const bars = [
  { label: 'a', value: 1, color: '#F7B267' },
  { label: 'b', value: 5, color: '#F4845F' },
  { label: 'c', value: 3, color: '#4DCCFF' },
  { label: 'd', value: 10, color: '#6C63FF' },
]

const legend = [
  { label: 'Marketing', color: '#F7B267', letter: 'a' },
  { label: 'HR', color: '#F4845F', letter: 'b' },
  { label: 'Developers', color: '#4DCCFF', letter: 'c' },
  { label: 'Design', color: '#6C63FF', letter: 'd' },
]

export default function TeamsStrengthCard() {
  const values = bars.map((b) => b.value)

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: '1px solid #eef0f5',
        backgroundColor: '#fff',
      }}
    >
      <CardContent sx={{ p: 2.25 }}>
        <Typography sx={{ fontWeight: 800, fontSize: 14, color: '#111827' }}>Teams Strength</Typography>

        <Box
          sx={{
            mt: 2,
            borderRadius: 2.5,
            backgroundColor: '#fff',
            p: 1.75,
          }}
        >
          <Box sx={{ height: 170 }}>
            <BarChart
              height={170}
              borderRadius={10}
              grid={{ horizontal: false, vertical: false }}
              margin={{ left: 8, right: 8, top: 36, bottom: 18 }}
              xAxis={[
                {
                  scaleType: 'band',
                  data: bars.map((b) => b.label),
                  colorMap: {
                    type: 'ordinal',
                    values: bars.map((b) => b.label),
                    colors: bars.map((b) => b.color),
                  },
                },
              ]}
              series={[
                {
                  data: values,
                  valueFormatter: (v) => `${v}`,
                  // barLabel: 'value',
                },
              ]}
              sx={{
                '.MuiChartsAxis-root': { display: 'none' },
                '.MuiChartsGrid-root': { display: 'none' },
                '.MuiBarElement-root': {
                  rx: 10,
                  ry: 10,
                },
                '.MuiChartsBarLabel-root': {
                  fill: '#6b7280',
                  fontSize: 12,
                  fontWeight: 700,
                  pt: 2,
                },
              }}
            />

            <Box sx={{ mt: -1.5, display: 'flex', justifyContent: 'space-between', px: 0.5 }}>
              {bars.map((b) => (
                <Typography key={b.label} sx={{ width: '22%', textAlign: 'center', fontSize: 11, color: '#9ca3af' }}>
                  {b.label}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 2.25, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
            {legend.map((l) => (
              <Box key={l.label} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Box
                  sx={{
                    width: 22,
                    height: 22,
                    borderRadius: 1.25,
                    backgroundColor: l.color,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: 11, fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                    {l.letter}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>{l.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
