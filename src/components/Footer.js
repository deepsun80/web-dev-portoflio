import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = {
    footerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100
    },
    footerText: {
        flexGrow: 0.9
    }
}

const Footer = () => {
    return (
        <Box component='footer' sx={styles.footerWrapper}>
            <Typography 
                variant='subtitle2' 
                component='p'
                color='primary'
                sx={styles.footerText}
            >
                &copy; 2022 Sandeep Chandran. All rights reserved.
            </Typography>
            <IconButton 
                color='primary' 
                aria-label='external-link email-link' 
                href='mailto:someone@yoursite.com'
                target='_blank'
                rel='noopener noreferrer'
            >
                <EmailIcon />
            </IconButton>
            <IconButton 
                color='primary' 
                aria-label='external-link Github-link' 
                href='https://github.com/deepsun80'
                target='_blank'
                rel='noopener noreferrer'
            >
                <GitHubIcon />
            </IconButton>
            <IconButton 
                color='primary' 
                aria-label='external-link Linkedin-link' 
                href='https://www.linkedin.com/in/sandeep-chandran/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <LinkedInIcon />
            </IconButton>
        </Box>
    );
}

export default Footer;