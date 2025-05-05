exports.up = (pgm) => {
  pgm.createTable("patients", {
    id: "id",
    user_id: {
      type: "integer",
      notNull: true,
      references: '"users"',
      onDelete: "CASCADE",
    },
    name: {
      type: "varchar(100)",
      notNull: true,
    },
    age: {
      type: "int",
    },
  });
};
