import { Module } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';
import { HelloResolver } from './graphql';


@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          path: 'api/graphql',
          bodyParserConfig: false,
          autoSchemaFile: join(process.cwd(), 'backend/schema.gql'),
          sortSchema: true,
          playground: true,
        }),
    ],
    providers: [HelloResolver],
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