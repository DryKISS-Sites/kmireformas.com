"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3755],{5264:function(e,b,c){var a=c(3980),d={colour:a.string,disabled:a.bool,disabledColour:a.string,fixColour:a.string,hoverColour:(0,a.oneOfType)([a.bool,a.string]),onClick:a.func,size:(0,a.oneOfType)([a.number,a.string])};b.Z=d},3518:function(e,b,a){var f=a(7328),g=a(6670),h=a(6297),i=a(2228),j=a(2322);a(2784);var c=a(5505);function k(){var a=(0,i.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return k=function(){return a},a}function l(){var a=(0,i.Z)(["\n          transform: scale(",") ",";\n        "]);return l=function(){return a},a}function m(){var a=(0,i.Z)(["\n      cursor: pointer;\n    "]);return m=function(){return a},a}function d(){var a=(0,i.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return a},a}var n={DEFAULT:"default",HOVER:"hover"},o=function(g,a){var i=a.colour,j=a.context,c=a.disabled,d=a.disabledColour,e=a.hoverColour,h=a.theme,b=h.ICONS,k=h.THEME_COLOUR,f=j?k.context:i||b.defaultIconColour;return g===n.DEFAULT?c&&d?d:c?b.disabledIconColour:f:g===n.HOVER&&e?(!0===e&&(e=b.hoverIconColour),c&&d?d:c?b.disabledIconColour:e||b.hoverIconColour||f):c?d||b.disabledIconColour:f},p=c.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),function(b){var a=b.size;if("number"==typeof a)return(0,c.iv)(k(),a,a)},function(a){return o(n.DEFAULT,a)},function(a){return a.stroke},function(a){var b=a.scale,d=a.translate;return b&&(0,c.iv)(l(),b,d||"")},function(a){return o(n.HOVER,a)},function(a){var b=a.onClick,d=a.disabled;return b&&!d&&(0,c.iv)(m())});b.Z=function(a){var k=a.children,l=a.colour,m=a.disabled,n=a.disabledColour,o=a.hoverColour,q=a.onClick,c=a.size,r=a.stroke,s=a.translate,e=(0,h.Z)(a,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),d=e.mainSize,b="";if("string"==typeof c)switch(c){case"xs":b=12;break;case"sm":b=16;break;case"lg":b=24;break;case"xl":b=32;break;default:b=20}else b=c||20;var i=1;return d&&b!==d&&(i=Number(b/d)),(0,j.jsx)(p,(0,g.Z)((0,f.Z)({colour:l,disabled:m,disabledColour:n,hoverColour:o,onClick:q,scale:i,size:b,stroke:r,translate:s,xmlns:"http://www.w3.org/2000/svg"},e),{children:k}))}},3755:function(e,b,a){a.r(b);var f=a(7328),g=a(6670),h=a(2322);a(2784);var d=a(5264),i=a(3518),c=function(a){return(0,h.jsx)(i.Z,(0,g.Z)((0,f.Z)({},a),{mainSize:20,children:(0,h.jsx)("path",{d:"M18 3.48238V20.5176C18 20.7828 17.7806 20.9997 17.5125 20.9997H15.5625C15.2944 20.9997 15.075 20.7828 15.075 20.5176V13.4303L7.13281 20.7024C6.29594 21.3895 5 20.8149 5 19.7141V4.28593C5 3.18507 6.29594 2.61053 7.13281 3.29757L15.075 10.5255V3.48238C15.075 3.21721 15.2944 3.00026 15.5625 3.00026H17.5125C17.7806 3.00026 18 3.21721 18 3.48238Z",fill:"white"})}))};c.propTypes=d.Z,b.default=c}}])