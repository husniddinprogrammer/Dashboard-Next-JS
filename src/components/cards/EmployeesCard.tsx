import React from 'react'
import { Box, Card, CardContent, Chip, Typography } from '@mui/material'

function Dot({ color }: { color: string }) {
  return <Box sx={{ width: 8, height: 8, borderRadius: 99, backgroundColor: color }} />
}

export default function EmployeesCard() {
  return (
    <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid rgba(17,24,39,0.06)' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 800, fontSize: 14, color: '#111827' }}>Employees</Typography>
          <Chip label="Aug 25-Sept 25" size="small" sx={{ fontSize: 11 }} />
        </Box>

        <Box sx={{ mt: 2.25, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Dot color="#6C63FF" />
              <Typography sx={{ fontSize: 12, color: '#9ca3af' }}>Inactive</Typography>
            </Box>
            <Typography sx={{ mt: 0.5, fontWeight: 900, fontSize: 14, color: '#111827' }}>254</Typography>

            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Dot color="#F4845F" />
              <Typography sx={{ fontSize: 12, color: '#9ca3af' }}>Active</Typography>
            </Box>
            <Typography sx={{ mt: 0.5, fontWeight: 900, fontSize: 14, color: '#111827' }}>3000</Typography>

            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Dot color="#F7B267" />
              <Typography sx={{ fontSize: 12, color: '#9ca3af' }}>Total</Typography>
            </Box>
            <Typography sx={{ mt: 0.5, fontWeight: 900, fontSize: 14, color: '#111827' }}>3254</Typography>
          </Box>

          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <Box
              sx={{
                width: 150,
                height: 150,
                borderRadius: 999,
                background:
                  'conic-gradient(from 210deg, #6C63FF 0 70%, #F4845F 70% 88%, #F7B267 88% 100%)',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 14,
                  borderRadius: 999,
                  backgroundColor: '#fff',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(108,99,255,0.35), rgba(244,132,95,0.20), rgba(255,255,255,0))',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Box sx={{ width: 18, height: 18, borderRadius: 999, backgroundColor: '#111827' }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
