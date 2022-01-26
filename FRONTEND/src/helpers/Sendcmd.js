const SendCMD = async(cmd, setRes) => {
    const buffenc = await Buffer.from(cmd, 'utf-8')
    const cmdenc = await buffenc.toString('base64')
    await fetch(`http://192.168.16.19:80/${cmdenc}`, {method: 'POST'}) //CANVIAR IP SEMPRE 
    .then(async (response) => await response.json())
    .then(async (data) => {await setRes(data)}); //data=response.json
}

export {SendCMD};
