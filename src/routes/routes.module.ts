import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AskController } from './ask/ask.controller';

@Module({
  controllers: [AuthController, AskController],
  exports: [AuthController, AskController],
})
export class RoutesModule {}
