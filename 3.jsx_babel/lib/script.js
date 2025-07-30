"use strict";

var container3 = /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 300,
    height: 400,
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid'
  }
}, /*#__PURE__*/React.createElement("h1", null, "React Form"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username",
  style: {
    fontSize: 20,
    marginLeft: 55
  }
}, "username"), /*#__PURE__*/React.createElement("input", {
  id: "username",
  style: {
    width: 200,
    height: '30px',
    marginInline: '50px',
    marginBlock: '10px'
  }
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
  htmlFor: "email",
  style: {
    fontSize: '20px',
    marginLeft: '55px'
  }
}, "EMail"), /*#__PURE__*/React.createElement("input", {
  id: "email",
  style: {
    width: 200,
    height: '30px',
    marginInline: '50px',
    marginBlock: '10px'
  }
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
  htmlFor: "pass",
  style: {
    fontSize: '20px',
    marginLeft: '55px'
  }
}, "password"), /*#__PURE__*/React.createElement("input", {
  id: "pass",
  type: "password",
  style: {
    width: 200,
    height: '30px',
    marginInline: '50px',
    marginBlock: '10px'
  }
})), /*#__PURE__*/React.createElement("button", {
  style: {
    fontSize: '16px',
    marginInline: '100px'
  }
}, "submit")));
var root3 = ReactDOM.createRoot(document.querySelector('#root3'));
root3.render(container3);