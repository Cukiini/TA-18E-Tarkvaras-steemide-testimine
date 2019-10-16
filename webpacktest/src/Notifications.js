function notify (value){
   alert("NOTIFICATION." + value);
}

export function log(value) {
    console.log(value);

}


export default {
    notify: notify,
    log: log
}
