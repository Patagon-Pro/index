const { useState } = React;

const Sidebar = () => {
  const [isShrinkView, setIsShrinkView] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: `sidebar-container${isShrinkView ? " shrink" : ""}` }, /*#__PURE__*/
    React.createElement("button", {
      className: "sidebar-viewButton",
      type: "button",
      "aria-label": isShrinkView ? "Expand Sidebar" : "Shrink Sidebar",
      title: isShrinkView ? "Expand" : "Shrink",
      onClick: handleSidebarView }, /*#__PURE__*/

    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "feather feather-chevron-left" }, /*#__PURE__*/

    React.createElement("polyline", { points: "15 18 9 12 15 6" }))), /*#__PURE__*/


    React.createElement("div", { className: "sidebar-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "sidebar-themeContainer" }, /*#__PURE__*/
    React.createElement("label", {
      labelFor: "theme-toggle",
      className: `sidebar-themeLabel${isDarkMode ? " switched" : ""}` }, /*#__PURE__*/

    React.createElement("input", {
      className: "sidebar-themeInput",
      type: "checkbox",
      id: "theme-toggle",
      onChange: handleThemeChange }), /*#__PURE__*/

    React.createElement("div", { className: "sidebar-themeType light" }, /*#__PURE__*/
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: "sidebar-listIcon" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "5" }), /*#__PURE__*/
    React.createElement("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" })), /*#__PURE__*/

    React.createElement("span", { className: "sidebar-themeInputText" }, "Light")), /*#__PURE__*/

    React.createElement("div", { className: "sidebar-themeType dark" }, /*#__PURE__*/
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: "sidebar-listIcon" }, /*#__PURE__*/

    React.createElement("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })), /*#__PURE__*/

    React.createElement("span", { className: "sidebar-themeInputText" }, "Dark")))), /*#__PURE__*/



    React.createElement("ul", { className: "sidebar-list" }, /*#__PURE__*/
    React.createElement("li", { className: "sidebar-listItem active" }, /*#__PURE__*/
    React.createElement("a", { href: "https://cl.patagon.pro"}, /*#__PURE__*/
    

    React.createElement("span", { className: "sidebar-listItemText" }, "🇨🇱 Chile 🚀"))), /*#__PURE__*/


    React.createElement("li", { className: "sidebar-listItem" }, /*#__PURE__*/
    React.createElement("a", null, /*#__PURE__*/
    
    React.createElement("span", { className: "sidebar-listItemText" }, "🇧🇷 Brazil (2024)"))), /*#__PURE__*/


    React.createElement("li", { className: "sidebar-listItem" }, /*#__PURE__*/
    React.createElement("a", null, /*#__PURE__*/
    

    React.createElement("span", { className: "sidebar-listItemText" }, "🇲🇽 México (2024)"))), /*#__PURE__*/


    React.createElement("li", { className: "sidebar-listItem" }, /*#__PURE__*/
    React.createElement("a", null, /*#__PURE__*/
    
    React.createElement("span", null, "🇵🇪 Perú (🚧 2024)"))), /*#__PURE__*/


    React.createElement("li", { className: "sidebar-listItem" }, /*#__PURE__*/
    React.createElement("a", null, /*#__PURE__*/
    
    React.createElement("span", { className: "sidebar-listItemText" }, "🇨🇴 Colombia (2024)")))), /*#__PURE__*/



    React.createElement("div", { className: "sidebar-profileSection" }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://assets.codepen.io/3306515/i-know.jpg",
      width: "40",
      height: "40",
      alt: "Monica Geller" }), /*#__PURE__*/

    React.createElement("span", null, "📫 Contáctanos")))));




};

ReactDOM.render( /*#__PURE__*/React.createElement(Sidebar, null), document.getElementById("root"));