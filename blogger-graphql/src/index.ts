import "reflect-metadata";
require('dotenv-flow').config();

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from "type-graphql";

import { getDataSources } from "./datasources";

const main = async () => {
    const schema = await buildSchema({
        resolvers: [`${__dirname}/resolvers/**/*.ts`],
    });

    const server = new ApolloServer({
        schema,
        dataSources: getDataSources
    });
    
    const app = Express();
    
    server.applyMiddleware({ app });
    
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`server listening on http://localhost:${process.env.SERVER_PORT}${process.env.SERVER_PATH}`);
    });
}

main();
