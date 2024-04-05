import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box textAlign="center" 
    sx={{ mt: 5, bgcolor: "#000B25" }}
     >
      <Typography variant="body2" color="#fff">
        Connect with us:
      </Typography>
      <Box mt={1}>
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" color="#fff">
          <GitHubIcon style={{ marginRight: 8 }} />
        </Link>
        <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" color="#fff">
          <WhatsAppIcon style={{ marginRight: 8 }} />
        </Link>
        <Link href="mailto:info@example.com" color="#fff">
          <EmailIcon />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;