import { Box, Paper, Text, Title } from '@mantine/core';
import type { FC } from 'react';

import { parseData } from '~/utils';
import type { CountryInfoResponse } from '~/types';

type DataCardsProps = {
  data: CountryInfoResponse;
};

const DataCards: FC<DataCardsProps> = function DataCardsComponent({ data }) {
  return (
    <Box
      component="section"
      aria-label="Dados do país"
      sx={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'stretch',
      }}
    >
      <Paper
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.green[9] : undefined,
          borderColor:
            theme.colorScheme === 'dark'
              ? 'transparent'
              : theme.colors.green[2],
        })}
      >
        <div>
          <Title
            order={2}
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[3]
                  : theme.colors.green[7],
            })}
          >
            Casos recuperados
          </Title>
          <Text
            component="p"
            sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? 'white' : undefined,
              fontSize: '2.5rem',
              lineHeight: 1,
            })}
          >
            {parseData(data.recovered)}
          </Text>
        </div>

        <div>
          <Title
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[3]
                  : theme.colors.gray[7],
            })}
            order={3}
          >
            Em andamento
          </Title>
          <Text
            component="p"
            sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? 'white' : undefined,
              fontSize: '2.5rem',
              lineHeight: 1,
            })}
          >
            {parseData(data.active)}
          </Text>
        </div>
      </Paper>

      <Paper>
        <Title
          order={2}
          sx={(theme) => ({
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.yellow[4]
                : theme.colors.yellow[9],
          })}
        >
          Casos confirmados
        </Title>

        <div>
          <Title
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? undefined : theme.colors.gray[7],
            })}
            order={3}
          >
            Total
          </Title>
          <Text component="p" sx={{ fontSize: '2rem', lineHeight: 1 }}>
            {parseData(data.cases)}
          </Text>
        </div>

        <div>
          <Title
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? undefined : theme.colors.gray[7],
            })}
            order={3}
          >
            Casos hoje
          </Title>
          <Text component="p" sx={{ fontSize: '2rem', lineHeight: 1 }}>
            {parseData(data.todayCases)}
          </Text>
        </div>
      </Paper>

      <Paper>
        <Title
          order={2}
          sx={(theme) => ({
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.red[5]
                : theme.colors.red[7],
          })}
        >
          Óbitos confirmados
        </Title>

        <div>
          <Title
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? undefined : theme.colors.gray[7],
            })}
            order={3}
          >
            Total
          </Title>
          <Text component="p" sx={{ fontSize: '2rem', lineHeight: 1 }}>
            {parseData(data.deaths)}
          </Text>
        </div>

        <div>
          <Title
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? undefined : theme.colors.gray[7],
            })}
            order={3}
          >
            Óbitos hoje
          </Title>
          <Text component="p" sx={{ fontSize: '2rem', lineHeight: 1 }}>
            {parseData(data.todayDeaths)}
          </Text>
        </div>
      </Paper>
    </Box>
  );
};

export default DataCards;
