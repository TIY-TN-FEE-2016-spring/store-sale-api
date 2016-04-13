export default {
  tableName: `sales`,

  store() {
    return this.belongsTo(`store`);
  },
}
