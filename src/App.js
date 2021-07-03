import {Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import TagPosts from "./components/TagPosts/TagPosts";
import Posts from './views/Posts';

function App() {
  const routes = [
    {
      key: 1,
      path: '/posts',
      component: Posts
    },
    {
      key: 1,
      path: '/posts/:tag',
      component: TagPosts
    }

  ];





  return (
    <>
    <Header/>
    <Switch>
      {routes.map((route)=> <Route key={route.key} path={route.path} component={route.component} />)}
      <Redirect to="/posts"/>
    </Switch>
    </>
  );
}

export default App;
