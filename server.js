const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/timestamp/:date_string?', (req, res) => {
    const dateString = req.params.date_string;
    let date;

    if (dateString) {
        if (!isNaN(dateString)) {
            date = new Date(parseInt(dateString));
        } else {
            date = new Date(dateString);
        }
    } else {
        date = new Date();
    }

    const response = {
        unix: date.getTime(),
        utc: date.toUTCString()
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
