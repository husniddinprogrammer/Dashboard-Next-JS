import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import DashboardLayout from '../../components/layout.js/DashboardLayout'

export default function TasksPage() {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Vazifalar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu yerda vazifalar ro'yxati ko'rsatiladi.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Link href="/tasks/1">/tasks/1</Link>
          <br />
          <Link href="/tasks/2">/tasks/2</Link>
        </Box>
      </Box>
    </DashboardLayout>
  )
}
