import { FC, useContext } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { steps } from '../../utils/dataSet';

import './searchedResult.scss';
import { Container, LinearProgress } from '@mui/material';
import SearchContext from '../../components/context/context';

export const SearchedResult: FC = () => {

    const { searchObj } = useContext(SearchContext)

    return (
        <>
            <NavBar />
            <Box className='loader-linear'>
                <LinearProgress variant="determinate" value={50} />
            </Box>
            <Box className='banner-section'>
                <div className='title-tag'>
                    <Typography variant="h3" gutterBottom>
                        Searched Result of
                        <span>
                            '{searchObj?.title}'
                        </span>
                    </Typography>
                </div>

                <Box className='time-wrap'>
                    Search Results
                </Box>

                <div className='custom-wrapper'>
                </div>
            </Box>

            <Container maxWidth="lg">
                <Box className="service-section">

                    <Typography variant="h4" gutterBottom>
                        get £300 in credits to use for 10 different services!
                    </Typography>

                    <Typography className='subtitle-text' variant="subtitle1" gutterBottom>
                        Join 3000+ Fantastic Club members and access  premium benefits for only 89/year
                    </Typography>

                    <Box className="card-wrapper">
                        {steps.map((ele, index) =>
                            <Card key={`step-${index}`}>
                                <Box>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Box className="serviceIcon">
                                            {ele.icon}
                                        </Box>
                                        <Box className="contentTag">
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {ele.text}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Card>
                        )}


                    </Box>

                </Box>
            </Container>
        </>
    )
}