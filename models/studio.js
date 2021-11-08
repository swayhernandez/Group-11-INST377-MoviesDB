export default (database, DataTypes) => {
    const studio = database.define('studio', {
        studio.id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
        },
        studio: {
            type: DataTypes.STRONG 
        }
    });
    return studio;
}