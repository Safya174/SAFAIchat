import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  let navigate = useNavigate();

  const handleOpenChat = () => {
    navigate("/chat");
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper", elevation: 1 }}>
      <Container maxWidth="xl">
        {/* justifyContent: "space-between" يدفع الأول للبداية والآخر للنهاية */}
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          
          {/* 1. العناصر في الأول (اللوجو والاسم) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={{ mr: 1, color: "primary.main" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'text.primary',
                textDecoration: 'none',
              }}
            >
              SafAI
            </Typography>
          </Box>

          {/* 2. العناصر في الآخر (الزرار) */}
          <Box>
            <Button
              variant="contained"
              onClick={handleOpenChat}
              sx={{
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" }
              }}
            >
              Get Started
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;