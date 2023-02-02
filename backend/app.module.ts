import { join } from 'node:path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: 'api/graphql',
      bodyParserConfig: false,
      autoSchemaFile:
        process.env.NODE_ENV === 'development' ? join(process.cwd(), 'graphql/schema.gql') : true,
      sortSchema: true,
      playground: true,
    }),
    PingModule,
  ],
})
export class AppModule {}
