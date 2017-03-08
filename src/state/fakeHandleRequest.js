export default (obj, onResolve, onReject) => {
    return new Promise((resolve, reject) => {
        if(obj.hasOwnProperty('token')) {
            if(obj.token === '111111') {
                return resolve();
            }
            return reject();
        }
        else if(obj.hasOwnProperty('username') && obj.hasOwnProperty('password')) {
            if(obj.username === 'username' && obj.password === 'pass123') {
                return resolve();
            }
            return reject();
        }
    }).then(onResolve, onReject);
}