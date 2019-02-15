const { db, Plot, Vegetable, Gardener  }= require('./model');

console.log(db.Plot)

db.sync({ force: true})
    .then( ()=> {
        console.log('DB connected')
    })
    .then( () => {
        console.log('create')
        return Vegetable.create({
            name: 'carrot',
            color: 'orangeish',
            planted_on: new Date(),
        })
    })
    .catch( err => {
        console.error(err)
    })
    .finally( () => {
        console.log('end')
        // console.log(db);
        db.close()
    })

//plot, vegetables, gardeners,       planting


