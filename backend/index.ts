import { Module } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Resolver, Query } from '@nestjs/graphql';
import { join } from 'node:path';
import type { Hello } from './graphql';

@Resolver()
class GQResolver {
    @Query('hello')
    hello(): Hello {
        return { text: 'Hello from GraphQL!' }
    }
}

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          path: 'api/graphql',
          bodyParserConfig: false,
          typePaths: ['./**/*.gql'],
          definitions: {
            path: join(process.cwd(), 'backend/graphql.ts'),
          },
          playground: true,
        }),
    ],
    providers: [GQResolver],
})
class AppModule {

}

let nextApp: NestExpressApplication | null = null;

export async function bootstrap() {
    if (process.env.NODE_ENV === 'development' && nextApp) {
        return nextApp.getHttpServer();
    } else {
        const app = await NestFactory.create<NestExpressApplication>(AppModule, { bodyParser: false });

        app.setGlobalPrefix('api');
    
        await app.init();
    
        nextApp = app;
    
        return app.getHttpServer();
    }
    
}