import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@mui/material';

interface UserCardProps {
  name: string;
  avatarUrl?: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, avatarUrl }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={avatarUrl}>{name[0]}</Avatar>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
