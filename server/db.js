const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: false,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://dynamic:dynamicusr@dynamicusr.cfskf.mongodb.net/Data");
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
