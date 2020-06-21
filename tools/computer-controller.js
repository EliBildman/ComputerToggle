import comp_info from '../data/computer-info.json'
import server_info from '../data/server-info.json'

export const turnOn = (callback) => {

    // console.log(comp_info);

    fetch(`http://${server_info.ip}:${server_info.port}/api/toggle/desktop`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: "on"
        }),
    }).then((res) => {
        if(!!res) {
            callback(`Sent turn on signal, got status ${res.status}`);
        }
    }).catch((err) => {
        callback(`Sent turn on signal, got error ${err}`);
    });
    
}

export const turnOff = (callback) => {
    
    fetch(`http://${server_info.ip}:${server_info.port}/api/toggle/desktop`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: "off"
        }),
    }).then((res) => {
        if(!!res) callback(`Sent turn off signal, got status ${res.status}`);
    }).catch((err) => {
        callback(`Sent turn off signal, got error ${err}`);
    });

}
