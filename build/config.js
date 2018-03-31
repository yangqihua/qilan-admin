import Env from './env';


let baseUrl = 'http://yangqihua.com/qilan-server/public/index.php/admin'
// baseUrl = 'http://139.159.243.8:8001'
// if (process.env.NODE_ENV === 'development') {
// }

let config = {
    env: Env,
    baseUrl: baseUrl
};
export default config;
