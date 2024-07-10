import React from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Collapse, Box, Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo1 from './main-logo.png';
import { Carousel } from 'react-bootstrap';
import slide1 from './SLIDE1.png';
import image2 from './clg-1.jpg';
import image3 from './clg-1.jpg';
import dharun from './dharun.jpg';
import vetri from './vetri.jpg';
import visvak from './visvak.jpg';
import moulee from './moulee.jpg'
import Nav from './nav';
import slide2 from './slide2.png'
import slide3 from './slide3.png'
import slide4 from './slide4.png'


function Home() {
  return (
    <div style={{ paddingTop: '150px' }} >
      <Nav />
      <div style={{ backgroundColor: '#c5c5c5' }}>
        <Carousel style={{ width: '100%', margin: 'auto' }} interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
              style={{ maxHeight: '500px', objectFit: 'cover', height: 'auto' }}
            />
            <Carousel.Caption>
              <h3>1st</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
              style={{ maxHeight: '500px', objectFit: 'fil', height: 'auto' }}
            />
            <Carousel.Caption>
              <h3>2nd</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" n
              src={slide3}
              alt="third slide"
              style={{ maxHeight: '500px', objectFit: 'fil', height: 'auto' }}
            />
            <Carousel.Caption>
              <h3>3rd</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" n
              src={slide4}
              alt="Fourth slide"
              style={{ maxHeight: '500px', objectFit: 'fill', height: 'auto' }}
            />
            <Carousel.Caption>
              <h3>4th</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container maxWidth="md" style={{ paddingTop: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={12} co>
              <Card style={{ display: 'flex', marginBottom: '20px' }} >
                <CardMedia
                  component="img"
                  image={dharun}
                  alt="dharun"
                  style={{ width: '100px', height: '122px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      DHARUN PRAKASH J A
                    </Typography>
                    <Typography variant="body2" color="text.secondary">AI&DS                 </Typography>
                  </CardContent>
                </div>
              </Card>
              <Card style={{ display: 'flex', marginBottom: '20px' }}>
                <CardMedia
                  component="img"
                  image={vetri}
                  alt="vetri"
                  style={{ width: '100px', height: '122px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      VETRIKANTH G
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI&DS                  </Typography>
                  </CardContent>
                </div>
              </Card>
              <Card style={{ display: 'flex', marginBottom: '20px' }}>
                <CardMedia
                  component="img"
                  image={visvak}
                  alt="visvak"
                  style={{ width: '100px', height: '122px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      VISVAK SENA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI&DS                  </Typography>
                  </CardContent>
                </div>
              </Card>

              <Card style={{ display: 'flex', marginBottom: '20px' }}>
                <CardMedia
                  component="img"
                  image={moulee}
                  alt="moulee"
                  style={{ width: '100px', height: '122px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      MOULESWAR   
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI&DS                  </Typography>
                  </CardContent>
                </div>
              </Card>   
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
