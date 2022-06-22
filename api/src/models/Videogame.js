const { DataTypes, DATEONLY } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Image:{
      type: DataTypes.TEXT
    },
    description:{
      type: DataTypes.TEXT,
      allowNull:false,
    },
    launch_date:{
      type:DATEONLY
    },
    rating:{
      type: DataTypes.FLOAT
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }
  },
  {timestamps:false});
};
