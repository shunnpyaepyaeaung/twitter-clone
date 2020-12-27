exports.requireLogin = (req,res,next)=>{
  console.log(req.session.user)
  if(req.session && req.session.user){
    return next();
  }else{
    return res.redirect('/login');
  }
}