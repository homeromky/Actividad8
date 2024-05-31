
const insert = ({titulo,descripcion,fecha_creacion,categoria,autores_id})=>{
    return db.query(`INSERT INTO posts (titulo, descripcion, fecha_creacion,categoria,autores_id) VALUES (?,?,?,?,?)`, [titulo,descripcion,fecha_creacion,categoria,autores_id]);
}

const select = (id)=>{
    return db.query('select * from posts as t1 inner join autores as t2 on t1.autores_id = t2.id where t1.id = ?', [id])
}


module.exports = {
    select,
    insert

}