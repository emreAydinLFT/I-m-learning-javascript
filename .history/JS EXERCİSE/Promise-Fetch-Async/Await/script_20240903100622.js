const test = callback => {
    setTimeout(() => {
        callback();
    }, timeout);
}