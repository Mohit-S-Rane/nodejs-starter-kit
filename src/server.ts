import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariable } from "./environment/env";

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfiguration();
  }

  setConfiguration() {
    this.connectMongoDb();
  }

  connectMongoDb() {
    const databaseUrl = getEnvironmentVariable().db_url;
    mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
      console.log("Connected to MongoDB");
    });
  }
}
