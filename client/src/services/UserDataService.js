const baseURL = 'https://afternoon-island-02594.herokuapp.com/api/heroku_fkzjbmrc/users'

export default{
  getUserData(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postFootprint(payload){
    return fetch(baseURL,{
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    }
  }
