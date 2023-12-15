import React from "react";
import ReactDOM from "react";
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import App from "./App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route exact path="/" element={<RecordList />}>
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        <App />
    </React.StrictMode>
);