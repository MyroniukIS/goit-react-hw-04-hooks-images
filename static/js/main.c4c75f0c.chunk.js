(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,function(e,t,a){e.exports={center:"Loader_center__3Bqss",wave:"Loader_wave__2D8Bx"}},,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__PUJ1X",SearchForm:"Searchbar_SearchForm__2z-Nc",SearchFormButton:"Searchbar_SearchFormButton__2OZvG",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2SyjR",SearchFormInput:"Searchbar_SearchFormInput__3MmGR"}},,,function(e,t,a){e.exports={thumb:"ImageGallery_thumb__2M1L2",ImageGallery:"ImageGallery_ImageGallery__3AT2e",ImageGalleryItem:"ImageGallery_ImageGalleryItem__1aI9z"}},,function(e,t,a){e.exports={Overlay:"Modal_Overlay__3rc3C",Modal:"Modal_Modal__op7iG"}},,function(e,t,a){e.exports={ButtonBox:"Button_ButtonBox__2TUjI",Button:"Button_Button__2McWI"}},,,,,function(e,t,a){e.exports={ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1fEZ3"}},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(4),o=a.n(r),s=(a(23),a(3)),i=(a(24),a(5)),u=a(11),l=a.n(u),j=a(1),m=document.querySelector("#modal-root");function b(e){var t=e.forClose,a=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);var n=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(j.jsx)("div",{className:l.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(j.jsx)("div",{className:l.a.Modal,children:a})}),m)}a(15);var d=a(6),f=a.n(d);function O(e){var t=e.forSubmit,a=Object(c.useState)(""),n=Object(s.a)(a,2),r=n[0],o=n[1];return Object(j.jsx)("header",{className:f.a.Searchbar,children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===r.trim())return Object(i.b)("Enter correct value!");t(r.trim()),o("")},className:f.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(j.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}O.defaultProps={forSubmit:function(){return null}};var h=a(14),v=a(12),p=a.n(v),x=a(16),g="https://pixabay.com/api",_="photo",S="horizontal",y="popular",I=12,w="23557940-e0a9cdf2e70b178fd7f1f33b8";function N(e,t){return k.apply(this,arguments)}function k(){return(k=Object(x.a)(p.a.mark((function e(t,a){var c,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(g,"/?image_type=").concat(_,"&orientation=").concat(S,"&order=").concat(y,"&q=").concat(t,"&page=").concat(a,"&per_page=").concat(I,"&key=").concat(w),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,r.hits;case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=a.p+"static/media/gallery.9bb7f85e.jpg";function C(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:B,alt:"idle"})})}var G=a(2),F=a.n(G);function L(){return Object(j.jsxs)("div",{className:F.a.center,children:[Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave}),Object(j.jsx)("div",{className:F.a.wave})]})}function E(){return Object(j.jsx)("div",{children:Object(j.jsx)(L,{})})}var M=a(17),R=a.n(M);function P(e){var t=e.message;return i.b.warn(t)}P.defaultProps={message:""},P.propTypes={message:R.a.string.isRequired};var T=a(9),U=a.n(T),q=a(18),z=a.n(q),J=function(e){var t=e.image,a=e.tags,c=e.largeImage,n=e.toClick;return Object(j.jsx)("img",{src:t,alt:a,onClick:function(){return n(c)},className:z.a.ImageGalleryItemImage})},D=a(13),V=a.n(D);function Z(e){var t=e.type,a=e.onClick,c=e.children;return Object(j.jsx)("div",{className:V.a.ButtonBox,children:Object(j.jsx)("button",{type:t,className:V.a.Button,onClick:a,children:c})})}function A(e){var t=e.images,a=e.toClick,c=e.onClick;return Object(j.jsxs)("div",{className:U.a.thumb,children:[Object(j.jsx)("ul",{className:U.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)("li",{className:U.a.ImageGalleryItem,children:Object(j.jsx)(J,{image:e.webformatURL,tags:e.tags,largeImage:e.largeImageURL,toClick:a})},e.webformatURL)}))}),Object(j.jsx)(Z,{type:"button",onClick:c,children:"Load more"})]})}function W(e){var t=e.inputValue,a=e.toClick,n=Object(c.useState)(1),r=Object(s.a)(n,2),o=r[0],i=r[1],u=Object(c.useState)([]),l=Object(s.a)(u,2),m=l[0],b=l[1],d=Object(c.useState)(null),f=Object(s.a)(d,2),O=f[0],v=f[1],p=Object(c.useState)("idle"),x=Object(s.a)(p,2),g=x[0],_=x[1];Object(c.useEffect)((function(){""!==t&&(b([]),i(1),_("idle"),N(t).then((function(e){b(e),_("resolved")})).catch((function(e){v(e),_("rejected")})))}),[t]),Object(c.useEffect)((function(){1!==o&&(_("pending"),N(t,o).then((function(e){b((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),_("resolved")})).catch((function(e){v(e),_("rejected")})))}),[o]);return"idle"===g?Object(j.jsx)(C,{}):"pending"===g?Object(j.jsx)(E,{}):"rejected"===g?Object(j.jsx)(P,{message:O.message}):"resolved"===g!==[]?Object(j.jsx)(A,{images:m,toClick:a,onClick:function(){i((function(e){return e+1}))}}):void 0}function X(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1],m=Object(c.useState)(!1),d=Object(s.a)(m,2),f=d[0],h=d[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{forSubmit:function(e){n(e)}}),Object(j.jsx)(W,{inputValue:a,toClick:function(e){l(e),h(!0)}}),Object(j.jsx)(i.a,{}),f&&Object(j.jsx)(b,{forClose:function(){h((function(e){return!e}))},children:Object(j.jsx)("img",{src:u,alt:u})})]})}Z.defaultProps={onClick:function(){return null},children:null},o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.c4c75f0c.chunk.js.map