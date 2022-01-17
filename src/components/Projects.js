import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PreviewIcon from '@mui/icons-material/Preview';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { cards } from 'utils';

const styles = {
    sectionWrapper: {
        mt: 25
    },
    sectionHeader: {
        fontWeight: 500,
        mb: 3
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardHeader: {
        fontWeight: 600,
        mb: 3
    },
    cardContent: {
        flexGrow: 1
    }
}

const Projects = () => {
    return (
        <Container maxWidth='lg'>
            <Box component='section' sx={styles.sectionWrapper}>
                <Typography 
                    variant='h3' 
                    component='h2'
                    color='secondary'
                    sx={styles.sectionHeader} 
                >
                    Projects
                </Typography>
                <Grid container spacing={2}>
                    {cards?.map((card, index) => {
                        return (
                            <Grid item md={4}>
                                <Card key={index} raised sx={styles.card}>
                                    <CardContent sx={styles.cardContent}>
                                        <Typography 
                                            variant='button' 
                                            component='h3'
                                            color='primary'
                                            sx={styles.cardHeader}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Typography 
                                            variant='p' 
                                            component='p'
                                            color='primary'
                                        >
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button 
                                            size='small' 
                                            endIcon={<PreviewIcon />}
                                            variant='outlined'
                                            color='info'
                                            aria-label='external-link'
                                            href={card.previewLink}
                                        >
                                            Live Preview
                                        </Button>
                                        <div style={{ flexGrow: 1 }} />
                                        <IconButton aria-label='external-link' href={card.githubLink}>
                                            <GitHubIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Container>
    );
}

export default Projects;