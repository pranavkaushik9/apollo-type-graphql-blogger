import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from "type-graphql";

import { path, port } from "./constants";
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
    
    app.listen(port, () => {
        console.log(`server listening on http://localhost:${port}${path}`);
    });
}

main();
