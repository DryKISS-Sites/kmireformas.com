"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4707],{5264:function(e,b,c){var a=c(3980),d={colour:a.string,disabled:a.bool,disabledColour:a.string,fixColour:a.string,hoverColour:(0,a.oneOfType)([a.bool,a.string]),onClick:a.func,size:(0,a.oneOfType)([a.number,a.string])};b.Z=d},3518:function(e,b,a){var f=a(7328),g=a(6670),h=a(6297),i=a(2228),j=a(2322);a(2784);var c=a(5505);function k(){var a=(0,i.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return k=function(){return a},a}function l(){var a=(0,i.Z)(["\n          transform: scale(",") ",";\n        "]);return l=function(){return a},a}function m(){var a=(0,i.Z)(["\n      cursor: pointer;\n    "]);return m=function(){return a},a}function d(){var a=(0,i.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return a},a}var n={DEFAULT:"default",HOVER:"hover"},o=function(g,a){var i=a.colour,j=a.context,c=a.disabled,d=a.disabledColour,e=a.hoverColour,h=a.theme,b=h.ICONS,k=h.THEME_COLOUR,f=j?k.context:i||b.defaultIconColour;return g===n.DEFAULT?c&&d?d:c?b.disabledIconColour:f:g===n.HOVER&&e?(!0===e&&(e=b.hoverIconColour),c&&d?d:c?b.disabledIconColour:e||b.hoverIconColour||f):c?d||b.disabledIconColour:f},p=c.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),function(b){var a=b.size;if("number"==typeof a)return(0,c.iv)(k(),a,a)},function(a){return o(n.DEFAULT,a)},function(a){return a.stroke},function(a){var b=a.scale,d=a.translate;return b&&(0,c.iv)(l(),b,d||"")},function(a){return o(n.HOVER,a)},function(a){var b=a.onClick,d=a.disabled;return b&&!d&&(0,c.iv)(m())});b.Z=function(a){var k=a.children,l=a.colour,m=a.disabled,n=a.disabledColour,o=a.hoverColour,q=a.onClick,c=a.size,r=a.stroke,s=a.translate,e=(0,h.Z)(a,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),d=e.mainSize,b="";if("string"==typeof c)switch(c){case"xs":b=12;break;case"sm":b=16;break;case"lg":b=24;break;case"xl":b=32;break;default:b=20}else b=c||20;var i=1;return d&&b!==d&&(i=Number(b/d)),(0,j.jsx)(p,(0,g.Z)((0,f.Z)({colour:l,disabled:m,disabledColour:n,hoverColour:o,onClick:q,scale:i,size:b,stroke:r,translate:s,xmlns:"http://www.w3.org/2000/svg"},e),{children:k}))}},4707:function(e,b,a){a.r(b);var f=a(7328),g=a(6670),h=a(2322);a(2784);var d=a(5264),i=a(3518),c=function(a){return(0,h.jsx)(i.Z,(0,g.Z)((0,f.Z)({},a),{mainSize:20,children:(0,h.jsx)("path",{d:"M15.4167 4.16667H12.0833C11.3932 4.16667 10.8333 4.72657 10.8333 5.41667V8.75001C10.8333 9.44011 11.3932 10 12.0833 10H14.1667V11.6667C14.1667 12.5859 13.4193 13.3333 12.5 13.3333H12.2917C11.9453 13.3333 11.6667 13.612 11.6667 13.9583V15.2083C11.6667 15.5547 11.9453 15.8333 12.2917 15.8333H12.5C14.8021 15.8333 16.6667 13.9688 16.6667 11.6667V5.41667C16.6667 4.72657 16.1068 4.16667 15.4167 4.16667ZM7.91668 4.16667H4.58334C3.89324 4.16667 3.33334 4.72657 3.33334 5.41667V8.75001C3.33334 9.44011 3.89324 10 4.58334 10H6.66668V11.6667C6.66668 12.5859 5.91928 13.3333 5.00001 13.3333H4.79168C4.44532 13.3333 4.16668 13.612 4.16668 13.9583V15.2083C4.16668 15.5547 4.44532 15.8333 4.79168 15.8333H5.00001C7.30209 15.8333 9.16668 13.9688 9.16668 11.6667V5.41667C9.16668 4.72657 8.60678 4.16667 7.91668 4.16667Z"})}))};c.propTypes=d.Z,b.default=c}}])