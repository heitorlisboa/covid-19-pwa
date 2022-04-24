import { ActionIcon, Box, Tooltip, useMantineColorScheme } from '@mantine/core';

import MoonSvg from '~/icons/MoonSvg';
import SunSvg from '~/icons/SunSvg';

function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const darkTheme = colorScheme === 'dark';

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '1.5rem',
        right: '1rem',
      }}
    >
      <Tooltip
        tooltipId="toggle-color-scheme-tooltip"
        label="Alternar tema"
        position="left"
        transition="rotate-left"
        transitionDuration={300}
      >
        <ActionIcon
          aria-label="Clique para alternar o tema"
          aria-describedby="toggle-color-scheme-tooltip"
          variant="outline"
          onClick={() => toggleColorScheme()}
          p={2}
          sx={{ boxSizing: 'content-box' }}
        >
          {darkTheme ? <SunSvg /> : <MoonSvg />}
        </ActionIcon>
      </Tooltip>
    </Box>
  );
}

export default ColorSchemeToggle;
