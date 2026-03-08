import React from 'react'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Box, Typography } from '@mui/material'
import DashboardLayout from '../../../components/layout.js/DashboardLayout'

type PageProps = {
  slug: string
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
  const slugParam = ctx.params?.slug

  return {
    props: {
      slug: Array.isArray(slugParam) ? slugParam[0] : (slugParam ?? ''),
    },
  }
}

export default function ProjectDetailsPage({
  slug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Project: {slug}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu dinamik route: /projects/{slug}
        </Typography>
      </Box>
    </DashboardLayout>
  )
}
