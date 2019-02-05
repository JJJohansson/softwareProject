import Category from '../models/Category';

// normally we would actually fetch data from an external resource
// but today we hard code
export default function fetchTestCategories() {
  let categories = [];

  categories.push(new Category(1, "coding", 1337));
  categories.push(new Category(2, "coding666", 1337));
  categories.push(new Category(3, "design", 1337));
  categories.push(new Category(4, "test", 1337));
  categories.push(new Category(5, "review", 1337));

  return categories;
}
