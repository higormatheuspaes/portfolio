import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DowloadIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/styledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]:{
      paddingTop: "30px",
      height: "115vh"
    },
    [theme.breakpoints.up('md')]:{
      paddingTop: "0"
    }
  }))

  const StyledImg = styled("img")(() => ({
    width: "75%",
    maxHeight: "30%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width="200%" top="-100" right="0">
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Higor M. Paes</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'am a Software Engineer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("dowload")}>
                      <DowloadIcon />
                      <Typography>
                        Dowload CV
                      </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={()=> console.log("contact")}>
                    <EmailIcon />
                    <Typography>
                      Contact Me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

      </StyledHero >
    </>
  )
}

export default Hero