//conexión a la bd

import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/ford-db')
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))