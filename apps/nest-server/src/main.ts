import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

dotenv.config();

const configService = new ConfigService();
const serverPort = configService.get('serverPort');
const originRoute = configService.get('originRoute');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: [originRoute], credentials: true });
  app.use(helmet());
  app.use(helmet.frameguard({ action: 'deny' }));
  await app.listen(serverPort);
}
bootstrap();
