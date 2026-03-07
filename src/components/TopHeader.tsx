import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Menu, MenuItem } from '@mui/material'
import { SearchRounded, NotificationsNoneRounded, KeyboardArrowDownRounded } from '@mui/icons-material'

export default function TopHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', color: '#111827' }}>
      <Toolbar sx={{ px: 3, py: 1.25 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontWeight: 800, fontSize: 20 }}>Good Morning Anima</Typography>
          <Typography sx={{ mt: 0.25, color: '#9ca3af', fontSize: 12 }}>Hope you have a good day</Typography>
        </Box>

        <IconButton sx={{ color: '#111827' }}>
          <SearchRounded />
        </IconButton>
        <IconButton sx={{ color: '#111827' }}>
          <NotificationsNoneRounded />
        </IconButton>

        <IconButton
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{
            ml: 1,
            color: '#111827',
            borderRadius: 999,
            px: 0.75,
            '&:hover': { backgroundColor: '#f3f4f6' },
          }}
        >
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#6C63FF', mr: 0.75 }}>A</Avatar>
          <KeyboardArrowDownRounded fontSize="small" />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
