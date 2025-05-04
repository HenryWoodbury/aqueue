import { Request, Response, NextFunction } from 'express';

import { Rosters } from '../db/models/rosters.model';

// TODO: Convert to async / await
const getRosters = (req: Request, res: Response, next: NextFunction) => {
  Rosters.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error while retrieving rosters from the database.",
    });
  });
};

const getRosterByTeamId = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.teamId)
  Rosters.findAll({
    where: {
      teamId: id.toString(),
//      teamId: id.toString(),
    },    
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error while retrieving rosters from the database.",
    });
  });
};

export { getRosters, getRosterByTeamId };


/*
The `include as children` is based on some code I didn't implement, a set of references
in which a model defines a key that referes back to the model

Employee.hasMany(Employee, {
  as: 'children',
  foreignKey: 'managedBy',
  sourceKey: 'id',
  useJunctionTable: false
});

Employee.belongsTo(Employee, {
  foreignKey: "managedBy",
  targetKey: "id",
});

Employee.findAll({
  include: [{
    model: Employee,
    as: 'children',
    attributes: ['id', 'name', 'email', 'username', 'avatar'],
    required: true
  }],
  attributes: {
    exclude: ['managedBy']
  }
  ...

 an example from the queue project, with two tables:

createdBy: {
  allowNull: false,
  type: DataTypes.INTEGER,
  references: {
    model: 'user',
    key: 'id'
  }
},

user.hasMany(project, { foreignKey: 'createdBy' });
project.belongsTo(user, { foreignKey: 'createdBy' });

const allProjects = await (userType === '0'
  ? project.findAll({
    include: 'user'
  }) 
  : project.findAll({
    include: 'user',
    where: { createdBy: userId },
  })
  ...

*/