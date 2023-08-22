import type {
  DefaultServerContext,
  DefaultUserContext,
  GraphQLServerInitOptions,
} from '../types';
import type { YogaServerOptions } from 'graphql-yoga';

export const context = <
  SC extends DefaultServerContext,
  UC extends DefaultUserContext,
>({
  cache,
}: GraphQLServerInitOptions): YogaServerOptions<SC, UC>['context'] => {
  return async () => {
    return (await Promise.resolve<DefaultUserContext>({
      cache,
    })) as never;
  };
};
