import React, { useState } from 'react'
import { Box } from '@mui/material'
import Sidebar from '../../src/components/Sidebar'
import TopHeader from '../../src/components/TopHeader'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <Box sx={{ flexGrow: 1, backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
        <TopHeader />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  )
}
