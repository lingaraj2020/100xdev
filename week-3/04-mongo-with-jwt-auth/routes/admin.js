const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET}=require("../config");
const jwt=require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup',async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    //check if user with username already exist
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:'Admin created successfully'
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    let user=await User.find({
        username,
        password
    })
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message:"Incorrect username and password"
        })
    }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    //zod
    const newCourse=await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse); 
    res.json({
        message:'Course created successfully', courseId: newCourse._id
    })
});


router.get('/courses', adminMiddleware, async(req, res) => {
    const response= await Course.find({});
    
    res.json({
        courses: response
    })
});

module.exports = router;