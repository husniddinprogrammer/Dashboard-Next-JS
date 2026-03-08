import React from 'react'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import DashboardLayout from '../../../components/layout.js/DashboardLayout'
import { getTeamById } from '@/data/teams'

type PageProps = {
  id: string
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
  const idParam = ctx.params?.id
  const id = Array.isArray(idParam) ? idParam[0] : (idParam ?? '')
  const team = getTeamById(id)

  if (!team) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      id,
    },
  }
}

export default function TeamDetailsPage({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const team = getTeamById(id)

  if (!team) {
    return (
      <DashboardLayout>
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Team topilmadi
          </Typography>
        </Box>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Link href="/teams">Orqaga</Link>
        </Box>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
          {team.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          A'zolar: {team.members.length} ta
        </Typography>

        {team.members.map((m) => (
          <Box key={m.id} sx={{ mb: 1 }}>
            <Typography sx={{ fontWeight: 600 }}>{m.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {m.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </DashboardLayout>
  )
}
