import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import DashboardLayout from '../../components/layout.js/DashboardLayout'
import { getTeams } from '@/data/teams'

export default function TeamsPage() {
  const teams = getTeams()

  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Jamolar
        </Typography>

        {teams.map((team) => (
          <Box key={team.id} sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 700 }}>
              <Link href={`/teams/${team.id}`}>{team.name}</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A'zolar soni: {team.members.length}
            </Typography>
          </Box>
        ))}
      </Box>
    </DashboardLayout>
  )
}
