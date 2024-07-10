import { NatsModule } from 'src/transports/nats.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { envs } from 'src/config';

@Module({
  providers: [AuthService],
  imports: [
    NatsModule,
    JwtModule.register({
      //TODO: Crear un snippet para esta configuración y ver si se puede importar como un modulo
      global: true,
      secret: envs.jwtSecret,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
