import { NatsModule } from 'src/transports/nats.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService],
  imports: [NatsModule],
  controllers: [AuthController],
})
export class AuthModule {}