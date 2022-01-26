const strcmd = "type index.js"     

const buffenc = Buffer.from(strcmd, 'utf-8')
const base64 = buffenc.toString('base64')

console.log(base64)

