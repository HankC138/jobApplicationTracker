const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/jobApplicationTracker", {
	logging: false,
});
const JobApplication = db.define("application", {
	company: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	dateApplied: {
		type: Sequelize.DATEONLY,
		allowNull: false,
	},
	personContacted: {
		type: Sequelize.STRING,
	},
	responseDate: {
		type: Sequelize.DATEONLY,
	},
});
module.exports = { db, JobApplication };
