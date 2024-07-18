exports.up = (pgm) => {
  pgm.createTable("links", {
    id: "id",
    owner_id: {
      type: "integer",
      notNull: true,
      references: '"users"',
      onDelete: "CASCADE",
    },
    title: {
      type: "varchar(100)",
      notNull: true,
    },
    url: {
      type: "varchar(255)",
      notNull: true,
    },
    status: {
      type: "varchar(30)",
      notNull: true,
      default: "active",
    },
  });
};
