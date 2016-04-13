import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`sale`)
export default class Create extends Action {
  /**
   * This function can return a promise (or raw POJOs) of data to be looked up
   *
   * @return Object/Promise
   */
  data() {
    const attributes = this.request.body.data.attributes;
    const store_id = this.request.body.data.relationships.branch.data.id;

    const Image = this.app.make(`store`).model(`sale`);
    const image = new Image({
      sale_date: attributes[`sale-date`],
      price: attributes.price,
      store_id
    });

    return image.save();
  }
}
