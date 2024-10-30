// const { require } = require("yargs");

const fs = require("fs")
// const { Module } = require("module")

const loadData = () => 
{
    try {
        const loadedData = fs.readFileSync("data.json").toString()
        return JSON.parse(loadedData)
    }
    catch { return [] }
}

const saveData = (allData) =>
{
     const savedData = JSON.stringify(allData)
     fs.writeFileSync("data.json" , savedData)
}

const DeleteUser = (id) => 
{
    if(id != null)
    {
        const allData = loadData()
        const keptusers = allData.filter( users => {
          return users.id !== id
        })
      
        saveData(keptusers)
        console.log("Users are deleted")
    }
    else saveData([])
 
}


const addUser = (id , fname , lname , age , city) =>
{
    const allData = loadData()
   
    const duplicates = allData.filter(user => 
        {
            return user.id === id
        })
        console.log(duplicates)
        console.log(duplicates.length)
   if(duplicates.length == 0)
   {
    allData.push(
        {
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
        })
        saveData(allData)
        console.log("User saved Sucessfully ")
        allData.forEach(user => {
            console.log(user.id , user.fname)            
        })

   }
   else { console.log("ID is already in use") }
}

const readData = (id) => {

    const allData = loadData()
    console.log(id)
    if(id != null)
    {
        const itemNeeded = allData.find((obj) => {
            return  obj.id == id 
         })
     
         // console.log(itemNeeded)
         if (itemNeeded) {
           console.log(itemNeeded)
         }else {
           console.log("ID NEEDED NOT FOUND")
         }
    }

    else {
        console.log(allData)
    }
    
}


module.exports = 
{
    addUser ,
    DeleteUser,
    readData
}