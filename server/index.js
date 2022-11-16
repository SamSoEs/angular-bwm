const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
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

app.get('/rentals', (req, res) => {
   return res.json(rentals)
})
app.get('/api/v1/rentals/:rentalId', (req, res) => {
    const {rentalId} = req.params;
   const rental =  rentals.find(r => r._id === rentalId); 
   return res.json(rental)
})



app.listen(PORT, () => {
    console.log('Server is listening on port ', PORT)
})