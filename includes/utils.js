function data_sp() {
  return `DATETIME(CURRENT_TIMESTAMP(), "America/Sao_Paulo")`;
}
module.exports = { data_sp };