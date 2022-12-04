import React, { Fragment } from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import { Container, Stack, Avatar,Typography,Box } from "@mui/material";
import BreadCrumbs from "../components/BreadCrumbs/Index";

export default function Home() {


  return (
    <Fragment>
      <Container>
        <NavigationBar />
        <Stack
          mt={2}
          direction="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
        >
          <BreadCrumbs link="/" name="Anasayfa" />
          <Box component="div" sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:5}}>
            <Avatar
              alt="Remy Sharp"
              src="https://media-exp1.licdn.com/dms/image/D4D35AQGZsmV_DWeitA/profile-framedphoto-shrink_200_200/0/1665330388147?e=1668942000&v=beta&t=lj2xKz8EoRvhErc6HyhMx3rh83D8hvncgzhscqlYwcg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6" >Hoşgeldin, Burak Kılıç</Typography>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
}
