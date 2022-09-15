const { exec } = require('child_process');

exec('npm run test', (err, stdout, stderr) => {
    if (err) {
        console.log(err.message);
    }
    if (stderr) {
        console.log(stderr);
        // return;
    }
    console.log(stdout);
});