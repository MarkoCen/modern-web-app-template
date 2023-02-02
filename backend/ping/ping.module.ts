import { Module } from "@nestjs/common";
import { PingResolver } from "./ping.resolver";

@Module({
  imports: [],
  providers: [PingResolver],
})
export class PingModule {}
