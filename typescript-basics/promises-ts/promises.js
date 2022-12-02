function step1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = 1;
                console.log('completed step 1');
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
}
function step2(step) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = step + 1;
                console.log('completed step 2');
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
}
function step3(step) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = step + 1;
                console.log('completed step 3');
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
}
step1().then(function (result) { return step2(result); })
    .then(function (result) { return step3(result); })
    .then(function () { console.log('completed'); })["catch"](function () { console.log('error'); });
