/**
 * A fake Promise for class exercises:
 * 1:34:30
 * */ 

function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldReject) {
                reject(`error from server: ${msg}`);
            }
            resolve(`from serveer: ${msg}`);
        }, 3000);
    });
}