import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AskController } from './ask/ask.controller';
import { ServicesModule } from 'src/services/services.module';

@Module({
  controllers: [AuthController, AskController],
  // exports: [AuthController, AskController],
  imports: [ServicesModule],
})
export class RoutesModule {}
