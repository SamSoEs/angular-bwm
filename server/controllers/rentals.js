const rentals = [
    {
        _id: '1',
        city: 'New York',
        title: 'Very Nice Place'
    },
    {
        _id: '2',
        city: 'Berlin',
        title: 'Very Nice Place'
    }
];


exports.getRentals = (req, res) => {
    return res.json(rentals)
 }

exports.getRentalById = (req, res) => {
    const {rentalId} = req.params;
   const rental =  rentals.find(r => r._id === rentalId); 
   return res.json(rental)
}

exports.createRental = (req, res) => {
    const rentalData = req.body;
    rentals.push(rentalData);

    return res.json({message: `Rental with id ${rentalData._id} was added!`});
}

exports.deleteRental = (req, res) => {
    const {id} = req.params;
   const rIndex =  rentals.findIndex(r => r._id === id); 
   rentals.splice(rIndex, 1);
   return res.json({message: `Rental with index ${rIndex} was removed!`});
}

exports.updateRental = (req, res) => {
    const {id} = req.params;
    const rentalToUpdate = req.body;
   const rIndex =  rentals.findIndex(r => r._id === id); 
   rentals[rIndex].city = rentalToUpdate.city;
   rentals[rIndex].title = rentalToUpdate.title;
   return res.json({message: `Rental with id ${id} was updated!`});
}