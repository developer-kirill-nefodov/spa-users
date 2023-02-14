## Starting

### A working example can be viewed immediately [Click to try](https://developer-kirill-nefodov.github.io/spa-users/)

Git clone project
```
git clone https://github.com/developer-kirill-nefodov/spa-users.git

cd ./spa-users/
```

Don't forget to fill in the empty fields
```sh
cp .env.exemple .env
```

Run project
```sh
npm install

npm run build

npm start
```

## Description
* List users: http://localhost:3000/users
* Create user: http://localhost:3000/create
* Edit user: `http://localhost:3000/edit/:id`


* Users API: https://gorest.co.in

## Technologies:
* react
* react-router-dom
* antd
* axios
* react-toastify
