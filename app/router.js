import Router from 'candycane/dist/http/router';

export default class AppRouter extends Router {
  /**
   * Here is the function that will allow you to register the routes for your application.
   * Use the `resource`, `get`, `post`, `put`, and `delete` methods to describe your API
   *
   * @return undefined
   */
  registerRoutes() {
    this.get(`/`, `version`);

    this.get(`/branches`, `stores/index`);
    this.post(`/branches`, `stores/create`);
    this.get(`/branches/:id`, `stores/find`);
    this.put(`/branches/:id`, `stores/update`);
    this.patch(`/branches/:id`, `stores/update`);
    this.delete(`/branches/:id`, `stores/destroy`);

    this.get(`/sales`, `sales/index`);
    this.post(`/sales`, `sales/create`);
    this.get(`/sales/:id`, `sales/find`);
    this.put(`/sales/:id`, `sales/update`);
    this.patch(`/sales/:id`, `sales/update`);
    this.delete(`/sales/:id`, `sales/destroy`);
  }
}
