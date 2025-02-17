"use strict";
function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
var React = _interopDefault(require("react")),
  propTypes = _interopDefault(require("prop-types")),
  Paper = _interopDefault(require("@material-ui/core/Paper")),
  MuiTable = _interopDefault(require("@material-ui/core/Table")),
  Typography = _interopDefault(require("@material-ui/core/Typography")),
  Toolbar = _interopDefault(require("@material-ui/core/Toolbar")),
  Tooltip = _interopDefault(require("@material-ui/core/Tooltip")),
  IconButton = _interopDefault(require("@material-ui/core/IconButton")),
  MuiPopover = _interopDefault(require("@material-ui/core/Popover")),
  reactDom = require("react-dom"),
  classNames = _interopDefault(require("classnames")),
  FormControl = _interopDefault(require("@material-ui/core/FormControl")),
  FormGroup = _interopDefault(require("@material-ui/core/FormGroup")),
  FormControlLabel = _interopDefault(
    require("@material-ui/core/FormControlLabel")
  ),
  InputLabel = _interopDefault(require("@material-ui/core/InputLabel")),
  Input = _interopDefault(require("@material-ui/core/Input")),
  MenuItem = _interopDefault(require("@material-ui/core/MenuItem")),
  Select = _interopDefault(require("@material-ui/core/Select")),
  Checkbox = _interopDefault(require("@material-ui/core/Checkbox")),
  ListItemText = _interopDefault(require("@material-ui/core/ListItemText")),
  styles = require("@material-ui/core/styles"),
  core = require("@material-ui/core"),
  Grow = _interopDefault(require("@material-ui/core/Grow")),
  TextField$1 = _interopDefault(require("@material-ui/core/TextField")),
  SearchIcon = _interopDefault(require("@material-ui/icons/Search")),
  ClearIcon = _interopDefault(require("@material-ui/icons/Clear")),
  DownloadIcon = _interopDefault(require("@material-ui/icons/CloudDownload")),
  PrintIcon = _interopDefault(require("@material-ui/icons/Print")),
  ViewColumnIcon = _interopDefault(require("@material-ui/icons/ViewColumn")),
  FilterIcon = _interopDefault(require("@material-ui/icons/FilterList")),
  ReactToPrint = _interopDefault(require("react-to-print")),
  merge = _interopDefault(require("lodash.merge")),
  DeleteIcon = _interopDefault(require("@material-ui/icons/Delete")),
  Chip = _interopDefault(require("@material-ui/core/Chip")),
  MuiTableBody = _interopDefault(require("@material-ui/core/TableBody")),
  TableCell = _interopDefault(require("@material-ui/core/TableCell")),
  TableRow = _interopDefault(require("@material-ui/core/TableRow")),
  KeyboardArrowRight = _interopDefault(
    require("@material-ui/icons/KeyboardArrowRight")
  ),
  MuiTableHead = _interopDefault(require("@material-ui/core/TableHead")),
  TableSortLabel = _interopDefault(require("@material-ui/core/TableSortLabel")),
  HelpIcon = _interopDefault(require("@material-ui/icons/Help")),
  MuiTableFooter = _interopDefault(require("@material-ui/core/TableFooter")),
  MuiTablePagination = _interopDefault(
    require("@material-ui/core/TablePagination")
  ),
  cloneDeep = _interopDefault(require("lodash.clonedeep")),
  isEqual = _interopDefault(require("lodash.isequal")),
  _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  classCallCheck = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  createClass = (function () {
    function a(e, t) {
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, t, o) {
      return t && a(e.prototype, t), o && a(e, o), e;
    };
  })(),
  defineProperty = function (e, t, o) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = o),
      e
    );
  },
  _extends =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var a in o)
          Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
      }
      return e;
    },
  inherits = function (e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  objectWithoutProperties = function (e, t) {
    var o = {};
    for (var a in e)
      0 <= t.indexOf(a) ||
        (Object.prototype.hasOwnProperty.call(e, a) && (o[a] = e[a]));
    return o;
  },
  possibleConstructorReturn = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  },
  slicedToArray = function (e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e))
      return (function (e, t) {
        var o = [],
          a = !0,
          n = !1,
          r = void 0;
        try {
          for (
            var l, i = e[Symbol.iterator]();
            !(a = (l = i.next()).done) &&
            (o.push(l.value), !t || o.length !== t);
            a = !0
          );
        } catch (e) {
          (n = !0), (r = e);
        } finally {
          try {
            !a && i.return && i.return();
          } finally {
            if (n) throw r;
          }
        }
        return o;
      })(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
  toConsumableArray = function (e) {
    if (Array.isArray(e)) {
      for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
      return o;
    }
    return Array.from(e);
  },
  Popover = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).state = { open: !1 }),
        (o.handleClick = function () {
          (o.anchorEl = reactDom.findDOMNode(o.anchorEl)),
            o.setState({ open: !0 });
        }),
        (o.handleRequestClose = function (e) {
          o.setState(
            { open: !1 },
            e && "function" == typeof e ? e() : function () {}
          );
        }),
        (o.handleOnExit = function () {
          o.props.refExit && o.props.refExit();
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "componentWillMount",
          value: function () {
            this.anchorEl = null;
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            this.props.refClose && this.props.refClose(this.handleRequestClose);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (e, t) {
            !0 === this.state.open &&
              ((this.anchorEl = reactDom.findDOMNode(this.anchorEl)),
              this.popoverActions.updatePosition());
          },
        },
        {
          key: "render",
          value: function () {
            var t = this,
              e = this.props,
              o = (e.className, e.placement, e.trigger),
              a = (e.refExit, e.content),
              n = objectWithoutProperties(e, [
                "className",
                "placement",
                "trigger",
                "refExit",
                "content",
              ]),
              r = React.cloneElement(o, {
                key: "content",
                ref: function (e) {
                  return (t.anchorEl = e);
                },
                onClick: function () {
                  o.props.onClick && o.props.onClick(), t.handleClick();
                },
              });
            return React.createElement(
              React.Fragment,
              null,
              React.createElement(
                MuiPopover,
                _extends(
                  {
                    action: function (e) {
                      return (t.popoverActions = e);
                    },
                    elevation: 2,
                    open: this.state.open,
                    onClose: this.handleRequestClose,
                    onExited: this.handleOnExit,
                    anchorEl: this.anchorEl,
                    ref: function (e) {
                      return t.popoverEl;
                    },
                    anchorOrigin: { vertical: "bottom", horizontal: "center" },
                    transformOrigin: { vertical: "top", horizontal: "center" },
                  },
                  n
                ),
                a
              ),
              r
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  defaultFilterStyles = {
    root: { padding: "16px 24px 16px 24px", fontFamily: "Roboto" },
    header: {
      flex: "0 0 auto",
      marginBottom: "16px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      display: "inline-block",
      marginLeft: "7px",
      color: "#424242",
      fontSize: "14px",
      fontWeight: 500,
    },
    noMargin: { marginLeft: "0px" },
    reset: { alignSelf: "left" },
    resetLink: {
      color: "#027cb5",
      backgroundColor: "#FFF",
      display: "inline-block",
      marginLeft: "24px",
      fontSize: "12px",
      cursor: "pointer",
      border: "none",
      "&:hover": { color: "#FF0000" },
    },
    filtersSelected: { alignSelf: "right" },
    checkboxList: {
      flex: "1 1 100%",
      display: "inline-flex",
      marginRight: "24px",
    },
    checkboxListTitle: {
      marginLeft: "7px",
      marginBottom: "8px",
      fontSize: "14px",
      color: "#424242",
      textAlign: "left",
      fontWeight: 500,
    },
    checkboxFormGroup: { marginTop: "8px" },
    checkboxFormControl: { margin: "0px" },
    checkboxFormControlLabel: {
      fontSize: "15px",
      marginLeft: "8px",
      color: "#4a4a4a",
    },
    checkboxIcon: { width: "32px", height: "32px" },
    checkbox: { "&$checked": { color: "#027cB5" } },
    checked: {},
    selectRoot: {
      display: "flex",
      marginTop: "16px",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      height: "80%",
      justifyContent: "space-between",
    },
    selectFormControl: {
      flex: "1 1 calc(50% - 24px)",
      marginRight: "24px",
      marginBottom: "24px",
    },
    textFieldRoot: {
      display: "flex",
      marginTop: "16px",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
    },
    textFieldFormControl: {
      flex: "1 1 calc(50% - 24px)",
      marginRight: "24px",
      marginBottom: "24px",
    },
  },
  TableFilter = (function (e) {
    function l() {
      var e, t, a;
      classCallCheck(this, l);
      for (var o = arguments.length, n = Array(o), r = 0; r < o; r++)
        n[r] = arguments[r];
      return (
        ((t = a =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleCheckboxChange = function (e, t) {
          a.props.onFilterUpdate(e, t, "checkbox");
        }),
        (a.handleDropdownChange = function (e, t) {
          var o = "All" === e.target.value ? "" : e.target.value;
          a.props.onFilterUpdate(t, o, "dropdown");
        }),
        (a.handleMultiselectChange = function (e, t) {
          a.props.onFilterUpdate(e, t, "multiselect");
        }),
        (a.handleTextFieldChange = function (e, t) {
          a.props.onFilterUpdate(t, e.target.value, "textField");
        }),
        possibleConstructorReturn(a, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "renderCheckbox",
          value: function (e) {
            var a = this,
              t = this.props,
              n = t.classes,
              r = t.filterData,
              l = t.filterList;
            return e.map(function (e, o) {
              return (
                !!e.filter &&
                React.createElement(
                  "div",
                  { className: n.checkboxList, key: o },
                  React.createElement(
                    FormGroup,
                    null,
                    React.createElement(
                      Typography,
                      { variant: "caption", className: n.checkboxListTitle },
                      e.name
                    ),
                    r[o].map(function (e, t) {
                      return React.createElement(FormControlLabel, {
                        key: t,
                        classes: {
                          root: n.checkboxFormControl,
                          label: n.checkboxFormControlLabel,
                        },
                        control: React.createElement(Checkbox, {
                          className: n.checkboxIcon,
                          onChange: a.handleCheckboxChange.bind(null, o, e),
                          checked: 0 <= l[o].indexOf(e),
                          classes: { root: n.checkbox, checked: n.checked },
                          value: null !== e ? e.toString() : "",
                        }),
                        label: e,
                      });
                    })
                  )
                )
              );
            });
          },
        },
        {
          key: "renderSelect",
          value: function (e) {
            var o = this,
              t = this.props,
              a = t.classes,
              n = t.filterData,
              r = t.filterList,
              l = t.options.textLabels.filter;
            return React.createElement(
              "div",
              { className: a.selectRoot },
              e.map(function (e, t) {
                return (
                  !!e.filter &&
                  React.createElement(
                    FormControl,
                    { className: a.selectFormControl, key: t },
                    React.createElement(
                      InputLabel,
                      { htmlFor: e.name },
                      e.name
                    ),
                    React.createElement(
                      Select,
                      {
                        value: r[t].toString() || l.all,
                        name: e.name,
                        onChange: function (e) {
                          return o.handleDropdownChange(e, t);
                        },
                        input: React.createElement(Input, {
                          name: e.name,
                          id: e.name,
                        }),
                      },
                      React.createElement(
                        MenuItem,
                        { value: l.all, key: 0 },
                        l.all
                      ),
                      n[t].map(function (e, t) {
                        return React.createElement(
                          MenuItem,
                          { value: e, key: t + 1 },
                          null !== e ? e.toString() : ""
                        );
                      })
                    )
                  )
                );
              })
            );
          },
        },
        {
          key: "renderTextField",
          value: function (e) {
            var o = this,
              t = this.props,
              a = t.classes,
              n = t.filterList;
            return React.createElement(
              "div",
              { className: a.textFieldRoot },
              e.map(function (e, t) {
                return (
                  !!e.filter &&
                  React.createElement(
                    FormControl,
                    { className: a.textFieldFormControl, key: t },
                    React.createElement(core.TextField, {
                      label: e.name,
                      value: n[t].toString() || "",
                      onChange: function (e) {
                        return o.handleTextFieldChange(e, t);
                      },
                    })
                  )
                );
              })
            );
          },
        },
        {
          key: "renderMultiselect",
          value: function (e) {
            var t = this,
              o = this.props,
              a = o.classes,
              n = o.filterData,
              r = o.filterList;
            o.options;
            return React.createElement(
              "div",
              { className: a.selectRoot },
              e.map(function (e, o) {
                return (
                  !!e.filter &&
                  React.createElement(
                    FormControl,
                    { className: a.selectFormControl, key: o },
                    React.createElement(
                      InputLabel,
                      { htmlFor: e.name },
                      e.name
                    ),
                    React.createElement(
                      Select,
                      {
                        multiple: !0,
                        value: r[o] || [],
                        renderValue: function (e) {
                          return e.join(", ");
                        },
                        name: e.name,
                        onChange: function (e) {
                          return t.handleMultiselectChange(o, e.target.value);
                        },
                        input: React.createElement(Input, {
                          name: e.name,
                          id: e.name,
                        }),
                      },
                      n[o].map(function (e, t) {
                        return React.createElement(
                          MenuItem,
                          { value: e, key: t + 1 },
                          React.createElement(Checkbox, {
                            checked: 0 <= r[o].indexOf(e),
                            value: e.toString(),
                            className: a.checkboxIcon,
                            classes: { root: a.checkbox, checked: a.checked },
                          }),
                          React.createElement(ListItemText, { primary: e })
                        );
                      })
                    )
                  )
                );
              })
            );
          },
        },
        {
          key: "render",
          value: function () {
            var e,
              t = this.props,
              o = t.classes,
              a = t.columns,
              n = t.options,
              r = t.onFilterReset,
              l = n.textLabels.filter;
            return React.createElement(
              "div",
              { className: o.root },
              React.createElement(
                "div",
                { className: o.header },
                React.createElement(
                  "div",
                  { className: o.reset },
                  React.createElement(
                    Typography,
                    {
                      variant: "caption",
                      className: classNames(
                        ((e = {}),
                        defineProperty(e, o.title, !0),
                        defineProperty(
                          e,
                          o.noMargin,
                          "checkbox" !== n.filterType
                        ),
                        e)
                      ),
                    },
                    l.title
                  ),
                  React.createElement(
                    "button",
                    {
                      className: o.resetLink,
                      tabIndex: 0,
                      "aria-label": l.reset,
                      onClick: r,
                    },
                    l.reset
                  )
                ),
                React.createElement("div", { className: o.filtersSelected })
              ),
              "checkbox" === n.filterType
                ? this.renderCheckbox(a)
                : "multiselect" === n.filterType
                ? this.renderMultiselect(a)
                : "textField" === n.filterType
                ? this.renderTextField(a)
                : this.renderSelect(a)
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableFilter$1 = styles.withStyles(defaultFilterStyles, {
    name: "MUIDataTableFilter",
  })(TableFilter),
  defaultViewColStyles = {
    root: { padding: "16px 24px 16px 24px", fontFamily: "Roboto" },
    title: {
      marginLeft: "-7px",
      fontSize: "14px",
      color: "#424242",
      textAlign: "left",
      fontWeight: 500,
    },
    formGroup: { marginTop: "8px" },
    formControl: {},
    checkbox: { padding: "0px", width: "32px", height: "32px" },
    checkboxRoot: { "&$checked": { color: "#027cb5" } },
    checked: {},
    label: { fontSize: "15px", marginLeft: "8px", color: "#4a4a4a" },
  },
  TableViewCol = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleColChange = function (e) {
          o.props.onColumnUpdate(e);
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "render",
          value: function () {
            var o = this,
              e = this.props,
              a = e.classes,
              t = e.columns,
              n = e.options.textLabels.viewColumns;
            return React.createElement(
              FormControl,
              {
                component: "fieldset",
                className: a.root,
                "aria-label": n.titleAria,
              },
              React.createElement(
                Typography,
                { variant: "caption", className: a.title },
                n.title
              ),
              React.createElement(
                FormGroup,
                { className: a.formGroup },
                t.map(function (e, t) {
                  return (
                    "excluded" !== e.display &&
                    !1 !== e.viewColumns &&
                    React.createElement(FormControlLabel, {
                      key: t,
                      classes: { root: a.formControl, label: a.label },
                      control: React.createElement(Checkbox, {
                        className: a.checkbox,
                        classes: { root: a.checkboxRoot, checked: a.checked },
                        onChange: o.handleColChange.bind(null, t),
                        checked: "true" === e.display,
                        value: e.name,
                      }),
                      label: e.name,
                    })
                  );
                })
              )
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableViewCol$1 = styles.withStyles(defaultViewColStyles, {
    name: "MUIDataTableViewCol",
  })(TableViewCol),
  defaultSearchStyles = {
    main: { display: "flex", flex: "1 0 auto" },
    searchIcon: { marginTop: "10px", marginRight: "8px" },
    searchText: { flex: "0.8 0" },
    clearIcon: { "&:hover": { color: "#FF0000" } },
  },
  TableSearch = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleTextChange = function (e) {
          var t = o.props.options.onSearchChange;
          t && t(e.target.value), o.props.onSearch(e.target.value);
        }),
        (o.onKeyDown = function (e) {
          27 === e.keyCode && o.props.onHide();
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.onKeyDown, !1);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.onKeyDown, !1);
          },
        },
        {
          key: "render",
          value: function () {
            var t = this,
              e = this.props,
              o = e.classes,
              a = e.options,
              n = e.onHide;
            return React.createElement(
              Grow,
              { appear: !0, in: !0, timeout: 300 },
              React.createElement(
                "div",
                {
                  className: o.main,
                  ref: function (e) {
                    return (t.rootRef = e);
                  },
                },
                React.createElement(SearchIcon, { className: o.searchIcon }),
                React.createElement(TextField$1, {
                  className: o.searchText,
                  autoFocus: !0,
                  InputProps: { "aria-label": a.textLabels.toolbar.search },
                  onChange: this.handleTextChange,
                  fullWidth: !0,
                  inputRef: function (e) {
                    return (t.searchField = e);
                  },
                }),
                React.createElement(
                  IconButton,
                  { className: o.clearIcon, onClick: n },
                  React.createElement(ClearIcon, null)
                )
              )
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableSearch$1 = styles.withStyles(defaultSearchStyles, {
    name: "MUIDataTableSearch",
  })(TableSearch),
  styles$1 = function (e, t, o) {
    return "function" == typeof o ? o(e, t) : o;
  },
  StyledComponent = (function (e) {
    function t() {
      return (
        classCallCheck(this, t),
        possibleConstructorReturn(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      inherits(t, e),
      createClass(t, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.classes,
              o = e.className,
              a = void 0 === o ? "" : o,
              n = e.WrappedComponent,
              r = objectWithoutProperties(e, [
                "classes",
                "className",
                "WrappedComponent",
              ]);
            return React.createElement(
              n,
              _extends({ classes: t, className: a }, r)
            );
          },
        },
      ]),
      t
    );
  })(React.Component),
  styled = function (e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    return function (a) {
      var o,
        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      return (
        (o = e),
        (function (e) {
          function t(o) {
            classCallCheck(this, t);
            var e = possibleConstructorReturn(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, o)
            );
            return (
              (e.FinalComponent = styles.withStyles(function (e) {
                var t = styles$1(e, o, a);
                return merge(t, o.styles ? o.styles : {});
              }, n)(StyledComponent)),
              e
            );
          }
          return (
            inherits(t, e),
            createClass(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = (e.styles, objectWithoutProperties(e, ["styles"]));
                  return React.createElement(
                    this.FinalComponent,
                    _extends({}, r, t, { WrappedComponent: o })
                  );
                },
              },
            ]),
            t
          );
        })(React.Component)
      );
    };
  };
function buildMap(e) {
  return e.reduce(function (e, t) {
    return (e[t.dataIndex] = !0), e;
  }, {});
}
function getCollatorComparator() {
  if (Intl)
    return new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" })
      .compare;
  return function (e, t) {
    return e.localeCompare(t);
  };
}
function sortCompare(o) {
  return function (e, t) {
    return (
      null === e.data && (e.data = ""),
      null === t.data && (t.data = ""),
      ("function" == typeof e.data.localeCompare
        ? e.data.localeCompare(t.data)
        : e.data - t.data) * ("asc" === o ? -1 : 1)
    );
  };
}
function createCSVDownload(o, e, a) {
  var t =
      "" +
      (o
        .reduce(function (e, t) {
          return t.download
            ? e + '"' + t.name + '"' + a.downloadOptions.separator
            : e;
        }, "")
        .slice(0, -1) +
        "\r\n") +
      e
        .reduce(function (e, t) {
          return (
            e +
            '"' +
            t.data
              .filter(function (e, t) {
                return o[t].download;
              })
              .join('"' + a.downloadOptions.separator + '"') +
            '"\r\n'
          );
        }, [])
        .trim(),
    n = new Blob([t], { type: "text/csv" });
  if (navigator && navigator.msSaveOrOpenBlob)
    navigator.msSaveOrOpenBlob(n, a.downloadOptions.filename);
  else {
    var r = "data:text/csv;charset=utf-8," + t,
      l = window.URL || window.webkitURL,
      i = void 0 === l.createObjectURL ? r : l.createObjectURL(n),
      s = document.createElement("a");
    s.setAttribute("href", i),
      s.setAttribute("download", a.downloadOptions.filename),
      document.body.appendChild(s),
      s.click(),
      document.body.removeChild(s);
  }
}
var defaultToolbarStyles = function (e, t) {
    return _extends(
      {
        root: {},
        left: { flex: "1 1 55%" },
        actions: { flex: "0 0 45%", textAlign: "right" },
        titleRoot: {},
        titleText: {},
        icon: { "&:hover": { color: "#307BB0" } },
        iconActive: { color: "#307BB0" },
        searchIcon: {
          display: "inline-flex",
          marginTop: "10px",
          marginRight: "8px",
        },
      },
      t.options.responsive ? _extends({}, responsiveToolbarStyles(e)) : {}
    );
  },
  responsiveToolbarStyles = function (e) {
    var t;
    return (
      defineProperty((t = {}), e.breakpoints.down("sm"), {
        titleRoot: {},
        titleText: { fontSize: "16px" },
        spacer: { display: "none" },
        left: { padding: "8px 0px" },
        actions: { textAlign: "right" },
      }),
      defineProperty(t, e.breakpoints.down("xs"), {
        root: { display: "block" },
        left: { padding: "8px 0px 0px 0px" },
        titleText: { textAlign: "center" },
        actions: { textAlign: "center" },
      }),
      defineProperty(t, "@media screen and (max-width: 480px)", {}),
      t
    );
  },
  TableToolbar = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).state = { iconActive: null, showSearch: !1 }),
        (o.handleCSVDownload = function () {
          var e = o.props,
            t = e.data;
          createCSVDownload(e.columns, t, e.options);
        }),
        (o.setActiveIcon = function (e) {
          o.setState(function () {
            return {
              iconActive: e,
              showSearch: "search" === e && o.showSearch(),
            };
          });
        }),
        (o.getActiveIcon = function (e, t) {
          return o.state.iconActive !== t ? e.icon : e.iconActive;
        }),
        (o.showSearch = function () {
          return (
            o.props.options.onSearchOpen && o.props.options.onSearchOpen(),
            o.props.setTableAction("onSearchOpen"),
            !0
          );
        }),
        (o.hideSearch = function () {
          var e = o.props.options.onSearchClose;
          e && e(),
            o.props.searchTextUpdate(null),
            o.setState(function () {
              return { iconActive: null, showSearch: !1 };
            }),
            o.searchButton.focus();
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "render",
          value: function () {
            var t = this,
              e = this.props,
              o = e.data,
              a = e.options,
              n = e.classes,
              r = e.columns,
              l = e.filterData,
              i = e.filterList,
              s = e.filterUpdate,
              c = e.resetFilters,
              u = e.searchTextUpdate,
              p = e.toggleViewColumn,
              d = e.title,
              f = e.tableRef,
              h = a.textLabels.toolbar,
              m = h.search,
              b = h.downloadCsv,
              y = h.print,
              R = h.viewColumns,
              g = h.filterTable,
              C = this.state.showSearch;
            return React.createElement(
              Toolbar,
              {
                className: n.root,
                role: "toolbar",
                "aria-label": "Table Toolbar",
              },
              React.createElement(
                "div",
                { className: n.left },
                !0 === C
                  ? React.createElement(TableSearch$1, {
                      onSearch: u,
                      onHide: this.hideSearch,
                      options: a,
                    })
                  : React.createElement(
                      "div",
                      { className: n.titleRoot, "aria-hidden": "true" },
                      React.createElement(
                        Typography,
                        { variant: "h6", className: n.titleText },
                        d
                      )
                    )
              ),
              React.createElement(
                "div",
                { className: n.actions },
                a.search &&
                  React.createElement(
                    Tooltip,
                    { title: m },
                    React.createElement(
                      IconButton,
                      {
                        "aria-label": m,
                        buttonRef: function (e) {
                          return (t.searchButton = e);
                        },
                        classes: { root: this.getActiveIcon(n, "search") },
                        onClick: this.setActiveIcon.bind(null, "search"),
                      },
                      React.createElement(SearchIcon, null)
                    )
                  ),
                a.download &&
                  React.createElement(
                    Tooltip,
                    { title: b },
                    React.createElement(
                      IconButton,
                      {
                        "aria-label": b,
                        classes: { root: n.icon },
                        onClick: this.handleCSVDownload,
                      },
                      React.createElement(DownloadIcon, null)
                    )
                  ),
                a.print &&
                  React.createElement(
                    Tooltip,
                    { title: y },
                    React.createElement(
                      "span",
                      null,
                      React.createElement(ReactToPrint, {
                        trigger: function () {
                          return React.createElement(
                            IconButton,
                            { "aria-label": y, classes: { root: n.icon } },
                            React.createElement(PrintIcon, null)
                          );
                        },
                        content: function () {
                          return t.props.tableRef();
                        },
                      })
                    )
                  ),
                a.viewColumns &&
                  React.createElement(Popover, {
                    refExit: this.setActiveIcon.bind(null),
                    container: f,
                    trigger: React.createElement(
                      IconButton,
                      {
                        "aria-label": R,
                        classes: { root: this.getActiveIcon(n, "viewcolumns") },
                        onClick: this.setActiveIcon.bind(null, "viewcolumns"),
                      },
                      React.createElement(
                        Tooltip,
                        { title: R },
                        React.createElement(ViewColumnIcon, null)
                      )
                    ),
                    content: React.createElement(TableViewCol$1, {
                      data: o,
                      columns: r,
                      options: a,
                      onColumnUpdate: p,
                    }),
                  }),
                a.filter &&
                  React.createElement(Popover, {
                    refExit: this.setActiveIcon.bind(null),
                    container: f,
                    trigger: React.createElement(
                      IconButton,
                      {
                        "aria-label": g,
                        classes: { root: this.getActiveIcon(n, "filter") },
                        onClick: this.setActiveIcon.bind(null, "filter"),
                      },
                      React.createElement(
                        Tooltip,
                        { title: g },
                        React.createElement(FilterIcon, null)
                      )
                    ),
                    content: React.createElement(TableFilter$1, {
                      columns: r,
                      options: a,
                      filterList: i,
                      filterData: l,
                      onFilterUpdate: s,
                      onFilterReset: c,
                    }),
                  }),
                a.customToolbar && a.customToolbar()
              )
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableToolbar$1 = styled(TableToolbar)(defaultToolbarStyles, {
    name: "MUIDataTableToolbar",
  }),
  defaultToolbarSelectStyles = {
    root: {
      backgroundColor: "#f7f7f7",
      flex: "1 1 100%",
      display: "flex",
      height: "64px",
      position: "relative",
      zIndex: 120,
      justifyContent: "space-between",
    },
    title: {
      paddingLeft: "26px",
      top: "50%",
      position: "relative",
      transform: "translateY(-50%)",
    },
    iconButton: {
      marginRight: "24px",
      top: "50%",
      display: "block",
      position: "relative",
      transform: "translateY(-50%)",
    },
    deleteIcon: { color: "#000" },
  },
  TableToolbarSelect = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleCustomSelectedRows = function (e) {
          if (!Array.isArray(e))
            throw new TypeError(
              '"selectedRows" must be an "array", but it\'s "' +
                (void 0 === e ? "undefined" : _typeof(e)) +
                '"'
            );
          if (
            e.some(function (e) {
              return "number" != typeof e;
            })
          )
            throw new TypeError(
              'Array "selectedRows" must contain only numbers'
            );
          o.props.selectRowUpdate("custom", e);
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.classes,
              o = e.onRowsDelete,
              a = e.selectedRows,
              n = e.options,
              r = e.displayData,
              l = n.textLabels.selectedRows;
            return React.createElement(
              Paper,
              { className: t.root },
              React.createElement(
                "div",
                null,
                React.createElement(
                  Typography,
                  { variant: "subtitle1", className: t.title },
                  a.data.length,
                  " ",
                  l.text
                )
              ),
              n.customToolbarSelect
                ? n.customToolbarSelect(a, r, this.handleCustomSelectedRows)
                : React.createElement(
                    Tooltip,
                    { title: l.delete },
                    React.createElement(
                      IconButton,
                      {
                        className: t.iconButton,
                        onClick: o,
                        "aria-label": l.deleteAria,
                      },
                      React.createElement(DeleteIcon, {
                        className: t.deleteIcon,
                      })
                    )
                  )
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableToolbarSelect$1 = styles.withStyles(defaultToolbarSelectStyles, {
    name: "MUIDataTableToolbarSelect",
  })(TableToolbarSelect),
  defaultFilterListStyles = {
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      margin: "0px 16px 0px 16px",
    },
    chip: { margin: "8px 8px 0px 0px" },
  },
  TableFilterList = (function (e) {
    function t() {
      return (
        classCallCheck(this, t),
        possibleConstructorReturn(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      inherits(t, e),
      createClass(t, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              a = e.classes,
              t = e.filterList,
              n = e.filterUpdate;
            return React.createElement(
              "div",
              { className: a.root },
              t.map(function (e, o) {
                return e.map(function (e, t) {
                  return React.createElement(Chip, {
                    label: e,
                    key: t,
                    onDelete: n.bind(null, o, e, "checkbox"),
                    className: a.chip,
                  });
                });
              })
            );
          },
        },
      ]),
      t
    );
  })(React.Component),
  TableFilterList$1 = styles.withStyles(defaultFilterListStyles, {
    name: "MUIDataTableFilterList",
  })(TableFilterList),
  defaultBodyCellStyles = function (e) {
    return {
      root: {},
      cellHide: { display: "none" },
      cellStacked: defineProperty({}, e.breakpoints.down("sm"), {
        display: "inline-block",
        backgroundColor: "#FFF",
        fontSize: "16px",
        height: "24px",
        width: "calc(50% - 80px)",
        whiteSpace: "nowrap",
      }),
      responsiveStacked: defineProperty({}, e.breakpoints.down("sm"), {
        display: "inline-block",
        fontSize: "16px",
        width: "calc(50% - 80px)",
        whiteSpace: "nowrap",
        height: "24px",
      }),
    };
  },
  TableBodyCell = (function (e) {
    function l() {
      var e, t, r;
      classCallCheck(this, l);
      for (var o = arguments.length, a = Array(o), n = 0; n < o; n++)
        a[n] = arguments[n];
      return (
        ((t = r =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(a)
            )
          )).handleClick = function () {
          var e = r.props,
            t = e.colIndex,
            o = e.options,
            a = e.children,
            n = (e.dataIndex, e.rowIndex);
          o.onCellClick && o.onCellClick(a, { colIndex: t, rowIndex: n });
        }),
        possibleConstructorReturn(r, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "render",
          value: function () {
            var e,
              t,
              o = this.props,
              a = o.children,
              n = o.classes,
              r = (o.colIndex, o.columnHeader),
              l = o.options,
              i = (o.dataIndex, o.rowIndex, o.className),
              s = objectWithoutProperties(o, [
                "children",
                "classes",
                "colIndex",
                "columnHeader",
                "options",
                "dataIndex",
                "rowIndex",
                "className",
              ]);
            return [
              React.createElement(
                TableCell,
                {
                  key: 1,
                  className: classNames(
                    ((e = {}),
                    defineProperty(e, n.root, !0),
                    defineProperty(e, n.cellHide, !0),
                    defineProperty(
                      e,
                      n.cellStacked,
                      "stacked" === l.responsive
                    ),
                    e),
                    i
                  ),
                },
                r
              ),
              React.createElement(
                TableCell,
                _extends(
                  {
                    key: 2,
                    onClick: this.handleClick,
                    className: classNames(
                      ((t = {}),
                      defineProperty(t, n.root, !0),
                      defineProperty(
                        t,
                        n.responsiveStacked,
                        "stacked" === l.responsive
                      ),
                      t),
                      i
                    ),
                  },
                  s
                ),
                a
              ),
            ];
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableBodyCell$1 = styles.withStyles(defaultBodyCellStyles, {
    name: "MUIDataTableBodyCell",
  })(TableBodyCell),
  defaultBodyRowStyles = function (e) {
    return {
      root: {},
      responsiveStacked: defineProperty({}, e.breakpoints.down("sm"), {
        border: "solid 2px rgba(0, 0, 0, 0.15)",
      }),
    };
  },
  TableBodyRow = (function (e) {
    function t() {
      return (
        classCallCheck(this, t),
        possibleConstructorReturn(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      inherits(t, e),
      createClass(t, [
        {
          key: "render",
          value: function () {
            var e,
              t = this.props,
              o = t.classes,
              a = t.options,
              n = t.rowSelected,
              r = t.onClick,
              l = t.className,
              i = objectWithoutProperties(t, [
                "classes",
                "options",
                "rowSelected",
                "onClick",
                "className",
              ]);
            return React.createElement(
              TableRow,
              _extends(
                {
                  hover: !!a.rowHover,
                  onClick: r,
                  className: classNames(
                    ((e = {}),
                    defineProperty(e, o.root, !0),
                    defineProperty(
                      e,
                      o.responsiveStacked,
                      "stacked" === a.responsive
                    ),
                    e),
                    l
                  ),
                  selected: n,
                },
                i
              ),
              this.props.children
            );
          },
        },
      ]),
      t
    );
  })(React.Component),
  TableBodyRow$1 = styles.withStyles(defaultBodyRowStyles, {
    name: "MUIDataTableBodyRow",
  })(TableBodyRow),
  defaultSelectCellStyles = function (e) {
    return {
      root: defineProperty({}, e.breakpoints.down("sm"), { display: "none" }),
      fixedHeader: { position: "sticky", top: "0px", left: "0px", zIndex: 100 },
      icon: { cursor: "pointer", transition: "transform 0.25s" },
      expanded: { transform: "rotate(90deg)" },
      hide: { visibility: "hidden" },
      headerCell: { zIndex: 110, backgroundColor: "#FFF" },
      checkboxRoot: { "&$checked": { color: "#027cb5" } },
      checked: {},
      disabled: {},
    };
  },
  TableSelectCell = (function (e) {
    function t() {
      return (
        classCallCheck(this, t),
        possibleConstructorReturn(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      inherits(t, e),
      createClass(t, [
        {
          key: "render",
          value: function () {
            var e,
              t,
              o = this.props,
              a = o.classes,
              n = o.fixedHeader,
              r = o.isHeaderCell,
              l = o.isExpandable,
              i = o.isRowExpanded,
              s = o.onExpand,
              c = o.isRowSelectable,
              u = objectWithoutProperties(o, [
                "classes",
                "fixedHeader",
                "isHeaderCell",
                "isExpandable",
                "isRowExpanded",
                "onExpand",
                "isRowSelectable",
              ]),
              p = classNames(
                (defineProperty((e = {}), a.root, !0),
                defineProperty(e, a.fixedHeader, n),
                defineProperty(e, a.headerCell, r),
                e)
              ),
              d = classNames(
                (defineProperty((t = {}), a.icon, !0),
                defineProperty(t, a.hide, r),
                defineProperty(t, a.expanded, i),
                t)
              );
            return React.createElement(
              TableCell,
              { className: p, padding: "checkbox" },
              React.createElement(
                "div",
                { style: { display: "flex", alignItems: "center" } },
                l &&
                  React.createElement(KeyboardArrowRight, {
                    className: d,
                    onClick: s,
                  }),
                React.createElement(
                  Checkbox,
                  _extends(
                    {
                      classes: {
                        root: a.checkboxRoot,
                        checked: a.checked,
                        disabled: a.disabled,
                      },
                      disabled: !c,
                    },
                    u
                  )
                )
              )
            );
          },
        },
      ]),
      t
    );
  })(React.Component);
TableSelectCell.defaultProps = {
  isHeaderCell: !1,
  isExpandable: !1,
  isRowExpanded: !1,
};
var TableSelectCell$1 = styles.withStyles(defaultSelectCellStyles, {
    name: "MUIDataTableSelectCell",
  })(TableSelectCell),
  defaultBodyStyles = { root: {}, emptyTitle: { textAlign: "center" } },
  TableBody = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleRowSelect = function (e) {
          o.props.selectRowUpdate("cell", e);
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "buildRows",
          value: function () {
            var e = this.props,
              t = e.data,
              o = e.page,
              a = e.rowsPerPage,
              n = e.count;
            if (this.props.options.serverSide) return t.length ? t : null;
            var r = [],
              l = Math.floor(n / a),
              i = 0 === o ? 0 : o * a,
              s = Math.min(n, (o + 1) * a);
            if (l < o && 0 !== l)
              throw new Error(
                "Provided options.page of `" +
                  o +
                  "` is greater than the total available page length of `" +
                  l +
                  "`"
              );
            for (var c = i; c < n && c < s; c++)
              void 0 !== t[c] && r.push(t[c]);
            return r.length ? r : null;
          },
        },
        {
          key: "getRowIndex",
          value: function (e) {
            var t = this.props,
              o = t.page,
              a = t.rowsPerPage;
            return t.options.serverSide ? e : (0 === o ? 0 : o * a) + e;
          },
        },
        {
          key: "isRowSelected",
          value: function (e) {
            var t = this.props.selectedRows;
            return !(!t.lookup || !t.lookup[e]);
          },
        },
        {
          key: "isRowExpanded",
          value: function (e) {
            var t = this.props.expandedRows;
            return !(!t.lookup || !t.lookup[e]);
          },
        },
        {
          key: "isRowSelectable",
          value: function (e) {
            var t = this.props.options;
            return !t.isRowSelectable || t.isRowSelectable(e);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              e = this.props,
              t = e.classes,
              r = e.columns,
              l = e.toggleExpandRow,
              i = e.options,
              o = this.buildRows();
            return React.createElement(
              MuiTableBody,
              null,
              o
                ? o.map(function (e, o) {
                    var t = e.data,
                      a = e.dataIndex;
                    return React.createElement(
                      React.Fragment,
                      { key: o },
                      React.createElement(
                        TableBodyRow$1,
                        _extends({}, i.setRowProps ? i.setRowProps(t, a) : {}, {
                          options: i,
                          rowSelected: !!i.selectableRows && n.isRowSelected(a),
                          onClick: i.onRowClick
                            ? i.onRowClick.bind(null, t, {
                                rowIndex: o,
                                dataIndex: a,
                              })
                            : null,
                          id: "MUIDataTableBodyRow-" + a,
                        }),
                        i.selectableRows &&
                          React.createElement(TableSelectCell$1, {
                            onChange: n.handleRowSelect.bind(null, {
                              index: n.getRowIndex(o),
                              dataIndex: a,
                            }),
                            onExpand: l.bind(null, {
                              index: n.getRowIndex(o),
                              dataIndex: a,
                            }),
                            fixedHeader: i.fixedHeader,
                            checked: n.isRowSelected(a),
                            isExpandable: i.expandableRows,
                            isRowExpanded: n.isRowExpanded(a),
                            isRowSelectable: n.isRowSelectable(a),
                          }),
                        t.map(function (e, t) {
                          return (
                            "true" === r[t].display &&
                            React.createElement(
                              TableBodyCell$1,
                              _extends(
                                {},
                                r[t].setCellProps
                                  ? r[t].setCellProps(e, a, t)
                                  : {},
                                {
                                  dataIndex: a,
                                  rowIndex: o,
                                  colIndex: t,
                                  columnHeader: r[t].name,
                                  options: i,
                                  key: t,
                                }
                              ),
                              e
                            )
                          );
                        })
                      ),
                      n.isRowExpanded(a) &&
                        i.renderExpandableRow(t, { rowIndex: o, dataIndex: a })
                    );
                  })
                : React.createElement(
                    TableBodyRow$1,
                    { options: i },
                    React.createElement(
                      TableBodyCell$1,
                      {
                        colSpan: i.selectableRows ? r.length + 1 : r.length,
                        options: i,
                        colIndex: 0,
                        rowIndex: 0,
                      },
                      React.createElement(
                        Typography,
                        { variant: "subtitle1", className: t.emptyTitle },
                        i.textLabels.body.noMatch
                      )
                    )
                  )
            );
          },
        },
      ]),
      l
    );
  })(React.Component);
TableBody.defaultProps = { toggleExpandRow: function () {} };
var TableBody$1 = styles.withStyles(defaultBodyStyles, {
    name: "MUIDataTableBody",
  })(TableBody),
  defaultResizeStyles = {
    root: { position: "absolute" },
    resizer: {
      position: "absolute",
      width: "1px",
      height: "100%",
      left: "100px",
      cursor: "ew-resize",
      border: "0.1px solid rgba(224, 224, 224, 1)",
    },
  },
  TableResize = (function (e) {
    function r() {
      var e, t, c;
      classCallCheck(this, r);
      for (var o = arguments.length, a = Array(o), n = 0; n < o; n++)
        a[n] = arguments[n];
      return (
        ((t = c =
          possibleConstructorReturn(
            this,
            (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
              e,
              [this].concat(a)
            )
          )).state = {
          resizeCoords: {},
          startPosition: 0,
          tableWidth: "100%",
          tableHeight: "100%",
        }),
        (c.handleReize = function () {
          window.innerWidth !== c.windowWidth &&
            ((c.windowWidth = window.innerWidth), c.setDividers());
        }),
        (c.setCellRefs = function (e, t) {
          (c.cellsRef = e), (c.tableRef = t), c.setDividers();
        }),
        (c.setDividers = function () {
          var e = reactDom.findDOMNode(c.tableRef).getBoundingClientRect(),
            t = e.width,
            o = e.height,
            l = {};
          Object.entries(c.cellsRef).forEach(function (e) {
            var t = slicedToArray(e, 2),
              o = t[0],
              a = t[1],
              n = a.getBoundingClientRect(),
              r = window.getComputedStyle(a, null);
            l[o] = {
              left: n.left + a.offsetWidth - parseInt(r.paddingLeft) / 2,
            };
          }),
            c.setState(
              { tableWidth: t, tableHeight: o, resizeCoords: l },
              c.updateWidths()
            );
        }),
        (c.updateWidths = function () {
          var r = 0,
            e = c.state,
            t = e.resizeCoords,
            l = e.tableWidth;
          e.tableHeight;
          Object.entries(t).forEach(function (e) {
            var t = slicedToArray(e, 2),
              o = t[0],
              a = t[1],
              n = Number(((a.left - r) / l) * 100).toFixed(2);
            (a.percent = n),
              (r = a.left),
              (c.cellsRef[o].style.width = n + "%");
          });
        }),
        (c.onResizeStart = function (e, t) {
          c.setState({ isResize: !0, id: e, startPosition: t.clientX });
        }),
        (c.onResizeMove = function (e, t) {
          var o = c.state,
            a = o.startPosition,
            n = o.isResize,
            r = o.resizeCoords;
          if (n) {
            var l = a - (a - t.clientX),
              i = _extends({}, r[e], { left: l }),
              s = _extends({}, r, defineProperty({}, e, i));
            c.setState({ resizeCoords: s }, c.updateWidths());
          }
        }),
        (c.onResizeEnd = function (e, t) {
          c.setState({ isResize: !1, id: null });
        }),
        possibleConstructorReturn(c, t)
      );
    }
    return (
      inherits(r, e),
      createClass(r, [
        {
          key: "componentDidMount",
          value: function () {
            var e = this;
            (this.windowWidth = null),
              this.props.setResizeable(this.setCellRefs),
              this.props.updateDividers(function () {
                return e.setState({ updateCoords: !0 }, function () {
                  return e.updateWidths();
                });
              }),
              window.addEventListener("resize", this.handleReize, !1);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            window.removeEventListener("resize", this.handleReize, !1);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              e = this.props,
              r = e.classes,
              t = (e.options, e.rowSelected, this.state),
              l = t.id,
              i = t.isResize,
              o = t.resizeCoords,
              s = t.tableWidth,
              c = t.tableHeight;
            return React.createElement(
              "div",
              { className: r.root, style: { width: s } },
              Object.entries(o).map(function (e) {
                var t = slicedToArray(e, 2),
                  o = t[0],
                  a = t[1];
                return React.createElement(
                  "div",
                  {
                    "aria-hidden": "true",
                    key: o,
                    onMouseMove: n.onResizeMove.bind(null, o),
                    onMouseUp: n.onResizeEnd.bind(null, o),
                    style: {
                      width: i && l == o ? s : "auto",
                      position: "absolute",
                      height: c,
                      zIndex: 1e3,
                    },
                  },
                  React.createElement("div", {
                    "aria-hidden": "true",
                    onMouseDown: n.onResizeStart.bind(null, o),
                    className: r.resizer,
                    style: { left: a.left },
                  })
                );
              })
            );
          },
        },
      ]),
      r
    );
  })(React.Component),
  TableResize$1 = styles.withStyles(defaultResizeStyles, {
    name: "MUIDataTableResize",
  })(TableResize),
  defaultHeadRowStyles = { root: {} },
  TableHeadRow = (function (e) {
    function t() {
      return (
        classCallCheck(this, t),
        possibleConstructorReturn(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      inherits(t, e),
      createClass(t, [
        {
          key: "render",
          value: function () {
            var e = this.props.classes;
            return React.createElement(
              TableRow,
              { className: classNames(defineProperty({}, e.root, !0)) },
              this.props.children
            );
          },
        },
      ]),
      t
    );
  })(React.Component),
  TableHeadRow$1 = styles.withStyles(defaultHeadRowStyles, {
    name: "MUIDataTableHeadRow",
  })(TableHeadRow),
  defaultHeadCellStyles = {
    root: {},
    fixedHeader: {
      position: "sticky",
      top: "0px",
      left: "0px",
      zIndex: 100,
      backgroundColor: "#FFF",
    },
    tooltip: { cursor: "pointer" },
    mypopper: { "&[data-x-out-of-boundaries]": { display: "none" } },
    data: { display: "inline-block" },
    sortAction: {
      display: "inline-block",
      verticalAlign: "top",
      cursor: "pointer",
      paddingLeft: "4px",
      height: "10px",
    },
    sortActive: { color: "rgba(0, 0, 0, 0.87)" },
    toolButton: { height: "10px", outline: "none", cursor: "pointer" },
  },
  TableHeadCell = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleSortClick = function () {
          o.props.toggleSort(o.props.index);
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "render",
          value: function () {
            var e,
              t,
              o = this.props,
              a = o.children,
              n = o.classes,
              r = o.options,
              l = o.sortDirection,
              i = o.sort,
              s = o.hint,
              c = null != l,
              u = _extends({ active: c }, l ? { direction: l } : {}),
              p = classNames(
                (defineProperty((e = {}), n.root, !0),
                defineProperty(e, n.fixedHeader, r.fixedHeader),
                e)
              );
            return React.createElement(
              TableCell,
              { className: p, scope: "col", sortDirection: l },
              r.sort && i
                ? React.createElement(
                    Tooltip,
                    defineProperty(
                      {
                        title: r.textLabels.body.toolTip,
                        placement: "bottom-end",
                        classes: { tooltip: n.tooltip },
                        enterDelay: 300,
                      },
                      "classes",
                      { popper: n.mypopper }
                    ),
                    React.createElement(
                      "span",
                      {
                        role: "button",
                        onKeyUp: this.handleClickSort,
                        onClick: this.handleSortClick,
                        className: n.toolButton,
                        tabIndex: 0,
                      },
                      React.createElement(
                        "div",
                        {
                          className: classNames(
                            ((t = {}),
                            defineProperty(t, n.data, !0),
                            defineProperty(t, n.sortActive, c),
                            t)
                          ),
                        },
                        a
                      ),
                      React.createElement(
                        "div",
                        { className: n.sortAction },
                        React.createElement(TableSortLabel, u)
                      )
                    )
                  )
                : a,
              s &&
                React.createElement(
                  Tooltip,
                  defineProperty(
                    {
                      title: s,
                      placement: "bottom-end",
                      classes: { tooltip: n.tooltip },
                      enterDelay: 300,
                    },
                    "classes",
                    { popper: n.mypopper }
                  ),
                  React.createElement(HelpIcon, { fontSize: "small" })
                )
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableHeadCell$1 = styles.withStyles(defaultHeadCellStyles, {
    name: "MUIDataTableHeadCell",
  })(TableHeadCell),
  defaultHeadStyles = function (e) {
    return {
      main: {},
      responsiveStacked: defineProperty({}, e.breakpoints.down("sm"), {
        display: "none",
      }),
    };
  },
  TableHead = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleToggleColumn = function (e) {
          o.props.toggleSort(e);
        }),
        (o.handleRowSelect = function () {
          o.props.selectRowUpdate("head", null);
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "componentDidMount",
          value: function () {
            this.props.handleHeadUpdateRef(this.handleUpdateCheck);
          },
        },
        {
          key: "render",
          value: function () {
            var e,
              o = this,
              t = this.props,
              a = t.classes,
              n = t.columns,
              r = t.count,
              l = t.options,
              i = (t.data, t.page, t.setCellRef),
              s = t.selectedRows,
              c = (s && s.data.length) || 0,
              u = 0 < c && c < r,
              p = c === r;
            return React.createElement(
              MuiTableHead,
              {
                className: classNames(
                  ((e = {}),
                  defineProperty(
                    e,
                    a.responsiveStacked,
                    "stacked" === l.responsive
                  ),
                  defineProperty(e, a.main, !0),
                  e)
                ),
              },
              React.createElement(
                TableHeadRow$1,
                null,
                l.selectableRows &&
                  React.createElement(TableSelectCell$1, {
                    ref: function (e) {
                      return i(0, reactDom.findDOMNode(e));
                    },
                    onChange: this.handleRowSelect.bind(null),
                    indeterminate: u,
                    checked: p,
                    isHeaderCell: !0,
                    isExpandable: l.expandableRows,
                    fixedHeader: l.fixedHeader,
                    isRowSelectable: !0,
                  }),
                n.map(function (e, t) {
                  return (
                    "true" === e.display &&
                    (e.customHeadRender
                      ? e.customHeadRender(
                          _extends({ index: t }, e),
                          o.handleToggleColumn
                        )
                      : React.createElement(
                          TableHeadCell$1,
                          {
                            key: t,
                            index: t,
                            type: "cell",
                            ref: function (e) {
                              return i(t + 1, reactDom.findDOMNode(e));
                            },
                            sort: e.sort,
                            sortDirection: e.sortDirection,
                            toggleSort: o.handleToggleColumn,
                            hint: e.hint,
                            options: l,
                          },
                          e.name
                        ))
                  );
                })
              )
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TableHead$1 = styles.withStyles(defaultHeadStyles, {
    name: "MUIDataTableHead",
  })(TableHead),
  defaultPaginationStyles = {
    root: { "&:last-child": { padding: "0px 24px 0px 24px" } },
    toolbar: {},
    selectRoot: {},
    "@media screen and (max-width: 400px)": {
      toolbar: { "& span:nth-child(2)": { display: "none" } },
      selectRoot: { marginRight: "8px" },
    },
  },
  TablePagination = (function (e) {
    function l() {
      var e, t, o;
      classCallCheck(this, l);
      for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      return (
        ((t = o =
          possibleConstructorReturn(
            this,
            (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
              e,
              [this].concat(n)
            )
          )).handleRowChange = function (e) {
          o.props.changeRowsPerPage(e.target.value);
        }),
        (o.handlePageChange = function (e, t) {
          o.props.options;
          o.props.changePage(t);
        }),
        possibleConstructorReturn(o, t)
      );
    }
    return (
      inherits(l, e),
      createClass(l, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.count,
              o = e.classes,
              a = e.options,
              n = e.rowsPerPage,
              r = e.page,
              l = a.textLabels.pagination;
            return React.createElement(
              MuiTableFooter,
              null,
              React.createElement(
                TableRow,
                null,
                React.createElement(MuiTablePagination, {
                  className: o.root,
                  classes: {
                    caption: o.caption,
                    toolbar: o.toolbar,
                    selectRoot: o.selectRoot,
                  },
                  count: t,
                  rowsPerPage: n,
                  page: r,
                  labelRowsPerPage: l.rowsPerPage,
                  labelDisplayedRows: function (e) {
                    var t = e.from,
                      o = e.to,
                      a = e.count;
                    return t + "-" + o + " " + l.displayRows + " " + a;
                  },
                  backIconButtonProps: { "aria-label": l.previous },
                  nextIconButtonProps: { "aria-label": l.next },
                  rowsPerPageOptions: a.rowsPerPageOptions,
                  onChangePage: this.handlePageChange,
                  onChangeRowsPerPage: this.handleRowChange,
                })
              )
            );
          },
        },
      ]),
      l
    );
  })(React.Component),
  TablePagination$1 = styles.withStyles(defaultPaginationStyles, {
    name: "MUIDataTablePagination",
  })(TablePagination),
  TableFooter = (function (e) {
    function t() {
      return (
        classCallCheck(this, t),
        possibleConstructorReturn(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      inherits(t, e),
      createClass(t, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.options,
              o = e.rowCount,
              a = e.page,
              n = e.rowsPerPage,
              r = e.changeRowsPerPage,
              l = e.changePage;
            return React.createElement(
              MuiTable,
              null,
              t.customFooter
                ? t.customFooter(o, a, n, r, l)
                : t.pagination &&
                    React.createElement(TablePagination$1, {
                      count: o,
                      page: a,
                      rowsPerPage: n,
                      changeRowsPerPage: r,
                      changePage: l,
                      component: "div",
                      options: t,
                    })
            );
          },
        },
      ]),
      t
    );
  })(React.Component),
  textLabels = {
    body: { noMatch: "Sorry, no matching records found", toolTip: "Sort" },
    pagination: {
      next: "Next Page",
      previous: "Previous Page",
      rowsPerPage: "Rows per page:",
      displayRows: "of",
    },
    toolbar: {
      search: "Search",
      downloadCsv: "Download CSV",
      print: "Print",
      viewColumns: "View Columns",
      filterTable: "Filter Table",
    },
    filter: { all: "All", title: "FILTERS", reset: "RESET" },
    viewColumns: {
      title: "Show Columns",
      titleAria: "Show/Hide Table Columns",
    },
    selectedRows: {
      text: "row(s) selected",
      delete: "Delete",
      deleteAria: "Delete Selected Rows",
    },
  },
  defaultTableStyles = {
    root: {},
    responsiveScroll: {
      overflowX: "auto",
      overflow: "auto",
      height: "100%",
      maxHeight: "499px",
    },
    caption: { position: "absolute", left: "-3000px" },
    liveAnnounce: {
      border: "0",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
    },
  },
  TABLE_LOAD = { INITIAL: 1, UPDATE: 2 },
  MUIDataTable$1 = (function (e) {
    function t() {
      classCallCheck(this, t);
      var p = possibleConstructorReturn(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
      );
      return (
        (p.state = {
          announceText: null,
          activeColumn: null,
          data: [],
          displayData: [],
          page: 0,
          rowsPerPage: 0,
          columns: [],
          filterData: [],
          filterList: [],
          selectedRows: { data: [], lookup: {} },
          expandedRows: { data: [], lookup: {} },
          showResponsive: !1,
          searchText: null,
        }),
        (p.setTableAction = function (e) {
          "function" == typeof p.options.onTableChange &&
            p.options.onTableChange(e, p.state);
        }),
        (p.setHeadCellRef = function (e, t) {
          p.headCellRefs[e] = t;
        }),
        (p.getTableContentRef = function () {
          return p.tableContent.current;
        }),
        (p.rawColumns = function (e) {
          return e.map(function (e) {
            if ("object" !== (void 0 === e ? "undefined" : _typeof(e)))
              return e;
            var t = {},
              o = e.options,
              a = objectWithoutProperties(e, ["options"]);
            if (o) {
              o.customHeadRender, o.customBodyRender, o.setCellProps;
              t = objectWithoutProperties(o, [
                "customHeadRender",
                "customBodyRender",
                "setCellProps",
              ]);
            }
            return _extends({}, t, a);
          });
        }),
        (p.buildColumns = function (e) {
          var a = [],
            n = [],
            r = [];
          if (
            p.state.columns.length &&
            isEqual(p.rawColumns(e), p.rawColumns(p.props.columns))
          ) {
            var t = p.state;
            return {
              columns: t.columns,
              filterList: t.filterList,
              filterData: t.filterData,
            };
          }
          return (
            e.forEach(function (e, t) {
              var o = {
                display: "true",
                filter: !0,
                sort: !0,
                download: !0,
                viewColumns: !0,
                sortDirection: null,
              };
              (o =
                "object" === (void 0 === e ? "undefined" : _typeof(e))
                  ? (e.options &&
                      void 0 !== e.options.display &&
                      (e.options.display = e.options.display.toString()),
                    _extends({ name: e.name }, o, e.options ? e.options : {}))
                  : _extends({}, o, { name: e })),
                a.push(o),
                (n[t] = []),
                (r[t] = []);
            }),
            { columns: a, filterData: n, filterList: r }
          );
        }),
        (p.hasSearchText = function (e, t, o) {
          var a = e.toString(),
            n = t.toString();
          return (
            o || ((n = n.toLowerCase()), (a = a.toLowerCase())),
            0 <= a.indexOf(n)
          );
        }),
        (p.updateDataCol = function (s, c, u) {
          p.setState(function (e) {
            var t = cloneDeep(e.data),
              o = cloneDeep(e.filterData),
              a = p.getTableMeta(s, c, s, e.columns[c], e.data, e),
              n = e.columns[c].customBodyRender(u, a),
              r =
                React.isValidElement(n) && n.props.value
                  ? n.props.value
                  : e.data[s][c],
              l = o[c].indexOf(r);
            if (
              (o[c].splice(l, 1, r),
              (t[s].data[c] = u),
              p.options.sortFilterList)
            ) {
              var i = getCollatorComparator();
              o[c].sort(i);
            }
            return {
              data: t,
              filterData: o,
              displayData: p.getDisplayData(
                e.columns,
                t,
                e.filterList,
                e.searchText
              ),
            };
          });
        }),
        (p.getTableMeta = function (e, t, o, a, n, r) {
          r.columns, r.data, r.displayData, r.filterData;
          return {
            rowIndex: e,
            columnIndex: t,
            columnData: a,
            rowData: o,
            tableData: n,
            tableState: objectWithoutProperties(r, [
              "columns",
              "data",
              "displayData",
              "filterData",
            ]),
          };
        }),
        (p.toggleViewColumn = function (o) {
          p.setState(
            function (e) {
              var t = cloneDeep(e.columns);
              return (
                (t[o].display = "true" === t[o].display ? "false" : "true"),
                { columns: t }
              );
            },
            function () {
              p.setTableAction("columnViewChange"),
                p.options.onColumnViewChange &&
                  p.options.onColumnViewChange(
                    p.state.columns[o].name,
                    "true" === p.state.columns[o].display ? "add" : "remove"
                  );
            }
          );
        }),
        (p.toggleSortColumn = function (s) {
          p.setState(
            function (e) {
              for (
                var t = cloneDeep(e.columns),
                  o = e.data,
                  a = e.columns[s].sortDirection,
                  n = 0;
                n < t.length;
                n++
              )
                t[n].sortDirection =
                  s !== n
                    ? null
                    : "asc" === t[n].sortDirection
                    ? "desc"
                    : "asc";
              var r = p.getSortDirection(t[s]),
                l = {
                  columns: t,
                  announceText: "Table now sorted by " + t[s].name + " : " + r,
                  activeColumn: s,
                };
              if (p.options.serverSide)
                l = _extends({}, l, {
                  data: e.data,
                  displayData: e.displayData,
                  selectedRows: e.selectedRows,
                });
              else {
                var i = p.sortTable(o, s, a);
                l = _extends({}, l, {
                  data: i.data,
                  displayData: p.getDisplayData(
                    t,
                    i.data,
                    e.filterList,
                    e.searchText
                  ),
                  selectedRows: i.selectedRows,
                });
              }
              return l;
            },
            function () {
              p.setTableAction("sort"),
                p.options.onColumnSortChange &&
                  p.options.onColumnSortChange(
                    p.state.columns[s].name,
                    p.getSortDirection(p.state.columns[s])
                  );
            }
          );
        }),
        (p.changeRowsPerPage = function (e) {
          var t = p.options.count || p.state.displayData.length,
            o = Math.floor(t / e);
          p.setState(
            function () {
              return {
                rowsPerPage: e,
                page: p.state.page > o ? o : p.state.page,
              };
            },
            function () {
              p.setTableAction("changeRowsPerPage"),
                p.options.onChangeRowsPerPage &&
                  p.options.onChangeRowsPerPage(p.state.rowsPerPage);
            }
          );
        }),
        (p.changePage = function (e) {
          p.setState(
            function () {
              return { page: e };
            },
            function () {
              p.setTableAction("changePage"),
                p.options.onChangePage && p.options.onChangePage(p.state.page);
            }
          );
        }),
        (p.searchTextUpdate = function (t) {
          p.setState(
            function (e) {
              return {
                searchText: t && t.length ? t : null,
                page: 0,
                displayData: p.options.serverSide
                  ? e.displayData
                  : p.getDisplayData(e.columns, e.data, e.filterList, t),
              };
            },
            function () {
              p.setTableAction("search");
            }
          );
        }),
        (p.resetFilters = function () {
          p.setState(
            function (e) {
              var t = e.columns.map(function (e, t) {
                return [];
              });
              return {
                filterList: t,
                displayData: p.options.serverSide
                  ? e.displayData
                  : p.getDisplayData(e.columns, e.data, t, e.searchText),
              };
            },
            function () {
              p.setTableAction("resetFilters"),
                p.options.onFilterChange &&
                  p.options.onFilterChange(null, p.state.filterList);
            }
          );
        }),
        (p.filterUpdate = function (a, n, r) {
          p.setState(
            function (e) {
              var t = cloneDeep(e.filterList),
                o = t[a].indexOf(n);
              switch (r) {
                case "checkbox":
                  0 <= o ? t[a].splice(o, 1) : t[a].push(n);
                  break;
                case "multiselect":
                  t[a] = "" === n ? [] : n;
                  break;
                default:
                  t[a] = 0 <= o || "" === n ? [] : [n];
              }
              return {
                filterList: t,
                displayData: p.options.serverSide
                  ? e.displayData
                  : p.getDisplayData(e.columns, e.data, t, e.searchText),
              };
            },
            function () {
              p.setTableAction("filterChange"),
                p.options.onFilterChange &&
                  p.options.onFilterChange(n, p.state.filterList);
            }
          );
        }),
        (p.selectRowDelete = function () {
          var e = p.state,
            t = e.selectedRows,
            o = e.data,
            a = e.filterList,
            n = buildMap(t.data),
            r = o.filter(function (e) {
              var t = e.index;
              return !n[t];
            });
          p.options.onRowsDelete && p.options.onRowsDelete(t),
            p.setTableData(
              { columns: p.props.columns, data: r, options: { filterList: a } },
              TABLE_LOAD.UPDATE,
              function () {
                p.setTableAction("rowDelete");
              }
            );
        }),
        (p.toggleExpandRow = function (e) {
          for (
            var t = e.index,
              o =
                (e.dataIndex,
                [].concat(toConsumableArray(p.state.expandedRows.data))),
              a = -1,
              n = 0;
            n < o.length;
            n++
          )
            if (o[n].index === t) {
              a = n;
              break;
            }
          0 <= a ? o.splice(a, 1) : o.push(e),
            p.setState(
              { expandedRows: { lookup: buildMap(o), data: o } },
              function () {
                p.setTableAction("expandRow");
              }
            );
        }),
        (p.selectRowUpdate = function (e, r) {
          if ("head" === e) {
            var i = p.options.isRowSelectable;
            p.setState(
              function (e) {
                var a = e.displayData,
                  t = e.selectedRows.data.length,
                  o = t === a.length || (t < a.length && 0 < t),
                  n = a.reduce(function (e, t, o) {
                    return (
                      (!i || i(a[o].dataIndex)) &&
                        e.push({ index: o, dataIndex: a[o].dataIndex }),
                      e
                    );
                  }, []),
                  r = [].concat(
                    toConsumableArray(e.selectedRows),
                    toConsumableArray(n)
                  ),
                  l = buildMap(r);
                return (
                  o &&
                    ((r = e.selectedRows.data.filter(function (e) {
                      var t = e.dataIndex;
                      return !l[t];
                    })),
                    (l = buildMap(r))),
                  { curSelectedRows: r, selectedRows: { data: r, lookup: l } }
                );
              },
              function () {
                p.setTableAction("rowsSelect"),
                  p.options.onRowsSelect &&
                    p.options.onRowsSelect(
                      p.state.curSelectedRows,
                      p.state.selectedRows.data
                    );
              }
            );
          } else if ("cell" === e)
            p.setState(
              function (e) {
                for (
                  var t = r.index,
                    o =
                      (r.dataIndex,
                      [].concat(toConsumableArray(e.selectedRows.data))),
                    a = -1,
                    n = 0;
                  n < o.length;
                  n++
                )
                  if (o[n].index === t) {
                    a = n;
                    break;
                  }
                return (
                  0 <= a ? o.splice(a, 1) : o.push(r),
                  { selectedRows: { lookup: buildMap(o), data: o } }
                );
              },
              function () {
                p.setTableAction("rowsSelect"),
                  p.options.onRowsSelect &&
                    p.options.onRowsSelect([r], p.state.selectedRows.data);
              }
            );
          else if ("custom" === e) {
            var t = p.state.displayData,
              o = r.map(function (e) {
                return { index: e, dataIndex: t[e].dataIndex };
              }),
              a = buildMap(o);
            p.setState({ selectedRows: { data: o, lookup: a } }, function () {
              p.setTableAction("rowsSelect"),
                p.options.onRowsSelect &&
                  p.options.onRowsSelect(
                    p.state.selectedRows.data,
                    p.state.selectedRows.data
                  );
            });
          }
        }),
        (p.getTableContentRef = function () {
          return p.tableContent.current;
        }),
        (p.tableRef = !1),
        (p.tableContent = React.createRef()),
        (p.headCellRefs = {}),
        (p.setHeadResizeable = function () {}),
        (p.updateDividers = function () {}),
        p
      );
    }
    return (
      inherits(t, e),
      createClass(t, [
        {
          key: "componentWillMount",
          value: function () {
            this.initializeTable(this.props);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            this.setHeadResizeable(this.headCellRefs, this.tableRef);
          },
        },
        {
          key: "componentWillReceiveProps",
          value: function (e) {
            (this.props.data === e.data && this.props.columns === e.columns) ||
              this.initializeTable(e);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            this.options.resizableColumns &&
              (this.setHeadResizeable(this.headCellRefs, this.tableRef),
              this.updateDividers());
          },
        },
        {
          key: "initializeTable",
          value: function (e) {
            this.getDefaultOptions(e),
              this.setTableOptions(e),
              this.setTableData(e, TABLE_LOAD.INITIAL);
          },
        },
        {
          key: "getDefaultOptions",
          value: function (e) {
            var t = {
              responsive: "stacked",
              filterType: "dropdown",
              pagination: !0,
              textLabels: textLabels,
              expandableRows: !1,
              resizableColumns: !1,
              selectableRows: !0,
              caseSensitive: !1,
              serverSide: !1,
              rowHover: !0,
              fixedHeader: !0,
              elevation: 4,
              rowsPerPage: 10,
              rowsPerPageOptions: [10, 15, 100],
              filter: !0,
              sortFilterList: !0,
              sort: !0,
              search: !0,
              print: !0,
              viewColumns: !0,
              download: !0,
              downloadOptions: {
                filename: "tableDownload.csv",
                separator: ",",
              },
            };
            this.options = merge(t, e.options);
          },
        },
        {
          key: "validateOptions",
          value: function (e) {
            if (e.serverSide && void 0 === e.onTableChange)
              throw Error(
                "onTableChange callback must be provided when using serverSide option"
              );
            if (e.expandableRows && void 0 === e.renderExpandableRow)
              throw Error(
                "renderExpandableRow must be provided when using expandableRows option"
              );
            this.props.options.filterList &&
              console.error(
                "Deprecated: filterList must now be provided under each column option. see https://github.com/gregnb/mui-datatables/tree/master/examples/serverside-options example"
              );
          },
        },
        {
          key: "setTableOptions",
          value: function (e) {
            var o = this,
              t = [
                "rowsPerPage",
                "page",
                "rowsSelected",
                "rowsPerPageOptions",
              ].reduce(function (e, t) {
                return void 0 !== o.options[t] && (e[t] = o.options[t]), e;
              }, {});
            this.validateOptions(t), this.setState(t);
          },
        },
        {
          key: "setTableData",
          value: function (e, i) {
            var s = this,
              t =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : function () {},
              c = e.data,
              o = e.options,
              u = [],
              a = this.buildColumns(e.columns),
              n = a.columns,
              p = a.filterData,
              d = a.filterList,
              f = null,
              h = null;
            n.forEach(function (e, t) {
              for (var o = 0; o < c.length; o++) {
                var a = i === TABLE_LOAD.INITIAL ? c[o][t] : c[o].data[t];
                if (
                  (void 0 === u[o] &&
                    u.push({
                      index: i === TABLE_LOAD.INITIAL ? o : c[o].index,
                      data: i === TABLE_LOAD.INITIAL ? c[o] : c[o].data,
                    }),
                  "function" == typeof e.customBodyRender)
                ) {
                  var n = s.getTableMeta(o, t, a, [], e, s.state),
                    r = e.customBodyRender(a, n);
                  React.isValidElement(r) && r.props.value
                    ? (a = r.props.value)
                    : "string" == typeof r && (a = r);
                }
                p[t].indexOf(a) < 0 && p[t].push(a);
              }
              if (
                (e.filterOptions && (p[t] = cloneDeep(e.filterOptions)),
                e.filterList && (d[t] = cloneDeep(e.filterList)),
                s.options.sortFilterList)
              ) {
                var l = getCollatorComparator();
                p[t].sort(l);
              }
              null !== e.sortDirection &&
                ((f = t), (h = "asc" === e.sortDirection ? "desc" : "asc"));
            });
            var r = { data: [], lookup: {} };
            if (
              (TABLE_LOAD.INITIAL &&
                o.rowsSelected &&
                o.rowsSelected.length &&
                o.rowsSelected.forEach(function (e) {
                  r.data.push({ index: e, dataIndex: e }), (r.lookup[e] = !0);
                }),
              null !== f)
            ) {
              var l = this.sortTable(u, f, h);
              u = l.data;
            }
            this.setState(function (e) {
              return {
                columns: n,
                filterData: p,
                filterList: d,
                selectedRows: r,
                data: u,
                displayData: s.getDisplayData(n, u, d, e.searchText),
              };
            }, t);
          },
        },
        {
          key: "computeDisplayRow",
          value: function (e, t, o, a, n) {
            for (var r = !1, l = !1, i = [], s = 0; s < t.length; s++) {
              var c = t[s],
                u = t[s];
              if (e[s].customBodyRender) {
                var p = this.getTableMeta(
                    o,
                    s,
                    t,
                    e[s],
                    this.state.data,
                    _extends({}, this.state, { filterList: a, searchText: n })
                  ),
                  d = e[s].customBodyRender(
                    u,
                    p,
                    this.updateDataCol.bind(null, o, s)
                  );
                u =
                  "string" == typeof (c = d)
                    ? d
                    : d.props && d.props.value
                    ? d.props.value
                    : u;
              }
              i.push(c);
              var f = null === u ? "" : u.toString(),
                h = a[s],
                m = this.options,
                b = m.filterType,
                y = m.caseSensitive;
              h.length &&
                ("textField" !== b || this.hasSearchText(f, h, y)
                  ? "textField" !== b && h.indexOf(u) < 0 && (r = !0)
                  : (r = !0)),
                n && this.hasSearchText(f, n, y) && (l = !0);
            }
            return r || (!this.options.serverSide && n && !l) ? null : i;
          },
        },
        {
          key: "getDisplayData",
          value: function (e, t, o, a) {
            for (var n = [], r = 0; r < t.length; r++) {
              var l = t[r].data,
                i = this.computeDisplayRow(e, l, r, o, a);
              i && n.push({ data: i, dataIndex: t[r].index });
            }
            return n;
          },
        },
        {
          key: "getSortDirection",
          value: function (e) {
            return "asc" === e.sortDirection ? "ascending" : "descending";
          },
        },
        {
          key: "sortTable",
          value: function (e, o, t) {
            var a = this,
              n = (
                this.options.customSort
                  ? this.options.customSort(e, o, t || "desc")
                  : e
              ).map(function (e, t) {
                return {
                  data: e.data[o],
                  rowData: e.data,
                  position: t,
                  rowSelected: !!a.state.selectedRows.lookup[t],
                };
              });
            this.options.customSort || n.sort(sortCompare(t));
            for (var r = [], l = [], i = 0; i < n.length; i++) {
              var s = n[i];
              r.push(e[s.position]),
                s.rowSelected &&
                  l.push({ index: i, dataIndex: e[s.position].index });
            }
            return { data: r, selectedRows: { lookup: buildMap(l), data: l } };
          },
        },
        {
          key: "render",
          value: function () {
            var e,
              t = this,
              o = this.props,
              a = o.classes,
              n = o.title,
              r = this.state,
              l = r.announceText,
              i = r.activeColumn,
              s = r.data,
              c = r.displayData,
              u = r.columns,
              p = r.page,
              d = r.filterData,
              f = r.filterList,
              h = r.selectedRows,
              m = r.expandedRows,
              b = r.searchText,
              y = this.options.count || c.length,
              R = this.options.pagination ? this.state.rowsPerPage : c.length;
            return React.createElement(
              Paper,
              {
                elevation: this.options.elevation,
                ref: this.tableContent,
                className: a.paper,
              },
              h.data.length
                ? React.createElement(TableToolbarSelect$1, {
                    options: this.options,
                    selectedRows: h,
                    onRowsDelete: this.selectRowDelete,
                    displayData: c,
                    selectRowUpdate: this.selectRowUpdate,
                  })
                : React.createElement(TableToolbar$1, {
                    columns: u,
                    displayData: c,
                    data: s,
                    filterData: d,
                    filterList: f,
                    filterUpdate: this.filterUpdate,
                    options: this.options,
                    resetFilters: this.resetFilters,
                    searchTextUpdate: this.searchTextUpdate,
                    tableRef: this.getTableContentRef,
                    title: n,
                    toggleViewColumn: this.toggleViewColumn,
                    setTableAction: this.setTableAction,
                  }),
              React.createElement(TableFilterList$1, {
                options: this.options,
                filterList: f,
                filterUpdate: this.filterUpdate,
              }),
              React.createElement(
                "div",
                {
                  style: { position: "relative" },
                  className:
                    "scroll" === this.options.responsive
                      ? a.responsiveScroll
                      : null,
                },
                this.options.resizableColumns &&
                  React.createElement(TableResize$1, {
                    key: y,
                    updateDividers: function (e) {
                      return (t.updateDividers = e);
                    },
                    setResizeable: function (e) {
                      return (t.setHeadResizeable = e);
                    },
                  }),
                React.createElement(
                  MuiTable,
                  {
                    ref: function (e) {
                      return (t.tableRef = e);
                    },
                    tabIndex: "0",
                    role: "grid",
                  },
                  React.createElement("caption", { className: a.caption }, n),
                  React.createElement(
                    TableHead$1,
                    (defineProperty(
                      (e = { columns: u, activeColumn: i, data: c, count: y }),
                      "columns",
                      u
                    ),
                    defineProperty(e, "page", p),
                    defineProperty(e, "rowsPerPage", R),
                    defineProperty(e, "handleHeadUpdateRef", function (e) {
                      return (t.updateToolbarSelect = e);
                    }),
                    defineProperty(e, "selectedRows", h),
                    defineProperty(e, "selectRowUpdate", this.selectRowUpdate),
                    defineProperty(e, "toggleSort", this.toggleSortColumn),
                    defineProperty(e, "setCellRef", this.setHeadCellRef),
                    defineProperty(e, "options", this.options),
                    e)
                  ),
                  React.createElement(TableBody$1, {
                    data: c,
                    count: y,
                    columns: u,
                    page: p,
                    rowsPerPage: R,
                    selectedRows: h,
                    selectRowUpdate: this.selectRowUpdate,
                    expandedRows: m,
                    toggleExpandRow: this.toggleExpandRow,
                    options: this.options,
                    searchText: b,
                    filterList: f,
                  })
                )
              ),
              React.createElement(TableFooter, {
                options: this.options,
                page: p,
                rowCount: y,
                rowsPerPage: R,
                changeRowsPerPage: this.changeRowsPerPage,
                changePage: this.changePage,
              }),
              React.createElement(
                "div",
                {
                  className: a.liveAnnounce,
                  "aria-live": "polite",
                  ref: function (e) {
                    return (t.announceRef = e);
                  },
                },
                l
              )
            );
          },
        },
      ]),
      t
    );
  })(React.Component);
MUIDataTable$1.defaultProps = { title: "", options: {}, data: [], columns: [] };
var MUIDataTable$2 = styles.withStyles(defaultTableStyles, {
  name: "MUIDataTable",
})(MUIDataTable$1);
module.exports = MUIDataTable$2;
//# sourceMappingURL=index.js.map
