import { Arg, Args, Ctx, FieldResolver, Query, Resolver, ResolverInterface, Root } from "type-graphql";

import { Blog, Context, Post, PostsArgs, PostConnection, User } from "../types";


/** Resolver for Blog */
@Resolver(of => Post)
export class PostResolver implements ResolverInterface<Post> {
    
    /** Resolves single post*/
    @Query(returns => Post)
    post(@Arg('id') id: string, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getPost(id);
    }

    /** Resolves all posts*/
    @Query(returns => PostConnection)
    async posts(@Args() args: PostsArgs, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getPosts(args);
    }

    /** Resolves posts for provided blog*/
    @Query(returns => [Post])
    async blogPosts(@Root() blog: Blog, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getBlogPosts(blog.id);
    }

    /** Resolves posts for provided author*/
    @Query(returns => [Post])
    async authorPosts(@Root() author: User, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getAuthorPosts(author.id);
    }

    /** Resolves post's author */
    @FieldResolver(returns => User)
    async author(@Root() post: Post, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getUser(post.authorId);
    }

    /** Resolves post's blog */
    @FieldResolver(returns => Blog)
    async blog(@Root() post: Post, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getBlog(post.blogId);
    }
}
