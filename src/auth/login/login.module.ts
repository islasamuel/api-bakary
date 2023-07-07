import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { RegisterModule } from '../register/register.module';

@Module({
  imports: [RegisterModule],
  controllers: [LoginController],
  providers: []
})
export class LoginModule {}
