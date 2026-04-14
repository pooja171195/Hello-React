/**
 *
 * <div id ="parent">
 *              <Div id="child1">
 *              <h1> </h1>
 *              <h2> </h2>
 *              </div>
 *              <Div id="child2">
 *              <h1> </h1>
 *              <h2> </h2>
 *              </div>
 *
 * </Div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello, i am h1"),
    React.createElement("h2", {}, "Hello, i am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello, i am h1"),
    React.createElement("h2", {}, "Hello, i am h2"),
  ]),
]);

// to handle this kind of multiple nested div and complex structure we have JSX

// const heading = React.createElement(
//         "h1",
//         {id:"heading"},"Hello world from React!"
// );
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
