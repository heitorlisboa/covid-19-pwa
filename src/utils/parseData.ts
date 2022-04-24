function parseData(value: number | null) {
  if (value !== null) return value.toLocaleString('pt-br');

  return 'Dado indisponível';
}

export { parseData };
