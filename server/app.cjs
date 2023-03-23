const express = require("express");
const path = require("path");
const { db, JobApplication } = require("./db/db.cjs");
const app = express();
const cors = require("cors");

module.exports = app;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/api", async (_req, res) => {
	try {
		res.send(await JobApplication.findAll());
	} catch (error) {
		console.error(error);
	}
});
app.post("/api", async (req, res) => {
	const { company, dateApplied, personContacted, responseDate } = req.body;
	try {
		await JobApplication.create({
			company,
			dateApplied,
			personContacted,
			responseDate,
		});
		res.sendStatus(200);
	} catch (error) {
		console.error(error);
	}
});
(async () => {
	await db.authenticate().then(() => {
		console.log("\x1b[36m ~Connected to Database~");
	});
	app.listen(8080, () =>
		console.log(`\x1b[41m ${"listening on 8080"} \x1b[0m `)
	);
})();
