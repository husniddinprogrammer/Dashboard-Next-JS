import React, { useEffect, useState } from 'react'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import DashboardLayout from '../../../components/layout.js/DashboardLayout'
import { getTeamById } from '@/api'

type PageProps = {
  id: string
}
type TeamMember = {
  id: string
  name: string
  role: string
}
type Team = {
  id: string
  name: string
  members: TeamMember[]
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
  
  const [team, setTeam] = useState<Team | null>(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const fetchTeam = async () => {
        try {
          const teamData = await getTeamById(id)
          setTeam(teamData)
        } catch (error) {
          console.error('Error loading team:', error)
        } finally {
          setLoading(false)
        }
      }
  
      fetchTeam()
    }, [id])


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

        {team.members.map((member) => (
          <Box key={member.id} sx={{ mb: 1 }}>
            <Typography sx={{ fontWeight: 600 }}>{member.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </DashboardLayout>
  )
}
