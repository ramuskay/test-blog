import React, {Component} from "react";
import ThemeContext from '../context/ThemeContext';
export default class Comments extends Component {
  static contextType = ThemeContext;

  constructor(props){ 
    super(props);
    this.commentBox = React.createRef(); // Creates a reference to inject the <script> element
    this.theme = this.context;
  }
  componentDidMount () {
      const toggleDark = document.body.classList.contains("dark"); 
      
      console.log(this.context)
      const utteranceTheme = toggleDark ? "github-dark" : "github-light";
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("label", "[Comment]");
      scriptEl.setAttribute("repo", "ramuskay/blog-beerus");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute( "theme", utteranceTheme);
      this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
        <div className="comment-box-wrapper container pt-7">
          <h1 className="mb-0">Comments</h1>
          <hr className="my-0"/>
          <div ref={this.commentBox} className="comment-box"/>
          {/* Above element is where the comments are injected */}
        </div>
    );
  }
}

