import { Switch, Route, useHistory } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";

// PAGES
import LandingPage from "./pages/landing/landing.pages";
import AdminSignupPage from "./pages/auth/admin/adminSignup.pages";
import AdminLoginPage from "./pages/auth/admin/adminLogin.pages";
import UserSignupPage from "./pages/auth/user/userSignup.pages";
import UserLoginPage from "./pages/auth/user/userLogin.page";
import BooksPage from "./pages/books/books.pages";

// COMPONENTS
// import Copyright from "./components/common/Copyright/copyright.component";
import Header from "./components/navbar/header.component";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  console.log(history);
  return (
    <div>
      {isAuthenticated && <Header isAuthenticated={isAuthenticated} />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/auth/admin/signup" component={AdminSignupPage} />
        <Route exact path="/auth/admin/login" component={AdminLoginPage} />
        <Route exact path="/auth/user/signup" component={UserSignupPage} />
        <Route exact path="/auth/user/login" component={UserLoginPage} />
        <Route exact path="/books" component={BooksPage} />
      </Switch>
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
