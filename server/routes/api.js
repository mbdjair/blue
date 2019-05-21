const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const dbHost = 'mongodb://database/blue-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const enterpriseSchema = new mongoose.Schema({
	name: String
});

// create mongoose model
const Enterprise = mongoose.model('Enterprise', enterpriseSchema);

router.route('/')
	.get((req, res) => {
		Enterprise.find({}, (err, enterprise) => {
			if (err) res.status(500).send(error)

			res.status(200).json(enterprise);
		});
	})
	.post((req, res) => {
		let enterprise = new Enterprise({
			name: req.body.name
		});
	
		enterprise.save(error => {
			if (error) res.status(500).send(error);
	
			res.status(201).json({
				message: 'Enterprise created successfully'
			});
		});
	});


module.exports = router;
