const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async (db) =>  {
    await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vunerabilidade social.",
        whatsapp: "8982392839",
        images: [
            "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horario de visitas: Das 18h às 8h",
        open_on_weekends: "0"})
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="3"')
    console.log(orphanage)
    //console.log(await db.run("DELETE FROM orphanages"))
})