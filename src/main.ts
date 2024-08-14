import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS setting
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,OPTIONS',
    credentials: true,
  });

  // 기본 라우트 /api 로 설정
  app.setGlobalPrefix('api');
  await app.listen(5000);
}
bootstrap();
