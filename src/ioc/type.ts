const TYPES = {
  ModelsProvider: Symbol.for("models-provider"), // dynomodb
  // variable
  VariableModel: Symbol.for("variable-model"),
  VariableDao: Symbol.for("variable-dao"),
  VariableService: Symbol.for("variable-service"),

  // type
  TypeModel: Symbol.for("type-model"),
  TypeDao: Symbol.for("type-dao"),
  TypeService: Symbol.for("type-service"),
};

export { TYPES };
