// $(document).ready(function() {
//     var tempNav, isOut = false;
//     $(".page").hover(
//         function() {
//             tempNav = $(this).attr('id');
//             $(".page").siblings().css("display", "none");
//             $("#"+tempNav+"-submenu_hover").css("display", "block");
//             $("#"+tempNav+"-submenu_hover").css("animation", "navSubOpen .75s ease");
//             $("#"+tempNav+"-submenu_hover").css("height", "200px");
//         },
//         function() {
//             tempNav = $(this).attr('id');
//             $(".navLinks").mousemove(function() {
//                 setTimeout(function() {
//                     if(!($("#"+tempNav+"-submenu_hover:hover").length > 0)) {
//                         console.log('sub');
//                         if(!($("#"+tempNav).length > 0)) {
//                             console.log('btn');
//                             $("#"+tempNav+"-submenu_hover").css("animation", "navSubClose .75s ease");
//                             $("#"+tempNav+"-submenu_hover").css("height", "0px");
//                         }
//                     } else {
//                         $("#"+tempNav+"-submenu_hover").css("display", "block");
//                         $("#"+tempNav+"-submenu_hover").css("animation", "navSubOpen .75s ease");
//                     }
//                 }, 200);
//             });
//         }
//     );
// });
