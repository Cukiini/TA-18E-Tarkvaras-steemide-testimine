export default notify(message)
{
    alert("NOTICE:" + message);
}

export function yell(message)
{
    alert("dog:"+ message);
}

export default{
    notify: notify,
    yell: yell
}
