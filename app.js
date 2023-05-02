const yargs = require('yargs')
const data = require("./data")

/////////////////////////////////////////////////////////////////

// Add Data

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "this is the first name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the last name",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.addData(x.id, x.fname, x.lname, x.age, x.city)
    }
})


/////////////////////////////////////////////////////////////////

// Delete Data

yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {
        data.deletedData(x.id)
    }
})

/////////////////////////////////////////////////////////////////

// Read Data

yargs.command({
    command: "read",
    describe: "to read an item",
    builder: {
        id: {
            describe: "this is id desc in read command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.readData(x.id)
    }
})


/////////////////////////////////////////////////////////////////

// list Data

yargs.command({
    command: "list",
    describe: "to list data",
    handler: () => {
        data.listData()
    }
})

yargs.parse()