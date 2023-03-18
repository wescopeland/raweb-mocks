import { Controller, Post } from '@nestjs/common';

import { generateActivePlayer } from './generateActivePlayer';

@Controller('request/user')
export class ActivePlayersController {
  @Post('list-currently-active.php')
  async getCurrentlyActivePlayers() {
    const toBeGenerated = 700;

    const response = [];
    for (let i = 0; i < toBeGenerated; i += 1) {
      response.push(generateActivePlayer());
    }

    return response;
  }
}
