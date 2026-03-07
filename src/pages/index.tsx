import React from 'react'
import { Box } from '@mui/material'
import DashboardLayout from '../../components/layout.js/DashboardLayout'
import TeamsStrengthCard from '../components/cards/TeamsStrengthCard'
import EmployeesCard from '../components/cards/EmployeesCard'
import TopMetricCards from '../components/cards/TopMetricCards'
import ProjectDeliveriesCard from '../components/cards/ProjectDeliveriesCard'
import NotificationsCard from '../components/cards/NotificationsCard'

export default function IndexPage() {
  return (
    <DashboardLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 2.5,
          }}
        >
          <TeamsStrengthCard />
          <EmployeesCard />
          <TopMetricCards />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 2.5,
          }}
        >
          <ProjectDeliveriesCard />
          <NotificationsCard />
        </Box>
      </Box>
    </DashboardLayout>
  )
}