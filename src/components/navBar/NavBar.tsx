import { FC, memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import './navbar.scss';

export const NavBar: FC = memo(() => {

    return (
        <Box className="navbarWrapper">
            <Container maxWidth="lg">
                <AppBar position="static">
                    <Toolbar className='toolbarWrap'>
                        <Box className='title'>
                            <Typography>
                                HANDY SERVICES
                            </Typography>
                        </Box>

                        <Box className="content-btn">
                            <Button onClick={() => { }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 13.6833V16.6301C17.5 17.0676 17.1617 17.4306 16.7254 17.4614C16.3609 17.4872 16.0636 17.5 15.8333 17.5C8.4695 17.5 2.5 11.5305 2.5 4.16667C2.5 3.93642 2.51288 3.63906 2.53863 3.27458C2.56948 2.83823 2.93245 2.5 3.36988 2.5H6.31675C6.53065 2.5 6.7098 2.66202 6.73127 2.87483C6.75056 3.06589 6.76848 3.21928 6.78506 3.33502C6.95362 4.51227 7.29794 5.6328 7.79058 6.66919C7.86966 6.83554 7.81809 7.03466 7.66821 7.14172L5.86962 8.4265C6.9646 10.9843 9.01575 13.0354 11.5735 14.1304L12.8559 12.3349C12.9643 12.1832 13.1658 12.1311 13.3342 12.211C14.3705 12.7032 15.4909 13.0472 16.668 13.2153C16.783 13.2318 16.9354 13.2496 17.1252 13.2687C17.338 13.2902 17.5 13.4694 17.5 13.6833Z" fill="white" />
                                </svg>

                                <span className='number'>02037934888</span>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
})