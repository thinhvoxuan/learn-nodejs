import axios from 'axios';
let client = axios.create({
    baseURL: 'https://raw.githubusercontent.com/voxuanthinh/learn-tdd-nodejs/master/01-jest/api'
});

test('test sample post ', function () {
    return client.post('/candidates.json', {
        'ok': "ok"
    }).then(res => {
        let data = res.data;
        expect(data.ok).toBe("ok");
    }).catch(err => {
        console.log('err: ', err);
    })
})