import { Module } from '@nestjs/common';
import { ActivePlayersController } from './active-players.controller';

@Module({
  controllers: [ActivePlayersController],
})
export class ActivePlayersModule {}
