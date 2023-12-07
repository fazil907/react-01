const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "1" }, "This is H1 tag"),
    React.createElement("h2", { id: "2" }, "This is H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "3" }, "This is H1 tag"),
    React.createElement("h2", { id: "4" }, "This is H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
