export abstract class BaseModel {

  fill(data: Object) {
    Object.keys(data).forEach(key => {
      if (data[key]) {
        this[key] = data[key];
      }
    });
    return this;
  }

}
