import express from "express"
import axios from "axios"

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async(req, res) => {
    try{
        const response = await axios.get('');
        const blockChainData = response.data;
    } catch(error) {
        console.error('Error fetching data from the blockchain API:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});