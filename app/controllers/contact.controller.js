
exports.create = async (req, res, next) => {
    res.send({ message: "create handler"});
}

exports.findAll = async (req, res, next) => {
    res.send({ message: "findAll handler"});
}

exports.findOne = async (req, res, next) => {
    res.send({ message: "findOne handler"});
}

exports.update = async (req, res, next) => {
    res.send({ message: "update handler"});
}

exports.delete = async (req, res, next) => {
    res.send({ message: "delete handler"});
}

exports.deleteAll = async (req, res, next) => {
    res.send({ message: "deleteAll handler"});
}

exports.findAllFavorite = async (req, res, next) => {
    res.send({ message: "findAllFavorite handler"});
}
