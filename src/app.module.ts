import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/ProductController';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
