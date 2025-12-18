const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'YouthLink API Documentation',
            version: '1.0.0',
            description: 'API for Ethiopian Student Job & Skill Sharing Platform',
            contact: {
                name: 'Backend Developer',
            },
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Local Development Server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Enter your Firebase token in the format: Bearer <token>'
                },
            },
        },
        // security: [
        //     {
        //         bearerAuth: [],
        //     },
        // ],
    },
    // LOOK HERE: This tells Swagger where your route files are!
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    console.log('📄 Swagger Docs available at http://localhost:5000/api-docs');
};

module.exports = setupSwagger;