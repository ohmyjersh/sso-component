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


export const getComponentStylesAsync = (referrer) => {
        if(referrer === 'custom') {
            return {
                button:'color:#800080; background-color:#800080;',
                input:'color:#800080; background-color:#800080;',
                label:'color:#800080; background-color:#800080;',
                card:'color:#800080; background-color:#800080;',
                cardHeader:'color:#800080; background-color:#800080;',
                cardFooter:'color:#800080; background-color:#800080;',
                cardContent:'color:#800080; background-color:#800080;',
                link:'color:#800080; background-color:#800080;',
                error:'color:#800080; background-color:#800080;',
                container:'color:#800080; background-color:#ffffff;'
            };
        }
        return {};
}