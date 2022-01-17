import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Footer from 'components/Footer';
import { skills } from 'utils';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    sectionWrapper: {
        mt: 15,
        flexGrow: 1
    },
    sectionHeader: {
        fontWeight: 500
    },
    grid: {
        mt: 5
    },
    gridTitle: {
        mt: 2,
        width: 100
    }
}

const Skills = () => {
    return (
        <Container maxWidth='lg' sx={styles.container}>
            <Box component='section' sx={styles.sectionWrapper}>
                <Typography 
                    variant='h3' 
                    component='h2'
                    color='primary'
                    sx={styles.sectionHeader} 
                >
                    Skills
                </Typography>
                <Grid container spacing={2} sx={styles.grid}>
                    {skills?.row1?.map((card, index) => {
                        return (
                            <Grid key={index} item md={3}>
                                <Image 
                                    src={card.icon}
                                    width={100}
                                    height={100}
                                    alt='skills-icon'
                                />
                                <Typography 
                                    variant='button' 
                                    component='p'
                                    color='primary'
                                    align='center'
                                    sx={styles.gridTitle}
                                >
                                    {card.title}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container spacing={2} sx={styles.grid}>
                    {skills?.row2?.map((card, index) => {
                        return (
                            <Grid key={index} item md={3}>
                                <Image 
                                    src={card.icon}
                                    width={100}
                                    height={100}
                                    alt='skills-icon'
                                />
                                <Typography 
                                    variant='button' 
                                    component='p'
                                    color='primary'
                                    align='center'
                                    sx={styles.gridTitle}
                                >
                                    {card.title}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Footer />
        </Container>
    );
}

export default Skills;