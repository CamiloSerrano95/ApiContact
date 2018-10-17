const InformationPerson = require('../models/informationPerson');
const { send, json } = require('micro');

function getAll(req, res) {
    const find = InformationPerson.find({});

    find.then(data => {
        send(res, 200, data);
    })
}

async function Save(req, res) {
    const { name, lastName, email, telephone } = await json(req);

    if (!name || !lastName || !email || !telephone) return send(res, 400, {success: false, message: 'Por favor rellene los campos'})

    const data = new InformationPerson({
        name,
        lastName,
        email,
        telephone
    })

    const save = data.save();
    save.then(() => send(res, 200, {success: true, message: 'Informacion guardada correctamente'}, data))
}

module.exports = {
    getAll,
    save
}