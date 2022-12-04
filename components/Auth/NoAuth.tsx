import React, { Fragment } from "react";
import { Container, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function NoAuth() {
  return (
    <Fragment>
      <Container>
        <Stack
          mt={15}
          direction="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>
            Bu ekranı görüntülemek için giriş yapınız!
          </Typography>
          <Link to="/giris-yap">
            <Button color="error" variant="text">
              Giriş Yap
            </Button>
          </Link>
        </Stack>
      </Container>
    </Fragment>
  );
}
