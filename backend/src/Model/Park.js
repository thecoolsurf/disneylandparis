export const selectAllParks = (server, db, route) => {
    let sql = `SELECT 
    id, name, slug, description 
    FROM park`;
    server.get(route, (req, res, next) => {
        db.raw(sql)
            .then(([rows, columns]) => {
                const result = rows.map((el) => ({
                    id: el.id,
                    name: el.name,
                    slug: el.slug,
                    description: el.description
                }));
                res.json(result);
            })
    });
    return server;
}
