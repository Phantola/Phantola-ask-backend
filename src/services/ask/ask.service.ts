import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMessages() {
    return await this.prismaService.log.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createAnswer(stem: string) {
    await this.prismaService.log.create({
      data: {
        stem,
        isAnswer: true,
      },
    });
  }
  async createMessage(stem: string, writer = 'anonymous') {
    await this.prismaService.log.create({
      data: {
        stem,
        writer,
      },
    });
  }

  async deleteMessage(stemId: number) {
    await this.prismaService.log.delete({
      where: {
        id: stemId,
      },
    });
  }
}
