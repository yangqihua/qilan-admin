import axios from 'axios';
import Message from 'iview/src/components/message';

const TIMESTAMP = Math.round(new Date().getTime() / 1000)

class HTTPUtil {

    static async request(url, params = {}, isLoading = false, method = 'get', headers = {}) {
        if (method === 'get') {
            params = {
                params: params
            };
        }
        const loading = isLoading && Message.loading('正在加载中...', 0);
        let response = await axios[method](url, params).catch((error) => {
            // 2.Http 类型异常
            let response = error.response
            if (response) {
                Message.error(response.status + ': ' + response.statusText)
            } else {
                Message.error('网络异常')
            }
        })
        loading && loading();
        let result = response ? response.data : {}
        // 3.业务类型异常
        if (result.hasOwnProperty('code') && result['code'] !== 200) {
            Message.error(result['message'])
            return null
        }
        return result;
    }

    static async get(params = {}, url, isLoading = true) {
        return await HTTPUtil.request(url, params, isLoading, 'get')
    }

    static async put(params = {}, url, isLoading = true) {
        return await HTTPUtil.request(url, params, isLoading, 'put')
    }

    static async post(params = {}, url, isLoading = true) {
        return await HTTPUtil.request(url, params, isLoading, 'post')
    }

    static async delete(params = {}, url, isLoading = true) {
        return await HTTPUtil.request(url, params, isLoading, 'delete')
    }
}

export default HTTPUtil
