const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const app = express();
app.set('view engine', 'ejs');

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`);
})

// for dynamic page, fetch file only from views folder.
app.get('/profile',(_,res)=>{
    const user={
        name:"Ashish Kumar",
        email:"666kmandal@gmail.com",
        country:"India",
        skills:['php','node','python','javascript','c++','java']
    }
    res.render('profile',{user:user});
})

app.get('/login',(_,res)=>{
    res.render('login')
})

app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/404.html`);
})

app.listen(4545);