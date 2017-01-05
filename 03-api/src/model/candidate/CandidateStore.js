import {
    action,
    observable,
    asFlat
} from 'mobx';

import {
    serialize,
    deserialize,
    createModelSchema,
    createSimpleSchema,
    object,
    list
} from 'serializr';

import {
    service
} from './CandidateService';

 import CandidateModel from './CandidateModel'
export class CandidateStore {

    service;
    constructor(config) {
        this.setService(config.service);
    }

    setService(service) {
        this.service = service;
    }

    fetchMyCandidates() {
        return this.service.fetch().then(response => {
            let listCandidate = response.data.data;
            return deserialize(CandidateModel, listCandidate.candidates);
        });
    }
}

let store = new CandidateStore({
    service: service
});
export default store;