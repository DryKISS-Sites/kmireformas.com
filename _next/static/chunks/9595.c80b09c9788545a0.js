"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9595],{5264:function(e,b,c){var a=c(3980),d={colour:a.string,disabled:a.bool,disabledColour:a.string,fixColour:a.string,hoverColour:(0,a.oneOfType)([a.bool,a.string]),onClick:a.func,size:(0,a.oneOfType)([a.number,a.string])};b.Z=d},3518:function(e,b,a){var f=a(7328),g=a(6670),h=a(6297),i=a(2228),j=a(2322);a(2784);var c=a(5505);function k(){var a=(0,i.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return k=function(){return a},a}function l(){var a=(0,i.Z)(["\n          transform: scale(",") ",";\n        "]);return l=function(){return a},a}function m(){var a=(0,i.Z)(["\n      cursor: pointer;\n    "]);return m=function(){return a},a}function d(){var a=(0,i.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return a},a}var n={DEFAULT:"default",HOVER:"hover"},o=function(g,a){var i=a.colour,j=a.context,c=a.disabled,d=a.disabledColour,e=a.hoverColour,h=a.theme,b=h.ICONS,k=h.THEME_COLOUR,f=j?k.context:i||b.defaultIconColour;return g===n.DEFAULT?c&&d?d:c?b.disabledIconColour:f:g===n.HOVER&&e?(!0===e&&(e=b.hoverIconColour),c&&d?d:c?b.disabledIconColour:e||b.hoverIconColour||f):c?d||b.disabledIconColour:f},p=c.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),function(b){var a=b.size;if("number"==typeof a)return(0,c.iv)(k(),a,a)},function(a){return o(n.DEFAULT,a)},function(a){return a.stroke},function(a){var b=a.scale,d=a.translate;return b&&(0,c.iv)(l(),b,d||"")},function(a){return o(n.HOVER,a)},function(a){var b=a.onClick,d=a.disabled;return b&&!d&&(0,c.iv)(m())});b.Z=function(a){var k=a.children,l=a.colour,m=a.disabled,n=a.disabledColour,o=a.hoverColour,q=a.onClick,c=a.size,r=a.stroke,s=a.translate,e=(0,h.Z)(a,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),d=e.mainSize,b="";if("string"==typeof c)switch(c){case"xs":b=12;break;case"sm":b=16;break;case"lg":b=24;break;case"xl":b=32;break;default:b=20}else b=c||20;var i=1;return d&&b!==d&&(i=Number(b/d)),(0,j.jsx)(p,(0,g.Z)((0,f.Z)({colour:l,disabled:m,disabledColour:n,hoverColour:o,onClick:q,scale:i,size:b,stroke:r,translate:s,xmlns:"http://www.w3.org/2000/svg"},e),{children:k}))}},9595:function(e,b,a){a.r(b);var f=a(7328),g=a(6670),h=a(2322);a(2784);var d=a(5264),i=a(3518),c=function(a){return(0,h.jsx)(i.Z,(0,g.Z)((0,f.Z)({},a),{mainSize:20,children:(0,h.jsx)("path",{d:"M9.42857 5.57143V6.42857C9.42857 6.60536 9.28393 6.75 9.10714 6.75H6.75V9.10714C6.75 9.28393 6.60536 9.42857 6.42857 9.42857H5.57143C5.39464 9.42857 5.25 9.28393 5.25 9.10714V6.75H2.89286C2.71607 6.75 2.57143 6.60536 2.57143 6.42857V5.57143C2.57143 5.39464 2.71607 5.25 2.89286 5.25H5.25V2.89286C5.25 2.71607 5.39464 2.57143 5.57143 2.57143H6.42857C6.60536 2.57143 6.75 2.71607 6.75 2.89286V5.25H9.10714C9.28393 5.25 9.42857 5.39464 9.42857 5.57143ZM12 1.28571V10.7143C12 11.4241 11.4241 12 10.7143 12H1.28571C0.575893 12 0 11.4241 0 10.7143V1.28571C0 0.575893 0.575893 0 1.28571 0H10.7143C11.4241 0 12 0.575893 12 1.28571ZM10.7143 10.5536V1.44643C10.7143 1.35804 10.642 1.28571 10.5536 1.28571H1.44643C1.35804 1.28571 1.28571 1.35804 1.28571 1.44643V10.5536C1.28571 10.642 1.35804 10.7143 1.44643 10.7143H10.5536C10.642 10.7143 10.7143 10.642 10.7143 10.5536Z",fill:"#999999"})}))};c.propTypes=d.Z,b.default=c}}])