
exports.logout = (request,response)=>{
    request.session.destroy(()=>{
        response.clearCookie("connect.sid")
        response.json({message:"Deconnecter"})
    })
}