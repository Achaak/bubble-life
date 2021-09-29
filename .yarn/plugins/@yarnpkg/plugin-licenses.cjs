/* eslint-disable */
module.exports = {
  name: "@yarnpkg/plugin-licenses",
  factory: function (require) {
    var plugin;
    plugin = (() => {
      "use strict";
      var __webpack_modules__ = {
          218: (e, _, r) => {
            r.r(_), r.d(_, { default: () => k });
            var t = {};
            r.r(t), r.d(t, { getPackageManifest: () => p });
            var n = r(124),
              i = r(966),
              a = r(594),
              o = r(145),
              s = r(747),
              c = r(42);
            const p = (e, _) => {
              u(e);
              const r = i.structUtils.convertPackageToLocator(_),
                t = l[i.structUtils.stringifyLocator(r)];
              if (!t) return null;
              const n = t.locations[0],
                a = (n ? n + "/" : "") + "package.json",
                o = (0, s.readFileSync)(a).toString();
              return JSON.parse(o);
            };
            let l;
            const u = (e) => {
              l ||
                (l = (0, o.parseSyml)(
                  (0, s.readFileSync)(
                    e.configuration.projectCwd + "/node_modules/.yarn-state.yml"
                  ).toString()
                ));
            };
            var d = function (e, _, r, t) {
              var n,
                i = arguments.length,
                a =
                  i < 3
                    ? _
                    : null === t
                    ? (t = Object.getOwnPropertyDescriptor(_, r))
                    : t;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                a = Reflect.decorate(e, _, r, t);
              else
                for (var o = e.length - 1; o >= 0; o--)
                  (n = e[o]) &&
                    (a = (i < 3 ? n(a) : i > 3 ? n(_, r, a) : n(_, r)) || a);
              return i > 3 && a && Object.defineProperty(_, r, a), a;
            };
            class g extends c.Command {
              constructor() {
                super(...arguments), (this.json = !1), (this.recursive = !1);
              }
              async execute() {
                const e = await i.Configuration.find(
                    this.context.cwd,
                    this.context.plugins
                  ),
                  { project: _, workspace: r } = await i.Project.find(
                    e,
                    this.context.cwd
                  );
                if (!r)
                  throw new a.WorkspaceRequiredError(_.cwd, this.context.cwd);
                await _.restoreInstallState();
                const t = await f(_, this.json, this.recursive);
                i.treeUtils.emitTree(t, {
                  configuration: e,
                  stdout: this.context.stdout,
                  json: this.json,
                  separators: 1,
                });
              }
            }
            (g.usage = c.Command.Usage({
              description:
                "display the licenses for all packages in the project",
              details:
                "\n      This command prints the license information for packages in the project. By default, only direct dependencies are listed.\n\n      If `-R,--recursive` is set, the listing will include transitive dependencies (dependencies of direct dependencies).\n    ",
              examples: [
                [
                  "List all licenses of direct dependencies",
                  "$0 licenses list",
                ],
                [
                  "List all licenses of direct and transitive dependencies",
                  "$0 licenses list --recursive",
                ],
              ],
            })),
              d([c.Command.Boolean("--json")], g.prototype, "json", void 0),
              d(
                [c.Command.Boolean("-R,--recursive")],
                g.prototype,
                "recursive",
                void 0
              ),
              d(
                [c.Command.Path("licenses", "list")],
                g.prototype,
                "execute",
                null
              );
            const k = { commands: [g] },
              f = async (e, _, r) => {
                const a = {},
                  o = { children: a };
                let s;
                s = r
                  ? e.storedDescriptors.values()
                  : e.workspaces.flatMap((e) => {
                      const _ = [e.anchoredDescriptor];
                      return _.push(...e.dependencies.values()), _;
                    });
                const c = i.miscUtils.sortMap(s, (e) =>
                    i.structUtils.stringifyDescriptor(e)
                  ),
                  p = ((e) => {
                    switch (e) {
                      case "pnp":
                        return n;
                      case "node-modules":
                        return t;
                      default:
                        throw new Error("unsupported linker");
                    }
                  })(e.configuration.get("nodeLinker"));
                for (const r of c.values()) {
                  const t = e.storedResolutions.get(r.descriptorHash),
                    n = e.storedPackages.get(t),
                    o = i.structUtils.convertPackageToLocator(n),
                    s = p.getPackageManifest(e, n);
                  if (!s) continue;
                  const {
                    license: c,
                    url: l,
                    vendorName: u,
                    vendorUrl: d,
                  } = y(s);
                  a[c] ||
                    (a[c] = {
                      value: [c, i.formatUtils.Type.NO_HINT],
                      children: {},
                    });
                  const g = {
                      value: [
                        { descriptor: r, locator: o },
                        i.formatUtils.Type.DEPENDENT,
                      ],
                      children: {
                        ...(l
                          ? {
                              url: {
                                value: [
                                  P("URL", l, _),
                                  i.formatUtils.Type.NO_HINT,
                                ],
                              },
                            }
                          : {}),
                        ...(u
                          ? {
                              vendorName: {
                                value: [
                                  P("VendorName", u, _),
                                  i.formatUtils.Type.NO_HINT,
                                ],
                              },
                            }
                          : {}),
                        ...(d
                          ? {
                              vendorUrl: {
                                value: [
                                  P("VendorUrl", d, _),
                                  i.formatUtils.Type.NO_HINT,
                                ],
                              },
                            }
                          : {}),
                      },
                    },
                    k = i.structUtils.stringifyLocator(o);
                  a[c].children[k] = g;
                }
                return o;
              },
              y = (e) => {
                const { license: _, repository: r, homepage: t, author: n } = e;
                return {
                  license:
                    ("string" != typeof _
                      ? null == _
                        ? void 0
                        : _.type
                      : _) || "UNKNOWN",
                  url: (null == r ? void 0 : r.url) || t,
                  vendorName: null == n ? void 0 : n.name,
                  vendorUrl: t || (null == n ? void 0 : n.url),
                };
              },
              P = (e, _, r) => (r ? _ : `${e}: ${_}`);
          },
          124: (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            __webpack_require__.r(__webpack_exports__),
              __webpack_require__.d(__webpack_exports__, {
                getPackageManifest: () => getPackageManifest,
              });
            var _yarnpkg_plugin_pnp__WEBPACK_IMPORTED_MODULE_0__ =
                __webpack_require__(798),
              _yarnpkg_plugin_pnp__WEBPACK_IMPORTED_MODULE_0___default =
                __webpack_require__.n(
                  _yarnpkg_plugin_pnp__WEBPACK_IMPORTED_MODULE_0__
                ),
              _yarnpkg_core__WEBPACK_IMPORTED_MODULE_1__ =
                __webpack_require__(966),
              _yarnpkg_core__WEBPACK_IMPORTED_MODULE_1___default =
                __webpack_require__.n(
                  _yarnpkg_core__WEBPACK_IMPORTED_MODULE_1__
                ),
              _yarnpkg_fslib__WEBPACK_IMPORTED_MODULE_2__ =
                __webpack_require__(688),
              _yarnpkg_fslib__WEBPACK_IMPORTED_MODULE_2___default =
                __webpack_require__.n(
                  _yarnpkg_fslib__WEBPACK_IMPORTED_MODULE_2__
                ),
              _yarnpkg_libzip__WEBPACK_IMPORTED_MODULE_3__ =
                __webpack_require__(76),
              _yarnpkg_libzip__WEBPACK_IMPORTED_MODULE_3___default =
                __webpack_require__.n(
                  _yarnpkg_libzip__WEBPACK_IMPORTED_MODULE_3__
                );
            const getPackageManifest = (e, _) => {
              makePnPApi(e);
              const r =
                  _yarnpkg_core__WEBPACK_IMPORTED_MODULE_1__.structUtils.convertPackageToLocator(
                    _
                  ),
                t = {
                  name: _yarnpkg_core__WEBPACK_IMPORTED_MODULE_1__.structUtils.stringifyIdent(
                    r
                  ),
                  reference: r.reference,
                },
                n = pnpApi.getPackageInformation(t);
              if (!n) return;
              const { packageLocation: i } = n,
                a = i + "package.json",
                o = fs.readFileSync(a).toString();
              return JSON.parse(o);
            };
            let pnpApi;
            const makePnPApi = (project) => {
                pnpApi ||
                  (pnpApi = eval("module.require")(
                    (0,
                    _yarnpkg_plugin_pnp__WEBPACK_IMPORTED_MODULE_0__.getPnpPath)(
                      project
                    ).main
                  ));
              },
              fs = new _yarnpkg_fslib__WEBPACK_IMPORTED_MODULE_2__.VirtualFS({
                baseFs:
                  new _yarnpkg_fslib__WEBPACK_IMPORTED_MODULE_2__.ZipOpenFS({
                    libzip: (0,
                    _yarnpkg_libzip__WEBPACK_IMPORTED_MODULE_3__.getLibzipSync)(),
                    readOnlyArchives: !0,
                  }),
              });
          },
          594: (e) => {
            e.exports = require("@yarnpkg/cli");
          },
          966: (e) => {
            e.exports = require("@yarnpkg/core");
          },
          688: (e) => {
            e.exports = require("@yarnpkg/fslib");
          },
          76: (e) => {
            e.exports = require("@yarnpkg/libzip");
          },
          145: (e) => {
            e.exports = require("@yarnpkg/parsers");
          },
          798: (e) => {
            e.exports = require("@yarnpkg/plugin-pnp");
          },
          42: (e) => {
            e.exports = require("clipanion");
          },
          747: (e) => {
            e.exports = require("fs");
          },
        },
        __webpack_module_cache__ = {};
      function __webpack_require__(e) {
        if (__webpack_module_cache__[e])
          return __webpack_module_cache__[e].exports;
        var _ = (__webpack_module_cache__[e] = { exports: {} });
        return (
          __webpack_modules__[e](_, _.exports, __webpack_require__), _.exports
        );
      }
      return (
        (__webpack_require__.n = (e) => {
          var _ = e && e.__esModule ? () => e.default : () => e;
          return __webpack_require__.d(_, { a: _ }), _;
        }),
        (__webpack_require__.d = (e, _) => {
          for (var r in _)
            __webpack_require__.o(_, r) &&
              !__webpack_require__.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: _[r] });
        }),
        (__webpack_require__.o = (e, _) =>
          Object.prototype.hasOwnProperty.call(e, _)),
        (__webpack_require__.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        __webpack_require__(218)
      );
    })();
    return plugin;
  },
};
