import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AskService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMessage(stem: string, writer = 'anonymous') {
    await this.prismaService.log.create({
      data: {
        stem,
        writer,
      },
    });
  }

  async getMessages() {}

  async deleteMessage(stemId: number) {
    await this.prismaService.log.delete({
      where: {
        id: stemId,
      },
    });
  }
}
