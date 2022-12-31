import { ObjectType, Field, Resolver, Query } from '@nestjs/graphql'

export interface Hello {
    text: string;
}

@ObjectType('Hello')
class HelloType implements Hello {
    @Field({ name: 'text', nullable: false })
    text!: string;
}

@Resolver(() => HelloType)
export class HelloResolver {
    @Query(returns => HelloType)
    hello(): Hello {
        return { text: 'Hello from GraphQL!' }
    }
}