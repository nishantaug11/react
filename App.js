/**
 * 
 * <div id="parents">
 *      <div id="child">
 *          <h1> Here awsome code</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 */
const parents = React.createElement("div",{id:"parents"},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{id:'heading'},"Here Awsome code"))
);

const heading = React.createElement('h1',{id:'heading'},"Hello React My first Program");
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parents);