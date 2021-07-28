import { Fragment } from "react";
import { GetStaticProps } from "next";
import {
  Typography,
  Button,
  TextField,
  Container,
  Box,
} from "@material-ui/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../src/components/seo/seo";

const Home = () => {
  const { t, i18n } = useTranslation();
  const { asPath, locales } = useRouter();

  return (
    <Fragment>
      <Seo
        title="Page Title"
        description="Page Description"
        keywords="keywords"
      />

      <Container
        maxWidth="xs"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography variant="h1" color="primary" gutterBottom>
            {t("common:hello")}
          </Typography>
          <TextField label={t("common:label")} />
          <Box height={10} />
          {locales
            ?.filter((lng) => lng !== i18n.language)
            .map((lng) => (
              <Link href={asPath} key={lng} locale={lng}>
                <a>
                  <Button variant="contained" color="primary">
                    {lng}
                  </Button>
                </a>
              </Link>
            ))}
        </div>
      </Container>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default Home;
