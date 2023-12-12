import express from "express"
import axios from "axios"

const app = express();
const port = process.env.PORT || 3000;
const URL = "https://api.blockchain.com/v3/exchange";

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async(req, res) => {
    try{
        const response = await axios.get(URL);
        const blockChainData = JSON.stringify(response);
        res.render("index", {
            blockChainData
        });
    } catch(error) {
        console.error('Error fetching data from the blockchain API:', error.message);
        res.status(500).render('error', {
            errorMessage: "Internal Server Error"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});