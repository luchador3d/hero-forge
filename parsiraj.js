const parsedJSON = require('./hf_data/data.json')
const request = require("request")
const fs = require("fs")
const mkdirp = require('mkdirp')

const remote = 'https://www.heroforge.com/static/'
const local = './static/'

for (var i = 0; i < parsedJSON.configs.pose.length; i++) {
  const name = parsedJSON.configs.pose[i].name
  const url = `herobundles/config/hf_config_hiRez_${name}_thumb.png`

  request(`${remote}${url}`, {
    encoding: 'binary'
  }, (error, response, body) => {
    console.log(name)
    fs.writeFile(`${local}${url}`, body, 'binary', (err) => {})
  })

}
