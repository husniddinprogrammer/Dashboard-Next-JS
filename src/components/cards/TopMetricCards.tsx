import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

function MetricCard({
  value,
  heading,
  caption,
  bg,
}: {
  value: string
  heading: string
  caption: string
  bg: string
}) {
  return (
    <Card elevation={0} sx={{ borderRadius: 3, backgroundColor: bg, border: '1px solid rgba(17, 24, 39, 0.06)' }}>
      <CardContent
        sx={{
          py: 2.5,
          px: 2.25,
          '&:last-child': { pb: 2.5 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: "50px",
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 900, fontSize: 26, lineHeight: 1.15, color: '#111827' }}>{value}</Typography>
        <Typography sx={{ mt: 0.75, fontWeight: 700, fontSize: 13, color: '#111827' }}>{heading}</Typography>
        <Typography sx={{ mt: 0.5, fontSize: 11.5, color: '#6b7280' }}>{caption}</Typography>
      </CardContent>
    </Card>
  )
}

export default function TopMetricCards() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr' },
        gap: 2,
      }}
    >
        <MetricCard
          value="10"
          heading="Position in Dribbble"
          caption="20% increase from last week"
          bg="#FFF3E8"
        />
        <MetricCard
          value="26"
          heading="New Employees Onboarded"
          caption="15% increase from last month"
          bg="#EEE9FF"
        />
        <MetricCard
          value="500"
          heading="New Clients Approached"
          caption="5% increase from last week"
          bg="#E8F7FF"
        />
    </Box>
  )
}
