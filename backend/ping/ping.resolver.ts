import { ObjectType, Field, Resolver, Query } from "@nestjs/graphql";

export interface Ping {
  text: string;
}

@ObjectType("Ping")
class PingType implements Ping {
  @Field({ name: "text", nullable: false })
  text!: string;
}

@Resolver(() => PingType)
export class PingResolver {
  @Query((returns) => PingType)
  ping(): Ping {
    return { text: "Hello World!" };
  }
}
