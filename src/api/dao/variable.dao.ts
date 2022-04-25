export interface IVariableDao {
    create(data);
    getRelationType();
    getStartAtLimit(startAt, limit);
}
