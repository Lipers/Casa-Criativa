const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?)`



    const values = [
        
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",

        `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ab iure architecto voluptate quossimilique? Officia quia 
        facilis culpa quisquam corrupti. Optio dolor accusantium 
        necessitatibusminima temporibus inventore fuga. Culpa, deleniti?` ,

        "http://rocketseat.com.br"
    ]

    db.run(query, values, function(err){
        if (err) throw err

    })

    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    //     if (err) throw err

    //     console.log(`DELETEI`, this)
    // })
    // db.all(`SELECT * FROM ideas`, function(err, rows) {
    //     if (err) console.log(err)

    //     console.log(rows)
    // })
})

module.exports = db