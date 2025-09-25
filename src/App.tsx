import {RouterProvider} from "react-router-dom";
import {router} from "virtual:navilo-routes";

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
