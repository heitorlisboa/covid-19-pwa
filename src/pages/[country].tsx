import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';
import {
  Anchor,
  Box,
  Container,
  LoadingOverlay,
  MediaQuery,
  Title,
} from '@mantine/core';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import ColorSchemeToggle from '~/components/ColorSchemeToggle';
import CountrySelect from '~/components/CountrySelect';
import DataCards from '~/components/DataCards';
import { COUNTRIES } from '~/constants';
import { getCountryInfoByName } from '~/services/api';
import type { CountryInfoResponse } from '~/types';

type HomeProps = {
  country: string;
  countryInfo: CountryInfoResponse;
};

const Home: NextPage<HomeProps> = function HomePage({ country, countryInfo }) {
  const [loading, setLoading] = useState(false);

  function handleChangeCountry(country: string) {
    setLoading(true);
    Router.push(`/${country}`).then(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <Head>
        <title>Painel Coronavírus &ndash; COVID19</title>
      </Head>

      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
          position: 'relative',
          minHeight: '100vh',
        })}
      >
        <Box component="main">
          <LoadingOverlay visible={loading} />
          <Container
            py="xl"
            sx={{
              position: 'relative',
              display: 'grid',
              gap: '1rem',
              alignContent: 'flex-start',
            }}
          >
            <MediaQuery
              smallerThan="xs"
              styles={{ marginInline: 'auto', width: 'min-content' }}
            >
              <MediaQuery smallerThan="sm" styles={{ textAlign: 'center' }}>
                <Title order={1}>Painel Coronavírus</Title>
              </MediaQuery>
            </MediaQuery>

            <ColorSchemeToggle />

            <CountrySelect value={country} onChange={handleChangeCountry} />

            <DataCards data={countryInfo} />
          </Container>
        </Box>

        <Box component="footer">
          <Container py="xl">
            <Anchor
              href="https://www.flaticon.com/free-icons/virus"
              target="_blank"
              rel="noreferrer"
            >
              Favicon criado por Freepik - Flaticon
            </Anchor>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = COUNTRIES.map(([english]) => ({
    params: { country: english },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (
    !(
      context.params &&
      context.params.country &&
      typeof context.params.country === 'string'
    )
  ) {
    return { notFound: true };
  }

  const { country } = context.params;

  const countryInfo = await getCountryInfoByName(country);

  return {
    props: {
      country,
      countryInfo,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default Home;
