function notify (value) {
    alert("NOTIFICATION:" + value);
}

function log (value) {
    console.log(value);
}

export default {
    notify: notify,
    log: log
}