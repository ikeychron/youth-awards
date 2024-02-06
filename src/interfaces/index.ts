export interface IOldWinner {
  id: string;
  name: string;
  winner: boolean;
  created: number | Date;
  votes: number;
  image: string;
  votesUser: [];
  category: string;
}

export type TOldWinners = IOldWinner[];

export interface ICategory {
  id: string;
  name: string;
  nameId: string;
}

export type TCategories = ICategory[];

