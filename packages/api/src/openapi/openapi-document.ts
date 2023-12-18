import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export default (app: INestApplication) => {
  const options: SwaggerDocumentOptions = {
    // deepScanRoutes: true,
  };
  const config = new DocumentBuilder()
    .setTitle('myHome-cloud users API')
    .setDescription('API')
    .setVersion('1.0')
    .addTag('openapi-example')
    .build();
  return SwaggerModule.createDocument(app, config, options);
};
