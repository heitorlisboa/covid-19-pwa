export type CountryInfoResponse = {
  country: string;
  cases: number | null;
  todayCases: number | null;
  deaths: number | null;
  todayDeaths: number | null;
  recovered: number | null;
  active: number | null;
  critical: number | null;
  casesPerOneMillion: number | null;
  deathsPerOneMillion: number | null;
  totalTests: number | null;
  testsPerOneMillion: number | null;
};
