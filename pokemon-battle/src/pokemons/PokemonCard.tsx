import { Box, Card, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material';
import React from 'react'
import { Pokemon } from '../interfaces/interfaces';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        content='fit'
        image={pokemon.imageUrl}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{pokemon.name}</Typography>
        {Object.entries(pokemon).map(([stat, value]) => (
          stat !== 'imageUrl' || stat !== 'name' || stat !== 'id' && (
          <Box key={stat} sx={{ marginBottom: 1 }}>
            <Typography variant="body2">{stat.charAt(0).toUpperCase() + stat.slice(1)}</Typography>
            <LinearProgress variant="determinate" value={value} />
          </Box>)
        ))}
      </CardContent>
    </Card>
  )
}
