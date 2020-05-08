import comp_info from '../data/computer-info.json'
import server_info from '../data/server-info.json'

export const turnOn = (callback) => {

    // console.log(comp_info);

    fetch(`http://${server_info.ip}:${server_info.port}/api/toggle/turn-on`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mac: comp_info.mac
        }),
    }).then((res) => {
        if(!!res) console.log(`Sent turn on request for ${comp_info.mac}, got status ${res.status}`);
        callback(`Sent turn on request for ${comp_info.mac}, got status ${res.status}`);
    }).catch((err) => {
        console.log("Send Error: " + err);
        callback(`Sent turn on request for ${comp_info.mac}, got erro ${err}`);
    });
    
}

export const turnOff = () => {
    
}
