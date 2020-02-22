const request = require('./request');

const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://github.com/blade-sensei/test',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
];

request.multiFetchUrl(urls).then(contents => {
    return contents;
})