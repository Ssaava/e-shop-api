const extractFormData = (body, fields)=>{
    // const fields = ['name', 'price'];
    let dataObject = {};
    let dataArray = []

    const formData = body.split("&");
    const data = formData.map((d)=>{
        return(d.split("="));
    })

    // create an object of the data
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < 2; j++){
            if(j===1){
                dataObject[fields[i]] = decodeURIComponent(data[i][j].replace(/\+/g, ' '));
            }
        }
    }

    dataArray.push(dataObject)
    return dataArray
}
module.exports = extractFormData