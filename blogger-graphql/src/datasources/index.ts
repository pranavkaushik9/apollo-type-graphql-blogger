import { BloggerService } from "./BloggerService";

export const getDataSources = () => ({
    bloggerAPI: new BloggerService()
});
