if (!$registrationMode) {
  let found = location.href.match(/dang-ky-mon-hoc-nganh-(\d+)/i);
  if (found) var $registrationMode = found[1];
}
var $registrationAvailable = "True".toLowerCase();
if (
  $("#s2id_autogen1").length === 0 &&
  $("div.alert.alert-danger.alert-dismissable").length !== 0
) {
  //append GUI
  $("#content-wrapper").html(
    ' <div class="col-xs-12"> <div class="row"> <div class="col-sm-12"> <div class="page-header"> <h1 class="pull-left"> <i class="icon-stackexchange"></i> <span>Đăng ký học ngành 1 - Học kỳ 2 năm học 2019-2020 - [5]</span> </h1> <div class="pull-right"> <ul class="breadcrumb"> <li> <span style="color:red; font-size:12px;">Bạn được đăng ký trong khoảng tín chỉ: [<span class="StdRegMin-container">10</span>, <span class="StdRegMax-container">40</span>]</span> </li> </ul> </div> </div> </div> </div> <div id="registration-container"> <div class="row"> <div class="col-sm-12"> <div class="box bordered-box green-border" style="margin-bottom:0;"> <div class="box-header green-background"> <div class="title">Đăng ký học ngành 1 - Học kỳ 2 năm học 2019-2020 - [5] </div> <div class="actions"> <div class="btn-group"> <select name="dsdkMod" class="sel-dsdk-mod" tabindex="-1"> <option value="1" selected="selected">Môn học theo ngành</option> <option value="2">Môn học toàn trường</option> </select> </div> <a class="btn box-collapse btn-xs btn-link" href="#"><i></i></a> </div> </div> <div class="box-content box-no-padding" id="divDSDK" style="max-height:300px; overflow:auto;"> <table class=" table table-hover table-bordered" style="margin-bottom:0;"> <thead> <tr> <th title="Tích chọn để đăng ký">Chọn</th> <th title="Tên môn học">Môn học</th> <th title="Số tín chỉ">TC</th> <th title="Điểm">Điểm</th> <th title="Lớp môn học">Lớp môn học</th> <th title="Tổng số sinh viên có thể đăng ký">Tổng SV</th> <th title="Số sinh viên đã đăng ký">Đã ĐK</th> <th title="Tên giáo viên">Giáo viên</th> <th title="Học phí">Học phí</th> <th title="Lịch học">Lịch học</th> <th title="Ngày thi">Ngày thi</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> <br> <div class="box bordered-box blue-border" style="margin-bottom: 0;"> <div class="box-header blue-background"> <div class="title">Danh sách môn học đã đăng ký hoặc đã chọn</div> <div class="actions"><a class="btn box-collapse btn-xs btn-link" href="#"><i></i></a></div> </div> <div class="box-content box-no-padding" style="max-height: 300px; overflow: auto;" id="registered-container"> <table class="table table-hover table-bordered" style="margin-bottom:0;"> <thead> <tr> <th>STT</th> <th>Môn học</th> <th>TC</th> <th>Lớp MH</th> <th>Giáo viên</th> <th>Lịch học</th> <th>Có lấy điểm cho ngành 1</th> <th>Có lấy điểm cho ngành 2</th> <th>Kiểu ĐK</th> <th>Hủy</th> </tr> </thead> <tbody> <tr><td colspan="10">Bạn chưa đăng ký môn học nào!</td></tr> </tbody> </table> </div> </div> </div> </div> <hr class="hr-normal"> <div class="col-xs-12"> <div class="row"> <div class="col-md-4" style="line-height:40px;"> <span>Tổng số tín chỉ đã đăng ký: [<span class="total-crd-container"></span>]</span> </div> <div class="col-md-4" style="line-height:40px;"> <span>Tổng số môn học đã đăng ký: [<span class="total-credit-container"></span>]</span> </div> <div class="col-md-4 col-md-offset-0" style="line-height:40px;"> <a href="/xem-va-in-ket-qua-dang-ky-hoc/1" style="margin-bottom:5px" target="_blank" class="btn btn-primary"><i class="icon-print"></i> Xem và in</a> </div> </div> </div> </div> </div>'
  );
  $dsdkMod = 1;
  //append css
  $("body").append(
    "<style>.box .box-content{border:none!important}.page-header{height:50px!important;min-height:50px!important}.page-header div.pull-right,.page-header h1.pull-left{margin-top:8px!important}.responsive-table .scrollable-area{overflow-x:auto;overflow-y:auto;width:100%;max-height:300px;height:300px}.table *{font-size:12px!important}.conflict{background-color:#ff9}.over{background-color:#ccc}.pending{background-color:#cff}.registered{background-color:#fcc}.box .box-header .sel-dsdk-mod *{font-size:15px!important}.is-theory{background-color:#ebd4fe}</style>"
  );

  var $n;
  $(document).ready(function () {});

  //inject app.js
  var App = (function () {
    var n = function () {
      jQuery("body").on("click", ".ajax-loading", function (n) {
        n.preventDefault();
        var t = $(".tab-content"),
          i = jQuery(this).attr("data-url"),
          r = $(this).attr("data-error-display");
        i
          ? (App.blockUI({ target: t }),
            $.ajax({
              type: "GET",
              cache: !1,
              url: i,
              dataType: "html",
              success: function (n) {
                App.unblockUI(t);
                t.html(n);
              },
              error: function () {
                App.unblockUI(t);
                var n =
                  "Error on reloading the content. Please check your connection and try again.";
                r == "toastr" && toastr
                  ? toastr.error(n)
                  : r == "notific8" && $.notific8
                  ? ($.notific8("zindex", 11500),
                    $.notific8(n, {
                      theme: "ruby",
                      life: 3e3,
                    }))
                  : alert(n);
              },
            }))
          : (App.blockUI({ target: t }),
            window.setTimeout(function () {
              App.unblockUI(t);
            }, 1e3));
      });
    };
    return {
      init: function () {
        n();
      },
      blockUI: function (n) {
        var n = $.extend(!0, {}, n),
          t = "",
          i;
        t = n.iconOnly
          ? '<div class="loading-message ' +
            (n.boxed ? "loading-message-boxed" : "") +
            '"><img style="" src="../Images/ajax-modal-loading.gif" align=""></div>'
          : n.textOnly
          ? '<div class="loading-message ' +
            (n.boxed ? "loading-message-boxed" : "") +
            '"><span style="color:#fff;">&nbsp;&nbsp;' +
            (n.message ? n.message : "Vui lòng đợi...") +
            "</span></div>"
          : '<div class="loading-message ' +
            (n.boxed ? "loading-message-boxed" : "") +
            '"><img style="" src="../Images/ajax-modal-loading.gif" align=""><span style="color:#fff;">&nbsp;&nbsp;' +
            (n.message ? n.message : "Vui lòng đợi...") +
            "</span></div>";
        n.target
          ? ((i = jQuery(n.target)),
            i.height() <= $(window).height() && (n.cenrerY = !0),
            i.block({
              message: t,
              baseZ: n.zIndex ? n.zIndex : 1e3,
              centerY: n.cenrerY != undefined ? n.cenrerY : !1,
              css: {
                top: "50%",
                border: "0",
                padding: "0",
                backgroundColor: "none",
              },
              overlayCSS: {
                backgroundColor: n.overlayColor ? n.overlayColor : "#000",
                opacity: n.boxed ? 0.1 : 0.6,
                cursor: "wait",
              },
            }))
          : $.blockUI({
              message: t,
              baseZ: n.zIndex ? n.zIndex : 1e3,
              css: { border: "0", padding: "0", backgroundColor: "none" },
              overlayCSS: {
                backgroundColor: n.overlayColor ? n.overlayColor : "#000",
                opacity: n.boxed ? 0.1 : 0.6,
                cursor: "wait",
              },
            });
      },
      unblockUI: function (n) {
        n
          ? jQuery(n).unblock({
              onUnblock: function () {
                jQuery(n).css("position", "");
                jQuery(n).css("zoom", "");
              },
            })
          : $.unblockUI();
      },
    };
  })();
  !(function () {
    "use strict";

    function n(n) {
      function o(o, s) {
        var rt,
          ut,
          p = o == window,
          c = s && void 0 !== s.message ? s.message : void 0,
          g,
          k,
          tt,
          nt,
          w,
          b,
          d,
          it,
          ft,
          et,
          at;
        if (
          ((s = n.extend({}, n.blockUI.defaults, s || {})),
          !s.ignoreIfBlocked || !n(o).data("blockUI.isBlocked"))
        ) {
          if (
            (((s.overlayCSS = n.extend(
              {},
              n.blockUI.defaults.overlayCSS,
              s.overlayCSS || {}
            )),
            (rt = n.extend({}, n.blockUI.defaults.css, s.css || {})),
            s.onOverlayClick && (s.overlayCSS.cursor = "pointer"),
            (ut = n.extend(
              {},
              n.blockUI.defaults.themedCSS,
              s.themedCSS || {}
            )),
            (c = void 0 === c ? s.message : c),
            p && t && u(window, { fadeOut: 0 }),
            c && "string" != typeof c && (c.parentNode || c.jquery)) &&
              ((g = c.jquery ? c[0] : c),
              (k = {}),
              n(o).data("blockUI.history", k),
              (k.el = g),
              (k.parent = g.parentNode),
              (k.display = g.style.display),
              (k.position = g.style.position),
              k.parent && k.parent.removeChild(g)),
            n(o).data("blockUI.onUnblock", s.onUnblock),
            (d = s.baseZ),
            (tt =
              e || s.forceIframe
                ? n(
                    '<iframe class="blockUI" style="z-index:' +
                      d++ +
                      ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' +
                      s.iframeSrc +
                      '"></iframe>'
                  )
                : n('<div class="blockUI" style="display:none"></div>')),
            (nt = s.theme
              ? n(
                  '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' +
                    d++ +
                    ';display:none"></div>'
                )
              : n(
                  '<div class="blockUI blockOverlay" style="z-index:' +
                    d++ +
                    ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'
                )),
            s.theme && p
              ? ((b =
                  '<div class="blockUI ' +
                  s.blockMsgClass +
                  ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' +
                  (d + 10) +
                  ';display:none;position:fixed">'),
                s.title &&
                  (b +=
                    '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
                    (s.title || "&nbsp;") +
                    "</div>"),
                (b +=
                  '<div class="ui-widget-content ui-dialog-content"></div>'),
                (b += "</div>"))
              : s.theme
              ? ((b =
                  '<div class="blockUI ' +
                  s.blockMsgClass +
                  ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' +
                  (d + 10) +
                  ';display:none;position:absolute">'),
                s.title &&
                  (b +=
                    '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
                    (s.title || "&nbsp;") +
                    "</div>"),
                (b +=
                  '<div class="ui-widget-content ui-dialog-content"></div>'),
                (b += "</div>"))
              : (b = p
                  ? '<div class="blockUI ' +
                    s.blockMsgClass +
                    ' blockPage" style="z-index:' +
                    (d + 10) +
                    ';display:none;position:fixed"></div>'
                  : '<div class="blockUI ' +
                    s.blockMsgClass +
                    ' blockElement" style="z-index:' +
                    (d + 10) +
                    ';display:none;position:absolute"></div>'),
            (w = n(b)),
            c &&
              (s.theme
                ? (w.css(ut), w.addClass("ui-widget-content"))
                : w.css(rt)),
            s.theme || nt.css(s.overlayCSS),
            nt.css("position", p ? "fixed" : "absolute"),
            (e || s.forceIframe) && tt.css("opacity", 0),
            (it = [tt, nt, w]),
            (ft = p ? n("body") : n(o)),
            n.each(it, function () {
              this.appendTo(ft);
            }),
            s.theme &&
              s.draggable &&
              n.fn.draggable &&
              w.draggable({
                handle: ".ui-dialog-titlebar",
                cancel: "li",
              }),
            (et =
              y &&
              (!n.support.boxModel ||
                n("object,embed", p ? null : o).length > 0)),
            a || et)
          ) {
            if (
              (p &&
                s.allowBodyStretch &&
                n.support.boxModel &&
                n("html,body").css("height", "100%"),
              (a || !n.support.boxModel) && !p)
            )
              var ot = r(o, "borderTopWidth"),
                st = r(o, "borderLeftWidth"),
                ht = ot ? "(0 - " + ot + ")" : 0,
                ct = st ? "(0 - " + st + ")" : 0;
            n.each(it, function (n, t) {
              var i = t[0].style,
                r,
                u;
              ((i.position = "absolute"), 2 > n)
                ? (p
                    ? i.setExpression(
                        "height",
                        "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" +
                          s.quirksmodeOffsetHack +
                          ') + "px"'
                      )
                    : i.setExpression(
                        "height",
                        'this.parentNode.offsetHeight + "px"'
                      ),
                  p
                    ? i.setExpression(
                        "width",
                        'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'
                      )
                    : i.setExpression(
                        "width",
                        'this.parentNode.offsetWidth + "px"'
                      ),
                  ct && i.setExpression("left", ct),
                  ht && i.setExpression("top", ht))
                : s.centerY
                ? (p &&
                    i.setExpression(
                      "top",
                      '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                    ),
                  (i.marginTop = 0))
                : !s.centerY &&
                  p &&
                  ((r = s.css && s.css.top ? parseInt(s.css.top, 10) : 0),
                  (u =
                    "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " +
                    r +
                    ') + "px"'),
                  i.setExpression("top", u));
            });
          }
          if (
            (c &&
              (s.theme ? w.find(".ui-widget-content").append(c) : w.append(c),
              (c.jquery || c.nodeType) && n(c).show()),
            (e || s.forceIframe) && s.showOverlay && tt.show(),
            s.fadeIn)
          ) {
            var lt = s.onBlock ? s.onBlock : f,
              vt = s.showOverlay && !c ? lt : f,
              yt = c ? lt : f;
            s.showOverlay && nt._fadeIn(s.fadeIn, vt);
            c && w._fadeIn(s.fadeIn, yt);
          } else
            s.showOverlay && nt.show(), c && w.show(), s.onBlock && s.onBlock();
          (h(1, o, s),
          p
            ? ((t = w[0]),
              (i = n(s.focusableElements, t)),
              s.focusInput && setTimeout(l, 20))
            : v(w[0], s.centerX, s.centerY),
          s.timeout) &&
            ((at = setTimeout(function () {
              p ? n.unblockUI(s) : n(o).unblock(s);
            }, s.timeout)),
            n(o).data("blockUI.timeout", at));
        }
      }

      function u(r, u) {
        var o,
          c = r == window,
          e = n(r),
          l = e.data("blockUI.history"),
          a = e.data("blockUI.timeout"),
          f;
        a && (clearTimeout(a), e.removeData("blockUI.timeout"));
        u = n.extend({}, n.blockUI.defaults, u || {});
        h(0, r, u);
        null === u.onUnblock &&
          ((u.onUnblock = e.data("blockUI.onUnblock")),
          e.removeData("blockUI.onUnblock"));
        f = c
          ? n("body").children().filter(".blockUI").add("body > .blockUI")
          : e.find(">.blockUI");
        u.cursorReset &&
          (f.length > 1 && (f[1].style.cursor = u.cursorReset),
          f.length > 2 && (f[2].style.cursor = u.cursorReset));
        c && (t = i = null);
        u.fadeOut
          ? ((o = f.length),
            f.stop().fadeOut(u.fadeOut, function () {
              0 == --o && s(f, l, u, r);
            }))
          : s(f, l, u, r);
      }

      function s(t, i, r, u) {
        var f = n(u);
        if (!f.data("blockUI.isBlocked")) {
          t.each(function () {
            this.parentNode && this.parentNode.removeChild(this);
          });
          i &&
            i.el &&
            ((i.el.style.display = i.display),
            (i.el.style.position = i.position),
            i.parent && i.parent.appendChild(i.el),
            f.removeData("blockUI.history"));
          f.data("blockUI.static") && f.css("position", "static");
          "function" == typeof r.onUnblock && r.onUnblock(u, r);
          var e = n(document.body),
            o = e.width(),
            s = e[0].style.width;
          e.width(o - 1).width(o);
          e[0].style.width = s;
        }
      }

      function h(i, r, u) {
        var f = r == window,
          o = n(r),
          e;
        (i || ((!f || t) && (f || o.data("blockUI.isBlocked")))) &&
          (o.data("blockUI.isBlocked", i),
          f && u.bindEvents && (!i || u.showOverlay)) &&
          ((e =
            "mousedown mouseup keydown keypress keyup touchstart touchend touchmove"),
          i ? n(document).bind(e, u, c) : n(document).unbind(e, c));
      }

      function c(r) {
        var u, f;
        if (
          "keydown" === r.type &&
          r.keyCode &&
          9 == r.keyCode &&
          t &&
          r.data.constrainTabKey
        ) {
          var e = i,
            s = !r.shiftKey && r.target === e[e.length - 1],
            o = r.shiftKey && r.target === e[0];
          if (s || o)
            return (
              setTimeout(function () {
                l(o);
              }, 10),
              !1
            );
        }
        return (
          (u = r.data),
          (f = n(r.target)),
          f.hasClass("blockOverlay") && u.onOverlayClick && u.onOverlayClick(r),
          f.parents("div." + u.blockMsgClass).length > 0
            ? !0
            : 0 === f.parents().children().filter("div.blockUI").length
        );
      }

      function l(n) {
        if (i) {
          var t = i[n === !0 ? i.length - 1 : 0];
          t && t.focus();
        }
      }

      function v(n, t, i) {
        var u = n.parentNode,
          f = n.style,
          e = (u.offsetWidth - n.offsetWidth) / 2 - r(u, "borderLeftWidth"),
          o = (u.offsetHeight - n.offsetHeight) / 2 - r(u, "borderTopWidth");
        t && (f.left = e > 0 ? e + "px" : "0");
        i && (f.top = o > 0 ? o + "px" : "0");
      }

      function r(t, i) {
        return parseInt(n.css(t, i), 10) || 0;
      }

      var t, i;
      n.fn._fadeIn = n.fn.fadeIn;
      var f = n.noop || function () {},
        e = /MSIE/.test(navigator.userAgent),
        a =
          /MSIE 6.0/.test(navigator.userAgent) &&
          !/MSIE 8.0/.test(navigator.userAgent),
        y =
          (document.documentMode || 0,
          n.isFunction(document.createElement("div").style.setExpression));
      n.blockUI = function (n) {
        o(window, n);
      };
      n.unblockUI = function (n) {
        u(window, n);
      };
      n.growlUI = function (t, i, r, u) {
        var f = n('<div class="growlUI"></div>'),
          e;
        t && f.append("<h1>" + t + "</h1>");
        i && f.append("<h2>" + i + "</h2>");
        void 0 === r && (r = 3e3);
        e = function (t) {
          t = t || {};
          n.blockUI({
            message: f,
            fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
            fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
            timeout: "undefined" != typeof t.timeout ? t.timeout : r,
            centerY: !1,
            showOverlay: !1,
            onUnblock: u,
            css: n.blockUI.defaults.growlCSS,
          });
        };
        e();
        f.css("opacity");
        f.mouseover(function () {
          e({ fadeIn: 0, timeout: 3e4 });
          var t = n(".blockMsg");
          t.stop();
          t.fadeTo(300, 1);
        }).mouseout(function () {
          n(".blockMsg").fadeOut(1e3);
        });
      };
      n.fn.block = function (t) {
        if (this[0] === window) return n.blockUI(t), this;
        var i = n.extend({}, n.blockUI.defaults, t || {});
        return (
          this.each(function () {
            var t = n(this);
            (i.ignoreIfBlocked && t.data("blockUI.isBlocked")) ||
              t.unblock({ fadeOut: 0 });
          }),
          this.each(function () {
            "static" == n.css(this, "position") &&
              ((this.style.position = "relative"),
              n(this).data("blockUI.static", !0));
            this.style.zoom = 1;
            o(this, t);
          })
        );
      };
      n.fn.unblock = function (t) {
        return this[0] === window
          ? (n.unblockUI(t), this)
          : this.each(function () {
              u(this, t);
            });
      };
      n.blockUI.version = 2.66;
      n.blockUI.defaults = {
        message: "<h1>Please wait...</h1>",
        title: null,
        draggable: !0,
        theme: !1,
        css: {
          padding: 0,
          margin: 0,
          width: "30%",
          top: "40%",
          left: "35%",
          textAlign: "center",
          color: "#000",
          border: "3px solid #aaa",
          backgroundColor: "#fff",
          cursor: "wait",
        },
        themedCSS: { width: "30%", top: "40%", left: "35%" },
        overlayCSS: { backgroundColor: "#000", opacity: 0.6, cursor: "wait" },
        cursorReset: "default",
        growlCSS: {
          width: "350px",
          top: "10px",
          left: "",
          right: "10px",
          border: "none",
          padding: "5px",
          opacity: 0.6,
          cursor: "default",
          color: "#fff",
          backgroundColor: "#000",
          "-webkit-border-radius": "10px",
          "-moz-border-radius": "10px",
          "border-radius": "10px",
        },
        iframeSrc: /^https/i.test(window.location.href || "")
          ? "javascript:false"
          : "about:blank",
        forceIframe: !1,
        baseZ: 1e3,
        centerX: !0,
        centerY: !0,
        allowBodyStretch: !0,
        bindEvents: !0,
        constrainTabKey: !0,
        fadeIn: 200,
        fadeOut: 400,
        timeout: 0,
        showOverlay: !0,
        focusInput: !0,
        focusableElements: ":input:enabled:visible",
        onBlock: null,
        onUnblock: null,
        onOverlayClick: null,
        quirksmodeOffsetHack: 4,
        blockMsgClass: "blockMsg",
        ignoreIfBlocked: !1,
      };
      t = null;
      i = [];
    }

    "function" == typeof define && define.amd && define.amd.jQuery
      ? define(["jquery"], n)
      : n(jQuery);
  })();
  //inject noty.js
  "function" != typeof Object.create &&
    (Object.create = function (n) {
      function t() {}

      return (t.prototype = n), new t();
    }),
    (function (n) {
      var i = {
          init: function (t) {
            return (
              (this.options = n.extend({}, n.noty.defaults, t)),
              (this.options.layout = this.options.custom
                ? n.noty.layouts.inline
                : n.noty.layouts[this.options.layout]),
              n.noty.themes[this.options.theme]
                ? (this.options.theme = n.noty.themes[this.options.theme])
                : (t.themeClassName = this.options.theme),
              delete t.layout,
              delete t.theme,
              (this.options = n.extend(
                {},
                this.options,
                this.options.layout.options
              )),
              (this.options.id =
                "noty_" +
                new Date().getTime() * Math.floor(1e6 * Math.random())),
              (this.options = n.extend({}, this.options, t)),
              this._build(),
              this
            );
          },
          _build: function () {
            var t = n(
                '<div class="noty_bar noty_type_' +
                  this.options.type +
                  '"></div>'
              ).attr("id", this.options.id),
              i,
              r;
            (t
              .append(this.options.template)
              .find(".noty_text")
              .html(this.options.text),
            (this.$bar =
              null !== this.options.layout.parent.object
                ? n(this.options.layout.parent.object)
                    .css(this.options.layout.parent.css)
                    .append(t)
                : t),
            this.options.themeClassName &&
              this.$bar
                .addClass(this.options.themeClassName)
                .addClass("noty_container_type_" + this.options.type),
            this.options.buttons) &&
              ((this.options.closeWith = []),
              (this.options.timeout = !1),
              (i = n("<div/>").addClass("noty_buttons")),
              null !== this.options.layout.parent.object
                ? this.$bar.find(".noty_bar").append(i)
                : this.$bar.append(i),
              (r = this),
              n.each(this.options.buttons, function (t, i) {
                var u = n("<button/>")
                  .addClass(i.addClass ? i.addClass : "gray")
                  .html(i.text)
                  .attr("id", i.id ? i.id : "button-" + t)
                  .appendTo(r.$bar.find(".noty_buttons"))
                  .bind("click", function () {
                    n.isFunction(i.onClick) && i.onClick.call(u, r);
                  });
              }));
            this.$message = this.$bar.find(".noty_message");
            this.$closeButton = this.$bar.find(".noty_close");
            this.$buttons = this.$bar.find(".noty_buttons");
            n.noty.store[this.options.id] = this;
          },
          show: function () {
            var t = this;
            return (
              t.options.custom
                ? t.options.custom
                    .find(t.options.layout.container.selector)
                    .append(t.$bar)
                : n(t.options.layout.container.selector).append(t.$bar),
              t.options.theme &&
                t.options.theme.style &&
                t.options.theme.style.apply(t),
              "function" === n.type(t.options.layout.css)
                ? this.options.layout.css.apply(t.$bar)
                : t.$bar.css(this.options.layout.css || {}),
              t.$bar.addClass(t.options.layout.addClass),
              t.options.layout.container.style.apply(
                n(t.options.layout.container.selector)
              ),
              (t.showing = !0),
              t.options.theme &&
                t.options.theme.style &&
                t.options.theme.callback.onShow.apply(this),
              n.inArray("click", t.options.closeWith) > -1 &&
                t.$bar.css("cursor", "pointer").one("click", function (n) {
                  t.stopPropagation(n);
                  t.options.callback.onCloseClick &&
                    t.options.callback.onCloseClick.apply(t);
                  t.close();
                }),
              n.inArray("hover", t.options.closeWith) > -1 &&
                t.$bar.one("mouseenter", function () {
                  t.close();
                }),
              n.inArray("button", t.options.closeWith) > -1 &&
                t.$closeButton.one("click", function (n) {
                  t.stopPropagation(n);
                  t.close();
                }),
              -1 == n.inArray("button", t.options.closeWith) &&
                t.$closeButton.remove(),
              t.options.callback.onShow && t.options.callback.onShow.apply(t),
              t.$bar.animate(
                t.options.animation.open,
                t.options.animation.speed,
                t.options.animation.easing,
                function () {
                  t.options.callback.afterShow &&
                    t.options.callback.afterShow.apply(t);
                  t.showing = !1;
                  t.shown = !0;
                }
              ),
              t.options.timeout &&
                t.$bar
                  .delay(t.options.timeout)
                  .promise()
                  .done(function () {
                    t.close();
                  }),
              this
            );
          },
          close: function () {
            var t, i;
            if (
              !(
                this.closed ||
                (this.$bar && this.$bar.hasClass("i-am-closing-now"))
              )
            ) {
              if (((t = this), this.showing))
                return (
                  t.$bar.queue(function () {
                    t.close.apply(t);
                  }),
                  void 0
                );
              if (!this.shown && !this.showing)
                return (
                  (i = []),
                  n.each(n.noty.queue, function (n, r) {
                    r.options.id != t.options.id && i.push(r);
                  }),
                  (n.noty.queue = i),
                  void 0
                );
              t.$bar.addClass("i-am-closing-now");
              t.options.callback.onClose && t.options.callback.onClose.apply(t);
              t.$bar
                .clearQueue()
                .stop()
                .animate(
                  t.options.animation.close,
                  t.options.animation.speed,
                  t.options.animation.easing,
                  function () {
                    t.options.callback.afterClose &&
                      t.options.callback.afterClose.apply(t);
                  }
                )
                .promise()
                .done(function () {
                  t.options.modal &&
                    (n.notyRenderer.setModalCount(-1),
                    0 == n.notyRenderer.getModalCount() &&
                      n(".noty_modal").fadeOut("fast", function () {
                        n(this).remove();
                      }));
                  n.notyRenderer.setLayoutCountFor(t, -1);
                  0 == n.notyRenderer.getLayoutCountFor(t) &&
                    n(t.options.layout.container.selector).remove();
                  "undefined" != typeof t.$bar &&
                    null !== t.$bar &&
                    (t.$bar.remove(), (t.$bar = null), (t.closed = !0));
                  delete n.noty.store[t.options.id];
                  t.options.theme.callback.onClose.apply(t);
                  t.options.dismissQueue ||
                    ((n.noty.ontap = !0), n.notyRenderer.render());
                  t.options.maxVisible > 0 &&
                    t.options.dismissQueue &&
                    n.notyRenderer.render();
                });
            }
          },
          setText: function (n) {
            return (
              this.closed ||
                ((this.options.text = n), this.$bar.find(".noty_text").html(n)),
              this
            );
          },
          setType: function (n) {
            return (
              this.closed ||
                ((this.options.type = n),
                this.options.theme.style.apply(this),
                this.options.theme.callback.onShow.apply(this)),
              this
            );
          },
          setTimeout: function (n) {
            if (!this.closed) {
              var t = this;
              this.options.timeout = n;
              t.$bar
                .delay(t.options.timeout)
                .promise()
                .done(function () {
                  t.close();
                });
            }
            return this;
          },
          stopPropagation: function (n) {
            n = n || window.event;
            "undefined" != typeof n.stopPropagation
              ? n.stopPropagation()
              : (n.cancelBubble = !0);
          },
          closed: !1,
          showing: !1,
          shown: !1,
        },
        t;
      n.notyRenderer = {};
      n.notyRenderer.init = function (t) {
        var r = Object.create(i).init(t);
        return (
          r.options.killer && n.noty.closeAll(),
          r.options.force ? n.noty.queue.unshift(r) : n.noty.queue.push(r),
          n.notyRenderer.render(),
          "object" == n.noty.returns ? r : r.options.id
        );
      };
      n.notyRenderer.render = function () {
        var t = n.noty.queue[0];
        "object" === n.type(t)
          ? t.options.dismissQueue
            ? t.options.maxVisible > 0
              ? n(t.options.layout.container.selector + " li").length <
                  t.options.maxVisible &&
                n.notyRenderer.show(n.noty.queue.shift())
              : n.notyRenderer.show(n.noty.queue.shift())
            : n.noty.ontap &&
              (n.notyRenderer.show(n.noty.queue.shift()), (n.noty.ontap = !1))
          : (n.noty.ontap = !0);
      };
      n.notyRenderer.show = function (t) {
        t.options.modal &&
          (n.notyRenderer.createModalFor(t), n.notyRenderer.setModalCount(1));
        t.options.custom
          ? 0 ==
            t.options.custom.find(t.options.layout.container.selector).length
            ? t.options.custom.append(
                n(t.options.layout.container.object).addClass("i-am-new")
              )
            : t.options.custom
                .find(t.options.layout.container.selector)
                .removeClass("i-am-new")
          : 0 == n(t.options.layout.container.selector).length
          ? n("body").append(
              n(t.options.layout.container.object).addClass("i-am-new")
            )
          : n(t.options.layout.container.selector).removeClass("i-am-new");
        n.notyRenderer.setLayoutCountFor(t, 1);
        t.show();
      };
      n.notyRenderer.createModalFor = function (t) {
        0 == n(".noty_modal").length &&
          n("<div/>")
            .addClass("noty_modal")
            .data("noty_modal_count", 0)
            .css(t.options.theme.modal.css)
            .prependTo(n("body"))
            .fadeIn("fast");
      };
      n.notyRenderer.getLayoutCountFor = function (t) {
        return (
          n(t.options.layout.container.selector).data("noty_layout_count") || 0
        );
      };
      n.notyRenderer.setLayoutCountFor = function (t, i) {
        return n(t.options.layout.container.selector).data(
          "noty_layout_count",
          n.notyRenderer.getLayoutCountFor(t) + i
        );
      };
      n.notyRenderer.getModalCount = function () {
        return n(".noty_modal").data("noty_modal_count") || 0;
      };
      n.notyRenderer.setModalCount = function (t) {
        return n(".noty_modal").data(
          "noty_modal_count",
          n.notyRenderer.getModalCount() + t
        );
      };
      n.fn.noty = function (t) {
        return (t.custom = n(this)), n.notyRenderer.init(t);
      };
      n.noty = {};
      n.noty.queue = [];
      n.noty.ontap = !0;
      n.noty.layouts = {};
      n.noty.themes = {};
      n.noty.returns = "object";
      n.noty.store = {};
      n.noty.get = function (t) {
        return n.noty.store.hasOwnProperty(t) ? n.noty.store[t] : !1;
      };
      n.noty.close = function (t) {
        return n.noty.get(t) ? n.noty.get(t).close() : !1;
      };
      n.noty.setText = function (t, i) {
        return n.noty.get(t) ? n.noty.get(t).setText(i) : !1;
      };
      n.noty.setType = function (t, i) {
        return n.noty.get(t) ? n.noty.get(t).setType(i) : !1;
      };
      n.noty.clearQueue = function () {
        n.noty.queue = [];
      };
      n.noty.closeAll = function () {
        n.noty.clearQueue();
        n.each(n.noty.store, function (n, t) {
          t.close();
        });
      };
      t = window.alert;
      n.noty.consumeAlert = function (t) {
        window.alert = function (i) {
          t ? (t.text = i) : (t = { text: i });
          n.notyRenderer.init(t);
        };
      };
      n.noty.stopConsumeAlert = function () {
        window.alert = t;
      };
      n.noty.defaults = {
        layout: "top",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: !0,
        template:
          '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
          open: { height: "toggle" },
          close: { height: "toggle" },
          easing: "swing",
          speed: 500,
        },
        timeout: !1,
        force: !1,
        modal: !1,
        maxVisible: 5,
        killer: !1,
        closeWith: ["click"],
        callback: {
          onShow: function () {},
          afterShow: function () {},
          onClose: function () {},
          afterClose: function () {},
          onCloseClick: function () {},
        },
        buttons: !1,
      };
      n(window).resize(function () {
        n.each(n.noty.layouts, function (t, i) {
          i.container.style.apply(n(i.container.selector));
        });
      });
    })(jQuery);
  (window.noty = function (n) {
    return jQuery.notyRenderer.init(n);
  }),
    (function (n) {
      n.noty.layouts.bottom = {
        name: "bottom",
        options: {},
        container: {
          object: '<ul id="noty_bottom_layout_container" />',
          selector: "ul#noty_bottom_layout_container",
          style: function () {
            n(this).css({
              bottom: 0,
              left: "5%",
              position: "fixed",
              width: "90%",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 9999999,
            });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
          object: '<ul id="noty_bottomCenter_layout_container" />',
          selector: "ul#noty_bottomCenter_layout_container",
          style: function () {
            n(this).css({
              bottom: 20,
              left: 0,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            n(this).css({
              left: (n(window).width() - n(this).outerWidth(!1)) / 2 + "px",
            });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.bottomLeft = {
        name: "bottomLeft",
        options: {},
        container: {
          object: '<ul id="noty_bottomLeft_layout_container" />',
          selector: "ul#noty_bottomLeft_layout_container",
          style: function () {
            n(this).css({
              bottom: 20,
              left: 20,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            window.innerWidth < 600 && n(this).css({ left: 5 });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.bottomRight = {
        name: "bottomRight",
        options: {},
        container: {
          object: '<ul id="noty_bottomRight_layout_container" />',
          selector: "ul#noty_bottomRight_layout_container",
          style: function () {
            n(this).css({
              bottom: 20,
              right: 20,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            window.innerWidth < 600 && n(this).css({ right: 5 });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.center = {
        name: "center",
        options: {},
        container: {
          object: '<ul id="noty_center_layout_container" />',
          selector: "ul#noty_center_layout_container",
          style: function () {
            var t, i;
            n(this).css({
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            t = n(this)
              .clone()
              .css({
                visibility: "hidden",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
              })
              .attr("id", "dupe");
            n("body").append(t);
            t.find(".i-am-closing-now").remove();
            t.find("li").css("display", "block");
            i = t.height();
            t.remove();
            n(this).hasClass("i-am-new")
              ? n(this).css({
                  left: (n(window).width() - n(this).outerWidth(!1)) / 2 + "px",
                  top: (n(window).height() - i) / 2 + "px",
                })
              : n(this).animate(
                  {
                    left:
                      (n(window).width() - n(this).outerWidth(!1)) / 2 + "px",
                    top: (n(window).height() - i) / 2 + "px",
                  },
                  500
                );
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.centerLeft = {
        name: "centerLeft",
        options: {},
        container: {
          object: '<ul id="noty_centerLeft_layout_container" />',
          selector: "ul#noty_centerLeft_layout_container",
          style: function () {
            var t, i;
            n(this).css({
              left: 20,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            t = n(this)
              .clone()
              .css({
                visibility: "hidden",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
              })
              .attr("id", "dupe");
            n("body").append(t);
            t.find(".i-am-closing-now").remove();
            t.find("li").css("display", "block");
            i = t.height();
            t.remove();
            n(this).hasClass("i-am-new")
              ? n(this).css({ top: (n(window).height() - i) / 2 + "px" })
              : n(this).animate(
                  { top: (n(window).height() - i) / 2 + "px" },
                  500
                );
            window.innerWidth < 600 && n(this).css({ left: 5 });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.centerRight = {
        name: "centerRight",
        options: {},
        container: {
          object: '<ul id="noty_centerRight_layout_container" />',
          selector: "ul#noty_centerRight_layout_container",
          style: function () {
            var t, i;
            n(this).css({
              right: 20,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            t = n(this)
              .clone()
              .css({
                visibility: "hidden",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
              })
              .attr("id", "dupe");
            n("body").append(t);
            t.find(".i-am-closing-now").remove();
            t.find("li").css("display", "block");
            i = t.height();
            t.remove();
            n(this).hasClass("i-am-new")
              ? n(this).css({ top: (n(window).height() - i) / 2 + "px" })
              : n(this).animate(
                  { top: (n(window).height() - i) / 2 + "px" },
                  500
                );
            window.innerWidth < 600 && n(this).css({ right: 5 });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.inline = {
        name: "inline",
        options: {},
        container: {
          object: '<ul class="noty_inline_layout_container" />',
          selector: "ul.noty_inline_layout_container",
          style: function () {
            n(this).css({
              width: "100%",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 9999999,
            });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
          object: '<ul id="noty_top_layout_container" />',
          selector: "ul#noty_top_layout_container",
          style: function () {
            n(this).css({
              top: 0,
              left: "5%",
              position: "fixed",
              width: "90%",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 9999999,
            });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.topCenter = {
        name: "topCenter",
        options: {},
        container: {
          object: '<ul id="noty_topCenter_layout_container" />',
          selector: "ul#noty_topCenter_layout_container",
          style: function () {
            n(this).css({
              top: 20,
              left: 0,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            n(this).css({
              left: (n(window).width() - n(this).outerWidth(!1)) / 2 + "px",
            });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.topLeft = {
        name: "topLeft",
        options: {},
        container: {
          object: '<ul id="noty_topLeft_layout_container" />',
          selector: "ul#noty_topLeft_layout_container",
          style: function () {
            n(this).css({
              top: 20,
              left: 20,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            window.innerWidth < 600 && n(this).css({ left: 5 });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.layouts.topRight = {
        name: "topRight",
        options: {},
        container: {
          object: '<ul id="noty_topRight_layout_container" />',
          selector: "ul#noty_topRight_layout_container",
          style: function () {
            n(this).css({
              top: 20,
              right: 20,
              position: "fixed",
              width: "310px",
              height: "auto",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              zIndex: 1e7,
            });
            window.innerWidth < 600 && n(this).css({ right: 5 });
          },
        },
        parent: { object: "<li />", selector: "li", css: {} },
        css: { display: "none", width: "310px" },
        addClass: "",
      };
    })(jQuery),
    (function (n) {
      n.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
          borderFix: function () {
            if (this.options.dismissQueue) {
              var t =
                this.options.layout.container.selector +
                " " +
                this.options.layout.parent.selector;
              switch (this.options.layout.name) {
                case "top":
                  n(t).css({ borderRadius: "0px 0px 0px 0px" });
                  n(t).last().css({ borderRadius: "0px 0px 5px 5px" });
                  break;
                case "topCenter":
                case "topLeft":
                case "topRight":
                case "bottomCenter":
                case "bottomLeft":
                case "bottomRight":
                case "center":
                case "centerLeft":
                case "centerRight":
                case "inline":
                  n(t).css({ borderRadius: "0px 0px 0px 0px" });
                  n(t)
                    .first()
                    .css({
                      "border-top-left-radius": "5px",
                      "border-top-right-radius": "5px",
                    });
                  n(t).last().css({
                    "border-bottom-left-radius": "5px",
                    "border-bottom-right-radius": "5px",
                  });
                  break;
                case "bottom":
                  n(t).css({ borderRadius: "0px 0px 0px 0px" });
                  n(t).first().css({ borderRadius: "5px 5px 0px 0px" });
              }
            }
          },
        },
        modal: {
          css: {
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            zIndex: 1e4,
            opacity: 0.6,
            display: "none",
            left: 0,
            top: 0,
          },
        },
        style: function () {
          switch (
            (this.$bar.css({
              overflow: "hidden",
              background:
                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff",
            }),
            this.$message.css({
              fontSize: "13px",
              lineHeight: "16px",
              textAlign: "center",
              padding: "8px 10px 9px",
              width: "auto",
              position: "relative",
            }),
            this.$closeButton.css({
              position: "absolute",
              top: 4,
              right: 4,
              width: 10,
              height: 10,
              background:
                "url(data:image/png;base64,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)",
              display: "none",
              cursor: "pointer",
            }),
            this.$buttons.css({
              padding: 5,
              textAlign: "right",
              borderTop: "1px solid #ccc",
              backgroundColor: "#fff",
            }),
            this.$buttons.find("button").css({ marginLeft: 5 }),
            this.$buttons.find("button:first").css({ marginLeft: 0 }),
            this.$bar.bind({
              mouseenter: function () {
                n(this).find(".noty_close").stop().fadeTo("normal", 1);
              },
              mouseleave: function () {
                n(this).find(".noty_close").stop().fadeTo("normal", 0);
              },
            }),
            this.options.layout.name)
          ) {
            case "top":
              this.$bar.css({
                borderRadius: "0px 0px 5px 5px",
                borderBottom: "2px solid #eee",
                borderLeft: "2px solid #eee",
                borderRight: "2px solid #eee",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              });
              break;
            case "topCenter":
            case "center":
            case "bottomCenter":
            case "inline":
              this.$bar.css({
                borderRadius: "5px",
                border: "1px solid #eee",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              });
              this.$message.css({ fontSize: "13px", textAlign: "center" });
              break;
            case "topLeft":
            case "topRight":
            case "bottomLeft":
            case "bottomRight":
            case "centerLeft":
            case "centerRight":
              this.$bar.css({
                borderRadius: "5px",
                border: "1px solid #eee",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              });
              this.$message.css({ fontSize: "13px", textAlign: "left" });
              break;
            case "bottom":
              this.$bar.css({
                borderRadius: "5px 5px 0px 0px",
                borderTop: "2px solid #eee",
                borderLeft: "2px solid #eee",
                borderRight: "2px solid #eee",
                boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
              });
              break;
            default:
              this.$bar.css({
                border: "2px solid #eee",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              });
          }
          switch (this.options.type) {
            case "alert":
            case "notification":
              this.$bar.css({
                backgroundColor: "#FFF",
                borderColor: "#CCC",
                color: "#444",
              });
              break;
            case "warning":
              this.$bar.css({
                backgroundColor: "#FFEAA8",
                borderColor: "#FFC237",
                color: "#826200",
              });
              this.$buttons.css({ borderTop: "1px solid #FFC237" });
              break;
            case "error":
              this.$bar.css({
                backgroundColor: "red",
                borderColor: "darkred",
                color: "#FFF",
              });
              this.$message.css({ fontWeight: "bold" });
              this.$buttons.css({ borderTop: "1px solid darkred" });
              break;
            case "information":
              this.$bar.css({
                backgroundColor: "#57B7E2",
                borderColor: "#0B90C4",
                color: "#FFF",
              });
              this.$buttons.css({ borderTop: "1px solid #0B90C4" });
              break;
            case "success":
              this.$bar.css({
                backgroundColor: "lightgreen",
                borderColor: "#50C24E",
                color: "darkgreen",
              });
              this.$buttons.css({ borderTop: "1px solid #50C24E" });
              break;
            default:
              this.$bar.css({
                backgroundColor: "#FFF",
                borderColor: "#CCC",
                color: "#444",
              });
          }
        },
        callback: {
          onShow: function () {
            n.noty.themes.defaultTheme.helpers.borderFix.apply(this);
          },
          onClose: function () {
            n.noty.themes.defaultTheme.helpers.borderFix.apply(this);
          },
        },
      };
    })(jQuery);

  DSDK($(".sel-dsdk-mod")[0].value);

  function sendPageViewData(n) {
    ga("send", "pageview", n);
  }

  function sendEventCallingAjax(n) {
    ga("send", "event", "Registration", n, {
      page: n,
    });
  }

  function sendUserTimeCallingAjax(n, t) {
    ga("send", {
      hitType: "timing",
      timingCategory: "Registration",
      timingVar: "Process Data",
      timingValue: t,
      page: n,
    });
  }

  function sendExceptionData(n) {
    alert(n);
    ga("send", "exception", {
      exDescription: n,
      exFatal: !1,
    });
  }

  function ajaxRequest(n, t, i, r, u, f, e) {
    $.ajax({
      type: n,
      cache: !1,
      async: e,
      url: t,
      dataType: i,
      success: function (n) {
        r != null && r(n);
      },
      error: function (n) {
        u != null && u(n);
      },
      complete: function (n) {
        f != null && f(n);
      },
    });
  }

  function showNoty(n, t, i) {
    $n != null && $n.close();
    window.setTimeout(function () {
      $n = noty({
        text: n,
        type: t,
        dismissQueue: !0,
        layout: i,
        theme: "defaultTheme",
      });
    }, 1e3);
  }

  function CheckConflict() {
    var i = $("input[data-crdid]"),
      r = $("td[data-crdid-registered]"),
      t = [];
    r.each(function () {
      t.push($(this).attr("data-crdid-registered"));
    });
    i.each(function () {
      if ($.inArray($(this).attr("data-crdid"), t) > -1) {
        var n = $(this).parent().parent();
        n.find("td.over").is(".over")
          ? n.attr(
              "title",
              "Môn học đã đủ số lượng sinh viên đăng ký! và Môn học đã đăng ký lớp môn học khác!"
            )
          : (n.addClass("conflict"),
            n.attr("title", "Môn học đã đăng ký lớp môn học khác!"));
      }
    });
    var u = $(".time-table-1"),
      f = $(".time-table-2"),
      n = [];
    f.each(function () {
      n.push($(this).attr("data-time-table-2"));
    });
    u.each(function () {
      var t = $(this).parent().parent(),
        i = $(this).attr("data-time-table-1");
      $.inArray(i, n) > -1
        ? t.find("td.over").is(".over")
          ? t.attr(
              "title",
              "Môn học đã đủ số lượng sinh viên đăng ký! và Môn học bị trùng lịch học!"
            )
          : (t.addClass("conflict"),
            t.attr("title", "Môn học bị trùng lịch học!"))
        : $.each(n, function (n, r) {
            var u = i.split(":"),
              f = r.split(":");
            u[0] == f[0] &&
              ((parseInt(u[1]) >= parseInt(f[1]) &&
                parseInt(u[1]) <= parseInt(f[2])) ||
                (parseInt(u[2]) >= parseInt(f[1]) &&
                  parseInt(u[2]) <= parseInt(f[2])) ||
                (parseInt(u[1]) <= parseInt(f[1]) &&
                  parseInt(u[2]) >= parseInt(f[2])) ||
                (parseInt(u[1]) >= parseInt(f[1]) &&
                  parseInt(u[2]) <= parseInt(f[2]))) &&
              (t.find("td.over").is(".over")
                ? t.attr(
                    "title",
                    "Môn học đã đủ số lượng sinh viên đăng ký! và Môn học bị trùng lịch học!"
                  )
                : (t.addClass("conflict"),
                  t.attr("title", "Môn học bị trùng lịch học!")));
          });
    });
  }

  function CheckPrerequisite(n) {
    var r = new Date().getTime(),
      i = "",
      t = "/kiem-tra-tien-quyet/" + n + "/" + $registrationMode;
    return (
      $.ajax({
        type: "POST",
        cache: !1,
        async: !1,
        url: t,
        dataType: "json",
        success: function (n) {
          i = n.message;
        },
        complete: function () {
          var n = new Date().getTime(),
            i = n - r;
        },
      }),
      i
    );
  }

  function DSDK(n) {
    $dsdkMod = n;
    var t = "/danh-sach-mon-hoc/" + $registrationMode + "/" + n;
    ajaxRequest(
      "POST",
      t,
      "html",
      successCallback1,
      errorCallback1,
      completeCallback1,
      !0
    );
  }

  function RegisteredSubject() {
    var n = "/danh-sach-mon-hoc-da-dang-ky/" + $registrationMode;
    ajaxRequest(
      "POST",
      n,
      "html",
      successCallback2,
      errorCallback2,
      completeCallback2,
      !0
    );
  }

  function successCallback2(n) {
    $("#registered-container table tbody").html(n);
  }

  function errorCallback2() {
    $(
      '<tr><td colspan="10" style="text-align:left;">Đã xảy ra lỗi khi lấy danh sách môn học. Vui lòng tải lại trang!</td></tr>'
    ).appendTo($("#registered-container table tbody"));
  }

  function completeCallback2() {
    $registrationAvailable == "false" &&
      ($(".abort").remove(),
      $(".chk-brc").remove(),
      $n != null && $n.close(),
      showNoty("Ngoài thời hạn đăng ký!", "warning", "center"));
    CheckConflict();
    $n != null && $n.close();
    $("#hasChange").val() == "true" &&
      showNoty(
        "Bạn đã thay đổi môn học. Các thay đổi này chỉ thực sự được ghi nhận sau khi bạn bấm nút Ghi nhận!",
        "warning",
        "bottom"
      );
    $(".total-credit-container").text($(".total-credit").val());
    $(".total-crd-container").text($(".total-crd").val());
  }

  function Pending(n) {
    var r = new Date().getTime(),
      i = "",
      t = "/chon-mon-hoc/" + n + "/" + $registrationMode + "/" + $dsdkMod;
    return (
      $.ajax({
        type: "POST",
        cache: !1,
        async: !1,
        url: t,
        dataType: "json",
        success: function (n) {
          i = n.message;
        },
        complete: function () {
          var n = new Date().getTime(),
            i = n - r;
        },
      }),
      i
    );
  }

  function Abort(n) {
    var r = new Date().getTime(),
      i = "",
      t = "/huy-mon-hoc/" + n + "/" + $registrationMode + "/" + $dsdkMod;
    return (
      $.ajax({
        type: "POST",
        cache: !1,
        async: !1,
        url: t,
        dataType: "json",
        success: function (n) {
          i = n.message;
          sendPageViewData(t);
        },
        complete: function () {
          var n = new Date().getTime(),
            i = n - r;
          sendUserTimeCallingAjax(t, i);
          sendEventCallingAjax(t);
        },
      }),
      i
    );
  }

  function n(n) {
    var msg = (n && n.message) || "";
    $("#resultAuto").html(msg);
    DSDK($(".sel-dsdk-mod")[0].value);
  }

  $(".sel-dsdk-mod")[0].onchange = function () {
    //App.blockUI();
    DSDK($(this).val());
  };

  $(document).on("click", ".order", function () {
    var n;
    if ((App.blockUI(), (n = ""), $(this).is(":checked"))) {
      var i = $(this).attr("data-crdid"),
        r = $(this).attr("data-rowindex"),
        t = $(".StdRegMax-container").text() * 1,
        u = $(".total-crd-container").text() * 1,
        f = $(this).attr("data-numcrd") * 1;
      if (
        ((n =
          t < u + f
            ? "Bạn đã chọn quá số tín chỉ được phép đăng ký!\nSố tín chỉ tối đa được phép đăng ký là: " +
              t
            : CheckPrerequisite(i)),
        n == "")
      )
        if (((n = Pending(r)), n == "")) DSDK($(".sel-dsdk-mod")[0].value);
        else {
          $(this).prop("checked", !1);
          alert(n);
          App.unblockUI();
          return;
        }
      else {
        $(this).prop("checked", !1);
        alert(n);
        App.unblockUI();
        return;
      }
    }
  });

  $(document).on("click", ".abort", function () {
    if (
      confirm(
        "Bạn có chắc chắn hủy đăng ký không?\nThao tác chỉ thành công sau khi bạn nhấn nút Ghi nhận!"
      )
    ) {
      App.blockUI();
      var n = "",
        t = $(this).attr("data-rowindex");
      if (((n = Abort(t)), n == "")) DSDK($(".sel-dsdk-mod")[0].value);
      else {
        alert(n);
        App.unblockUI();
        return;
      }
    }
  });

  $(document).on("click", ".confirm-registration", function () {
    $("#resultAuto").html("Đang ghi nhận...");
    var t = "/xac-nhan-dang-ky/" + $registrationMode;
    ajaxRequest("POST", t, "json", n, null, null, !0);
    return;
  });

  $(window).on("beforeunload", function () {
    if ($("#hasChange").val() == "true")
      return 'Cảnh báo: Bạn chưa Ghi nhận thay đổi đăng ký môn học!\nBấm "Stay on Page" sau đó bấm Ghi nhận;\nBấm "Leave Page" để bỏ qua!';
  });
  $(document).on("click", ".chk-brc", function () {
    App.blockUI();
    var t = $(this).is(":checked"),
      i,
      r = $(this).attr("data-rowindex"),
      u = $(this).attr("data-brc"),
      n =
        "/dang-ky-lay-diem-theo-nganh/" +
        r +
        "/" +
        u +
        "/" +
        t +
        "/" +
        $registrationMode,
      f = new Date().getTime();
    $.ajax({
      type: "POST",
      cache: !1,
      async: !1,
      url: n,
      dataType: "json",
      success: function (t) {
        i = t.success;
        sendPageViewData(n);
      },
      complete: function () {
        var t = new Date().getTime(),
          i = t - f;
        sendUserTimeCallingAjax(n, i);
        sendEventCallingAjax(n);
      },
    });
    i
      ? ($n != null && $n.close(),
        showNoty(
          "Bạn đã thay đổi môn học. Các thay đổi này chỉ thực sự được ghi nhận sau khi bạn bấm nút Ghi nhận!",
          "warning",
          "bottom"
        ))
      : $(this).prop("checked", !t);
    App.unblockUI();
  });
}

if (App != null) {
  //chặn blockUI
  App.blockUI = function (n) {};
}

function successCallback1(n) {
  $("#divDSDK table tbody").html(n);
  var list = document.querySelectorAll(".order");
  for (var i = 0; i < list.length; i++) {
    list[i].after(list[i].getAttribute("data-rowindex"));
  }
}

function errorCallback1() {
  $(
    '<tr><td colspan="11" style="text-align:left;">Đã xảy ra lỗi khi lấy danh sách môn học. Vui lòng tải lại trang!</td></tr>'
  ).appendTo($("#divDSDK table tbody"));
}

function completeCallback1() {
  $registrationAvailable == "false" && $(".order").remove();
  RegisteredSubject();
}

function n(n) {
  var msg = (n && n.message) || "";
  $("#resultAuto").html(msg);
  DSDK($(".sel-dsdk-mod").select2("val"));
}

var dsfull = [];

function kq(n) {
  var msg = (n && n.message) || "";
  if (dsfull.length > 0)
    msg +=
      "\nMôn học [" +
      dsfull.join("; ") +
      "] đã full, vui lòng thay bằng mã số môn học tương ứng để đăng ký.";
  dsfull = [];
  $("#resultAuto").html(msg);
  DSDK($(".sel-dsdk-mod").select2("val"));
}

function fastDK() {
  $("#resultAuto").html("Đang đăng ký...");
  var subarr = $("#subject").val().split("\n");
  subarr.forEach(function (sj) {
    if (!isNaN(sj)) return Pending(sj);
    var tdsj = $("td:contains(" + sj + ")")[0];
    if (tdsj && tdsj.parentElement.firstElementChild.firstElementChild)
      Pending(
        tdsj.parentElement.firstElementChild.firstElementChild.dataset.rowindex
      );
    else dsfull.push(sj);
  });
  if (document.querySelector("#gnflag").checked)
    ajaxRequest(
      "POST",
      "/xac-nhan-dang-ky/" + $registrationMode,
      "json",
      kq,
      null,
      null,
      !0
    );
}
var autoInterval = 0;

function spamSubmitInterval() {
  $("#resultAuto").html("Đang ghi nhận...");
  var subarr = $("#subject").val().split("\n");
  subarr.forEach(function (sj) {
    if (!isNaN(sj)) return Pending(sj);
    var tdsj = $("td:contains(" + sj + ")")[0];
    if (tdsj && tdsj.parentElement.firstElementChild.firstElementChild)
      Pending(
        tdsj.parentElement.firstElementChild.firstElementChild.dataset
          .rowindex
      );
    else dsfull.push(sj);
  });
  ajaxRequest(
    "POST",
    "/xac-nhan-dang-ky/" + $registrationMode,
    "json",
    spamSubmitComplete,
    null,
    null,
    !0
  );
}

function spamSubmitComplete(n) {
  var msg = (n && n.message) || "";
  $("#resultAuto").html(msg);
  RegisteredSubject();
}

function spamSubmit() {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = 0;
    $("#spamSubmit").attr("class", "btn btn-primary");
    $("#spamSubmit").html("Spam Submit");
    var subarr = $("#subject").val().split("\n");
    subarr.forEach(function (sj) {
      if (!isNaN(sj)) return Pending(sj);
      var tdsj = $("td:contains(" + sj + ")")[0];
      if (tdsj && tdsj.parentElement.firstElementChild.firstElementChild)
        Pending(
          tdsj.parentElement.firstElementChild.firstElementChild.dataset
            .rowindex
        );
      else dsfull.push(sj);
    });
    if (document.querySelector("#gnflag").checked)
      ajaxRequest(
        "POST",
        "/xac-nhan-dang-ky/" + $registrationMode,
        "json",
        kq,
        null,
        null,
        !0
      );
  } else {
    var timeAuto = $("#timeAuto").val() * 1000;
    autoInterval = setInterval(
      spamSubmitInterval,
      timeAuto < 1000 ? 1000 : timeAuto
    );
    $("#spamSubmit").attr("class", "btn btn-danger");
    $("#spamSubmit").html("Stop");
    $("#resultAuto").html("Bắt đầu spam submit..");
    var subarr = $("#subject").val().split("\n");
    subarr.forEach(function (sj) {
      if (!isNaN(sj)) return Pending(sj);
      var tdsj = $("td:contains(" + sj + ")")[0];
      if (tdsj && tdsj.parentElement.firstElementChild.firstElementChild)
        Pending(
          tdsj.parentElement.firstElementChild.firstElementChild.dataset
            .rowindex
        );
      else dsfull.push(sj);
    });
    if (document.querySelector("#gnflag").checked)
      ajaxRequest(
        "POST",
        "/xac-nhan-dang-ky/" + $registrationMode,
        "json",
        kq,
        null,
        null,
        !0
      );
  }
}

if ($(".confirm-registration").length === 0) {
  $(".col-md-offset-0").append(
    '<button style="margin-bottom:5px" class="btn btn-success confirm-registration"><i class="icon-save"></i> Ghi nhận</button>'
  );
}

$(document).off("click", ".confirm-registration"); //remove event

$(document).on("click", ".confirm-registration", function () {
  $("#resultAuto").html("Đang ghi nhận...");
  var t = "/xac-nhan-dang-ky/" + $registrationMode;
  ajaxRequest("POST", t, "json", n, null, null, !0);
  return;
});

if ($(".sel-dsdk-mod").length != 0)
  $("#main-nav").append(
    '<div class="box bordered-box green-border box-header green-background" style="margin-bottom: 0px;padding: 9px;color: #fff;font-weight: bold;display: block;height: 100%;text-align:center;">Tool Auto DKMH VNU v1.5 - chỉnh sửa bởi HTQuang</div><div style="padding-left: 10px; padding-right: 10px;"> <textarea placeholder="Nhập mã lớp môn học/mã số môn học vào đây, mỗi môn một dòng! Sau đó bấm Đăng ký nhanh và chờ ghi nhận thành công! Good Luck :D" style="padding-bottom: 2px; margin: 10px 0px; width: 100%; height: 100%; resize: both;" id="subject" rows="4"></textarea> <div style="margin-bottom: 10px;"> <button class="btn btn-success" onclick="fastDK()"> <i class="icon-save"></i> Đăng Ký Nhanh</button>&nbsp;<input type="checkbox" id="gnflag" checked=""> Ghi nhận</div><div style="margin-bottom: 10px;"> <button id="spamSubmit" class="btn btn-primary" onclick="spamSubmit()">Spam submit</button>&nbsp;<span>sau mỗi</span>&nbsp;<input type="number" id="timeAuto" name="timeAuto" min="1" step="1" value="10" style="border-color: initial;max-width: 48px;text-align: center;">&nbsp;<span>giây</span> </div><label>Kết quả:</label>&nbsp;<p id="resultAuto" style="color:green;font-weight:bold;word-wrap: break-word;"></p></div><div style="padding-left: 10px;padding-right: 10px;color: grey;">* Có thể dùng mã môn học hoặc mã số môn học (mã số cạnh ô tick chọn môn học).<br>* Nút Đăng Ký Nhanh tự động chọn tất cả các môn và tự động Ghi Nhận nếu đã tick.<br>* Nút Spam Submit để gửi request ghi nhận sau mỗi x giây, sử dụng tính năng này để dữ trạng thái đăng nhập<br><strong style="color: red;">*LƯU Ý*</strong>Trước thời gian đăng kí 15-30p thì vào trang đăng kí học chọn môn bằng tay hoặc dùng chức năng đăng kí nhanh để chọn môn. Sau đó sử dụng chức năng Spam Submit sau mỗi 10 giây để giữ trạng thái đăng nhập. Trước giờ đăng kí 10s-20s thì dừng chức năng spam submit(nút stop), đợi đến đúng giờ đăng kí thì bấm nút đăng kí nhanh khoảng 2,3 lần (Nhớ tích nút ghi nhận bên cạnh) <br>* Chỉ trong thời hạn đăng ký mới ghi nhận các môn được. Một số trường hợp gần đến giờ mở đăng ký thì server đã mở khóa đăng ký trước nên có thể ghi nhận được (cứ thử đi, hên xui :V)</div>'
  );
