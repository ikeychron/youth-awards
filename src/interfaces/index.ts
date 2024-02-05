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

