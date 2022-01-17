import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { 
    ReactIcon,
    ReduxIcon,
    HTMLIcon,
    SassIcon,
    WebpackIcon 
} from 'react-webtech-animated-icons';

const styles = {
    container: {
        height: '100%',
    },
    sectionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    logo: {
        display: 'flex',
        mt: 5,
        flexGrow: 0.5
    },
    sectionHeader: {
        fontWeight: 500,
        mb: 3
    },
    iconGrid: {
        svg: {
            color: '#455a64 !important',
            g: {
                color: '#455a64 !important'
            }
        }
    },
    iconGridInner: {
        display: 'flex',
        justifyContent: 'center'
    }
}

const Hero = () => {
    const [iconSize, setIconSize] = useState(null);

    useEffect(() => {
        window.innerWidth <= 425 ? setIconSize(48) : setIconSize(76);
    });

    return (
        <Container maxWidth='lg' style={styles.container}>
            <Box component='section' sx={styles.sectionWrapper}>
                <Box sx={styles.logo}>
                    <DeveloperModeIcon color='info' />
                    <Typography 
                        variant='subtitle2' 
                        component='h1'
                        color='primary'
                    >
                        Sandeep Chandran Portfolio
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Typography 
                            variant='h3' 
                            component='h2'
                            color='primary'
                            sx={styles.sectionHeader} 
                        >
                            About Me
                        </Typography>
                        <Typography 
                            variant='p' 
                            component='p'
                            color='primary'
                        >
                            I am a front end developer with over 5 years of experience in the React.js
                            ecosystem. I have worked at early level startups, mid size teams, and large
                            multinational companies, and my experience ranges from idea stage to enterprise 
                            product development.
                        </Typography>
                    </Grid>
                    <Grid item md={6} sx={styles.iconGrid}>
                        <Grid container spacing={2}>
                            <Grid item md={6} sx={styles.iconGridInner}>
                                <ReactIcon firstColor='#0288d1' secondColor='#455a64' size={iconSize} duration={1} />
                            </Grid>
                            <Grid item md={6} sx={styles.iconGridInner}>
                                <ReduxIcon firstColor='#0288d1' secondColor='#455a64' size={iconSize} duration={1} />
                            </Grid>
                            <Grid item md={12} sx={styles.iconGridInner}>
                                <HTMLIcon firstColor='#0288d1' secondColor='#fff' size={iconSize} duration={1} />
                            </Grid>
                            <Grid item md={6} sx={styles.iconGridInner}>
                                <SassIcon firstColor='#0288d1' secondColor='#455a64' size={iconSize} duration={1} />
                            </Grid>
                            <Grid item md={6} sx={styles.iconGridInner}>
                                <WebpackIcon firstColor='#0288d1' secondColor='#455a64' size={iconSize} duration={1} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Hero;