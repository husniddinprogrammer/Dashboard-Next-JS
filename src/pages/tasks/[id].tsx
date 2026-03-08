import React from 'react'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Box, Typography } from '@mui/material'
import DashboardLayout from '../../../components/layout.js/DashboardLayout'

type PageProps = {
  id: string
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
  const idParam = ctx.params?.id

  return {
    props: {
      id: Array.isArray(idParam) ? idParam[0] : (idParam ?? ''),
    },
  }
}

export default function TaskDetailsPage({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Vazifa: {id}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu dinamik route: /tasks/{id}
        </Typography>
      </Box>
    </DashboardLayout>
  )
}
