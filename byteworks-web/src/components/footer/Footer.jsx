import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box mt={5} textAlign="center">
      <Typography variant="body2" color="text.secondary">
        Connect with us:
      </Typography>
      <Box mt={1}>
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" color="inherit">
          <GitHubIcon style={{ marginRight: 8 }} />
        </Link>
        <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" color="inherit">
          <WhatsAppIcon style={{ marginRight: 8 }} />
        </Link>
        <Link href="mailto:info@example.com" color="inherit">
          <EmailIcon />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;