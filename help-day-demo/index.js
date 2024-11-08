const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const items = [];

app.get('/', (req, res) => {
    res.json(items);
});

app.post('/add', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json({message: 'Item added', item: newItem});
});


app.delete('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index >= 0 && index < items.length) {
        const deletedItem = items.splice(index, 1);
        res.json({ message: 'Item deleted!', item: deletedItem[0]})
    } else {
        res.status(404).json({ message: 'Invalid index or item not found!'});
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});