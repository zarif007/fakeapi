export const nodejs = `1  const axios = require("axios");
2
3  const options = {
4    method: 'POST',
5    url: 'https://similarityapi.com/api/v1/similarity',
6    params: {
7      text1: 'First text',
8      text2: 'Second text'
9    },
10    headers: {
11      'Authorization': 'YOUR_API_KEY',
12    }
13  };
14   
15  axios.request(options).then(function (response) {
16    console.log(response.data);
17  }).catch(function (error) {
18    console.error(error);
19  });`

export const python = `import requests

url = 'https://similarityapi.com/api/v1/similarity'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'

headers = {
    'Authorization': api_key
}

payload = {
    'text1': text1,
    'text2': text2
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`