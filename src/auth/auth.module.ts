import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '60m' },

        }),
    ],
    providers: [JwtStrategy],
    exports: [JwtModule],
})
export class AuthModule {
}
