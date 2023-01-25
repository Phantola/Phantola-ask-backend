import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AskService } from 'src/services/ask/ask.service';

@Controller('ask')
export class AskController {
  constructor(private readonly askService: AskService) {}

  @Get('')
  async getMessages() {}

  @Post('')
  async postMessage(
    @Body('stem') stem: string,
    @Body('writer') writer: string,
  ) {
    await this.askService.createMessage(stem, writer);
  }

  @Delete('')
  async deleteMessage(@Query('stemId') stemId: number) {
    await this.askService.deleteMessage(stemId);
  }
}
