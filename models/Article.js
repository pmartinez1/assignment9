"use strict";

module.exports = function(sequelize, DataTypes){
	var Article = sequelize.define("Article", {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		authorUrl: DataTypes.STRING,
		category: DataTypes.STRING,
		body: DataTypes.STRING,
		publishedOn: DataTypes.DATETIME
	})
	return Article;
};
