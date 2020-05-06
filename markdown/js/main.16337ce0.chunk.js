(this["webpackJsonpmarkdown-nice-editor"] = this["webpackJsonpmarkdown-nice-editor"] || []).push([
	[5], {
		205: function(e, s, t) {
			var i = {
				"./bmp": 206,
				"./bmp.js": 206,
				"./gif": 207,
				"./gif.js": 207,
				"./jpg": 208,
				"./jpg.js": 208,
				"./png": 209,
				"./png.js": 209,
				"./psd": 210,
				"./psd.js": 210,
				"./svg": 211,
				"./svg.js": 211,
				"./tiff": 212,
				"./tiff.js": 212,
				"./webp": 213,
				"./webp.js": 213
			};

			function n(e) {
				var s = o(e);
				return t(s)
			}

			function o(e) {
				if (!t.o(i, e)) {
					var s = new Error("Cannot find module '" + e + "'");
					throw s.code = "MODULE_NOT_FOUND", s
				}
				return i[e]
			}
			n.keys = function() {
				return Object.keys(i)
			}, n.resolve = o, e.exports = n, n.id = 205
		},
		311: function(e, s, t) {
			t(312), e.exports = t(703)
		},
		317: function(e, s, t) {},
		327: function(e, s, t) {
			var i = {
				"./apl/apl.js": [719, 28],
				"./asciiarmor/asciiarmor.js": [720, 29],
				"./asn.1/asn.1.js": [721, 30],
				"./asterisk/asterisk.js": [722, 31],
				"./brainfuck/brainfuck.js": [723, 32],
				"./clike/clike.js": [708, 1],
				"./clojure/clojure.js": [724, 33],
				"./cmake/cmake.js": [725, 34],
				"./cobol/cobol.js": [726, 35],
				"./coffeescript/coffeescript.js": [709, 36],
				"./commonlisp/commonlisp.js": [727, 37],
				"./crystal/crystal.js": [728, 38],
				"./css/css.js": [162],
				"./cypher/cypher.js": [729, 39],
				"./d/d.js": [730, 40],
				"./dart/dart.js": [731, 1, 41],
				"./diff/diff.js": [732, 42],
				"./django/django.js": [733, 0, 10],
				"./dockerfile/dockerfile.js": [734, 20],
				"./dtd/dtd.js": [735, 43],
				"./dylan/dylan.js": [736, 44],
				"./ebnf/ebnf.js": [737, 45],
				"./ecl/ecl.js": [738, 46],
				"./eiffel/eiffel.js": [739, 47],
				"./elm/elm.js": [740, 48],
				"./erlang/erlang.js": [741, 49],
				"./factor/factor.js": [742, 21],
				"./fcl/fcl.js": [743, 50],
				"./forth/forth.js": [744, 51],
				"./fortran/fortran.js": [745, 52],
				"./gas/gas.js": [746, 53],
				"./gfm/gfm.js": [747, 3, 19],
				"./gherkin/gherkin.js": [748, 54],
				"./go/go.js": [749, 55],
				"./groovy/groovy.js": [750, 56],
				"./haml/haml.js": [751, 0, 13],
				"./handlebars/handlebars.js": [710, 15],
				"./haskell-literate/haskell-literate.js": [752, 24],
				"./haskell/haskell.js": [711, 57],
				"./haxe/haxe.js": [753, 58],
				"./htmlembedded/htmlembedded.js": [754, 0, 9],
				"./htmlmixed/htmlmixed.js": [705, 0, 25],
				"./http/http.js": [755, 59],
				"./idl/idl.js": [756, 60],
				"./javascript/javascript.js": [706, 0],
				"./jinja2/jinja2.js": [757, 61],
				"./jsx/jsx.js": [758, 0, 26],
				"./julia/julia.js": [759, 62],
				"./livescript/livescript.js": [760, 63],
				"./lua/lua.js": [761, 64],
				"./markdown/markdown.js": [716, 3],
				"./mathematica/mathematica.js": [762, 65],
				"./mbox/mbox.js": [763, 66],
				"./meta.js": [163],
				"./mirc/mirc.js": [764, 67],
				"./mllike/mllike.js": [765, 68],
				"./modelica/modelica.js": [766, 69],
				"./mscgen/mscgen.js": [767, 70],
				"./mumps/mumps.js": [768, 71],
				"./nginx/nginx.js": [769, 72],
				"./nsis/nsis.js": [770, 22],
				"./ntriples/ntriples.js": [771, 73],
				"./octave/octave.js": [772, 74],
				"./oz/oz.js": [773, 75],
				"./pascal/pascal.js": [774, 76],
				"./pegjs/pegjs.js": [775, 0, 77],
				"./perl/perl.js": [776, 78],
				"./php/php.js": [777, 0, 1, 16],
				"./pig/pig.js": [778, 79],
				"./powershell/powershell.js": [779, 80],
				"./properties/properties.js": [780, 81],
				"./protobuf/protobuf.js": [781, 82],
				"./pug/pug.js": [717, 0, 2],
				"./puppet/puppet.js": [782, 83],
				"./python/python.js": [712, 84],
				"./q/q.js": [783, 85],
				"./r/r.js": [784, 86],
				"./rpm/rpm.js": [785, 87],
				"./rst/rst.js": [786, 12],
				"./ruby/ruby.js": [707, 88],
				"./rust/rust.js": [787, 23],
				"./sas/sas.js": [788, 89],
				"./sass/sass.js": [714, 90],
				"./scheme/scheme.js": [789, 91],
				"./shell/shell.js": [790, 92],
				"./sieve/sieve.js": [791, 93],
				"./slim/slim.js": [792, 0, 14],
				"./smalltalk/smalltalk.js": [793, 94],
				"./smarty/smarty.js": [794, 95],
				"./solr/solr.js": [795, 96],
				"./soy/soy.js": [796, 0, 17],
				"./sparql/sparql.js": [797, 97],
				"./spreadsheet/spreadsheet.js": [798, 98],
				"./sql/sql.js": [799, 99],
				"./stex/stex.js": [713, 100],
				"./stylus/stylus.js": [718, 4],
				"./swift/swift.js": [800, 101],
				"./tcl/tcl.js": [801, 102],
				"./textile/textile.js": [802, 103],
				"./tiddlywiki/tiddlywiki.js": [803, 104],
				"./tiki/tiki.js": [804, 105],
				"./toml/toml.js": [805, 106],
				"./tornado/tornado.js": [806, 0, 11],
				"./troff/troff.js": [807, 107],
				"./ttcn-cfg/ttcn-cfg.js": [809, 108],
				"./ttcn/ttcn.js": [808, 109],
				"./turtle/turtle.js": [810, 110],
				"./twig/twig.js": [811, 18],
				"./vb/vb.js": [812, 111],
				"./vbscript/vbscript.js": [813, 112],
				"./velocity/velocity.js": [814, 113],
				"./verilog/verilog.js": [815, 114],
				"./vhdl/vhdl.js": [816, 115],
				"./vue/vue.js": [817, 0, 4, 2, 8],
				"./webidl/webidl.js": [818, 116],
				"./xml/xml.js": [704, 117],
				"./xquery/xquery.js": [819, 118],
				"./yacas/yacas.js": [820, 119],
				"./yaml-frontmatter/yaml-frontmatter.js": [821, 27],
				"./yaml/yaml.js": [715, 120],
				"./z80/z80.js": [822, 121]
			};

			function n(e) {
				if (!t.o(i, e)) return Promise.resolve().then((function() {
					var s = new Error("Cannot find module '" + e + "'");
					throw s.code = "MODULE_NOT_FOUND", s
				}));
				var s = i[e],
					n = s[0];
				return Promise.all(s.slice(1).map(t.e)).then((function() {
					return t.t(n, 7)
				}))
			}
			n.keys = function() {
				return Object.keys(i)
			}, n.id = 327, e.exports = n
		},
		620: function(e, s) {},
		645: function(e, s) {},
		703: function(e, s, t) {
			"use strict";
			t.r(s);
			var i = t(3),
				n = t.n(i),
				o = t(32),
				r = t.n(o),
				a = t(826),
				l = (t(317), t(4)),
				j = t(5),
				c = t(7),
				p = t(6),
				m = t(8),
				d = t(309),
				f = t(307),
				u = t.n(f),
				h = (t(701), [{
					element: ".nice-navbar",
					popover: {
						title: "\u5bfc\u822a\u680f",
						description: "\u5305\u542b\u7f16\u8f91\u529f\u80fd\u548c\u7279\u6b8a\u529f\u80fd",
						position: "bottom-center"
					}
				}, {
					element: ".nice-btn-wechat",
					popover: {
						title: "\u590d\u5236\u5230\u516c\u4f17\u53f7",
						description: "\u70b9\u51fb\u540e\u7c98\u8d34\u5230\u5fae\u4fe1\u516c\u4f17\u53f7\u4e2d\u5373\u53ef",
						position: "left"
					}
				}, {
					element: ".nice-btn-zhihu",
					popover: {
						title: "\u590d\u5236\u5230\u77e5\u4e4e",
						description: "\u70b9\u51fb\u540e\u7c98\u8d34\u5230\u77e5\u4e4e\u4e2d\u5373\u53ef",
						position: "left"
					}
				}, {
					element: ".nice-btn-juejin",
					popover: {
						title: "\u590d\u5236\u5230\u7a00\u571f\u6398\u91d1",
						description: "\u70b9\u51fb\u540e\u7c98\u8d34\u5230\u7a00\u571f\u6398\u91d1\u4e2d\u5373\u53ef",
						position: "left"
					}
				}, {
					element: ".nice-btn-previewtype",
					popover: {
						title: "\u9884\u89c8\u6a21\u5f0f",
						description: "\u5305\u542b\u79fb\u52a8\u7aef\u9884\u89c8\u548c PC \u7aef\u9884\u89c8",
						position: "left"
					}
				}, {
					element: "#nice-md-editor",
					popover: {
						title: "\u7f16\u8f91\u5668",
						description: "\u7f16\u5199 markdown \u7684\u4f4d\u7f6e",
						position: "right"
					}
				}, {
					element: "#nice-rich-text",
					popover: {
						title: "\u9884\u89c8",
						description: "\u67e5\u770b\u6548\u679c",
						position: "left"
					}
				}, {
					element: ".nice-footer-container",
					popover: {
						title: "\u5e95\u90e8\u72b6\u6001\u680f",
						description: "\u67e5\u770b\u5b57\u6570\u3001\u884c\u6570\u7b49\u4fe1\u606f",
						position: "top-center"
					}
				}]),
				g = function(e) {
					function s() {
						return Object(l.a)(this, s), Object(c.a)(this, Object(p.a)(s).apply(this, arguments))
					}
					return Object(m.a)(s, e), Object(j.a)(s, [{
						key: "componentDidMount",
						value: function() {
							if (null === window.localStorage.getItem("is_first_use") && function() {
									for (var e = navigator.userAgent, s = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad",
											"iPod"
										], t = !0, i = 0; i < s.length; i++)
										if (e.indexOf(s[i]) > 0) {
											t = !1;
											break
										} return t
								}()) {
								var e = new u.a({
									doneBtnText: "\u5b8c\u6210",
									closeBtnText: "\u5173\u95ed",
									nextBtnText: "\u524d\u8fdb",
									prevBtnText: "\u540e\u9000",
									opacity: .5
								});
								e.defineSteps(h), e.start(), window.localStorage.setItem("is_first_use", !1)
							}
						}
					}, {
						key: "render",
						value: function() {
							return n.a.createElement(d.a, {
								defaultTitle: "Markdown Nice",
								useImageHosting: {
									url: "https://imgkr.com/api/files/upload",
									name: "\u56fe\u58f3"
								}
							})
						}
					}]), s
				}(n.a.Component);
			Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname
				.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
			a.a({
					dsn: "",
					release: "editor"
				}), r.a.render(n.a.createElement(g, null), document.getElementById("root")), "serviceWorker" in navigator &&
				navigator.serviceWorker.ready.then((function(e) {
					e.unregister()
				}))
		}
	},
	[
		[311, 6, 7]
	]
]);
//# sourceMappingURL=main.16337ce0.chunk.js.map
