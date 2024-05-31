
const insert = ({titulo,descripcion,fecha_creacion,categoria,autores_id})=>{
    return db.query(`INSERT INTO posts (titulo, descripcion, fecha_creacion,categoria,autores_id) VALUES (?,?,?,?,?)`, [titulo,descripcion,fecha_creacion,categoria,autores_id]);
}

const select = (id)=>{
    return db.query('select * from posts where id = ?', [id])
}


module.exports = {
    select,
    insert
}