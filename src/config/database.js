module.exports = {
    dialect: 'postgres',
    host: 'localhist',
    username: 'postgres',
    pasword: 'admin',
    define: 'tasklist',
    define: {
        timestamps: true,
        undescored: true,
        undescoredAll: true,
    }
};