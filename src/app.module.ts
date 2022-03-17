import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AuthModule, UsersModule, PrismaModule],
    controllers: [AuthController, AppController],
    providers: [AppService],
})
export class AppModule {}
