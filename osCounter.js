//////////////////////////////////////////////////////////
/////################################################/////
////##   osCounter v.3                              ##////
///###   Cre: 18 Dec 2015 Friday, 14:20:48          ###///
///###   Upd: 19 Dec 2019 Thursday, 20:14:58        ###///
//####   Generator : Oğuzhan SARI                   ####//
///###   os@oguzhansari.com / www.oguzhansari.com   ####//
////##   http://oguzhansari.github.io/osCounter/    ##////
/////################################################/////
//////////////////////////////////////////////////////////

$(document).ready(function () {
    osCounterData();
});

(function ($) {
    $.osCounter = function (el, options) {
        var osm = $(el);
        osm.exts = $.extend({}, $.osCounter.defopt, options);
        osm.data('osCounterData', osm);
        osm_methods = {
            init: function () {
                var t = osm;
                var o = t.exts;
                var osmid = o.id;
                var osHtml = '<div class="osAmountPlus ' + o.osTheme + '" id="' + osmid + '">'
                osHtml += '<span class="osDown">' + o.osButtonDown + '</span>';
                if (o.osIsInputReady) {
                    osHtml += '<span class="osAmount"><input name="' + o.osName + '" type="text" value="' + o.osDefault + '"></span>';
                } else {
                    osHtml += '<span class="osAmount">' + o.osDefault + '</span><input name="' + o.osName + '" type="hidden" value="' + o.osDefault + '">';
                }
                osHtml += '<span class="osUp">' + o.osButtonUp + '</span></div>';
                t.html(osHtml);
                t.find(".osUp").click(function () {
                    t.up(t.parent("div"));
                    return false;
                });
                t.find(".osDown").click(function () {
                    t.down(t.parent("div"));
                    return false;
                });
                return true;
            },
        }
        osm.up = function (osThis) {
            var t = osm;
            var o = osm.exts;

            var InputValue = parseInt($(osThis).find('input[name="' + o.osName + '"]').val());
            if (InputValue >= o.osMaxUp) {
                if (o.osAlertType == "modal") {
                    var modalOption = { osCounterType: "alert", osAlertType: 'bilgi', osAlertText: o.osTextUpDesc, osTitle: o.osTextUpTitle, osCounterID: 'amount_max', osAutoClose: true, osAutoCloseTime: 3500, osCloseButton: true, }
                    $("body").osModal(modalOption);
                } else {
                    alert(o.osTextUpDesc);
                }
                InputValue = InputValue;
            } else {
                var InputValue = parseInt(InputValue) + parseInt(o.osSkip);
            }
            $(osThis).find('input[name="' + o.osName + '"]').val(InputValue);
            if (!o.osIsInputReady) {
                $(osThis).find('span.osAmount').html(InputValue);
            }
            if (o.osUpFunc) {
                o.osUpFunc("up");
            }
        }
        osm.down = function (osThis) {
            var t = osm;
            var o = osm.exts;

            var InputValue = parseInt($(osThis).find('input[name="' + o.osName + '"]').val());
            if (InputValue <= o.osMaxDown) {
                if (o.osAlertType == "modal") {
                    var modalOption = { osCounterType: "alert", osAlertType: 'bilgi', osAlertText: o.osTextDownDesc, osTitle: o.osTextDownTitle, osCounterID: 'amount_min', osAutoClose: true, osAutoCloseTime: 993500, osCloseButton: true, }
                    $("body").osModal(modalOption);
                } else {
                    alert(o.osTextDownDesc);
                }
                InputValue = InputValue;
            } else {
                var InputValue = parseInt(InputValue) - parseInt(o.osSkip);
            }
            $(osThis).find('input[name="' + o.osName + '"]').val(InputValue);
            if (!o.osIsInputReady) {
                $(osThis).find('span.osAmount').html(InputValue);
            }
            if (o.osDownFunc) {
                o.osDownFunc("down");
            }
        }
        osm.destroy = function () {
            var t = osm;
            var o = osm.exts;
            $('#' + o.id).empty();
            t.find(".osUp").off();
            t.find(".osDown").off();
            t.removeData("osCounterData");
            return true;
        }
        osm.isEmpty = function (text) {
            // Oğuzhan SARI - 18.12.2015 16:16:00
            // atanan text değerinin geçerli olup olmadığını kontrol
            // string ise boş olup olmadığını
            // fonksiyon ise var olup olmadığını
            // gibi...
            if (text == undefined || text == null || text.length <= 0 || text == "" || typeof (text) !== "object" || typeof (text) !== "function" || typeof (text) !== "number" || typeof (text) !== "boolean" || Object.prototype.toString.call(text) !== '[object Date]') {
                return true;
            } else {
                return false;
            }
        }
        osm_methods.init();
    }
    $.osCounter.defopt = {
        osName: 'amount',
        osMaxUp: 100,
        osMaxDown: 1,
        osDefault: 1,
        osSkip: 1,
        osTheme: 'osCounter',
        osButtonDown: '<i class="fal fa-chevron-down"></i>',
        osButtonUp: '<i class="fal fa-chevron-up"></i>',
        osAlertType: 'alert',
        osTextUpTitle: 'Maksimum Değer',
        osTextDownTitle: 'Minumum Değer',
        osTextUpDesc: 'Maksimum Değere Ulaştınız.',
        osTextDownDesc: 'Minumum Değere Ulaştınız.',
        osDownFunc: null,
        osUpFunc: null,
        osIsInputReady: true
    }
    $.fn.osCounter = function (options, opt) {
        if (typeof options === "object") {
            if (options === undefined) { options = {}; }
            return this.each(function () {
                var $this = $(this);
                // options = $.extend({}, options, { id : "xx"  });
                if ($this.data('osCounterData') === undefined) {
                    new $.osCounter(this, options);
                }
            });
        } else {
            var $osCounter = $(this).data("osCounterData");
            console.log($osCounter);
            switch (options) {
                case "destroy": $osCounter.destroy(); break;
                default: $osCounter.destroy();
            }
        }
    }
})($);

function osIsEmpty(text) {
    // Oğuzhan SARI - 18.12.2015 16:16:00
    // atanan text değerinin geçerli olup olmadığını kontrol
    // string ise boş olup olmadığını
    // fonksiyon ise var olup olmadığını
    // gibi...
    if (text == undefined || text == null || text.length <= 0 || text == "" || typeof (text) !== "object" || typeof (text) !== "function" || typeof (text) !== "number" || typeof (text) !== "boolean" || Object.prototype.toString.call(text) !== '[object Date]') {
        return true;
    } else {
        return false;
    }
}
function osCounterData() {
    $('[data-oscounter]').each(function () {
        var t = $(this);
        if (!t.hasClass("osCounterActive")) {
            t.addClass("osCounterActive");
            var opt = t.data("oscounter");
            opt = osIsEmpty(opt) == true ? opt : JSON.parse(opt.replace(/'/g, "\""));
            console.log(opt);
            var DownFunc = opt.osDownFunc == undefined ? null : new Function(opt.osDownFunc);
            var UpFunc = opt.osUpFunc == undefined ? null : new Function(opt.osUpFunc);
            t.osCounter({
                id: "osc" + osCodeGenerator(20),
                osName: opt.osName,
                osMaxUp: opt.osMaxUp,
                osMaxDown: opt.osMaxDown,
                osDefault: opt.osDefault,
                osSkip: opt.osSkip,
                osTheme: opt.osTheme,
                osButtonDown: opt.osButtonDown,
                osButtonUp: opt.osButtonUp,
                osAlertType: opt.osAlertType,
                osTextUpTitle: opt.osTextUpTitle,
                osTextDownTitle: opt.osTextDownTitle,
                osTextUpDesc: opt.osTextUpDesc,
                osTextDownDesc: opt.osTextDownDesc,
                osDownFunc: DownFunc,
                osUpFunc: UpFunc
            });
        }
    });
}
function osCodeGenerator(t) { void 0 == t && (t = 10); for (var o = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", s = 0; t > s; s++) o += n.charAt(Math.floor(Math.random() * n.length)); return o }
