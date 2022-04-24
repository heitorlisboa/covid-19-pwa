import '../styles/reset.css';
import {
  type ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  type MantineProviderProps,
} from '@mantine/core';
import type { AppProps } from 'next/app';
import { useLayoutEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

function MyApp({ Component, pageProps }: AppProps) {
  // Color scheme
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  function toggleColorScheme(value?: ColorScheme) {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie(null, 'color-scheme', nextColorScheme);
  }

  useLayoutEffect(() => {
    const { 'color-scheme': colorSchemeCookie } = parseCookies() as {
      'color-scheme': ColorScheme | undefined;
    };
    if (colorSchemeCookie) setColorScheme(colorSchemeCookie);
  }, []);

  // Mantine provider theme, styles and default props
  const mantineProviderProps: Omit<MantineProviderProps, 'children'> = {
    theme: {
      colorScheme,
      headings: {
        sizes: {
          h2: { fontSize: '1.25em' },
          h3: { fontSize: '1em' },
        },
      },
    },
    styles: {
      Title: (theme) => ({
        root: {
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.gray[0]
              : theme.colors.dark[7],
        },
      }),
      Paper: (theme) => ({
        root: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
          display: 'grid',
          gap: '1rem',
          flex: '1 1 auto',
          alignContent: 'flex-start',
        },
      }),
    },
    defaultProps: {
      Paper: {
        p: 16,
        radius: 'sm',
        withBorder: true,
      },
    },
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider {...mantineProviderProps}>
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
