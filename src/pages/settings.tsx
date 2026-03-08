import React from 'react'
import { Box, Typography } from '@mui/material'
import DashboardLayout from '../../components/layout.js/DashboardLayout'

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Sozlamalar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu yerda sozlamalar sahifasi ko'rsatiladi.
        </Typography>
      </Box>
    </DashboardLayout>
  )
}
