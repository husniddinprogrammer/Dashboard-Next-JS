import React from 'react'
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
  Divider
} from '@mui/material'
import {
  DashboardRounded,
  GroupRounded,
  BadgeRounded,
  FolderRounded,
  CalendarMonthRounded,
  TaskAltRounded,
  SettingsRounded
} from '@mui/icons-material'

const drawerWidth = 264

const navItems = [
  { icon: <DashboardRounded fontSize="small" />, label: 'Dashboard', active: true },
  { icon: <GroupRounded fontSize="small" />, label: 'Teams' },
  { icon: <BadgeRounded fontSize="small" />, label: 'Employees' },
  { icon: <FolderRounded fontSize="small" />, label: 'Projects' },
]

const navItems2 = [
  { icon: <CalendarMonthRounded fontSize="small" />, label: 'Meetings' },
  { icon: <TaskAltRounded fontSize="small" />, label: 'Tasks' },
  { icon: <SettingsRounded fontSize="small" />, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          borderRight: '1px solid #eef0f5',
        },
      }}
    >
      <Box sx={{ px: 3, py: 2.5, display: 'flex', alignItems: 'center', gap: 1.25 }}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: 999,
            background: 'linear-gradient(135deg, #6C63FF, #5AD1FF)',
          }}
        />
        <Typography sx={{ fontWeight: 800, letterSpacing: 0.2, color: '#3c4a6b' }}>Teamify</Typography>
      </Box>

      <Box sx={{ px: 2 }}>
        {navItems.map((i) => (
          <ListItemButton
            key={i.label}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: i.active ? '#6C63FF' : '#6b7280',
              '& .MuiListItemIcon-root': { color: 'inherit', minWidth: 34 },
              ...(i.active
                ? { backgroundColor: 'rgba(108, 99, 255, 0.10)' }
                : { '&:hover': { backgroundColor: '#f6f7fb' } }),
            }}
          >
            <ListItemIcon>{i.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }}
              primary={i.label}
            />
          </ListItemButton>
        ))}

        <Divider sx={{ my: 2 }} />

        {navItems2.map((i) => (
          <ListItemButton
            key={i.label}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: '#6b7280',
              '& .MuiListItemIcon-root': { color: 'inherit', minWidth: 34 },
              '&:hover': { backgroundColor: '#f6f7fb' },
            }}
          >
            <ListItemIcon>{i.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }}
              primary={i.label}
            />
          </ListItemButton>
        ))}
      </Box>

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
    </Drawer>
  )
}
