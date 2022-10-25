const apiKeys = (process.env.API_KEYS || '').split('|');

const validateApikey = (apikey:string) =>
{
    return apiKeys.includes(apikey);
}
export default validateApikey;