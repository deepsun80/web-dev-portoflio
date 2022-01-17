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
            <IconButton color='primary' aria-label='email link' href='mailto:someone@yoursite.com'>
                <EmailIcon />
            </IconButton>
            <IconButton color='primary' aria-label='Github link' href='https://github.com/deepsun80'>
                <GitHubIcon />
            </IconButton>
            <IconButton color='primary' aria-label='Linkedin link' href='https://www.linkedin.com/in/sandeep-chandran/'>
                <LinkedInIcon />
            </IconButton>
        </Box>
    );
}

export default Footer;