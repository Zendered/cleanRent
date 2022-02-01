export class Category {
  static validate(category:string):boolean {
    if (!category) {
      return false;
    }

    if (category.length > 100) {
      return false;
    }

    const categoryRegex = /^[-!#$%&'+/0-9=?A-Z^_a-z`{|}~]+$/;
    if (!categoryRegex.test(category)) {
      return false;
    }

    return true;
  }
}
