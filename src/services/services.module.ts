import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AskService } from './ask/ask.service';

@Module({
  providers: [PrismaService, AuthService, AskService],
  exports: [PrismaService, AuthService, AskService],
})
export class ServicesModule {}
