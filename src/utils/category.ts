import { ICategory, TCategories } from '@/interfaces';

export const getCategoryByNameId = (
  categoryId: string,
  categories: TCategories
): ICategory | undefined => {
  return categories.find((item) => item.nameId === categoryId);
};

