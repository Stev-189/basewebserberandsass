import {Router} from 'express';
const router= Router();

router.get('/',(req,res)=>{res.render('index')});

// router.get('*',(req,res)=>{res.redirect("/")})    

export default router;