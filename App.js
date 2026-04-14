/**
 * 
 * <div id ="parent">
 *              <Div id="child">
 *              <h1> </h1>
 *              </div>
 * 
 * </Div>
 * 
 * 
 */


const parent = React.createElement(
        "div",
        {id: "parent"},
        React.createElement(
                "div",
                {id:  "child"},
                React.createElement("h1", {}, "Hello, i am h1")
        )
);






// const heading = React.createElement(
//         "h1",
//         {id:"heading"},"Hello world from React!"
// );
// console.log(heading);

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);

