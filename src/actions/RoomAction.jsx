export const GET_TABLES = 'GET_TABLES';

export const getTables = (list) => {
  return {
    type: GET_TABLES,
    tableList: list,
  };
};
