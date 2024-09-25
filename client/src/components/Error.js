

import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    //console.log(err);
    return (
        <div>
            <div className="text-center text-4xl align-middle my-36">
                <h2 >OOPS!!!!! </h2>
                <h3>   something went Wrong</h3>

                <h3>{err.status}:{err.statusText}</h3>
                <h3>{"🤭🤭🤭🤭🤭"}</h3>
            </div>
        </div>

    )
}
export default Error;
// import react-router component and we can use the useRouteError()