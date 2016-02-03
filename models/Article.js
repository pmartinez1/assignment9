"use strict";

module.exports = function(sequelize, DataTypes){
	var Article = sequelize.define("Article", {
		name: DataTypes.STRING,
		age: DataTypes.INTEGER
	})
	return Article;
};
