import React from 'react'
import { Card,Grid } from 'semantic-ui-react'

const MovieCard = ({movie}) => (
    <Grid.Column>
    <Card>
        <Card
            image={movie.image}
            header={movie.description}
        />
      
    </Card>
    </Grid.Column>
)

export default MovieCard;
