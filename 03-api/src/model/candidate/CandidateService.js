import transport from '../../transport';

class CandidateService {
    fetch() {
        return transport.fetch('/candidates.json')
    }
}

export let service = new CandidateService();
