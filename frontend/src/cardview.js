import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Nav from './nav';
import { useNavigate } from 'react-router-dom';

export default function Cardview() {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };

  const cards = [
    { image: 'jp.png', title: 'Journal Publication', path: '/tvisvak' },
    { image: 'cpap.png', title: 'Conference Publications And Presentations', path: '' },
    { image: 'was.png', title: 'Workshop And Seminar', path: '' },
    { image: 'nptel.png', title: 'NPTEL Certification', path: '' },
    { image: 'fgt.png', title: 'Faculty Guest Talk', path: '' },
    { image: 'pit.png', title: 'Participation In TASTE', path: '/tmoule' },
    { image: 'econtent.png', title: 'E-Content(video lecture)', path: '' },
    { image: 'vtii.png', title: 'Visit To Industries,Institution', path: '' },
    { image: 'smpfr.png', title: 'Seed Money Proposal For Research', path: '' },
    { image: 'award.png', title: 'Award At National,International Level', path: '' },
    { image: 'psfg.png', title: 'Proposals Submission For Grants', path: '' },
    { image: 'bca.jpg', title: 'Books,Chapters Authorship', path: '' },
    { image: 'cact.png', title: 'Consultancy And Corporate Training', path: '' },
    { image: 'ptpg.png', title: 'Patents Filled,Published,Granted', path: '' },
    { image: 'cawmsi.png', title: 'Collaborative Activities With MOU Signed Industries', path: '/tdharun' },
    { image: 'library.png', title: 'Visits To The Library', path: '' },
    { image: 'smpp.png', title: 'Students Motivation For Paper Presentation', path: '/tvetri' },
    { image: 'psm.png', title: 'Professional Society Membership', path: '' },
    { image: 'sfwig.png', title: 'Students field work, Internship guidance', path: '/tselva' },
    // Add more cards as needed
  ];

  return (
    <div style={{ paddingTop: '150px'}} >
      <Nav />
      <div className="container">
        <div className='row justify-content-between m-3'>
          {cards.map((card, index) => (
            <div key={index} className='col-lg-4 col-md-6 col-sm-12 mb-3'>
              <Card sx={{ maxWidth: 345, boxShadow: '0px 0px 5px 0px black' }} onClick={() => redirectTo(card.path)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt="card image"
                  />
                  <CardContent sx={{ height: 100 }}>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Namdhinggo, sans-serif' }}>
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
