import {
    pingRequset
} from '../src/transport';

test('response ok', async() => {
    let res = await pingRequset();
    let data = res.data;
    expect(data.response).toBe("ok");
})