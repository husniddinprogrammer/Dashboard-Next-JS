import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 800 }}>
        404
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Sahifa topilmadi.
      </Typography>
      <Button component={Link} href="/" variant="contained">
        Bosh sahifaga qaytish
      </Button>
    </Box>
  )
}
