import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material'
import {
  DashboardRounded,
  GroupRounded,
  BadgeRounded,
  FolderRounded,
  CalendarMonthRounded,
  TaskAltRounded,
  SettingsRounded,
  MenuOpenRounded,
  MenuRounded
} from '@mui/icons-material'

const drawerWidth = 264
const collapsedWidth = 72

const navItems = [
  { 
    icon: <DashboardRounded fontSize="small" />, 
    label: 'Boshqaruv paneli', 
    path: '/dashboard'
  },
  { 
    icon: <GroupRounded fontSize="small" />, 
    label: 'Jamolar', 
    path: '/teams'
  },
  { 
    icon: <BadgeRounded fontSize="small" />, 
    label: 'Xodimlar', 
    path: '/employees'
  },
  { 
    icon: <FolderRounded fontSize="small" />, 
    label: 'Loyihalar', 
    path: '/projects'
  },
  { 
    icon: <BadgeRounded fontSize="small" />, 
    label: 'Talabalar', 
    path: '/students'
  },
]

const navItems2 = [
  { 
    icon: <CalendarMonthRounded fontSize="small" />, 
    label: 'Yig\'ilishlar', 
    path: '/meetings'
  },
  { 
    icon: <TaskAltRounded fontSize="small" />, 
    label: 'Vazifalar', 
    path: '/tasks'
  },
  { 
    icon: <SettingsRounded fontSize="small" />, 
    label: 'Sozlamalar', 
    path: '/settings'
  },
]

interface SidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

export default function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const router = useRouter()
  const currentPath = router.pathname

  const handleNavigation = (path: string) => {
    router.push(path)
  }
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: collapsed ? collapsedWidth : drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          borderRight: '1px solid #eef0f5',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ px: collapsed ? 1.5 : 3, py: 2.5, display: 'flex', alignItems: 'center', gap: collapsed ? 0 : 1.25, justifyContent: collapsed ? 'center' : 'flex-start' }}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: 999,
            background: 'linear-gradient(135deg, #6C63FF, #5AD1FF)',
          }}
        />
        {!collapsed && (
          <Typography sx={{ fontWeight: 800, letterSpacing: 0.2, color: '#3c4a6b' }}>Teamify</Typography>
        )}
      </Box>

      <Box sx={{ px: collapsed ? 1 : 2 }}>
        {navItems.map((i) => (
          <ListItemButton
            key={i.label}
            onClick={() => handleNavigation(i.path)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: currentPath === i.path ? '#6C63FF' : '#6b7280',
              '& .MuiListItemIcon-root': { color: 'inherit', minWidth: collapsed ? 34 : 34, justifyContent: 'center' },
              justifyContent: collapsed ? 'center' : 'flex-start',
              px: collapsed ? 1 : 2,
              ...(currentPath === i.path
                ? { backgroundColor: 'rgba(108, 99, 255, 0.10)' }
                : { '&:hover': { backgroundColor: '#f6f7fb' } }),
            }}
          >
            <ListItemIcon>{i.icon}</ListItemIcon>
            {!collapsed && (
              <ListItemText
                primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }}
                primary={i.label}
              />
            )}
          </ListItemButton>
        ))}

        <Divider sx={{ my: 2 }} />

        {navItems2.map((i) => (
          <ListItemButton
            key={i.label}
            onClick={() => handleNavigation(i.path)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: currentPath === i.path ? '#6C63FF' : '#6b7280',
              '& .MuiListItemIcon-root': { color: 'inherit', minWidth: collapsed ? 34 : 34, justifyContent: 'center' },
              justifyContent: collapsed ? 'center' : 'flex-start',
              px: collapsed ? 1 : 2,
              ...(currentPath === i.path
                ? { backgroundColor: 'rgba(108, 99, 255, 0.10)' }
                : { '&:hover': { backgroundColor: '#f6f7fb' } }),
            }}
          >
            <ListItemIcon>{i.icon}</ListItemIcon>
            {!collapsed && (
              <ListItemText
                primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }}
                primary={i.label}
              />
            )}
          </ListItemButton>
        ))}
      </Box>

      {!collapsed && (
        <Box sx={{ mt: 'auto', px: 2.5, pb: 2.5 }}>
          <Card
            sx={{
              borderRadius: 3,
              background: 'linear-gradient(180deg, rgba(108, 99, 255, 0.10), rgba(108, 99, 255, 0.06))',
              border: '1px solid rgba(108, 99, 255, 0.10)',
            }}
            elevation={0}
          >
            <CardContent sx={{ px: 2, py: 2, '&:last-child': { pb: 2 }, textAlign: 'center' }}>
              <Box sx={{ position: 'relative', height: 92, mb: 1.5 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    transform: 'translateX(-50%)',
                    width: 3,
                    height: 26,
                    borderRadius: 99,
                    backgroundColor: 'rgba(108, 99, 255, 0.75)',
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 18,
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '44px solid transparent',
                    borderRight: '44px solid transparent',
                    borderBottom: '58px solid rgba(108, 99, 255, 0.78)',
                    filter: 'drop-shadow(0 12px 18px rgba(108, 99, 255, 0.25))',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 60,
                    transform: 'translateX(-50%)',
                    width: 74,
                    height: 16,
                    borderRadius: 999,
                    background: 'radial-gradient(circle at 50% 45%, rgba(108,99,255,0.35), rgba(108,99,255,0.0) 70%)',
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  color: '#6C63FF',
                  fontWeight: 800,
                  fontSize: 12,
                  border: '1px solid rgba(108, 99, 255, 0.10)',
                  boxShadow: '0 10px 20px rgba(17,24,39,0.06)',
                  userSelect: 'none',
                }}
              >
                Share Your Thoughts
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Toggle Button */}
      <Box sx={{ position: 'absolute', right: -20, top: 80, zIndex: 1 }}>
        <Tooltip title={collapsed ? 'Open sidebar' : 'Close sidebar'} placement="right">
          <IconButton
            onClick={onToggle}
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#6C63FF',
              color: '#fff',
              border: '2px solid #fff',
              boxShadow: '0 4px 12px rgba(108, 99, 255, 0.3)',
              '&:hover': {
                backgroundColor: '#5A52E5',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 16px rgba(108, 99, 255, 0.4)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {collapsed ? <MenuOpenRounded /> : <MenuRounded />}
          </IconButton>
        </Tooltip>
      </Box>
    </Drawer>
  )
}
