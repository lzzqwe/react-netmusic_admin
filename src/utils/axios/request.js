import axios from './index'

export const requestPOST = (path, payload, header) => {
    return new Promise((resolve, reject) => {
        axios({
            url: path,
            method: 'post',
            headers: { 'Content-Type': header ? header : 'application/x-www-form-urlencoded' },
            data: payload
        }).then(res => {
            if (res.status == 1 || res.status == 5) {
                resolve(res);

            }
        })
    })
}
export const requestGET = (path, payload) => {

    return new Promise((resolve, reject) => {
        axios.get(path, {
            params: payload
        }).then(res => {
            resolve(res);
        })

    })
}