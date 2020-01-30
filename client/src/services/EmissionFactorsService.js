const baseURL = 'https://afternoon-island-02594.herokuapp.com/api/heroku_fkzjbmrc/emissionFactors';

export default{
  getEmissionFactors(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  post(payload){
    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
}
