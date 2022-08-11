import {
  Banner_Endpoints,
  BlogByCategories,
  BlogByTags,
  BlogComments_Endpoint,
  BlogThumb_Endpoint,
  PostUrl,
  SearchBlog_Endpoint,
  SingleBlog_Endpoint,
} from "./Endpoints";

export const GetBlogThumbnails = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(BlogThumb_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetBlogContent = (BlogId) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(SingleBlog_Endpoint + BlogId, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const BlogByCategoy = (Category) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(BlogByCategories + Category, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const BlogByTag = (Tag) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(BlogByTags + Tag, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const BlogBySearch = (Query) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(SearchBlog_Endpoint + Query, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GettingBlogComments = (ID) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(PostUrl + ID + BlogComments_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const PostingComment = (ID, Body, Type, ReplyID) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (Type === "reply") {
    myHeaders.append("x-contentful-parent-id", ReplyID);
  }
  var raw = JSON.stringify({
    body: Body,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(PostUrl + ID + BlogComments_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetBannerImages = (PageType) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Banner_Endpoints + PageType, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};