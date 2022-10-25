import validateApikey from "@server/utils/apikeyValidator";
const apiKeyMW = (req, res, next)=>{
    const apikey = req.get('apikey') || '';
    if(validateApikey(apikey)){
        return next();
    }
    return res.status(406).json({"error":"APIKEY Not valid!"});
}
export default apiKeyMW;