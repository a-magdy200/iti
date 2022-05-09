part 1

1 - mongoimport --db ITI --collection zips\ --drop --file ~/Downloads/zips.json

2 - db.zips.find({"state":"NY"})

3 - db.zips.find({"pop":{$gte:1000}},{_id:1})

4 - db.zips.update({},{$set: {"check":false}},{upsert:false,multi:true})

db.zips.update({"state":"VA","state":"PA"},{$set: {"check":true}},{upsert:false,multi:true})

5 - db.zips.find({'loc.1':{$gte:55},'loc.1':{$lte:65}},{pop:1,_id:0}).pretty()

6 - db.zips.createIndex({state:1})

7 - db.zips.updateMany({state:{$nin:["AK","NY"]}},{$inc:{pop:0.2}})

8 - db.zips.updateOne({'loc.0':{$lt:-71},states:{$nin:["MA"]},pop:{$lt:200}},{$set:{pop:0}})






part 2

1. db.zips.aggregate({$match:{$or:[{state:"KA"},{state:"PA"}]}},{$group:{_id:"$state",sum:{$sum:"$pop"}}})

2. db.zips.aggregate({$match:{state:{$nin:["PA","KA"]}}},{$limit:5})

3. db.zips.aggregate({$match:{state:"AK",'loc.1':{$gte:55},'loc.1':{$lte:65}}})

4. db.zips.aggregate({$match:{$or:[{state:"AK"},{state:"PA"}]}},{$sort:{pop:1}},{$skip:7})

5. db.zips.aggregate({$group:{_id:"$state",smallest:{$min:"$pop"},greatest:{$max:"$pop"}}},{$out:"mypop"})

6. db.zips.aggregate({$group:{_id:"$state",average:{$avg:"$pop"}}})

7. db.zips.aggregate({$sort:{state:1,city:1}})

8. db.zips.aggregate({$sort:{state:-1,city:-1}})

9. db.zips.aggregate({$match:{pop:{$gt:25000}}},{$match:{$or:[{state:"CA"},{state:"NY"}]}},{$group:{_id:"$state",average:{$avg:"$pop"}}})

10. db.zips.aggregate({$group:{_id:"$state",average:{$avg:"$pop"}}})


