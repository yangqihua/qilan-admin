/**
 * Created by yangqihua on 2018/2/25.
 */

import http from '../http'

const login = (params) => http.post(params, 'system/login/index', false)

export {
    login,
}