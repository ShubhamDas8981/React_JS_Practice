// Require the package
const QRCode = require('qrcode')

// Creating the data
const data = {
	name:"Shubham Das",
	age:20,
	department:"CSE",
	id:"shubhamdas@gmail.com",
	EntryTime: "10:00 AM"
}

// Converting the data into String format
let stringdata = JSON.stringify(data)

QRCode.toFile('qr.png',stringdata,(err)=>{
    if(err) console.log(err)
})
