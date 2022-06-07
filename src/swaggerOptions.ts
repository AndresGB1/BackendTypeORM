export const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Purchase Order",
      version: "1.0.0",
      description: "API Information",
      contact: {
        name: "Andres",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local Server",
        }
      ],
    },
  },
  apis: ["./src/routes/*.routes.ts"],
};
