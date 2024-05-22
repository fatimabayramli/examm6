const mongoose = require("mongoose") // new

mongoose
	.connect("mongodb+srv://fatima17bayramli:fatimabyramli@cluster10.msgn93p.mongodb.net/")
	.then(() => {
		console.log("my db server");
		})
    .catch((error)=>{
        console.log(error)
    })

	//fatimabyramli 