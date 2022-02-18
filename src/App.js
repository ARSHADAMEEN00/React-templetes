import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";

function App() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <Switch>
        <Route exact path="/" component={Landing} />

        <Redirect from="*" to="/" />
      </Switch>
      <DefaultFooter />
    </>
  );
}

export default App;
