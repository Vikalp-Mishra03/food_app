const heading1 = React.createElement("h1", {
    id: "title",
}, "heading 1");
const heading2 = React.createElement("h2", {
    id: "title",
}, "heading 2");

const div = React.createElement("div", {
    id: "container"
}, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div)