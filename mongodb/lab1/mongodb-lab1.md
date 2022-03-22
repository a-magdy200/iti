1- mongosh

show dbs

2- use iti

3- db.students.insertOne({"name": "Ahmed", "age": 26})

4- show dbs

``Added new database called iti``

5- db.students.insertMany([{"name": "Ahmed1", "age": 25, location: "Alexandria"},{"name": "Ahmed2", "age": 26, files: [1,2,3]},{"name": "Ahmed3", "age": 27},{"name": "Ahmed4", "age": 28},{"name": "Ahmed5", "age": 29},{"name": "Ahmed6", "age": 21},{"name": "Ahmed7", "age": 22},{"name": "Ahmed8", "age": 23},{"name": "Ahmed9", "age": 24},{"name": "Ahmed10", "age": 30}])

6- db.students.find({"name": "Ahmed"})

7- db.students.find({"age": 25})

8- db.students.find({"age": {$gt: 25}})

9- db.students.deleteOne({_id: ObjectId("623a038a391261d0800fdfae")})

10- db.students.find().pretty()

11- db.students.countDocuments()


part 2

1- use ems

2- db.faculty.insertMany([{ "name":"Krish", "age":35,"gender":"M","exp":10,subjects:["DS","C","OS"],"type":"Full Time","qualification":"M.Tech" },{ "name":"Manoj", "age":38,"gender":"M","exp":12,subjects:["JAVA","DBMS"],"type":"Full Time", "qualification":"Ph.D"},{ "name":"Anush", "age":32,"gender":"F","exp":8,subjects:["C","CPP"],"type":"Part Time","qualification":"M.Tech" },{ "name":"Suresh", "age":40,"gender":"M","exp":9,subjects:["JAVA","DBMS","NETWORKING"],"type":"Full Time", "qualification":"Ph.D"},{ "name":"Rajesh", "age":35,"gender":"M","exp":7,subjects:["DS","C","OS"],"type":"Full Time","qualification":"M.Tech" },{ "name":"Mani", "age":38,"gender":"F","exp":10,subjects:["JAVA","DBMS","OS"],"type":"Part Time", "qualification":"Ph.D"},{ "name":"Sivani", "age":32,"gender":"F","exp":8,subjects:["C","CPP","MATHS"],"type":"Part Time","qualification":"M.Tech" },{ "name":"Nagesh", "age":39,"gender":"M","exp":11,subjects:["JAVA","DBMS","NETWORKING"],"type":"Full Time", "qualification":"Ph.D"},{ "name":"Nagesh", "age":35,"gender":"M","exp":9,subjects:["JAVA",".Net","NETWORKING"],"type":"Full Time", "qualification":"Ph.D"},{ "name":"Latha", "age":40,"gender":"F","exp":13,subjects:["MATHS"],"type":"Full Time", "qualification":"Ph.D"}])

3- db.faculty.find()

4- db.faculty.countDocuments()

5- db.faculty.find({"qualification":"Ph.D"})

6- db.faculty.find({"exp": {$gt: 8, $lt: 12}})

7- db.faculty.find({$or: [{"subjects": "MATH"}, {"subjects": "NETWORKING"}]})

8- db.faculty.find({$or: [{"subjects": "JAVA"}, {"type": "Part Time"}]})

9- db.faculty.insertMany([{ "name":"Suresh Babu", "age":55, "gender":"M", "exp":25, subjects:["MATHS","DE"], "type":"Full Time", "qualification":"Ph.D"} ])

10- db.faculty.updateMany({}, {$inc: {"age": 1, "exp": 1}})

11- db.faculty.updateOne({"name": "Sivani"}, {$set: {"qualification": "Ph.D", "type": "Full Time"}})

12- db.faculty.updateMany({"subjects": "MATHS"}, {$push: {"subjects": "PSK"}})

13- db.faculty.deleteMany({"age": {$gt: 55}})

14- db.faculty.find({}, {"name": 1, "qualification": 1, "_id": 0})

15- db.faculty.find({}, {"name": 1, "qualification": 1, "_id": 0, "exp": 1}).sort({"exp":1})