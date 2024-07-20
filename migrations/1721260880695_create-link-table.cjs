exports.up = (pgm) => {
  pgm.createTable("links", {
    id: "id",
    user_id: {
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
    public: {
      type: "boolean",
      notNull: true,
      default: false,
    },
  });
};
