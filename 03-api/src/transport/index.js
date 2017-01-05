import axios from 'axios'
class RestTransport {
  client = null
  constructor(config) {
    this.client = axios.create(config || {
      baseURL: serverInfo.API_URL,
    })
  }

  fetch(url) {
    return this.client.get(url)
  }

  create(url, data, config = {}) {
    return this.client.post(url, data, config)
  }

  get(url, data) {
    return this.fetch(url)
  }

  update(url, data, config = {}) {
    return this.client.put(url, data, config)
  }

  delete(url) {
    return this.client.delete(url)
  }

  rootUrl() {
    return this.client.defaults.baseURL
  }

  upload2S3(file, uploadUrl, formInputs, key, config = {}) {
    const data = new FormData()
    data.append('Content-Type', formInputs['Content-Type'])
    data.append('acl', formInputs.acl)
    data.append('X-amz-algorithm', formInputs['X-amz-algorithm'])
    data.append('X-amz-credential', formInputs['X-amz-credential'])
    data.append('X-amz-signature', formInputs['X-amz-signature'])
    data.append('X-amz-date', formInputs['X-amz-date'])
    data.append('success_action_status', formInputs.success_action_status)
    data.append('policy', formInputs.policy)
    data.append('key', key)
    data.append('file', file, file.name)
    return axios.post(uploadUrl, data, config)
  }

  upload(url, data, config = {}) {
    return axios.post(url, data, config);
  }
}

const restTransport = new RestTransport({
    baseURL: "https://raw.githubusercontent.com/voxuanthinh/learn-tdd-nodejs/master/03-api/api"
})

export {RestTransport}
export default restTransport
