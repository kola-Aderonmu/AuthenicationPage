const express = require('express')

const app= express()

// const port = process.env.PORT || 5000; //geneting  anew port 

const port = 5000;

app.listen(port, () => console.log(`Listening on ${port}`));