import candidateStore from '../src/model/candidate/CandidateStore'
import CandidateModel from '../src/model/candidate/CandidateModel'

function getMethods(obj) {
  var result = [];
  for (var id in obj) {
      result.push(id)
  }
  return result;
}

test('test sample post ', function () {
    return candidateStore.fetchMyCandidates().then(res => {
        expect(res[0] instanceof CandidateModel).toBe(true);
    })
})