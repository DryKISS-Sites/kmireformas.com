"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9051],{5264:function(e,b,c){var a=c(3980),d={colour:a.string,disabled:a.bool,disabledColour:a.string,fixColour:a.string,hoverColour:(0,a.oneOfType)([a.bool,a.string]),onClick:a.func,size:(0,a.oneOfType)([a.number,a.string])};b.Z=d},3518:function(e,b,a){var f=a(7328),g=a(6670),h=a(6297),i=a(2228),j=a(2322);a(2784);var c=a(5505);function k(){var a=(0,i.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return k=function(){return a},a}function l(){var a=(0,i.Z)(["\n          transform: scale(",") ",";\n        "]);return l=function(){return a},a}function m(){var a=(0,i.Z)(["\n      cursor: pointer;\n    "]);return m=function(){return a},a}function d(){var a=(0,i.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return a},a}var n={DEFAULT:"default",HOVER:"hover"},o=function(g,a){var i=a.colour,j=a.context,c=a.disabled,d=a.disabledColour,e=a.hoverColour,h=a.theme,b=h.ICONS,k=h.THEME_COLOUR,f=j?k.context:i||b.defaultIconColour;return g===n.DEFAULT?c&&d?d:c?b.disabledIconColour:f:g===n.HOVER&&e?(!0===e&&(e=b.hoverIconColour),c&&d?d:c?b.disabledIconColour:e||b.hoverIconColour||f):c?d||b.disabledIconColour:f},p=c.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),function(b){var a=b.size;if("number"==typeof a)return(0,c.iv)(k(),a,a)},function(a){return o(n.DEFAULT,a)},function(a){return a.stroke},function(a){var b=a.scale,d=a.translate;return b&&(0,c.iv)(l(),b,d||"")},function(a){return o(n.HOVER,a)},function(a){var b=a.onClick,d=a.disabled;return b&&!d&&(0,c.iv)(m())});b.Z=function(a){var k=a.children,l=a.colour,m=a.disabled,n=a.disabledColour,o=a.hoverColour,q=a.onClick,c=a.size,r=a.stroke,s=a.translate,e=(0,h.Z)(a,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),d=e.mainSize,b="";if("string"==typeof c)switch(c){case"xs":b=12;break;case"sm":b=16;break;case"lg":b=24;break;case"xl":b=32;break;default:b=20}else b=c||20;var i=1;return d&&b!==d&&(i=Number(b/d)),(0,j.jsx)(p,(0,g.Z)((0,f.Z)({colour:l,disabled:m,disabledColour:n,hoverColour:o,onClick:q,scale:i,size:b,stroke:r,translate:s,xmlns:"http://www.w3.org/2000/svg"},e),{children:k}))}},9051:function(e,b,a){a.r(b);var f=a(7328),g=a(6670),h=a(2322);a(2784);var d=a(5264),i=a(3518),c=function(a){return(0,h.jsx)(i.Z,(0,g.Z)((0,f.Z)({},a),{mainSize:16,children:(0,h.jsx)("path",{d:"M14.5 0H1.5C0.671875 0 0 0.767857 0 1.71429V14.2857C0 15.2321 0.671875 16 1.5 16H14.5C15.3281 16 16 15.2321 16 14.2857V1.71429C16 0.767857 15.3281 0 14.5 0ZM11.8875 10.375C12.0375 10.5464 12.0375 10.825 11.8875 10.9964L10.6219 12.4429C10.4719 12.6143 10.2281 12.6143 10.0781 12.4429L8 10.0464L5.92188 12.4429C5.77188 12.6143 5.52813 12.6143 5.37813 12.4429L4.1125 10.9964C3.9625 10.825 3.9625 10.5464 4.1125 10.375L6.20937 8L4.1125 5.625C3.9625 5.45357 3.9625 5.175 4.1125 5.00357L5.37813 3.55714C5.52813 3.38571 5.77188 3.38571 5.92188 3.55714L8 5.95357L10.0781 3.55714C10.2281 3.38571 10.4719 3.38571 10.6219 3.55714L11.8875 5.00357C12.0375 5.175 12.0375 5.45357 11.8875 5.625L9.79062 8L11.8875 10.375Z"})}))};c.propTypes=d.Z,b.default=c}}])