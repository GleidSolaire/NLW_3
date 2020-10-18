

function saveOrphanage (db , orphanage) {

   return db.run (
        `
        INSERT INTO orphanages(
                     
                     lat,
                     lng, 
                     name,
                     description, 
                     whatsapp, 
                     instructions, 
                     images, 
                     opening_hours,
                     open_on_weekends) 
            VALUES (
                   
                   "${orphanage.lat}", 
                   "${orphanage.lng}", 
                   "${orphanage.name}",
                   "${orphanage.description}",
                   "${orphanage.whatsapp}", 
                   "${orphanage.instructions}", 
                   "${orphanage.images}", 
                   "${orphanage.opening_hours}",
                   "${orphanage.open_on_weekends}");
        `
    )



}

module.exports = saveOrphanage
