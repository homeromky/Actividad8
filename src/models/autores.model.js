
const insert = ({nombre,email,imagen},{path})=>{
    return db.query(`INSERT INTO autores (nombre, email,imagen) VALUES (?,?,?)`, [nombre,email,path]);
}

const select = (id)=>{
    return db.query('select * from autores where id = ?', [id])
}

const selectByAutor = (id)=>{
    return db.query('select * from posts where autores_id = ?', [id])
}


module.exports = {
    select,
    insert,
    selectByAutor
}