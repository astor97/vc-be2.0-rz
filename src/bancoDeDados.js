const sequence = {
    _id: 1,
    get id() { return this._id++ }
}
const territories = {}

function salvarTerritorie(territorie) { //Define o Id seguinte para o territorie ou utiliza um ID definido caso tenha
    if (!territorie.id) territorie.id = sequence.id
    territories[territorie.id] = territorie
    return territorie
}

function getTerritorie(id) {
    return territories[id] || {}
}

function getTerritories() {
    return Object.values(territories)
}

function excluirTerritorie(id) {
    const territorie = territories[id]
    delete territories[id]
    return {erro: false}
}

module.exports = { salvarTerritorie, getTerritorie, getTerritories, excluirTerritorie }