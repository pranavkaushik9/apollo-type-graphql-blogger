import { RESTDataSource } from 'apollo-datasource-rest';

import { Blog, BlogArgs, User, UsersArgs, IPaginatedResponse, Post, PostsArgs } from '../types';
import { BaseEntity } from '../types/shared/BaseEntity';

/** BloggerService - Exposes Blogger data via restful APIs */
export class BloggerService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.API_BASE_URL;
    }

    /************ blogs */

    /** fetch blogs */
    getBlogs({ authorId, category, searchKey }: BlogArgs): Promise<Array<Blog>> {
        const params = new URLSearchParams();

        params.append('authorId', authorId);

        if (category != null) {
            params.append('category', category);
        }

        if (searchKey != null) {
            params.append('name_like', searchKey);
        }

        return this.get<Array<Blog>>(`/blogs?${params.toString()}`);
    }

    /** fetch Blog by blogId */
    async getBlog(blogId: string): Promise<Blog> {
        return this.get<Blog>(`blogs/${blogId}`);
    }


    /************* users */

    /** fetch User by userId */
    async getUser(userId: string): Promise<User> {
        return this.get<User>(`users/${userId}`);
    }

    /** fetch all users */
    async getUsers({cursor, first}: UsersArgs): Promise<IPaginatedResponse<User>> {
        let users = await this.get<Array<User>>('users')
        return this.paginate<User>(users, first, cursor);
    }

    /************** posts */

    getPost(id: string): Promise<Post> {
        return this.get<Post>(`/posts/${id}`);
    }

    async getPosts({ authorId, blogId, searchKey, cursor, first }: PostsArgs): Promise<IPaginatedResponse<Post>> {
        const params = new URLSearchParams();

        if (authorId != null) {
            params.append('authorId', authorId);
        }

        if (blogId != null) {
            params.append('blogId', blogId);
        }

        if (searchKey != null) {
            params.append('title_like', searchKey);
        }
        const posts = await this.get<Array<Post>>(`/posts${params.toString() === '' ? '' : `?${params.toString()}`}`);
        return this.paginate<Post>(posts, first, cursor);
    }

    async getBlogPosts(blogId: string): Promise<Array<Post>> {
        let basePath = `posts?blogId=${blogId}`;
        // if (page != null && limit != null) {
        //     basePath+=`?_page=${page}&_limit=${limit}`
        // }
        return this.get<Array<Post>>(basePath);
    }

    async getAuthorPosts(authorId: string): Promise<Array<Post>> {
        let basePath = `posts?authorId=${authorId}`;
        // if (page != null && limit != null) {
        //     basePath+=`?_page=${page}&_limit=${limit}`
        // }
        return this.get<Array<Post>>(basePath);
    }

    /************ Private Utils */

    /** Private uitlity to keep Pagination logic DRY */
    private paginate<T extends BaseEntity>(data: Array<T>, first: number, cursor?: string): IPaginatedResponse<T> {
        const connection: IPaginatedResponse<T> = {
            edges: [],
            pageInfo: {
                endCursor: '',
                hasNextPage: false,
                total: 0
            }
        };
        let startIndex = cursor == null ? 0 : data.findIndex((entity: T) => entity.id === cursor) + 1;
        startIndex = startIndex === -1 ? 0 : startIndex;
        connection.pageInfo.hasNextPage =  startIndex + first < data.length;
        connection.pageInfo.total = data.length;
        const endIndex = connection.pageInfo.hasNextPage
            ? startIndex + first
            : data.length;
        connection.pageInfo.endCursor = data[endIndex - 1].id;

        connection.edges = data
            .slice(startIndex, endIndex)
            .map((entity: T) => ({
                cursor: entity.id,
                node: {...entity}
            }));
        return connection;
    }
}
