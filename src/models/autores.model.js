
const insert = ({nombre,email,imagen})=>{
    return db.query(`INSERT INTO autores (nombre, email,imagen) VALUES (?,?,?)`, [nombre,email,imagen]);
}

const select = (id)=>{
    return db.query('select * from autores where id = ?', [id])
}


module.exports = {
    select,
    insert
}