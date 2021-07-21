
import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load.posts';
import { Button } from '../../components/Button';
import { Posts } from '../../components/Posts';


export class Home extends Component {

  state = {
    counter: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 50
  };

  timeoutUpdate = null;

  componentDidMount() {

    this.loadPosts();
  }


  loadPosts = async () => {

    const { page, postsPerPage } = this.state;
    const result = await loadPosts();
    this.setState({
      posts: result.slice(page, postsPerPage),
      allPosts: result,

    });

  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage +postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }
  render() {

    const { posts , page, postsPerPage, allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (

      <section className="container">
        <Posts posts={posts} />
        <Button
          text="Load More Posts"
          onclick={this.loadMorePosts}
          disabled = {noMorePosts}
        />
      </section>
      /*    <SectionPosts posts={posts} >
          
         </SectionPosts>
    */
    );
  }


}

