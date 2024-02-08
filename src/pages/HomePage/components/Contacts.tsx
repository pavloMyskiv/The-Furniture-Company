/** @format */

import {
  Facebook,
  Google,
  Instagram,
  Pinterest,
  Twitter,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Typography,
} from '@mui/material';

const linksIcon = new Map([
  ['facebook', <Facebook />],
  ['twitter', <Twitter />],
  ['gmail', <Google />],
  ['instagram', <Instagram />],
  ['pinterest', <Pinterest />],
]);
type LinkT = {
  name: string;
  link: string;
};

type ContactsProps = {
  title: string;
  links: LinkT[];
  image: string;
};

const Contacts: React.FC<ContactsProps> = ({ title, links, image }) => {
  return (
    <Container sx={{ background: `center  / cover no-repeat url("${image}")` }}>
      <Typography component="h2" variant="h3" textAlign="center" my={1} p={2}>
        {title}
      </Typography>
      <Box display="flex" justifyContent="center" gap=".5em" py={5}>
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.link}>
              <Button
                variant="contained"
                size="medium"
                sx={{ p: '.5em', minWidth: '0' }}
              >
                {linksIcon.get(link.name)}
              </Button>
            </Link>
          );
        })}
      </Box>
    </Container>
  );
};

export default Contacts;
