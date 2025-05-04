export interface IRoster {
  teamId: string;
  teamName: string;
  ottoneuId: string;
  playerName: string;
  fgMajorLeagueId?: string;
  fgMinorLeagueId?: string;
  mlbTeam?: string;
  position: string;
  salary: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IPlayer {
  ottoneuId: string;
  playerName?: string;
  salary?: string;
}
