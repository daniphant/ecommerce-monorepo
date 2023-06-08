import server from "@infra/apollo/server";
import sequelize from "@infra/sequelize";

// Sync the models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

server
  .listen({
    port: 4000,
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
