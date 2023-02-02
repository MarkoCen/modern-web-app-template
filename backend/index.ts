import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { Server } from "node:http";
import { AppModule } from "./app.module";

let nextApp: NestExpressApplication | null = null;

export async function bootstrap(): Promise<Server> {
  if (process.env.NODE_ENV === "development" && nextApp) {
    return nextApp.getHttpServer() as Server;
  } else {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      bodyParser: false,
    });

    app.setGlobalPrefix("api");

    await app.init();

    nextApp = app;

    return app.getHttpServer() as Server;
  }
}
