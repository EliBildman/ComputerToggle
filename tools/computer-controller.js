// import wol from 'wakeonlan'
import info from '../data/computer-info.json'


export const turnOn = () => {
    wol(info.mac).then(() => {console.log('wol sent')});
}

export const turnOff = () => {
    
}
