var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/templates/transffer/components/bitrix/news.list/calculator/script.js?1591024767859";s:6:"source";s:76:"/bitrix/templates/transffer/components/bitrix/news.list/calculator/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    $("#calculator_from").on("change", function() {
        $.ajax({
            url: "/ajax/calculator.php",
            type: "POST",
            dataType: "html",
            data: "ELEMENT_ID=" + this.value,
            success: function(data){
                console.log(data);

                $('#calculator_to').html(data);
                $('#calculator_to').prop("disabled", false);
            }
        });
    });

    $("#calculator_to").on("change", function(e) {
        $('#modalCalculator .modal-body').html("Трансфер из " + $("#calculator_from option:selected").text() + " в " + $(this).find("option:selected").text() + " Вам обойдется примерно " + $(this).find("option:selected").data("price") + ".");
        $('#calculator_submit_button').prop("disabled", false);
    });
});
/* End */
;; /* /bitrix/templates/transffer/components/bitrix/news.list/calculator/script.js?1591024767859*/


}
/*
     FILE ARCHIVED ON 18:11:09 Mar 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:41:03 Nov 06, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 125.334
  exclusion.robots: 0.082
  exclusion.robots.policy: 0.073
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 83.659 (3)
  PetaboxLoader3.datanode: 255.365 (5)
  load_resource: 213.558
  PetaboxLoader3.resolve: 31.895
  loaddict: 91.211
*/