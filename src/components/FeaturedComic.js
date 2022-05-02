import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedComic(props) {
  const { comic } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={'/comics/' + comic.id}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {comic.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {comic.description}
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={comic.thumbnail}
            alt={comic.thumbnailLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedComic.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // thumbnail: PropTypes.string,
    // thumbnailLabel: PropTypes.string,
  }).isRequired,
};

export default FeaturedComic;