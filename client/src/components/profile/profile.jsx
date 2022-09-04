import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Profile() {
  const [currentUser, setCurrentUser] = useState('');
  const [classList, setClassList] = useState([
    {
      name: 'Math',
      start: 'startTime',
      stop: 'stoptime',
    },
    {
      name: 'Coding',
      start: 'startTime',
      stop: 'stoptime',
    },
    {
      name: 'Social Studies',
      start: 'startTime',
      stop: 'stoptime',
    },
  ]);

  return (
    <ProfileStyles>
      <Box sx={{ width: '50%', border: '1px solid black', padding: '10px' }}>
        <Avatar
          alt="currentUsername"
          src="currentUserURL"
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Box sx={{ width: '50%', padding: '10px' }}>
        <Stack spacing={2}>
          {classList.map((currentClass) => (
            <Card sx={{ minWidth: 275, position: 'relative' }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {currentClass.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
      <Fab
        color="secondary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: '100px',
          right: '100px',
        }}
      >
        <AddIcon />
      </Fab>
    </ProfileStyles>
  );
}

const ProfileStyles = styled.div`
  position: relative;
`;
