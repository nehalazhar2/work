
import { useNavigate } from 'react-router-dom';
import '../../Assets/MainStyleClass.css'
import '../../Assets/Blog_Section.css'
import BlogImg from "../../images/abstract-futuristic-background-with-3d-design.jpg";
import dateFormat from 'dateformat';
import React, { Component } from 'react'
import { GetBlogThumbnails } from '../../Utils/ApiCalls';
import { Link } from 'react-router-dom';

export default class BlogArchive extends Component {

    constructor(props) {
        super(props);
        this.state = {
          BlogsListFinal: [],
          isLoading: true,
        };
      }
      componentWillMount() {
        var NewFinalArray = [];
        var UniqueIDSArray = [];
    
        var BlogData = GetBlogThumbnails();
        BlogData.then((data) => {
          var Data = data;
          Data.items.forEach((element) => {
            var BlogObject = {};
            var Blog_UniqueIDObject = {};
            var AddedDate = element.fields.addedData;
            var BlogDescription = element.fields.blogBasicDescription;
            var BlogTitle = element.fields.blogTitle;
            var BlogUniqueId = element.fields.blogUniqueId;
            var BlogImageID = element.fields.blogImage.sys.id;
            var BlogImage = "";
            Data.includes.Asset.forEach((itemInner) => {
              if (itemInner.sys.id == BlogImageID) {
                BlogImage = "https:" + itemInner.fields.file.url;
              }
            });
            BlogObject["AddedDate"] = AddedDate;
            BlogObject["BlogDescription"] = BlogDescription;
            BlogObject["BlogTitle"] = BlogTitle;
            BlogObject["BlogUniqueId"] = BlogUniqueId;
            BlogObject["BlogImage"] = BlogImage;
            NewFinalArray.push(BlogObject);
            Blog_UniqueIDObject["BlogUniqueId"] = BlogUniqueId;
            Blog_UniqueIDObject["BlogTitle"] = BlogTitle;
    
            UniqueIDSArray.push(Blog_UniqueIDObject);
          });
          this.setState({ BlogsListFinal: NewFinalArray }, () => {
            this.setState({ isLoading: false });
          });
          localStorage.setItem("Blogs_UniqueID", JSON.stringify(UniqueIDSArray));
        });
      }
    componentDidMount(){
        window.scrollTo(0, 0)
    }


  render() {
    return (
        <div>
            {/* <!-- //page title --> */}
            <section>
                <div className="w-100 position-relative">
                    <div className="pg-title-wrap pt-190 pb-80 position-relative w-100 mouse_anim scroll_anim">
                        <img data-depth="0.80" className="pg-ttl-shp-img img-fluid position-absolute" src={BlogImg} alt="Title Background Shape" height="329" width="1920" />
                        <div className="container">
                            <div className="pg-title-inner text-center position-relative w-100">
                                <h1 className='HEading_Font_color'>Blogs <i className="btm-ln v2 bg-color9"></i></h1>
                                <ol className="breadcrumb d-inline-flex justify-content-center align-items-center flex-wrap ">
                                    <li className="breadcrumb-item "><span title="Home" className='HEading_Font_color'>Home</span></li>
                                    <li className="breadcrumb-item active HEading_Font_color" >Blogs</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page Title Wrap --> */}
                </div>
            </section>
            {/* <!-- //page title --> */}
            <section>
                <div className="w-100 pt-120 pb-120 position-relative">
                    <div className="container">
                        <div className="blog-wrap blog-spac position-relative w-100">
                            <div className="row mrg30 justify-content-center">
                                {this.state.BlogsListFinal.map((item, key) => {

                                    var sdd = item.BlogTitle
                                    while (sdd.includes(" ")) {
                                        sdd = sdd.replace(" ", "-")
                                    }
                                    var formattedDate = new Date (item.AddedDate)
                                    formattedDate=dateFormat(formattedDate,"dd mmm")
                                    
                                    return (
                                        <div key={key} className="col-md-6 col-sm-12 col-lg-4">
                                            <div className="post-box brd-rd15 w-100">
                                                <div className="post-img overflow-hidden position-relative w-100">
                                                    <a title="" href="#/"><img className="img-fluid Blog_Img w-100" src={item.BlogImage} alt="Post Img 13" /></a>
                                                    <span className="post-date brd-rd15 text-center position-absolute text-uppercase"><i>{formattedDate}</i></span>
                                                </div>
                                                <div className="post-info w-100">
                                                    {/* <span className="post-cate d-block text-uppercase"><a href="#/" title="">{product.category}</a></span> */}
                                                    <Link to={"news/"+sdd+"/"+item.BlogUniqueId}>
                               
                                            <h3 className="mb-0"><span title="" className='Font_class'>{item.BlogTitle}</span></h3></Link>
                                                    <p className="mb-0 P_class Blog_Desc">{item.BlogDescription}</p>
                                                    {/* <div className='Fa_Star_values'>
                                                        <div>
                                                            {Array.from({ length: product.rating.blog_rate }).map((i) => (
                                                                <span key={i} class="fa fa-star star-active ml-3"></span>
                                                            ))}
                                                        </div>
                                                        <div>
                                                     Total Count:  {product.rating.blog_count}
                                                    </div>
                                                    </div>
                                                    <div className='Api_Rating_Class'>{product.rating.blog_rate}/5</div> */}
                                                    <br />
                                                    <Link to={ "/news/"+sdd + "/" + item.BlogUniqueId}>
                                                    <span className="simple-link d-inline-block text-uppercase Last_Read_more_class" title="" >Read More<i className="flaticon-right-arrow text-color3"></i></span>
                                                </Link>
                                                </div>
                                            </div>
                                        </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}




// const BlogArchive = () => {
//     const navigate = useNavigate();
//     var blog_data = JSON.parse(localStorage.getItem('Blog_Data')) == null ? [] : JSON.parse(localStorage.getItem('Blog_Data'));
//     const handleClick = (product) => {
//         localStorage.setItem('Single_Product_Data', JSON.stringify(product));
//         navigate('/BlogDetailPage');
//     }
//     return (
//         <div>
//             {/* <!-- //page title --> */}
//             <section>
//                 <div className="w-100 position-relative">
//                     <div className="pg-title-wrap pt-190 pb-80 position-relative w-100 mouse_anim scroll_anim">
//                         <img data-depth="0.80" className="pg-ttl-shp-img img-fluid position-absolute" src={BlogImg} alt="Title Background Shape" height="329" width="1920" />
//                         <div className="container">
//                             <div className="pg-title-inner text-center position-relative w-100">
//                                 <h1 className='HEading_Font_color'>Blogs <i className="btm-ln v2 bg-color9"></i></h1>
//                                 <ol className="breadcrumb d-inline-flex justify-content-center align-items-center flex-wrap ">
//                                     <li className="breadcrumb-item "><a href="#/" title="Home" className='HEading_Font_color'>Home</a></li>
//                                     <li className="breadcrumb-item active HEading_Font_color" >Blogs</li>
//                                 </ol>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!-- Page Title Wrap --> */}
//                 </div>
//             </section>
//             {/* <!-- //page title --> */}
//             <section>
//                 <div className="w-100 pt-120 pb-120 position-relative">
//                     <div className="container">
//                         <div className="blog-wrap blog-spac position-relative w-100">
//                             <div className="row mrg30 justify-content-center">
//                                 {blog_data.map((product, key) => (
//                                     <div key={key} className="col-md-6 col-sm-12 col-lg-4">
//                                         <div className="post-box brd-rd15 w-100">
//                                             <div className="post-img overflow-hidden position-relative w-100">
//                                                 <a title="" href="#/"><img className="img-fluid w-100" src={product.backgroungImg_blog} alt="Post Img 13" height="576" width="1024" /></a>
//                                                 <span className="post-date brd-rd15 text-center position-absolute text-uppercase"><i>{product.time_blog}</i></span>
//                                             </div>
//                                             <div className="post-info w-100">
//                                                 <span className="post-cate d-block text-uppercase"><a href="#/" title="">{product.category}</a></span>
//                                                 <h3 className="mb-0"><a href="#/" title="" className='Font_class'>{product.title_blog}</a></h3>
//                                                 <p className="mb-0 P_class">{product.sub_blog}</p>
//                                                 <div className='Fa_Star_values'>
//                                                     <div>
//                                                         {Array.from({ length: product.rating.blog_rate }).map((i) => (
//                                                         <span key={i} class="fa fa-star star-active ml-3"></span>
//                                                     ))}
//                                                     </div>
//                                                     {/* <div>
//                                                      Total Count:  {product.rating.blog_count}
//                                                     </div> */}
//                                                 </div>
//                                                 <div className='Api_Rating_Class'>{product.rating.blog_rate}/5</div>
//                                                 <br />
//                                                 <a className="simple-link d-inline-block text-uppercase Last_Read_more_class" href="#/" title="" onClick={() => handleClick(product)}>Read More<i className="flaticon-right-arrow text-color3"></i></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default BlogArchive