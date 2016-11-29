import {
    pingRequset
} from '../src/transport';

it('response ok', async() => {
    let res = await pingRequset();
    let data = res.data;
    expect(data.response).toBe("ok");
})

describe('response not async ok', () => {
    it('call async', () => {
        return pingRequset().then(res => {
            let data = res.data;
            expect(data.response).toBe("ok");
        })
    })
})