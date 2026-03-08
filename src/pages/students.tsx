import React from 'react'
import { Box, Typography } from '@mui/material'
import DashboardLayout from '../../components/layout.js/DashboardLayout'

export default function StudentsPage() {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Talabalar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu yerda talabalar ro'yxati ko'rsatiladi.
        </Typography>
      </Box>
    </DashboardLayout>
  )
}
