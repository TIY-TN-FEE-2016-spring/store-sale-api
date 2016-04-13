import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`store`)
export default class Destroy extends Action {
  /**
   * This function can return a promise (or raw POJOs) of data to be looked up
   *
   * @return Object/Promise
   */
  data() {
    const Image = this.app.make(`store`).model(`store`);

    return Image.where({id: this.request.params.id}).fetch()
      .then((image) => {
        if (image) {
          return image.destroy();
        }
      });
  }
}
