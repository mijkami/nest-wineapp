import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as helmet from 'helmet';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.setGlobalPrefix('api');

  app.use(helmet());

  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'public'));
  

  const options = new DocumentBuilder()
    .setTitle('WineApp REST API')
    .setDescription('API for our WineApp application')
    .setVersion('1.0')
    // .setBasePath('v1')
    .addTag('WineApp')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
