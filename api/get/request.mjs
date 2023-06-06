//search
router.get('/patient', (req, res) => {
    db('patient').select(['patient.first_name', 'patient.last_name', 'patient.id'])
    .where((builder) => {
        if(req.query['patient.first_name'] && req.query['patient.last_name']){
             builder.whereILike('patient.first_name', `${req.query['patient.first_name']}%`)
             .andWhereILike('patient.last_name', `${req.query['patient.last_name']}%`);
        }
        else if(req.query['patient.last_name']) builder.whereILike('patient.last_name', `${req.query['patient.last_name']}%`);
        else if(req.query['patient.first_name']) builder.whereILike('patient.first_name', `${req.query['patient.first_name']}%`);
    })
    // .orderBy('patient.created_at', 'asc')
    .returning()
    .then((data) => {
        res.json(data);
    })
})