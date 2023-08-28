module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    define: 'tasklist',
    define: {
        timestamps: true,
        undescored: true,
        undescoredAll: true,
    }
};