import Sequelize, { DataTypes, InferAttributes, InferCreationAttributes, Model, } from 'sequelize';

import { sequelize } from '../rosters.db';

interface IRosterProperties {
  teamId: string;
  teamName: string;
  ottoneuId: string;
  playerName: string;
  mlbTeam?: string;
  position: string;
  salary: string;
  fgMajorLeagueId?: string;
  fgMinorLeagueId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface IRosterModel extends Model<InferAttributes<IRosterModel>, InferCreationAttributes<IRosterModel>> {
  teamId: string;
  teamName: string;
  ottoneuId: string;
  playerName: string;
  mlbTeam?: string;
  position: string;
  salary: string;
  fgMajorLeagueId?: string;
  fgMinorLeagueId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

const Rosters = sequelize.define<IRosterModel>(
  'rosters', {
    teamId: {
      type: Sequelize.STRING,
    },
    teamName: {
      type: Sequelize.STRING
    },
    ottoneuId: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    playerName: {
      type: Sequelize.STRING
    },
    mlbTeam: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.STRING
    },
    salary: {
      type: Sequelize.STRING
    },
    fgMajorLeagueId: {
      type: Sequelize.STRING
    },
    fgMinorLeagueId: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
});

export { Rosters, IRosterModel, IRosterProperties };

/*
interface IRosterProperties {
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

interface IRosterModel extends Model<InferAttributes<IRosterModel>, InferCreationAttributes<IRosterModel>> {
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

const Rosters = sequelize.define<IRosterModel>(
  'rosters', {
    teamId: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    teamName: {
      type: Sequelize.STRING
    },
    ottoneuId: {
      type: Sequelize.STRING,
    },
    fgMajorLeagueId: {
      type: Sequelize.STRING
    },
    fgMinorLeagueId: {
      type: Sequelize.STRING
    },
    playerName: {
      type: Sequelize.STRING
    },
    mlbTeam: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.STRING
    },
    salary: {
      type: Sequelize.STRING
    },
});
*/