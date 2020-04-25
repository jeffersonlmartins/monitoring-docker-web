import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  apis: ['./src/app/controllers/*.js'],
  basePath: '/',
  swaggerDefinition: {
    info: {
      description: 'Documentação da API',
      swagger: '2.0',
      title: 'Desafio',
      version: '1.0.0',
    },
  },
};

const specs = swaggerJsDoc(options);
export default specs;
