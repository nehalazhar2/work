
const baseUrl="https://cdn.contentful.com/spaces/et9b4uz6io8l/environments/master/entries?access_token=C_OqICISKBsNmimq_QbxJ3J-_RrJI-w3C6aJG2gfxy4&"
export const PostUrl="https://api.contentful.com/spaces/et9b4uz6io8l/environments/master/entries/"

export const BlogThumb_Endpoint=baseUrl+"content_type=mainBlogsListSection"
export const SingleBlog_Endpoint=baseUrl+"content_type=mainBlogsListSection&fields.blogUniqueId="
export const BlogByCategories=baseUrl+"content_type=mainBlogsListSection&fields.blogCategories="
export const BlogByTags=baseUrl+"content_type=mainBlogsListSection&fields.blogTagsList="
export const SearchBlog_Endpoint=baseUrl+"content_type=mainBlogsListSection&fields.blogTitle[in]="
export const BlogComments_Endpoint = "/comments?access_token=CFPAT-Es5zhEgHi7V36RGNCZ3Li_DFHI3FZhc77cFBP7DcnXQ"
export const Banner_Endpoints=baseUrl+"content_type=mainHeaderImages&fields.headerTitle="
