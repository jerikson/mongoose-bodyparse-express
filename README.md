# mongoose-bodyparse-express

**Run server**:
```
$ mongod
$ node app.js
$ mongo
$ use example
$ show collections
```

***insert data***:
```
db.users.insert({
  username: 'Rosanna',
  email: 'rosanna@example.com',
  role: 'user'
})
```

***browse /users/ or a specific user by /_id/***
```
/*
  parameters: host:port/users/_id
  {http://127.0.0.1:8080/users/5a3686b21e1fbea3a1d730bd}
  {"_id":"5a3686b21e1fbea3a1d730bd","username":"Rosanna","email":"rosanna@example.com","role":"user"}
*/
```
