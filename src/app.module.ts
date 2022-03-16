import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [UsersModule],
    controllers: [AuthController, AppController],
    providers: [AppService],
})
export class AppModule {}
