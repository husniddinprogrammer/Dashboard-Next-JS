import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import DashboardLayout from '../../components/layout.js/DashboardLayout'

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Loyihalar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu yerda loyihalar ro'yxati ko'rsatiladi.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Link href="/projects/demo">/projects/demo</Link>
          <br />
          <Link href="/projects/alpha">/projects/alpha</Link>
        </Box>
      </Box>
    </DashboardLayout>
  )
}
