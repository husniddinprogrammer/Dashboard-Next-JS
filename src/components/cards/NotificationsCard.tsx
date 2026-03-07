import React from 'react'
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'

const avatarUrl = 'https://cdn-icons-png.freepik.com/256/6997/6997484.png?semt=ais_white_label'

const notifications = [
  { name: 'Ellie', action: 'joined team developers', time: '04 April, 2021 04:00 PM' },
  { name: 'Jenny', action: 'joined team HR', time: '04 April, 2021 04:00 PM' },
  { name: 'Adam', action: 'got employee of the month', time: '03 April, 2021 02:00 PM' },
  { name: 'Robert', action: 'joined team design', time: '02 April, 2021 02:00 PM' },
  { name: 'Jack', action: 'joined team design', time: '01 April, 2021 03:00 PM' },
]

export default function NotificationsCard() {
  return (
    <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid rgba(17,24,39,0.06)' }}>
      <CardContent sx={{ p: 2.25 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 900, fontSize: 14, color: '#111827' }}>Notifications</Typography>
          <Typography sx={{ fontWeight: 800, fontSize: 12, color: '#6C63FF', cursor: 'pointer' }}>View All</Typography>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {notifications.map((n, idx) => (
            <Box
              key={n.name + idx}
              sx={{
                borderRadius: 3,
                backgroundColor: '#f7f8fb',
                px: 2,
                py: 1.5,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75 }}>
                <Avatar
                  variant="rounded"
                  src={avatarUrl}
                  imgProps={{ referrerPolicy: 'no-referrer' }}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: '#fff',
                    border: '1px solid rgba(17,24,39,0.06)',
                  }}
                >
                  {n.name[0]}
                </Avatar>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>
                    {n.name} {n.action}
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>
                    {n.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
