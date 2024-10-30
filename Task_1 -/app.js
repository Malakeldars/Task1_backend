// const { require } = require("yargs");

const yargs = require("yargs");
const Users = require("./data.js");
const { type } = require("os");
yargs.command (
    {
        command : "add",
        descripe: "To add user information",
        builder: { 
            id : {
                describe:"User ID",
                demandOption:true,
                type: "Number"
            },
            fname : {
                describe:"User's First Name",
                demandOption:true,
                type: "String"
            },
            lname : {
                describe:"User's Last Name",
                demandOption:true,
                type: "String"
            },
            age : {
                describe:"User age",
                demandOption:true,
                type: "Number"
            },
            city : {
                describe:"User city",
                demandOption:true,
                type: "String"
            },

        },
        handler : (x) => {
            Users.addUser(x.id,x.fname,x.lname,x.age,x.city)
        }

        }
)

yargs.command (
    {
        command:"delete" ,
        describe: "Delete User info Using ID",
        Builder : 
        {
            ID: {
                describe : "User ID" ,
                demandOption : false ,
                Type: "String"
            }
        },
        handler : (x) => 
        {
            Users.DeleteUser(x.id)
        }

    }
)

yargs.command (
    {
        command:"read",
        describe:"read user data",
        Builder: {
            id:{
                describe: "user id" ,
                demandOption : false ,
                type: "Number"
            }
           
        },
        handler: (x) => 
        {
            Users.readData(x.id)
        }
    }
)
yargs.parse()
//  console.log(yargs.argv)