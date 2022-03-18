import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async signup(dto: CreateAuthDto) {

        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
        });
        return user;
    }

    signin() {
        return { msg: 'I have signed in' };
    }
}