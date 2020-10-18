const Database = require('./db')

Database.then(async (db) => {
    await db.run (
        `
        INSERT INTO orphanages(
                     name ,
                     lat,
                     lng, 
                     whatsapp, 
                     instructions, 
                     description, 
                     images, opening_hours,
                      open_on_weekends) 
            VALUES (
                   "lar das mina",
                   "-27.222633", 
                   "-49.6455874", 
                   "9999999", 
                   "só pros pia ranhento", 
                   "venha só se gostar da piazada",
                   "image1", "8h as 18h", 
                   "1") 
        `
    )

   const selected = await db.all('SELECT * FROM orphanages')
   console.log(selected)
})