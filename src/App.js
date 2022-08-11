import logo from "./logo.svg";
import "./App.css";
import BlogArchive from "./Components/BlogComponents/BlogArchive";
import { Route, Switch } from "react-router-dom";
import BlogPage from "./Components/BlogComponents/SingleBlog";
import BlogCategoryPage from "./Components/BlogComponents/BlogCategoryPage";

function App() {
  return (
    <Switch>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={BlogArchive}
      />

      <Route
        path={`${process.env.PUBLIC_URL}/news/:id/:id2`}
        component={BlogPage}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/Category/:id`}
        component={BlogCategoryPage}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/Tags/:id`}
        component={BlogCategoryPage}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/SearchResults/:id`}
        component={BlogCategoryPage}
      />
      <Route component={BlogArchive} />
    </Switch>
  );
}

export default App;
