const TYPES = {
  Warrior: Symbol.for("Warrior"),
  Weapon: Symbol.for("Weapon"),
  ThrowableWeapon: Symbol.for("ThrowableWeapon"),
  Warriors: Symbol.for("Warriors"),
  WeaponWarriors: Symbol.for("WeaponWarriors"),
  Monsters: Symbol.for("Monsters"),
  PVPMode: Symbol.for("PvPMode"),
  ModelsProvider: Symbol.for("models-provider"), // dynomodb
  ProductsModel: Symbol.for("products-model"),
  ProductDao: Symbol.for("products-dao"),
  ProductService: Symbol.for("product-service"),

  // variable
  VariableModel: Symbol.for("variable-model"),
  VariableDao: Symbol.for("variable-dao"),
  VariableService: Symbol.for("variable-service"),
};

export { TYPES };
