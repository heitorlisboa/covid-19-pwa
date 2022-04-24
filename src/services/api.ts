import axios from 'axios';

import type { CountryInfoResponse } from '~/types';

const api = axios.create({
  baseURL: 'https://coronavirus-19-api.herokuapp.com/countries',
});

export async function getCountryInfoByName(
  country: string
): Promise<CountryInfoResponse> {
  const { data } = await api.get(`/${country}`);
  return data;
}
