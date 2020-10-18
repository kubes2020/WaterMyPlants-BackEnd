const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./users-model'); 

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Users.findById(id)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: err.message });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	const rounds = process.env.HASH_ROUNDS || 8;
	const hash = bcrypt.hashSync(changes.password, rounds);
    changes.password = hash;
    
	Users.findById(id)
		.then((user) => {
			user
				? Users.update(id, changes).then((updatedUser) => {
						res.status(200).json({
							message: `successfully updated user ID: ${id}`,
							updatedUser,
						});
				  })
				: res.status(404).json({ message: 'no user found' });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: err.message });
		});
});

module.exports = router;