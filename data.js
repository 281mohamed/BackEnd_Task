const fs = require('fs')
const allData = require('./allData')

/////////////////////////////////////////////////////////////////

// Add Data

const addData = (id, fname, lname, age, city) => {
    const allData = loadInfo()

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })
    if(duplicatedData.length == 0){

        allData.push ({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
    
        saveallData (allData)
    } else {
        console.log("ERROR DUPLICATED DATA")
    }
}

const loadInfo = () => {

    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}

const saveallData = (allData) => {
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data.json", saveallDataJson)
}


/////////////////////////////////////////////////////////////////

// Delete Data

const deletedData = (id) => {
    const allData = loadInfo()

    const dataToKeep = allData.filter((obj) => {
        return obj.id != id
    })

    saveallData(dataToKeep)
    console.log("you have successfully deleted the item")
    console.log(dataToKeep)
}


/////////////////////////////////////////////////////////////////

// Read Data

const readData = (id) => {
    const allData = loadInfo()

    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })

    console.log(itemNeeded)

    if(itemNeeded){
        console.log(itemNeeded.id)
    } else {
        console.log("id needed not found")
    }
}


/////////////////////////////////////////////////////////////////

// List Data

const listData = (id) => {
    const allData = loadInfo()

    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname)
    })
}

module.exports = {
    addData,
    deletedData,
    readData,
    listData
}