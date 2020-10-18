const router = require('express').Router();
const Plants = require('./plants-model.js');

// get all plants

router.get('/', (req, res) => {
	Plants.find()
		.then((plants) => {
			res.status(200).json(plants);
		})
		.catch(() => {
			res.status(500).json({
				message: 'Failed to get plants.',
			});
		});
});

// **get plants of a specified user 

router.get('/user/:userid', (req, res) => {
	const { userid } = req.params;
	Plants.findByUser(userid)
		.then((plants) => {
			res.status(200).json(plants);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: err.message });
		});
});

// get a specific plant 

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Plants.findById(id)
		.then(plant => {
			res.status(200).json(plant);
			res.status(404).json({
				message: `Could not find plant with ID: ${id}.`,
			});
		})
		.catch(() => {
			res.status(500).json({
				message: 'Failed to get plant.',
			});
		});
});

// add a plant 

router.post('/user/:userid', (req, res) => {
    const { userid } = req.params
	const newPlant = req.body;
	Plants.add(newPlant, userid)
		.then(plantId => {
            res.status(201).json({plantId})
		})
		.catch(err => {
			res.status(500).json({ message: 'could not add plant', error: err.message });
		});
});

// update a plant with a specified id

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	Plants.findById(id)
		.then((plant) => {
			plant
				? Plants.update(id, changes).then((updated) => {
						res.status(200).json({
							message: `successfully updated plant ID: ${id}`
						});
				  })
				: res.status(404).json({
						errorMessage: 'plant not found',
				  });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				errorMessage: error.message,
			});
		});
});

// delete a plant 

router.delete( '/:id', (req, res) => {
	const { id } = req.params;
    Plants.remove(id)
		.then((deletedPlant) => {
            if(deletedPlant){
            res.status(201).json({ message: `plant ID: ${id} has been removed`, deletedPlant });
            } else {
                console.log(deletedPlant)
                res.status(400).json({message: 'you cannot delete what does not exist'})
            }
		})
		.catch((err) => {
			console.log(err);
			res
				.status(500)
				.json({ message: `cannot remove plant by ID: ${id}`, error: err.message });
		});
});

module.exports = router;