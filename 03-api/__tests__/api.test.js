import axios from 'axios';
let client = axios.create({
    baseURL: 'https://raw.githubusercontent.com/voxuanthinh/learn-tdd-nodejs/master/03-api/api'
});

test('test sample post ', function () {
    return client.get('/candidates.json', {
        'ok': "ok"
    }).then(res => {
        let data = res.data;
        expect(data.code).toBe(0);
    }).catch(err => {
        console.log('err: ', err.message);
    })
})