import { Arg, Args, FieldResolver, Query, Resolver, ResolverInterface, Root, Ctx } from "type-graphql";

import { Blog, Context, Post, User, UsersArgs  } from "../types";
import { UserConnection } from "../types/user/UserConnection";

/** Resolver for User */
@Resolver(of => User)
export class UserResolver implements ResolverInterface<User> {

    /** returns all users */
    @Query(returns => UserConnection)
    users(@Args() args: UsersArgs, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getUsers(args);
    }

    /** returns User by UserId */
    @Query(returns => User)
    user(@Arg('id') id: string, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getUser(id);
    }

    /** returns Blogs of an author */
    @FieldResolver(returns => [Blog])
    async blogs(@Root() user: User, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getBlogs({ authorId: user.id });
    }

    /** returns Posts of an author */
    @FieldResolver(returns => [Post])
    async posts(@Root() user: User, @Ctx() { dataSources: { bloggerAPI } }: Context) {
        return bloggerAPI.getAuthorPosts(user.id);
    }
}
