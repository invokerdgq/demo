const express = require('express');
const app = express();
const path = require('path')
const port = 8888;

app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next) => {
    console.log('404-----------')
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port,() => {
    console.log('服务启动成功-----')
})