export default {
  tableName: `stores`,

  sales() {
    return this.hasMany(`sale`);
  },
}
