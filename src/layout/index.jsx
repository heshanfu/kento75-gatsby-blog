import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

export default class MainLayout extends React.Component {
  isIndexPage = pathname => pathname == "/" || /\/\?/i.test(pathname)
  isAboutPage = pathname => /\/about/i.test(pathname)
  isTagsPage = pathname => /\/tags/i.test(pathname)
  isPostPage = pathname => ( !(this.isIndexPage(pathname) || this.isAboutPage(pathname) || this.isTagsPage(pathname)) )
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.props.title} isPost={this.isPostPage(this.props.location.pathname)}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children}
        </div>
      </Navigation>
    );
  }
}
