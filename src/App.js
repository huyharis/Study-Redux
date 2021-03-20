import React, { Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.css";
import NoteFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense
        fallback={
          <div>
            <Spinner color="primary" />
          </div>
        }>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to add new photo page</Link>
            </li>
            <li>
              <Link to="/photos/123">Go to edit photo page</Link>
            </li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NoteFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
