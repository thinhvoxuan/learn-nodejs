import axios from 'axios';
let client = axios.create({
    baseURL: 'https://raw.githubusercontent.com/thinhvoxuan/learn-tdd-nodejs/master/01-jest/api'
});

test('test sample post ', function () {
    expect(1+1).toBe(2)
})