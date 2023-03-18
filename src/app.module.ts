import { Module } from '@nestjs/common';
import { ActivePlayersModule } from './active-players/active-players.module';

@Module({
  imports: [ActivePlayersModule],
})
export class AppModule {}
