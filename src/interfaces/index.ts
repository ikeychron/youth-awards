export interface INominated {
  id: string;
  name: string;
  winner: boolean;
  created: number | Date;
  votes: number;
  image: string;
  votesUser: [];
  category: string;
}

export type TOldWinners = INominated[];
export type TNominateds = INominated[];

export interface ICategory {
  id: string;
  name: string;
  nameId: string;
}

export type TCategories = ICategory[];

export interface INominatedByCategory {
  category: ICategory;
  nominateds: TNominateds;
}

export type TNominatedsByCategory = INominatedByCategory[];

export interface TInitialData {
  categories: TCategories;
  nominateds: TNominateds;
  // oldWinners: TOldWinners;
}

