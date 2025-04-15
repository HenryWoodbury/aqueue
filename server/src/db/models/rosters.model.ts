import Sequelize, { DataTypes, InferAttributes, InferCreationAttributes, Model, } from 'sequelize';

import { sequelize } from '../rosters.db';

interface IRosterProperties {
  "ottoneu ID": string;
  Name: string;
  "MLB Team"?: string;
  "Position(s)": string;
  Salary: string;
  "FG MajorLeagueID": string;
  "FG MinorLeagueID": string;
  TeamID: string;
  "Team Name": string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface IRosterModel extends Model<InferAttributes<IRosterModel>, InferCreationAttributes<IRosterModel>> {
  "ottoneu ID": string;
  Name: string;
  "MLB Team"?: string;
  "Position(s)": string;
  Salary: string;
  "FG MajorLeagueID": string;
  "FG MinorLeagueID": string;
  TeamID: string;
  "Team Name": string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

// TODO: Map CSV to more optimal Database Field Names
// Currently: TeamID,"Team Name","ottoneu ID","FG MajorLeagueID","FG MinorLeagueID",Name,"MLB Team",Position(s), Salary

const Rosters = sequelize.define<IRosterModel>(
  'rosters', {
    "ottoneu ID": {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING
    },
    "MLB Team": {
      type: Sequelize.STRING
    },
    "Position(s)": {
      type: Sequelize.STRING
    },
    Salary: {
      type: Sequelize.STRING
    },
    "FG MajorLeagueID": {
      type: Sequelize.STRING
    },
    "FG MinorLeagueID": {
      type: Sequelize.STRING
    },
    TeamID: {
      type: Sequelize.STRING
    },
    "Team Name": {
      type: Sequelize.STRING
    }
/*
  TODO: Add createdAt: new Date(), updatedAt: new Date(), to `bulkCreate`
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
*/
});

export { Rosters, IRosterModel, IRosterProperties };