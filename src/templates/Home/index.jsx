
import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load.posts';
import { SectionPosts } from '../../components/SectionPosts';


export class Home extends Component {

  state = {
    counter: 0,
    posts: []
  };

  timeoutUpdate = null;

  componentDidMount() {

    this.loadPosts();
  }


  loadPosts = async () => {

    const result = await loadPosts();
    this.setState({ posts: result });
  }

  render() {

    const { posts } = this.state;
    return (

      <SectionPosts posts={posts} />

    );
  }


}

