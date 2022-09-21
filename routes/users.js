var express = require('express');

var router = express.Router();

router.use('/',(req,res,next)=>{
    req.headers["content-type"] = 'application/json';
    console.log("Api call received and use for middleware");
    next();
})
router.get('/',(req,res,next)=>{
    res.send("Header Received" + req.headers["content-type"]);
    res.send("get request for users");
    next();
});

router.use('/',(req,res)=>{
    console.log("Api call ended");
})

router.get('/get-user',(req,res)=>{
    res.send("get request for users");
});
router.get('/get-user-detail/:id',(req,res)=>{
    res.send("get request for users"+req.params.id);
});
router.get('/search-by-location/:state/:district',(req,res)=>{
    res.send("get request for users"+req.params.state + req.params.district);
});
//Regular Expression 0 to 9 number
router.get('/search/:key([0-9]{4})',(req,res)=>{
    res.send("Data captured is"+req.params.key);
});

//Regular Expression a to z alphabets
router.get('/search-username/:key([a-zA-Z]{6})',(req,res)=>{
    res.send("Data captured is"+req.params.key);
});

router.get('*',(req,res)=>{
    var resObjnot = {
        statusCode : 200,
        message : "URL Not Found"
    }
    res.send(resObjnot);
})
router.post('/create-user',(req,res)=>{
    res.send("List of users");
});
router.put('/update-user',(req,res)=>{
    res.send("List of update users");
});





module.exports = router;