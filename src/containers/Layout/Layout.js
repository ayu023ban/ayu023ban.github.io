import React from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/Auxiliary.js";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js";
import Introduction from "../../components/Introduction/Introduction.js";
import AboutMe from "../../components/AboutMe/AboutMe.js";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer.js";
import Experience from "../../components/Experience/Experience.js";
import Contact from "../../components/Contact/Contact.js";
import Work from "../../components/Work/Work.js";
import Footer from "./../../components/Footer/Footer.js";
import ScrollToTop from "../../components/Navigation/ScrollToTop/ScrollToTop.js";
import SocialLinks from "../../components/SocialLinks/SocialLinks.js";
import { DataContext } from "../../hoc/DataContext.js";

class Layout extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.aboutMeChild = React.createRef();
    this.experienceChild = React.createRef();
    this.contactChild = React.createRef();
    this.workChild = React.createRef();
    this.state = {
      openMenu: false,
      displayScrollToTop: false,
      toolbarStacked: false,
      toolbarHidden: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollToHandler = (index) => {
    const blog = this.context.profile.blog;
    this.setState({ openMenu: false });
    switch (index) {
      case 0:
        this.aboutMeChild.current.scrollToMyRef();
        return;
      case 1:
        this.experienceChild.current.scrollToMyRef();
        return;
      case 2:
        this.workChild.current.scrollToMyRef();
        return;
      case 3:
        this.contactChild.current.scrollToMyRef();
        return;
      case 4:
        window.open(blog, "_blank");
        return;
      default:
        return;
    }
  };

  openMenuHandler = () => {
    this.setState({ openMenu: true });
  };

  closeMenuHandler = () => {
    this.setState({ openMenu: false });
  };

  scrollHandler = () => {
    if (window.scrollY > 35) {
      this.setState({ toolbarStacked: true });
    } else {
      this.setState({ toolbarStacked: false });
    }

    if (window.scrollY >= 225) {
      this.setState({ toolbarHidden: true, displayScrollToTop: true });
    } else {
      this.setState({ toolbarHidden: false, displayScrollToTop: false });
    }
  };

  scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          stacked={this.state.toolbarStacked}
          hidden={this.state.toolbarHidden}
          clicked={this.scrollToHandler}
          openMenu={this.openMenuHandler}
        />
        <SideDrawer
          open={this.state.openMenu}
          closed={this.closeMenuHandler}
          scrolledTo={this.scrollToHandler}
        />
        <main className={classes.Content}>
          <Introduction />
          <AboutMe ref={this.aboutMeChild} />
          <Experience ref={this.experienceChild} />
          <Work ref={this.workChild} />
          <Contact ref={this.contactChild} />
        </main>

        <ScrollToTop
          display={this.state.displayScrollToTop}
          clicked={this.scrollToTopHandler}
        />
        <SocialLinks />
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
