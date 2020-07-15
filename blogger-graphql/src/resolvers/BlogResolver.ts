import { Args, Query, FieldResolver, Resolver, ResolverInterface, Root, Ctx } from "type-graphql";

import { Blog, BlogArgs, Context, Post, User } from "../types";

/** Resolver for Blog */
@Resolver(of => Blog)
export class BlogResolver implements ResolverInterface<Blog> {

    /** Resolves blogs for provided authorId, and optionally search text*/
    @Query(returns => [Blog])
    blogs(@Args() args: BlogArgs, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getBlogs(args);
    }

    /** Resolves blog's author */
    @FieldResolver(returns => User)
    author(@Root() blog: Blog, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getUser(blog.authorId);
    }

    /** Resolves blog's posts */
    @FieldResolver(returns => [Post])
    posts(@Root() blog: Blog, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getBlogPosts(blog.id);
    }
}
