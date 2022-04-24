import { MediaQuery, Select } from '@mantine/core';
import type { FC } from 'react';

import { COUNTRIES } from '~/constants';

type CountrySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const CountrySelect: FC<CountrySelectProps> = function CountrySelectComponent({
  value,
  onChange,
}) {
  return (
    <MediaQuery
      smallerThan="sm"
      styles={{
        width: '100%',
        maxWidth: 'unset',
        marginInline: 'auto',
        textAlign: 'center',
      }}
    >
      <Select
        label="Selecione um país para ver seus dados"
        nothingFound="País não encontrado (verifique se não falta algum acento)"
        value={value}
        searchable
        data={COUNTRIES.map(([english, portuguese]) => ({
          value: english,
          label: portuguese,
        }))}
        onChange={onChange}
        sx={{ maxWidth: '20rem' }}
      />
    </MediaQuery>
  );
};

export default CountrySelect;
