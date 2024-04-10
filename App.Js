const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Iam an H1"),
    React.createElement("h2", {}, "Iam and H2")
  ]),
  React.createElement("div", { id: "child2" },[
    React.createElement("h3",{},"Iam an H1"),
    React.createElement("h4",{},"Iam an H2")
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
