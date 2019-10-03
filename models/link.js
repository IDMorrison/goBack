'use strict';
module.exports = (sequelize, DataTypes) => {
  const link = sequelize.define('link', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    url: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER
  }, {});
  
  link.associate = function(models) {
    // associations can be defined here
    link.belongsTo(models.categoria, {
      foreignKey: 'idCategoria'
    })
  };
  return link;
};