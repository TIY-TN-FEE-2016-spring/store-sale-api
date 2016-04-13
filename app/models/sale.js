export default {
  tableName: `sales`,

  branch() {
    return this.belongsTo(`store`, `store_id`);
  },
}
