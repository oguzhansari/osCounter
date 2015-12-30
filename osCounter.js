//////////////////////////////////////////////////////////
/////################################################/////
////##   osCounter v.2.1                            ##////
///###   18 ‎Dec ‎2015 ‎Friday, ‏‎14:20:48               ###///
//####   Generator : Oğuzhan SARI                   ####//
///###   os@oguzhansari.com / www.oguzhansari.com   ####//
////##   http://oguzhansari.github.io/osCounter/    ##////
/////################################################/////
//////////////////////////////////////////////////////////

$(document).ready(function () {
    osCounterData();
});
(function (e) {
    jQuery.fn.osCounter = function (a) {
        var a2 = jQuery.extend({
            osName: a.osName == undefined ? 'amount' : a.osName,
            osMaxUp: a.osMaxUp == undefined ? 100 : a.osMaxUp,
            osMaxDown: a.osMaxDown == undefined ? 1 : a.osMaxDown,
            osDefault: a.osDefault,
            osSkip: a.osSkip == undefined ? 1 : a.osSkip,
            osTheme: a.osTheme == undefined ? "osCounter" : a.osTheme,
            osButtonDown: a.osButtonDown == undefined ? "-" : a.osButtonDown,
            osButtonUp: a.osButtonUp == undefined ? "+" : a.osButtonUp,
            osAlertType: a.osAlertType == undefined ? "alert" : a.osAlertType,
            osTextUpTitle: a.osTextUpTitle == undefined ? "Maksimum Değer" : a.osTextUpTitle,
            osTextDownTitle: a.osTextDownTitle == undefined ? "Minumum Değer" : a.osTextDownTitle,
            osTextUpDesc: a.osTextUpDesc == undefined ? "Maksimum Değere Ulaştınız." : a.osTextUpDesc,
            osTextDownDesc: a.osTextDownDesc == undefined ? "Minumum Değere Ulaştınız." : a.osTextDownDesc,
            osDownFunc: null,
            osUpFunc: null,
        }, a);
        var ayar = jQuery.extend({
            osDefault: a2.osDefault == undefined ? a2.osMaxDown : a2.osDefault,
        }, a2);
        return this.each(function () {
            osHtml = '<div class="osAmountPlus ' + ayar.osTheme + '">'
            osHtml += '<span class="osDown">' + ayar.osButtonDown + '</span>'
            osHtml += '<span class="osAmount">' + ayar.osDefault + '</span><input name="' + ayar.osName + '" type="hidden" value="' + ayar.osDefault + '">'
            osHtml += '<span class="osUp">' + ayar.osButtonUp + '</span></div>'
            jQuery(this).html(osHtml);
            var ClickType = null;
            jQuery(this).find(".osUp").click(function () {
                ClickType = "up";
                funcUp(jQuery(this).parent("div"));
                return false;
            })
            jQuery(this).find(".osDown").click(function () {
                ClickType = "down";
                funcDown(jQuery(this).parent("div"));
                return false;
            })
            function funcUp(osThis) {
                var InputValue = parseInt(jQuery(osThis).find('input[name="' + ayar.osName + '"]').val());
                if (InputValue >= ayar.osMaxUp) {
                    if (ayar.osAlertType == "modal") {
                        var modalOption = { osModalType: "alert", osAlertType: 'bilgi', osAlertText: ayar.osTextUpDesc, osTitle: ayar.osTextUpTitle, osModalID: 'amount_max', osAutoClose: true, osAutoCloseTime: 3500, osCloseButton: true, }
                        jQuery("body").osModal(modalOption);
                    } else {
                        alert(ayar.osTextUpDesc);
                    }
                    InputValue = InputValue;
                } else {
                    var InputValue = parseInt(InputValue) + parseInt(ayar.osSkip);
                }
                jQuery(osThis).find('input[name="' + ayar.osName + '"]').val(InputValue);
                jQuery(osThis).find('span.osAmount').html(InputValue);
                if (ayar.osUpFunc) {
                    ayar.osUpFunc(ClickType);
                }
            }
            function funcDown(osThis) {
                var InputValue = parseInt(jQuery(osThis).find('input[name="' + ayar.osName + '"]').val());
                if (InputValue <= ayar.osMaxDown) {
                    if (ayar.osAlertType == "modal") {
                        var modalOption = { osModalType: "alert", osAlertType: 'bilgi', osAlertText: ayar.osTextDownDesc, osTitle: ayar.osTextDownTitle, osModalID: 'amount_min', osAutoClose: true, osAutoCloseTime: 993500, osCloseButton: true, }
                        jQuery("body").osModal(modalOption);
                    } else {
                        alert(ayar.osTextDownDesc);
                    }
                    InputValue = InputValue;
                } else {
                    var InputValue = parseInt(InputValue) - parseInt(ayar.osSkip);
                }
                jQuery(osThis).find('input[name="' + ayar.osName + '"]').val(InputValue);
                jQuery(osThis).find('span.osAmount').html(InputValue);
                if (ayar.osDownFunc) {
                    ayar.osDownFunc(ClickType);
                }
            }
        });
    }
})(jQuery);
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
                osUpFunc: UpFunc,
            });
        }
    });
}
function osIsEmpty(text) {
    // Oğuzhan SARI - 18.12.2015 16:16:00
    // atanan text değerinin geçerli olup olmadığını kontrol
    // string ise boş olup olmadığını
    // fonksiyon ise var olup olmadığını
    // gibi...
    if (text == undefined || text == null || text.length <= 0 || text == "" || typeof (text) === "object" || typeof (text) === "function" || typeof (text) === "number" || typeof (text) === "boolean" || Object.prototype.toString.call(text) === '[object Date]') {
        return true;
    } else {
        return false;
    }
}