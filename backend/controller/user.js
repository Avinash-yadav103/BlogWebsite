async function handleUser(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,email,password
    })
    return 
}