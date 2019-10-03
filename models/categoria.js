'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoria = sequelize.define('categoria', {
    nombre: DataTypes.STRING
  }, {});
  categoria.associate = function(models) {
    // associations can be defined here
     categoria.hasMany(models.link, {
       as: 'links',
       foreignKey: 'idCategoria'
      })
  };
  return categoria;
};