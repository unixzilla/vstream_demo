import axios from 'axios'

let token = null
const baseUrl = 'http://localhost:3001/videos'
const sampleData = [
    {
      "id": 1,
      "author": "Unix",
      "content": "Video mp4",
      "likes": 1,
      "thumb": "https://testassets.dashif.org/img/if.png",
      "url": "http://clappr.io/highline.mp4",
      "date": "2022-01-02T17:30:31.098Z",
      "important": true
    },
    {
      "id": 2,
      "author": "Unix",
      "content": "Video on Demand HLS",
      "likes": 1,
      "thumb": "https://testassets.dashif.org/img/if.png",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
      "date": "2022-01-02T17:30:31.098Z",
      "important": false
    },
    {
      "id": 3,
      "author": "Unix",
      "content": "Video On Demand DASH",
      "likes": 1,
      "thumb": "https://testassets.dashif.org/img/if.png",
      "url": "https://dash.akamaized.net/dashif/ad-insertion-testcase1/batch5/real/b/ad-insertion-testcase1.mpd",
      "date": "2022-01-02T17:30:31.098Z",
      "important": true
    },
    {
      "id": 4,
      "author": "Unix",
      "content": "Live Stream HLS",
      "likes": 1,
      "thumb": "https://testassets.dashif.org/img/if.png",
      "url": "https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",
      "date": "2022-01-02T17:30:31.098Z",
      "important": true
    }
]
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  /*
   const params={"modulename": "video","functionname":"get_video","functionparam":[]}

  const config = {
    headers:{ Authorization: token },
  }
  const request = axios.post(baseUrl,params,config)
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
  */
  return new Promise((resolve, reject) => {
    resolve(sampleData)
  })
    //const response = axios.post(baseUrl,evidencer,config)
    //return response.data
}

export default {getAll,setToken}
