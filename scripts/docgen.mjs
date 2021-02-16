import fs from "fs";
import swaggerJSDoc from "swagger-jsdoc";

// Generating OpenAPI specification
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PINUS Server",
      version: "1.0.0",
      description: "The backend service for PINUS website",
    },
  },
  apis: ["./src/**/*.ts"],
};
const spec = swaggerJSDoc(options);

// Writing to apidoc.js
const content = `const apidoc = ${JSON.stringify(spec, null, 2)}`;
fs.writeFileSync("./pages/apidoc.js", content);

console.log("API Documentation generated");
