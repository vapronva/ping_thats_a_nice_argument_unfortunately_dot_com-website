(function () {
    var ba = void 0,
        h = !0,
        k = null,
        p = !1,
        da = parseFloat,
        r = Math,
        v = window,
        ea = parseInt,
        ga = encodeURIComponent,
        ja = navigator,
        w = document,
        ma = Number;

    function oa(R, J) {
        return R.backgroundImage = J
    }

    function pa(R, J) {
        return R.width = J
    }

    function qa(R, J) {
        return R.display = J
    }

    function ra(R, J) {
        return R.play = J
    }

    function ta(R, J) {
        return R.loop = J
    }

    function ua(R, J) {
        return R.height = J
    }

    function wa(R, J) {
        return R.position = J
    }

    function xa(R, J) {
        return R.length = J
    }

    function ya(R, J) {
        return R.pause = J
    }

    function za(R, J) {
        return R.innerHTML = J
    }

    function Aa(R, J) {
        return R.className = J
    }

    function Ba(R, J) {
        return R.left = J
    }

    function Fa(R, J) {
        return R.zIndex = J
    }
    var Ga = "lastPosition",
        Ha = "create",
        Ja = "Play",
        Ka = "userAgent",
        z = "push",
        La = "type",
        Ma = "location",
        Pa = "detachEvent",
        Qa = "closed",
        Ra = "embeds",
        Sa = "clearTimeout",
        Ta = "join",
        Ua = "sqrt",
        ab = "addEventListener",
        bb = "splice",
        gb = "preventDefault",
        hb = "getElementsByTagName",
        ib = "search",
        jb = "MAX_VALUE",
        kb = "getAttribute",
        G = "width",
        lb = "display",
        mb = "startTime",
        H = "style",
        tb = "slice",
        ub = "play",
        vb = "unshift",
        wb = "button",
        xb = "clientHeight",
        I = "hasOwnProperty",
        yb = "body",
        Cb = "ceil",
        Db = "atan2",
        Eb = "removeAttribute",
        Fb = "appendChild",
        Gb = "round",
        Hb = "offsetWidth",
        Qb = "event",
        Rb = "clientX",
        Sb = "clientY",
        Tb = "attachEvent",
        Ub = "ctrlKey",
        Vb = "getElementById",
        L = "height",
        Wb = "position",
        $b = "indexOf",
        ac = "clientWidth",
        bc = "opera",
        X = "length",
        cc = "duration",
        dc = "parentNode",
        ec = "changedTouches",
        fc = "setTimeout",
        gc = "touches",
        hc = "toFixed",
        ic = "path",
        jc = "ownerDocument",
        kc = "pause",
        uc = "replace",
        vc = "className",
        wc = "identifier",
        xc = "options",
        yc = "parentElement",
        zc = "start",
        Ac = "source",
        Bc = "element",
        Cc = "removeChild",
        Dc = "direction",
        Ec = "floor",
        Fc = "toLowerCase",
        Gc = "childNodes",
        Hc = "charAt",
        Rc = "removeEventListener",
        Y = "setAttribute",
        Sc = "createElement",
        Tc = "zIndex",
        Z = "",
        Uc = "\n",
        $ = " ",
        Vc = " -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(",
        Wc = " : ",
        Xc = " C ",
        Yc = " L ",
        Zc = " Z",
        $c = " path ",
        ad = " rotate(",
        bd = " rotateX(",
        cd = " rotateY(",
        dd = " scaleX(",
        ed = " scaleY(",
        fd = " skew(",
        gd = " translateX(",
        hd = " translateY(",
        id = " translateZ(",
        jd = '" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="">',
        kd = '" patternUnits="objectBoundingBox" width="1" height="1" viewBox="0 0 1 1" preserveAspectRatio="xMidYMid slice">',
        ld = '" pointer-events="visiblePainted" fill="none" />',
        md = "#",
        nd = "#000",
        od = "#90EE90",
        Ld = "%",
        Md = "%25",
        Nd = "%27",
        Od = "&",
        Pd = "&nbsp;",
        Qd = "' not found",
        Rd = "')",
        Sd = "'autoplay='false'class='video'></embed>",
        Td = "'classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B'codebase='http://apple.com/qtactivex/qtplugin.cab'width='",
        Ud = "'controller='",
        Vd = "'enablejavascript='true'postdomevents='true'scale='tofit'name='embedobj_",
        Wd = "'height='",
        Xd = "'id='embedobj_",
        Yd = "'loop='",
        Zd = "'volume='",
        $d = "(",
        ae = ")",
        be = ") ",
        ce = "*",
        de = ",",
        ee = ", ",
        fe = ",M12=",
        ge = ",M21=",
        he = ",M22=",
        ie = ",SizingMethod='auto expand')",
        De = ",transparent),to(rgba(255,255,255,.5)))",
        Ee = "-1",
        Fe = "-10000",
        Ge = "-2",
        He = "-bottom",
        Ie = "-moz-",
        Je = "-moz-crisp-edges",
        Ke = "-moz-perspective",
        Le = "-ms-interpolation-mode",
        Me = "-ms-transform",
        Ne = "-ms-transform-origin",
        Oe = "-o-",
        Pe = "-pie-background",
        Qe = "-webkit-",
        Re = "-webkit-crisp-edges",
        Se = "-webkit-perspective",
        Te = "-webkit-tap-highlight-color",
        Ue = "-webkit-transform",
        Ve = ".",
        We = ".AlphaImageLoader(sizingMethod='scale',src='",
        Xe = ".HYPE_element{-webkit-transform:rotateY(0);}video.HYPE_element{-webkit-transform:none;}^{color:#000;`size:16px;`weight:normal;`family:Helvetica,Arial,Sans-Serif;`weight:normal;`style:normal;`variant:normal;text-decoration:none;text-align:left;text-transform:none;text-indent:0;text-shadow:none;line-height:normal;letter-spacing:normal;white-space:normal;word-spacing:normal;@:baseline;border:none;background-color:transparent;background-image:none;-webkit-`smoothing:antialiased;-moz-backface-visibility:hidden;}",
        Ye = ".HYPE_scene ",
        Ze = ".Matrix(M11=",
        $e = ".gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)",
        af = ".png",
        bf = "/",
        cf = "0",
        Rf = "0 0 ",
        Sf = "0%",
        Tf = "0.0",
        Uf = "0123456789ABCDEF",
        Vf = "0px",
        Wf = "1",
        Xf = "1.0",
        Yf = "100",
        Zf = "100%",
        $f = "50%",
        ag = "600px",
        bg = ": ",
        cg = "</defs>",
        dg = "</div>",
        eg = "</linearGradient>",
        fg = "</pattern>",
        gg = "</style>",
        hg = "</svg>",
        ig = "<defs>",
        jg = "<div style='overflow:auto;-webkit-overflow-scrolling:touch;width:100%;height:100%;'>",
        kg = "<embed src='",
        lg = "<iframe frameBorder='0'style='width:100%;height:100%;border:none' allowfullscreen='true'></iframe>",
        mg = "<image ",
        ng = '<linearGradient id="',
        og = '<path id="',
        pg = '<pattern id="',
        qg = '<stop offset="0%" stop-color="" stop-opacity="1"></stop>',
        rg = '<stop offset="100%" stop-color="" stop-opacity="1"></stop>',
        sg = '<style id="" type="text/css">',
        tg = '<svg width="100%" height="100%" style="position:absolute;" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">',
        ug = "=",
        vg = "?",
        wg = "@1x",
        xg = "@2x",
        yg = "APPLY ERR ",
        zg = "Action",
        Ag = "ActionHandler",
        Bg = "Alpha(Opacity=",
        Cg = "Android",
        xh = "BD",
        yh = "BODY",
        zh = "BackCompat",
        Ah = "Chrom",
        Bh = "ERROR: timeline named '",
        Ch = "Enter",
        Dh = "Error in ",
        Eh = "Exit",
        Fh = "False",
        Gh = "GET",
        Hh = "GHIJKLMNOPQRSTUVWXYZ",
        Ih = "HYPE_element",
        Jh = "HYPE_element HYPE_scene",
        Kh = "HYPE_element_container",
        Lh = "HYPE_persistent_symbols",
        Mh = "HYPE_scene",
        Nh = "HYPE_scene_index",
        Oh = "HYP_a",
        Ph = "HYP_b",
        Qh = "HYP_c",
        Rh = "HYP_d",
        Sh = "HYP_e",
        Th = "HYP_f",
        Uh = "HYP_g",
        Vh = "HYP_h",
        Wh = "HYP_i",
        Xh = "HYP_j",
        Yh = "HYP_k",
        Zh = "HYP_l",
        $h = "HYP_m",
        ai = "HYP_n",
        bi = "HYP_o",
        ci = "HYP_q",
        di = "HYP_t",
        ei = "HYP_u",
        fi = "HYP_v",
        gi = "HYP_w",
        hi =
        "HYP_y",
        ii = "Hype",
        ji = "HypeDocumentLoad",
        ki = "HypeLayoutRequest",
        li = "HypeResourceLoad",
        mi = "HypeSceneLoad",
        ni = "HypeScenePrepareForDisplay",
        oi = "HypeSceneUnload",
        pi = "HypeSwipe",
        qi = "HypeSymbolLoad",
        ri = "HypeSymbolUnload",
        si = "HypeTimelineAction",
        ti = "HypeTimelineComplete",
        ui = "HypeTriggerCustomBehavior",
        vi = "Hype_scene",
        wi = "L ",
        xi = "M",
        yi = "MSPointerUp",
        zi = "MouseEvents",
        Ai = "MozBoxShadow",
        Bi = "N",
        Ci = "O",
        Di = "P",
        Ei = "Q",
        Fi = "R",
        Gi = "S",
        Hi = "SpriteSheet",
        Ii = "SpriteSheetGroup",
        Ji = "T",
        Ki = "True",
        Li = "U",
        Mi = "V",
        Ni = "Viewport",
        Oi = "W",
        Pi = "YES",
        Qi = "^div,^span,^applet,^object,^iframe,^h1,^h2,^h3,^h4,^h5,^h6,^p,^blockquote,^pre,^a,^abbr,^acronym,^address,^big,^cite,^code,^del,^dfn,^em,^img,^ins,^kbd,^q,^s,^samp,^small,^strike,^strong,^sub,^sup,^tt,^var,^b,^u,^i,^center,^dl,^dt,^dd,^ol,^ul,^li,^fieldset,^form,^label,^legend,^table,^caption,^tbody,^tfoot,^thead,^tr,^th,^td,^article,^aside,^canvas,^details,^embed,^figure,^figcaption,^footer,^header,^hgroup,^menu,^nav,^output,^ruby,^section,^summary,^time,^mark,^audio,^video{color:?;`size:?;`weight:?;`family:?;`weight:?;`style:?;`variant:?;text-decoration:?;text-align:?;text-transform:?;text-indent:?;text-shadow:?;line-height:?;letter-spacing:?;white-space:?;word-spacing:?;@:?;border:none;background-color:transparent;background-image:none;padding:0;box-sizing:content-box;}^p{display:block;$:1em 0;}^div,^layer{display:block;}^article,^aside,^footer,^header,^hgroup,^nav,^section{display:block;}^blockquote{display:block;$:1em 40px;}^figcaption{display:block;}^figure{display:block;$:1em 40px;}^q{display:inline;}^q:before{content:open-quote;}^q:after{content:close-quote;}^center{display:block;text-align:center;}^hr{display:block;$:.5em auto;border-style:inset;border-width:1px;}^h1,^h2,^h3,^h4,^h5,^h6{display:block;$-left:0;$-right:0;`weight:bold;}^h1{`size:2em;$-top:.67em;$|:.67em;}^h2{`size:1.5em;$-top:.83em;$|:.83em;}^h3{`size:1.17em;$-top:1em;$|:1em;}^h4{$-top:1.33em;$|:1.33em;}^h5{`size:.83em;$-top:1.67em;$|:1.67em;}^h6{`size:.67em;$-top:2.33em;$|:2.33em;}^table{display:table;border-collapse:separate;border-spacing:2px;border-color:gray;}^thead{display:table-header-group;@:middle;border-color:?;}^tbody{display:table-row-group;@:middle;border-color:?;}^tfoot{display:table-footer-group;@:middle;border-color:?;}^col{display:table-column;}^colgroup{display:table-column-group;}^tr{display:table-row;@:?;border-color:?;}^td,^th{display:table-cell;@:?;}^th{`weight:bold;}^caption{display:table-caption;text-align:center;}^ul,^menu,^dir{display:block;list-style-type:disc;$:1em 0;padding-left:40px;}^ol{display:block;list-style-type:decimal;$:1em 0;padding-left:40px;}^li{display:list-item;$:0;}^ul ul,^ol ul{list-style-type:circle;}^ol ol ul,^ol ul ul,^ul ol ul,^ul ul ul{list-style-type:square;}^dd{display:block;$-left:40px;}^dl{display:block;$:1em 0;}^dt{display:block;}^ol ul,^ul ol,^ul ul,^ol ol{$-top:0;$|:0;}^u,^ins{text-decoration:underline;}^strong,^b{`weight:bolder;}^i,^cite,^em,^var,^address{`style:italic;}^tt,^code,^kbd,^samp{`family:monospace;}^pre,^xmp,^plaintext,^listing{display:block;`family:monospace;white-space:pre;$:1em 0;}^mark{background-color:yellow;color:black;}^big{`size:larger;}^small{`size:smaller;}^s,^strike,^del{text-decoration:line-through;}^sub{@:sub;`size:smaller;}^sup{@:super;`size:smaller;}^nobr{white-space:nowrap;}^a{color:blue;text-decoration:underline;cursor:pointer;}^a:active{color:red;}^noframes{display:none;}^frameset,^frame{display:block;}^frameset{border-color:?;}^iframe{border:0;}^details{display:block;}^summary{display:block;}",
        Ri = "_blank",
        Si = "_hype_grad",
        Ti = "_hype_pat",
        Ui = "_path",
        Vi = "a",
        Wi = "aA",
        Xi = "aB",
        Yi = "aC",
        Zi = "aD",
        $i = "aE",
        aj = "aI",
        bj = "aJ",
        cj = "aK",
        dj = "aL",
        ej = "aM",
        fj = "aN",
        gj = "aS",
        hj = "aT",
        ij = "aU",
        jj = "aV",
        kj = "aW",
        lj = "aX",
        mj = "aY",
        nj = "aZ",
        oj = "abort",
        pj = "absolute",
        qj = "acC",
        rj = "alt",
        Qk = "aria-busy",
        Rk = "aria-hidden",
        Sk = "arraybuffer",
        Tk = "audio",
        Uk = "audio/ogg",
        Vk = "auto",
        Wk = "autoplay",
        Xk = "autostart",
        Yk = "b",
        Zk = "bA",
        $k = "bB",
        al = "bC",
        bl = "bF",
        cl = "bG",
        dl = "bH",
        el = "bI",
        fl = "bJ",
        gl = "bK",
        hl = "bL",
        il = "bM",
        jl = "bN",
        kl = "bO",
        ll = "bP",
        ml = "bQ",
        nl = "bR",
        ol = "bS",
        pl = "bT",
        ql = "bU",
        rl = "bV",
        sl = "bW",
        tl = "backdrop-filter",
        ul = "background-origin",
        vl = "background-size",
        wl = "bcC",
        xl = "below ",
        yl = "block",
        zl = "blur(",
        Al = "body=",
        Bl = "border-radius",
        Cl = "box-reflect",
        Dl = "box-shadow",
        El = "boxShadow",
        Fl = "brightness(",
        Gl = "butt",
        Hl = "c",
        Il = "cB",
        Jl = "cC",
        Kl = "cD",
        Ll = "cF",
        Ml = "cG",
        Nl = "cH",
        Ol = "cI",
        Pl = "cJ",
        Ql = "cK",
        Rl = "cL",
        Sl = "cN",
        Tl = "cQ",
        Ul = "cR",
        Vl = "cT",
        Wl = "cV",
        Xl = "cW",
        Yl = "cX",
        Zl = "cY",
        $l = "cZ",
        am = "cancel",
        bm = "canplaythrough",
        cm = "catch",
        dm = "click",
        em = "contrast(",
        fm = "control temporal principal",
        gm = "controller",
        hm = "controls",
        im = "d",
        jm = "dC",
        km = "dD",
        lm = "dE",
        mm = "dF",
        nm = "dG",
        om = "dH",
        pm = "dI",
        qm = "dJ",
        rm = "dK",
        sm = "dL",
        tm = "dM",
        um = "dN",
        vm = "dO",
        wm = "dP",
        xm = "dQ",
        ym = "dR",
        zm = "dS",
        Am = "dT",
        Bm = "dU",
        Cm = "dV",
        Dm = "dW",
        Em = "dX",
        Fm = "dY",
        Gm = "dZ",
        Hm = "deg",
        Im = "deviceorientation",
        Jm = "div",
        Km = "down",
        Lm = "drag",
        Mm = "drop-shadow(",
        Nm = "e",
        Om = "eA",
        Pm = "element",
        Qm = "embed",
        Rm = "embedobj_",
        Sm = "end",
        Tm = "enter",
        Um = "error",
        Vm = "error constructing vertices for ",
        Wm = "error making physics body for ",
        Xm = "exit",
        Ym = "f",
        Zm = "false",
        $m = "fcC",
        an = "file://",
        bn = "fill",
        cn = "fill-rule",
        dn = "filter",
        en = "flat",
        fn = "font-",
        gn = "function",
        hn = "g",
        jn = "gW",
        kn = "gg",
        ln = "gradientTransform",
        mn = "hauptzeitachse",
        nn = "head",
        on = "height",
        pn = "hidden",
        qn = "href",
        rn = 'href="" x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" />',
        sn = "http://",
        tn = "hue-rotate(",
        un = "hype-obj-",
        vn = "hype-scene-",
        wn = "iPad",
        xn = "iPhone",
        yn = "iPod",
        zn = "ibooksimg://",
        An = "iframe",
        Bn = "image",
        Cn = "image-rendering",
        Dn = "img",
        En = "img_",
        Fn = "inherit",
        Gn = "inset ",
        Hn = "j",
        In = "kTimelineDefaultIdentifier",
        Jn = "kTimelinePhysicsIdentifier: ",
        Kn = "keydown",
        Ln = "keypress",
        Mn = "keyup",
        Nn = "l",
        On = "left",
        Pn = "linear-gradient(",
        Qn = "loop",
        Rn = "m",
        Sn = "mailto:",
        Tn = "margin",
        Un = "miter",
        Vn = "mouseclick",
        Wn = "mousedown",
        Xn = "mousemove",
        Yn = "mouseout",
        Zn = "mouseover",
        $n = "mouseup",
        ao = "move",
        bo = "mozHidden",
        co = "mozvisibilitychange",
        eo = "msHidden",
        fo = "msvisibilitychange",
        go = "mute",
        ho = "n",
        io = "ne",
        jo = "nearest-neighbor",
        ko = "nf",
        lo = "no",
        mo = "no-repeat",
        no = "none",
        oo = "nonzero",
        po = "number",
        qo = "objectBoundingBox",
        ro = "offset",
        so = "on",
        to = "onresize",
        uo = "p",
        vo = "pageshow",
        wo = "pan-x",
        xo = "pan-x pan-y pinch-zoom",
        yo = "pan-y",
        zo = "passive",
        Ao = "patternContentUnits",
        Bo = "patternUnits",
        Co = "pe",
        Do = "pf",
        Eo = "physics-body",
        Fo = "physics-engine",
        Go = "pixelated",
        Ho = "playsinline",
        Io = "pointer-events",
        Jo = "pointerup",
        Ko = "preserve-3d",
        Lo = "preserveAspectRatio",
        Mo = "progid:DXImageTransform.Microsoft",
        No = "px",
        Oo = "px) ",
        Po = "r",
        Qo = "repeat",
        Ro = "repeat-x",
        So = "repeat-y",
        To = "resize",
        Uo = "rgb",
        Vo = "rgba",
        Wo = "rgba(",
        Xo = "rgba(0,0,0,0)",
        Yo = "right",
        Zo = "role",
        $o = "rotate(",
        ap = "saturate(",
        bp = "script",
        cp = "scroll",
        dp = "sepia(",
        ep = "seq. temp. principale",
        fp = "source",
        gp = "src",
        hp = "start",
        ip = "stop",
        jp = "stop-color",
        kp = "stop-opacity",
        lp = "string",
        mp = "stroke",
        np = "stroke-dasharray",
        op = "stroke-dashoffset",
        pp = "stroke-linecap",
        qp = "stroke-linejoin",
        rp = "stroke-miterlimit",
        sp = "stroke-width",
        tp = "subject=",
        up = "svg",
        vp = "swipe",
        wp = "tX",
        xp = "tY",
        yp = "tabindex",
        zp = "tap",
        Ap = "target",
        Bp = "testPassive",
        Cp = "ti",
        Dp = "timeline principale",
        Ep = "timelinename",
        Fp = "title",
        Gp = "touchcancel",
        Hp = "touchend",
        Ip = "touchmove",
        Jp =
        "touchstart",
        Kp = "transform-origin",
        Lp = "transform-style",
        Mp = "true",
        Np = "type",
        Op = "uB",
        Pp = "up",
        Qp = "url(#",
        Rp = "url('",
        Sp = "user-select",
        Tp = "userSpaceOnUse",
        Up = "vertical-align",
        Vp = "video",
        Wp = "video/ogg",
        Xp = "video/quicktime",
        Yp = "video/webm",
        Zp = "viewBox",
        $p = "visibilitychange",
        aq = "visiblePainted",
        bq = "webkitHidden",
        cq = "webkitvisibilitychange",
        dq = "width",
        eq = "www.",
        fq = "x-ibooks-th://",
        gq = "xMidYMid slice",
        hq = "xlink:",
        iq = "z",
        jq = "\u30e1\u30a4\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3",
        kq = "\u4e3b\u65f6\u95f4\u7ebf";

    function lq() {
        return function () {}
    }
    (function () {
        v.HYPE_740F = function (R, J, Na, je, sj, tj, Va, A, lc, mq, pd, df, fa, uj, Dg, ef, nq, oq, pq, ke) {
            function ff(a) {
                var b = zb(a);
                if (!(fa != h || a == k || 0 < Ib || b == k || b.ob == h))
                    if (b = b.Qa[M[a.id]], b != k) {
                        var c = 1 == n(a, il, 0),
                            d = n(a, ql, 0.5),
                            e = n(a, rl, 0.1),
                            f = n(a, Vl, 0.01);
                        a = n(a, sl, 0.001);
                        0 >= a && (a = 1E-6);
                        c == h && (d = 0, e = 1, a = Infinity);
                        b.restitution = d;
                        b.friction = e;
                        b.frictionAir = f;
                        c != h && B.Body.setDensity(b, a)
                    }
            }

            function mc(a, b) {
                var c, d, e, f = zb(a);
                if (!(fa != h || a == k || 0 < Ib || f == k || f.ob == h)) {
                    var g = f.oa.world,
                        j = M[a.id],
                        m = f.Qa[j],
                        l = n(a, il, 0);
                    if (!(0 == l && m == k)) {
                        Ib += 1;
                        var q = m != k && 0 == l;
                        (m == k && 0 != l) == h ? (m = vj(a), m = wj(a, m, h), m == k && (m = B.Body[Ha]({
                            elementId: a.id
                        })), m.plugin = n(a, Om, {}), B.Composite.add(g, m), f.Qa[j] = m) : q == h && (B.Composite.remove(g, m), V(a, Om, m.plugin), delete f.Qa[j], m = k);
                        f = n(a, ql, 0.5);
                        g = n(a, rl, 0.1);
                        j = n(a, Vl, 0.01);
                        q = n(a, sl, 0.001);
                        0 >= q && (q = 1E-6);
                        1 == l && (f = 0, g = 1, q = Infinity);
                        xj(a);
                        var t = M[a.id];
                        d = n(a, wp, 0.5);
                        c = n(a, xp, 0.5);
                        e = nb(t, h);
                        t = ob(t, h);
                        d *= e;
                        c *= t;
                        e = gf(a);
                        d = qd(e, [d, c]);
                        c = d[0];
                        d = d[1];
                        e = r.PI * ((da(n(a, Ym, 0)) - da(n(a, xm, 0))) / 180);
                        var t =
                            c - n(a, qj, 0),
                            u = d - n(a, wl, 0),
                            s = e - r.PI * (n(a, $m, 0) / 180);
                        if (m != k) {
                            l = 1 == l;
                            if (1 < 1E5 * r.abs(m[Wb].x - c) || 1 < 1E5 * r.abs(m[Wb].y - d) || 1 < 1E5 * r.abs(m.angle - e) || m.restitution != f || m.friction != g || m.frictionAir != j || m.density != q || m.isStatic != l || m.Ga != k || b == h || m.isSleeping != p) m.isStatic != l && B.Body.setStatic(m, l), B.Body.setAngle(m, 0), l != h && B.Body.setDensity(m, q), B.Body.setPosition(m, {
                                x: c,
                                y: d
                            }), B.Body.setAngle(m, e), m.Ga == k ? (B.Body.setVelocity(m, {
                                x: c - t,
                                y: d - u
                            }), B.Body.setAngularVelocity(m, e - s)) : (B.Body.setVelocity(m, {
                                    x: 0,
                                    y: 0
                                }),
                                B.Body.setAngularVelocity(m, 0)), m.restitution = f, m.friction = g, m.frictionAir = j, B.Sleeping.set(m, p), m.force = {
                                x: 0,
                                y: 0
                            }, m.torque = 0, m.positionImpulse = {
                                x: 0,
                                y: 0
                            }, m.constraintImpulse = {
                                x: 0,
                                y: 0,
                                angle: 0
                            }, m.angularSpeed = 0, m.motion = 0;
                            rd();
                            m.Ga != k && (m.Ga.pointA = E(c, d))
                        }
                        yj(a);
                        Eg()
                    }
                }
            }

            function Ic(a) {
                var b = zb(a);
                if (!(fa != h || a == k || b == k || b.ob == h)) {
                    var c = b.Qa[M[a.id]];
                    if (!(0 == n(a, il, 0) || c == k)) {
                        Ib += 1;
                        for (var d = [], e = b.oa.pairs.list, f = b.oa.pairs.table, g = 0; g < e[X]; g++)
                            for (var j = 0; j < c.parts[X]; j++)
                                if (e[g].bodyA == c.parts[j] ||
                                    e[g].bodyB == c.parts[j]) {
                                    d[z](g);
                                    break
                                } for (g = 0; g < d[X]; g++) j = d[g] - g, delete f[e[j].id], e[bb](j, 1);
                        d = vj(a);
                        d = wj(a, d, c.render[ic] != k);
                        if (d != k && 0 < d.parts[X]) {
                            d.id = c.id;
                            B.Common.extend(c, p, d);
                            c.parts[0] = c;
                            for (g = 0; g < c.parts[X]; g++) c.parts[g].parent = c;
                            for (g = 0; g < c.vertices[X]; g++) c.vertices[g].body = c
                        }
                        Eg();
                        le(b);
                        mc(a)
                    }
                }
            }

            function Fg(a, b, c) {
                var d = n(a, Vi, 0),
                    e = n(a, Yk, 0),
                    f = Gg(a),
                    f = qd(f, [0, 0]);
                V(a, wp, b);
                V(a, xp, c);
                b = Gg(a);
                b = qd(b, [0, 0]);
                W(a, Vi, d + (f[0] - b[0]), Yk, e + (f[1] - b[1]))
            }

            function xj(a) {
                var b = n(a, ym),
                    c = n(a, zm),
                    d =
                    n(a, wp),
                    e = n(a, xp);
                b == k || (c == k || b == d && c == e) || Fg(a, b, c)
            }

            function yj(a) {
                var b = n(a, Am),
                    c = n(a, Bm),
                    d = n(a, wp),
                    e = n(a, xp);
                b == k || (c == k || b == d && c == e) || Fg(a, b, c)
            }

            function wj(a, b, c) {
                var d = M[a.id],
                    e = n(a, jm) != k,
                    f = B.Vertices.fromPath(b);
                if (f == k || 2 > f[X]) return v.HYPE_DEBUG_PHYSICS == h && console.log(Vm + a.id + $c + b), k;
                e == p && B.Vertices.isConvex(f) == p && (f = B.Vertices.hull(f));
                var g = B.Vertices.centre(f),
                    j = n(a, Gm, p),
                    m = k;
                B.HypePlugin && B.HypePlugin.fromVerticesWithFallback ? (g = B.HypePlugin.fromVerticesWithFallback(g.x, g.y, f, {
                        elementId: a.id
                    },
                    p, 0.1, 10, 1, e, c, j), m = g.physicsBody, g = g.centerPoint) : m = B.Bodies.fromVertices(g.x, g.y, f, {
                    elementId: a.id
                }, p, 0.1, 10, 1);
                if (m == k) return v.HYPE_DEBUG_PHYSICS == h && console.log(Wm + a.id), k;
                m.render.path = b;
                b = gf(a);
                b = zj(b);
                b = qd(b, [g.x, g.y]);
                g = nb(d, h);
                d = ob(d, h);
                g = b[0] / g;
                d = b[1] / d;
                n(a, Am) == k && V(a, Am, n(a, wp, 0.5));
                n(a, Bm) == k && V(a, Bm, n(a, xp, 0.5));
                V(a, ym, g);
                V(a, zm, d);
                Fg(a, g, d);
                V(a, xm, n(a, Ym, 0));
                return m
            }

            function Aj(a, b, c) {
                var d = n(a, ol, 0);
                if (Jc != h || 0 == d || 36 == d) return {
                    x: b,
                    y: c
                };
                var e = M[a.id],
                    f = me(e),
                    g = hf(f),
                    j = Hg(f),
                    m = hf(e),
                    f = n(a, Hl, k);
                a = n(a, im, k);
                f == k && (f = m[G]);
                a == k && (a = m[L]);
                var l = nb(e),
                    q = ob(e),
                    t = l - f,
                    u = q - a,
                    s = f,
                    x = a,
                    e = b,
                    m = c,
                    y = 0 != (d & 1),
                    C = 0 != (d & 4),
                    T = 0 != (d & 2),
                    D = 0 != (d & 8),
                    N = 0 != (d & 32),
                    O = 0 != (d & 16),
                    na = 0 != (d & 64) && T == h && O == h,
                    d = 0 != (d & 128) && T == h && O == h,
                    F = j[G] / g[G],
                    A = j[L] / g[L];
                y == h && C == h && T == h ? s = l + (j[G] - g[G]) - t : T == h && (s = r[Cb](l * F - t));
                D == h && N == h && O == h ? x = q + (j[L] - g[L]) - u : O == h && (x = r[Cb](q * A - u));
                y == h && C == p && T == p ? e = b - (j[G] - g[G]) : y == h && C == h && T == p ? e = (b + l / 2) / F - l / 2 : y == h && C == h && T == h ? e = b : T == h && (e = y == h && C == p ? b + (s - f) - (j[G] - g[G]) : b);
                D == h && N == p &&
                    O == p ? m = c - (j[L] - g[L]) : D == h && N == h && O == p ? m = (c + q / 2) / A - q / 2 : D == h && N == h && O == h ? m = c : O == h && (m = D == h && N == p ? c + (x - a) - (j[L] - g[L]) : c);
                if ((na == h || d == h) == h) c = s, b = x, g = s / f, x /= a, j = g, na == h ? j = g <= x ? g : x : d == h && (j = g >= x ? g : x), f = c - f * j, a = b - a * j, y == h && C == p ? e -= f : y == h && C == h && (e -= f / 2), D == h && N == p ? m -= a : D == h && N == h && (m -= a / 2);
                return {
                    x: e,
                    y: m
                }
            }

            function gf(a) {
                for (var b = [1, 0, 0, 1, 0, 0], c = [], d = a; d != k;) {
                    d = n(d, bl);
                    if (d == k) break;
                    d = ka(d);
                    if (sd(d) == h) break;
                    c[bb](0, 0, d)
                }
                c[z](a);
                for (a = 0; a < c[X]; a++) var e = Gg(c[a]),
                    d = b[0],
                    f = b[1],
                    g = b[2],
                    j = b[3],
                    m = e[0],
                    l = e[1],
                    q = e[2],
                    t = e[3],
                    u = e[4],
                    e = e[5],
                    b = [d * m + g * l, f * m + j * l, d * q + g * t, f * q + j * t, d * u + g * e + b[4], f * u + j * e + b[5]];
                return b
            }

            function Gg(a) {
                var b = M[a.id],
                    c = n(a, Ph, 0),
                    d = n(a, Oh, 0),
                    e = n(a, Ym, 0),
                    f = n(a, kl, 0),
                    g = n(a, Tl, 1),
                    j = n(a, Ul, 1),
                    m = n(a, jn, 0),
                    l = n(a, Op, 0),
                    q = n(a, wp, 0.5);
                a = n(a, xp, 0.5);
                var t = nb(b, h),
                    b = ob(b, h),
                    q = q * t;
                a *= b;
                m *= r.PI / 180;
                l *= r.PI / 180;
                b = [1, 0, 0, 1, 0, 0];
                b = ne(b, c, d);
                b = ne(b, q, a);
                b = Bj(b, r.PI * ((e + f) / 180));
                b = [b[0] * g, b[1] * g, b[2] * j, b[3] * j, b[4], b[5]];
                b = Cj(b, m, l);
                return b = ne(b, -q, -a)
            }

            function jf(a, b) {
                var c = r.max(a, b);
                return r.max(r.min(r[Gb](90 /
                    c), 90), 6)
            }

            function vj(a) {
                var b = [],
                    c = M[a.id],
                    d = nb(c, h),
                    c = ob(c, h),
                    e = n(a, jm);
                if (e != k) {
                    var f = n(a, Hl, 1),
                        g = n(a, im, 1),
                        d = d / (0 == f ? 1 : f),
                        c = c / (0 == g ? 1 : g),
                        f = n(a, hn),
                        j = n(a, ho, Z),
                        m = n(a, Rn, Z),
                        l = n(a, $l),
                        g = [];
                    if (e[Qa] != h && f == k && j == Z && m == Z && l == k) {
                        var q = n(a, km, 0),
                            g = n(a, om, 4),
                            m = Dj(e);
                        if (m == k || 1 >= m) g = [];
                        else {
                            e = [m[0]];
                            l = e[0];
                            for (f = 1; f < m[X] - 1; f++) j = m[f], 2 < pb(l, j) && (e[z](j), l = j);
                            e[z](m[m[X] - 1]);
                            m = [];
                            l = [];
                            q = r.max(3, q / 2);
                            for (f = 0; f < e[X]; f++)
                                if (j = e[f], 0 == f) {
                                    var t = e[f + 1],
                                        u = r[Db](t.y - j.y, t.x - j.x) - r.PI / 2,
                                        s = r.sin(u) * q,
                                        t = r.cos(u) *
                                        q;
                                    m[z](E(j.x + t, j.y + s));
                                    l[z](E(j.x - t, j.y - s))
                                } else if (f == e[X] - 1) s = e[f - 1], u = r[Db](s.y - j.y, s.x - j.x) + r.PI / 2, s = r.sin(u) * q, t = r.cos(u) * q, m[z](E(j.x + t, j.y + s)), l[z](E(j.x - t, j.y - s));
                            else {
                                var t = e[f + 1],
                                    s = e[f - 1],
                                    s = r[Db](s.y - j.y, s.x - j.x),
                                    t = r[Db](t.y - j.y, t.x - j.x),
                                    u = (t - s) / 2,
                                    u = r.cos(u) * q / r.sin(u),
                                    x = q,
                                    y = pb(E(0, 0), E(u, x)),
                                    C = u * r.cos(s) - x * r.sin(s),
                                    x = u * r.sin(s) + x * r.cos(s),
                                    s = s - r.PI / 2,
                                    t = t + r.PI / 2;
                                if (y > g && 0 > u) m[z](E(j.x - r.cos(s) * q, j.y - r.sin(s) * q)), m[z](E(j.x - r.cos(t) * q, j.y - r.sin(t) * q));
                                else m[z](E(j.x + C, j.y + x));
                                if (y > g && 0 <=
                                    u) l[z](E(j.x + r.cos(s) * q, j.y + r.sin(s) * q)), l[z](E(j.x + r.cos(t) * q, j.y + r.sin(t) * q));
                                else l[z](E(j.x - C, j.y - x))
                            }
                            g = m.concat(l.reverse())
                        }
                    } else g = Dj(e);
                    for (j = 0; j < g[X]; j++) e = g[j].x, f = g[j].y, b[z](E(e * d, f * c))
                } else {
                    u = t = s = m = q = j = l = g = 0;
                    n(a, cj) == $f ? (g = d / 2, j = d / 2, m = d / 2, t = d / 2, l = c / 2, q = c / 2, s = c / 2, u = c / 2) : (g = n(a, cj, 0), m = n(a, dj, 0), j = n(a, aj, 0), e = n(a, bj, 0), f = r.max(r.max(g + j, m + e), c), l = r.max(r.max(g + m, j + e), d), g = r.min(c * (g / f), d * (g / l)), j = r.min(c * (j / f), d * (j / l)), m = r.min(c * (m / f), d * (m / l)), t = r.min(c * (e / f), d * (e / l)), l = g, q = j, s = m, u = t);
                    b[z](E(g, 0));
                    b[z](E(d - m, 0));
                    if (0 < m || 0 < s) {
                        y = jf(m, s);
                        for (C = 270 + y; 360 > C; C += y) e = m * B.Common.cos(C * r.PI / 180) + (d - m), f = s * B.Common.sin(C * r.PI / 180) + s, b[z](E(e, f))
                    }
                    b[z](E(d, s));
                    b[z](E(d, c - u));
                    if (0 < t || 0 < u) {
                        y = jf(t, u);
                        for (C = 0 + y; 90 > C; C += y) e = t * B.Common.cos(C * r.PI / 180) + (d - t), f = u * B.Common.sin(C * r.PI / 180) + (c - u), b[z](E(e, f))
                    }
                    b[z](E(d - t, c));
                    b[z](E(j, c));
                    if (0 < j || 0 < q) {
                        y = jf(j, q);
                        for (C = 90 + y; 180 > C; C += y) e = j * B.Common.cos(C * r.PI / 180) + j, f = q * B.Common.sin(C * r.PI / 180) + (c - q), b[z](E(e, f))
                    }
                    b[z](E(0, c - q));
                    b[z](E(0, l));
                    if (0 < g || 0 < l) {
                        y =
                            jf(g, l);
                        for (C = 180 + y; 270 > C; C += y) e = g * B.Common.cos(C * r.PI / 180) + g, f = l * B.Common.sin(C * r.PI / 180) + l, b[z](E(e, f))
                    }
                }
                d = gf(a);
                a = [];
                for (j = 0; j < b[X]; j++) g = qd(d, [b[j].x, b[j].y]), c = r[Gb](g[0]), g = r[Gb](g[1]), (0 == a[X] || a[a[X] - 1].x != c || a[a[X] - 1].y != g) && a[z]({
                    x: c,
                    y: g
                });
                b = Z;
                for (d = 0; d < a[X]; d++) 1 < a[X] && d == a[X] - 1 && a[d].x == a[0].x && a[d].y == a[0].y || (b += wi + a[d].x + $ + a[d].y + $);
                return b
            }

            function Ig(a) {
                var b = cb[M[a.id]];
                return 2 == n(a, il, 0) && b != k && (b.a != k || b.b != k) ? h : p
            }

            function Jg(a, b, c, d) {
                if (-1 != Ia(td, b) && 0 != n(a, il, 0)) {
                    var e = zb(a);
                    b = Z + b + Il;
                    for (var f = n(a, b, []); 4 <= f[X];) f.shift();
                    f[z]({
                        value: c,
                        time: d
                    });
                    V(a, b, f); - 1 == Ia(e.jb, a.id) && e.jb[z](a.id)
                }
            }

            function Ej(a, b) {
                var c, d, e;
                B.Composite.allBodies(a.oa.world);
                B.Composite.allBodies(a.oa.world);
                var f = r[Cb](1E3 / 60),
                    g = r[Ec](1E3 * b),
                    j = g - a.Vb;
                a.Vb = g;
                a.Va += r.min(f, a.Va + r[Ec](j));
                for (g = 0; a.Va >= f && 20 > g;) B.Engine.update(a.oa, f), a.Va -= f, g += 1;
                kf = a.ob = h;
                v.HYPE_DEBUG_PHYSICS == h && a.Wb.controller.world(a.Wb);
                f = B.Composite.allBodies(a.oa.world);
                for (g = 0; g < f[X]; g++)
                    if (e = f[g], j = w[Vb](e.elementId), !(e.elementId ==
                            k || e.isStatic == h || Ig(j) == h)) {
                        xj(j);
                        var m = w[Vb](e.elementId);
                        c = M[m.id];
                        d = [1, 0, 0, 1, 0, 0];
                        var l;
                        l = Fj(m);
                        l = l == k || sd(l) == h ? k : l;
                        l != k && (d = gf(l));
                        d = zj(d);
                        d = qd(d, [e[Wb].x, e[Wb].y]);
                        l = n(m, wp, 0.5);
                        var q = n(m, xp, 0.5),
                            t = nb(c, h);
                        c = ob(c, h);
                        d = Aj(m, d[0] - l * t, d[1] - q * c);
                        c = d.x;
                        d = d.y;
                        e = da(n(m, xm, 0)) + e.angle * (180 / r.PI);
                        W(j, Vi, c);
                        W(j, Yk, d);
                        W(j, Ym, e[hc](6));
                        yj(j)
                    } Kg();
                a.ob = p
            }

            function le(a) {
                a = B.Composite.allBodies(a.oa.world);
                for (var b = 0; b < a[X]; b++) {
                    var c = a[b];
                    c.elementId != k && B.Sleeping.set(c, p)
                }
            }

            function Gj(a, b) {
                if (!(b.gamma ==
                        k || b.beta == k)) {
                    var c = r.sin(b.gamma * r.PI / 180),
                        d = r.sin(b.beta * r.PI / 180) * r.cos(b.gamma * r.PI / 180);
                    a.Pb = (-r.atan(c / d) + (0 > d ? r.PI : 0)) * (180 / r.PI);
                    a.Qb = r[Ua](c * c + d * d);
                    d = a[wc];
                    lf(d) == h && (c = mf(d) * a.Qb, d = nf(d) + a.Pb, a.oa.world.gravity.x = c * B.Common.cos(d * r.PI / 180), a.oa.world.gravity.y = c * B.Common.sin(d * r.PI / 180));
                    le(a);
                    rd()
                }
            }

            function of (a) {
                for (; a != k;) {
                    a = Fj(a);
                    if (a == k) break;
                    if (sd(a) == h) return a
                }
                return k
            }

            function Fj(a) {
                var b = n(a, bl);
                if (b == k) {
                    var c = Wa(a);
                    a = A[c].v[M[a.id]];
                    a != k && (b = a.bF)
                }
                return ka(b)
            }

            function zb(a) {
                a = of (a);
                return Lg(a != k ? a.id : k)
            }

            function Eg() {
                Ib = r.max(0, Ib - 1)
            }

            function Lg(a) {
                a == k && (a = J);
                for (var b = 0; b < Ea[X]; b++) {
                    var c = Ea[b];
                    if (c[wc] == a) return c
                }
                return k
            }

            function Mg(a) {
                return a == k || a[wc] == k ? p : ha[M[a[wc]]] != k
            }

            function Ng(a) {
                if ((a == J || a == k) == h) return p;
                a = M[a];
                var b = Wa(ka(a));
                return A[b].v[a].bX
            }

            function lf(a) {
                if ((a == J || a == k) == h) return A[U].cA;
                if (Ng(a) == h) return a = of (w[Vb](a)), a == k ? lf(k) : lf(a.id);
                a = M[a];
                var b = Wa(ka(a));
                return A[b].v[a].cA
            }

            function nf(a) {
                if ((a == J || a == k) == h) return A[U].bZ - 90;
                if (Ng(a) ==
                    h) return a = of (w[Vb](a)), a == k ? nf(k) : nf(a.id);
                a = M[a];
                var b = Wa(ka(a));
                return A[b].v[a].bZ - 90
            }

            function mf(a) {
                if ((a == J || a == k) == h) return A[U].bY;
                if (Ng(a) == h) return a = of (w[Vb](a)), a == k ? mf(k) : mf(a.id);
                a = M[a];
                var b = Wa(ka(a));
                return A[b].v[a].bY
            }

            function Og(a) {
                if (Lg(a) == k) {
                    var b = {};
                    Ea[z](b);
                    a == k && (a = J);
                    b.identifier = a;
                    b.Qa = {};
                    b.zc = {};
                    b.jb = [];
                    b.Vb = 0;
                    b.Va = 0;
                    var c = B.Engine[Ha]({
                        vc: h
                    });
                    b.oa = c;
                    if (v.HYPE_DEBUG_PHYSICS == h) {
                        var d = {
                                element: w[Vb](a),
                                engine: c
                            },
                            d = B.Render[Ha](d);
                        b.Wb = d
                    }
                    var d = mf(a),
                        e = nf(a);
                    a = lf(a);
                    c.world.gravity.x =
                        d * B.Common.cos(e * r.PI / 180);
                    c.world.gravity.y = d * B.Common.sin(e * r.PI / 180);
                    b.Pb = 0;
                    b.Qb = 1;
                    v[ab] != k && a == h ? v[ab](Im, function (a) {
                        Gj(b, a)
                    }, h) : v[ab] != k && v[Rc](Im, function (a) {
                        Gj(b, a)
                    }, h);
                    c.world.bounds.min.x = -2E4;
                    c.world.bounds.min.y = -2E4;
                    c.world.bounds.max.x = 2E4;
                    c.world.bounds.max.y = 2E4
                }
            }

            function zj(a) {
                var b = a[0],
                    c = a[1],
                    d = a[2],
                    e = a[3],
                    f = a[4];
                a = a[5];
                var g = b * e - c * d;
                if (!g) return k;
                g = 1 / g;
                return [e * g, -c * g, -d * g, b * g, (d * a - e * f) * g, (c * f - b * a) * g]
            }

            function Cj(a, b, c) {
                var d = a[0],
                    e = a[1],
                    f = a[2],
                    g = a[3];
                return [d + f * r.tan(c), e + g *
                    r.tan(c), d * r.tan(b) + f, e * r.tan(b) + g, a[4], a[5]
                ]
            }

            function ne(a, b, c) {
                var d = a[0],
                    e = a[1],
                    f = a[2],
                    g = a[3];
                return [d, e, f, g, d * b + f * c + a[4], e * b + g * c + a[5]]
            }

            function Bj(a, b) {
                var c = a[0],
                    d = a[1],
                    e = a[2],
                    f = a[3],
                    g = a[4],
                    j = a[5],
                    m = r.sin(b),
                    l = r.cos(b);
                return [c * l + e * m, d * l + f * m, c * -m + e * l, d * -m + f * l, g, j]
            }

            function qd(a, b) {
                var c = b[0],
                    d = b[1];
                return [a[0] * c + a[2] * d + a[4], a[1] * c + a[3] * d + a[5]]
            }

            function ud(a) {
                var b = Jb(a),
                    c = n(a, hn),
                    d = n(a, uo),
                    e = no;
                c != k && (e = c);
                var c = n(a, ho, Z),
                    f = n(a, Rn, Z),
                    g = n(a, $l);
                if (c != Z && f != Z) {
                    var d = a.id + Si,
                        e = Qp + d + ae,
                        d = w[Vb](d),
                        g = (r.abs(n(a, Nn, 0)) + 90) % 360,
                        j = M[a.id];
                    a = nb(j);
                    j = ob(j);
                    d[Y](ln, $o + g + $ + a / 2 + $ + j / 2 + ae);
                    a = oe(c)[3];
                    g = oe(f)[3];
                    d = d[hb](ip);
                    for (j = 0; j < d[X]; j++) d[j][kb](ro) == Sf ? (d[j][Y](jp, c), d[j][Y](kp, a)) : d[j][kb](ro) == Zf && (d[j][Y](jp, f), d[j][Y](kp, g))
                } else if (g != k) {
                    c = a.id + Ti;
                    e = Qp + c + ae;
                    c = w[Vb](c);
                    f = c[hb](Bn)[0];
                    j = n(a, vm, 0);
                    a = n(a, wm, 0);
                    var m = 12 > F.$ ? Z : hq;
                    if (d == Qo || d == Ro || d == So) {
                        var l = d == Ro ? Zf : a;
                        c[Y](dq, Z + (d == So ? Zf : j));
                        c[Y](on, Z + l);
                        c[Y](Bo, Tp);
                        c[Y](Ao, Tp);
                        c[Eb](Zp);
                        c[Eb](Lo);
                        f[Y](m + qn, g);
                        f[Y](dq, Z + j);
                        f[Y](on, Z + a);
                        f[Eb](Lo)
                    } else c[Y](dq,
                        Wf), c[Y](on, Wf), c[Y](Bo, qo), c[Y](Zp, Rf + j + $ + a), c[Y](Lo, gq), c[Eb](Ao), f[Y](m + qn, g), f[Y](dq, Z + j), f[Y](on, Z + a), f[Y](Lo, gq)
                }
                b[Y](bn, e)
            }

            function db(a) {
                var b = Jb(a),
                    c = eb(n(a, lm)),
                    d = n(a, km, 0),
                    e = n(a, mm, Gl),
                    f = n(a, nm, Un),
                    g = n(a, om, 4),
                    j = n(a, sm, oo),
                    m = n(a, tm, 0),
                    l = n(a, um, 1),
                    q = n(a, pm, 0),
                    t = n(a, qm, 0),
                    u = n(a, rm, 0);
                a = n(a, Sl);
                a != no && (a = aq);
                b[Y](Io, a);
                b[Y](mp, c);
                b[Y](sp, d);
                b[Y](pp, e);
                b[Y](qp, f);
                b[Y](rp, g);
                b[Y](cn, j);
                0 == m ? 1E-4 > r.abs(1 - l) ? u = t = q = 0 : (c = b.getTotalLength(), 0 == l && (c = r[Cb](c)), t = q = c, u = c - c * l) : (0.3 > q && (q = 0), 0.3 > t &&
                    (t = 0));
                0 != q || 0 != t || 0 != u ? (b[Y](np, Z + q + de + t), b[Y](op, Z + u)) : (b[Eb](np), b[Eb](op));
                F.$ != k && b[Y](im, b[kb](im))
            }

            function Hj(a) {
                var b = n(a, Hl),
                    c = n(a, im);
                b == k || c == k || (a = a[hb](up), 0 != a[X] && a[0][Y](Zp, Rf + b + $ + c))
            }

            function Jb(a) {
                var b = a.id + Ui;
                if (w[Vb](b) == k && n(a, jm) != k) {
                    var c = a.id + Si,
                        d = a.id + Ti,
                        e = 12 > F.$ ? Z : hq,
                        f;
                    f = Z + tg + ig;
                    f += ng + c + jd;
                    f += qg;
                    f += rg;
                    f += eg;
                    f += pg + d + kd;
                    f += mg + e + rn;
                    f += fg;
                    f += cg;
                    f += og + b + ld;
                    f += hg;
                    za(a, f);
                    P.cN(a, no);
                    Hj(a)
                }
                return w[Vb](b)
            }

            function Pg(a) {
                var b = a.b,
                    b = b == k ? a.s : b,
                    c = a.e;
                if (b && c) {
                    var d = ka(a.o),
                        e = n(d,
                            Cm, 0),
                        d = b[Qa] == h || c[Qa] == h;
                    d == h && b[Qa] == p && (b = Ij(b), Jj(b));
                    d == h && c[Qa] == p && (c = Ij(c), Jj(c));
                    var f = new Kj(b),
                        g = new Kj(c),
                        d = p;
                    if (f.ba[X] > g.ba[X]) var d = h,
                        j = g,
                        g = f,
                        f = j;
                    j = k;
                    if (1 == e) {
                        if (e = f, j = g.ba[X] - e.ba[X], 0 < j && 0 < e.ba[X]) {
                            var f = e.ba[e.ba[X] - 1],
                                m = Oa(f.ha);
                            f.ha = Oa(f.aa);
                            for (var l = 0; l < j; l++) {
                                var q = Kb(f.aa, f.aa, f.aa);
                                l == j - 1 && (q.ha = m);
                                e.ba[z](q)
                            }
                        }
                    } else {
                        l = f;
                        e = g;
                        f = b[Qa];
                        j = [l];
                        m = l.bounds();
                        g = e.bounds();
                        if (0.5 > l.jc(e) / e.ba[X]) {
                            var q = l.vb(),
                                t = E(m.x + m[G] / 2, m.y + m[L] / 2),
                                u = E(g.x + g[G] / 2, g.y + g[L] / 2),
                                t = E(u.x - t.x, u.y - t.y);
                            q.zb(t);
                            j[z](q)
                        }
                        t = g[G] * g[L];
                        u = m[G] * m[L];
                        q = r.min(t, u);
                        t = r.max(t, u);
                        0 != q && (0 != t && 0.75 > q / t) && (l = l.vb(), q = E(g[G] / m[G], g[L] / m[L]), t = E(g.x - m.x * q.x, g.y - m.y * q.y), l.$b(q), l.zb(t), j[z](l));
                        m = [];
                        for (l = 0; l < j[X]; l++) q = j[l], m[z](q), q = q.vb(), q.reverse(), m[z](q);
                        j = m;
                        if (f == h) {
                            f = [];
                            for (m = 0; m < j[X]; m++) {
                                l = j[m].cc();
                                for (q = 0; q < l[X]; q++) f[z](l[q])
                            }
                            j = f
                        }
                        f = {
                            Db: -ma[jb]
                        };
                        for (m = 0; m < j[X]; m++) {
                            var l = j[m],
                                q = l.bounds(),
                                q = E(r.max(q[G], g[G]), r.max(q[L], g[L])),
                                q = r[Ua](q.x * q.x + q.y * q.y),
                                u = l,
                                l = e,
                                s = q,
                                x = u.ba[tb](0),
                                y = l.ba[tb](0),
                                q = [],
                                t = [];
                            x[vb](k);
                            y[vb](k);
                            for (var C = x[X], T = y[X], D = 0, N = 0, O = [], D = 0; D < C; D++) {
                                O[D] = [];
                                for (N = 0; N < T; N++) O[D][N] = 0
                            }
                            for (D = 1; D < C; D++)
                                for (N = 1; N < T; N++) {
                                    var F = O[D - 1][N - 1] + Lj(x[D], y[N], s);
                                    O[D][N] = r.max(F, O[D][N - 1] + 0, O[D - 1][N] + 0)
                                }
                            D = C - 1;
                            for (N = T - 1; 0 < D || 0 < N;) 0 < D && 0 < N && O[D][N] == O[D - 1][N - 1] + Lj(x[D], y[N], s) ? (q[vb](x[D--]), t[vb](y[N--])) : 0 < D && O[D][N] == O[D - 1][N] + 0 ? (q[vb](x[D--]), t[vb](Mj())) : (q[vb](Mj()), t[vb](y[N--]));
                            s = O[C - 1][T - 1];
                            u = u.copy();
                            l = l.copy();
                            u.ba = q;
                            l.ba = t;
                            l = {
                                kb: u,
                                tb: l,
                                Db: s
                            };
                            l.Db > f.Db && (f = l)
                        }
                        e = f.kb;
                        g = f.tb;
                        j = e.Ea;
                        (0 != j.x || 0 != j.y) && e.zb(E(-j.x, -j.y));
                        j = e.Fa;
                        (1 != j.x || 1 != j.y) && e.$b(E(1 / j.x, 1 / j.y))
                    }
                    j = e = {
                        kb: e,
                        tb: g
                    };
                    e = j.kb;
                    g = j.tb;
                    d == h && (j = g, g = e, e = j);
                    b = e.Nb(b);
                    c = g.Nb(c);
                    a.cf = b;
                    a.ct = c
                }
            }

            function Lj(a, b, c) {
                if (0 == c) return 0;
                a = pb(a.aa, b.aa);
                if (1 > a) return 1;
                c = 1 - r.min(a, c) / c;
                return r.max(0, r.min(c * (2 / 3) / 1.5, 1))
            }

            function Nj(a, b, c) {
                var d = [];
                a = Qg(a);
                b = Qg(b);
                d[z](a);
                for (var e = 0; e < c; e++) {
                    var f = 1 / (c + 1 - e);
                    if (pf(a.aa, a.ha) && pf(b.aa, b.la)) {
                        var g = E(a.aa.x, a.aa.y);
                        g.x += (b.aa.x - a.aa.x) * f;
                        g.y += (b.aa.y - a.aa.y) * f;
                        a = Kb(g, g, g);
                        d[z](a)
                    } else {
                        var g =
                            a.aa.x,
                            j = a.aa.y,
                            m = a.ha.x,
                            l = a.ha.y,
                            q = b.la.x,
                            t = b.la.y,
                            g = (m - g) * f + g,
                            j = (l - j) * f + j,
                            n = (q - m) * f + m,
                            s = (t - l) * f + l,
                            q = (b.aa.x - q) * f + q,
                            t = (b.aa.y - t) * f + t,
                            l = (n - g) * f + g,
                            m = (s - j) * f + j,
                            n = (q - n) * f + n,
                            s = (t - s) * f + s,
                            x = (n - l) * f + l,
                            f = (s - m) * f + m;
                        a.ha = E(g, j);
                        a = Kb(E(x, f), E(n, s), E(l, m));
                        d[z](a);
                        b.la = E(q, t)
                    }
                }
                d[z](b);
                return d
            }

            function Qg(a) {
                return {
                    aa: Oa(a.aa),
                    ha: Oa(a.ha),
                    la: Oa(a.la),
                    nb: a.nb
                }
            }

            function Kb(a, b, c) {
                return {
                    aa: Oa(a),
                    ha: Oa(b),
                    la: Oa(c),
                    nb: p
                }
            }

            function Mj() {
                var a = E(0, 0);
                return {
                    aa: Oa(a),
                    ha: Oa(a),
                    la: Oa(a),
                    nb: h
                }
            }

            function Dj(a) {
                for (var b = [], c = 0; c < a[ic][X]; c++) {
                    var d = a[ic][c];
                    b[z]({
                        sa: {
                            x: d[0],
                            y: d[1]
                        },
                        La: {
                            x: d[2],
                            y: d[3]
                        },
                        Ha: {
                            x: d[4],
                            y: d[5]
                        },
                        Ia: {
                            x: d[6],
                            y: d[7]
                        },
                        length: 0,
                        ea: []
                    })
                }
                qf(b, p, 2, 20, h);
                a = [];
                for (c = 0; c < b[X]; c++)
                    for (var d = b[c].ea, e = 0; e < d[X]; e++) a[z](d[e][Ma]);
                return a
            }

            function Jj(a) {
                var b = a[ic];
                if (b && 0 < b[X]) {
                    var b = sa(b[0], 0),
                        c = a[ic];
                    c || (c = [], a.path = c);
                    var d = [];
                    if (0 == c[X]) Xa(d, 0, b), Xa(d, 2, b), Xa(d, 4, b), Xa(d, 6, b), c[z](d);
                    else if (1 == c[X]) d = c[0], Xa(d, 6, b);
                    else {
                        var e = c[X] - 1;
                        Xa(d, 0, sa(c[e], 6));
                        Xa(d, 2, Oj(a, e));
                        Xa(d, 4, b);
                        Xa(d, 6, b);
                        c[z](d)
                    }
                    Xa(d,
                        4, Pj(a))
                }
                a.closed = h
            }

            function Oj(a, b) {
                var c = a[ic][b],
                    d = sa(c, 6),
                    e = sa(c, 4),
                    c = pb(d, e),
                    e = r[Db](e.y - d.y, e.x - d.x);
                return Qj(d, e, c)
            }

            function Pj(a) {
                var b = a[ic];
                if (a[Qa] == h) return sa(b[b[X] - 1], 4);
                b = b[0];
                a = sa(b, 0);
                var c = sa(b, 2),
                    b = pb(a, c),
                    c = r[Db](c.y - a.y, c.x - a.x);
                return Qj(a, c, b)
            }

            function Ij(a) {
                var b = [],
                    c = a[ic];
                if (c)
                    for (var d = 0; d < c[X]; d++) b[z](c[d][tb](0));
                return {
                    path: b,
                    closed: a[Qa]
                }
            }

            function Rg(a, b, c, d) {
                var e = [];
                Xa(e, 0, a);
                Xa(e, 2, b);
                Xa(e, 4, c);
                Xa(e, 6, d);
                return e
            }

            function Xa(a, b, c) {
                a[b] = c.x;
                a[b + 1] = c.y
            }

            function sa(a,
                b) {
                return E(a[b], a[b + 1])
            }

            function Qj(a, b, c) {
                var d = a.x + -1 * c * r.cos(b);
                a = a.y + -1 * c * r.sin(b);
                return E(d, a)
            }

            function pf(a, b) {
                return a.x == b.x && a.y == b.y
            }

            function Oa(a) {
                return E(a.x, a.y)
            }

            function E(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function Rj(a, b, c) {
                if (pe != k) {
                    var d = {
                        element: a,
                        triggerOnce: p,
                        elementOffset: 0
                    };
                    d[c] = function () {
                        Ab({
                            type: ii + (c == Tm ? Ch : Eh) + Ni
                        }, a);
                        b()
                    };
                    d = new pe.hypeS(d);
                    rf[z](d)
                }
            }

            function ia(a, b) {
                return function (c) {
                    for (var d = 0; d < b[X]; d++) {
                        var e = b[d],
                            f = e.p;
                        if (1 == f) vd(Sj(e.e, e.f), e.g, e.d);
                        else if (3 == f) e.b != k && (f =
                            e.z != ba ? e.z : p, Lb(e.b, a != k ? a.id : k, f));
                        else if (7 == f) e.b != k && Mb(e.b, e.r);
                        else if (8 == f) e.b != k && (f = e.z != ba ? e.z : p, wd(e.b, f, h, e.J != ba ? e.J : p));
                        else if (9 == f) e.b != k && e.i != k && Xb(e.i, e.b, p, h);
                        else if (f == Sg) {
                            f = k;
                            e.h != k ? f = tj[mq[e.h]] : e.hc != k && (f = e.hc);
                            try {
                                f && f(ca.API, a, c)
                            } catch (g) {
                                qe(Dh + l + bg + g)
                            }
                        } else if (5 == f) f = Tj(e.j), f != k && (e = e.k == h, (e = 9 > F.$ ? e || 4 == c[wb] : e || 1 == c[wb] || c.metaKey == h) ? 9 > F.$ || F.$ != k && F.Yb || F.Xa != k ? v.open(f, Ri) : (9 == F.$ || 15 > F[bc]) && !(c instanceof MouseEvent) ? v.open(f, Ri) : (e = w[Sc](Vi), e[Y](qn, f), e[Y](Ap,
                            Ri), w[yb][Fb](e), f = w.createEvent(zi), f.initMouseEvent(dm, c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c[Rb], c[Sb], c[Ub], c.altKey, c.shiftKey, c.metaKey, c[wb], w[yb][dc]), e.dispatchEvent(f), w[yb][Cc](e)) : v.top.location = f);
                        else if (6 == f) {
                            var j = e.l,
                                m = e.m,
                                e = e.n,
                                f = Sn;
                            j != k && (f += escape(j));
                            if (m != k || e != k) f += vg, j = [], m != k && j[z](tp + ga(m)), e != k && j[z](Al + ga(e)), f += j[Ta](Od);
                            f != Sn && (v.top.location = f)
                        } else if (12 == f) f = e.o, e = e.q, e != h && (e = p), f != k && qq(f, e);
                        else if (13 == f) f = e.o, f != k && Tg(f)[kc]();
                        else if (14 ==
                            f) e = e.B, e != k && Uj(e);
                        else if (15 == f) {
                            var l = e.s,
                                e = Z + l + $d + e.t[Ta](de) + ae;
                            try {
                                eval(e)
                            } catch (q) {
                                qe(Dh + l + bg + q)
                            }
                        }
                    }
                }
            }

            function Sj(a, b) {
                var c = -1;
                if (b == k || 0 == b) a: {
                    for (c = 0; c < Va[X]; c++)
                        if (Va[c].o == a) break a;c = -1
                }
                else 1 == b && qb + 1 < Va[X] ? c = qb + 1 : 2 == b ? c = qb - 1 : 3 == b ? c = 0 : 4 == b && (c = Va[X] - 1);
                return c
            }

            function sf(a, b) {
                return function (c) {
                    Ug(c, b, M[a.id])
                }
            }

            function Vg(a, b) {
                return function (c) {
                    Vj(c, b, M[a.id])
                }
            }

            function tf(a) {
                var b = n(a, cj, cf),
                    c = n(a, dj, cf),
                    d = n(a, aj, cf),
                    e = n(a, bj, cf),
                    b = typeof b != po ? b : K(b),
                    c = typeof c != po ? c : K(c),
                    d = typeof d !=
                    po ? d : K(d),
                    e = typeof e != po ? e : K(e);
                a[H][Bl] = Z + b + $ + c + $ + e + $ + d
            }

            function nc() {}

            function Wj(a) {
                var b = n(a, lj, 8),
                    c = n(a, kj, 0);
                F.dc == k && (1 == 1 - c && a[H].removeProperty != k ? a[H].removeProperty(ca.wa + Cl) : a[H][ca.wa + Cl] = xl + K(b) + Vc + (1 - c) + De)
            }

            function Wg(a) {
                var b = n(a, Mi);
                if (b != k) {
                    var c = Z;
                    b == Wf ? c = Tj(n(a, Oi)) : b == cf && (c = Z + je + bf + n(a, Li));
                    b = lg;
                    F.Na != k && (b = jg + b + dg);
                    za(a, b);
                    b = a[hb](An)[0];
                    b.src = c;
                    a = n(a, Fm);
                    a != k && P.dY(b, a)
                }
            }

            function Xg(a, b) {
                if (!(12 > F.$)) {
                    var c = b == h ? xh : Z,
                        d = n(a, c + hl, 0),
                        e = n(a, c + cl, 0),
                        f = n(a, c + dl, 0),
                        g = n(a, c + el, 1),
                        j = n(a, c + fl, 1),
                        m = n(a, c + gl, 1),
                        c = Z;
                    0 != d && (c += zl + d + Oo);
                    0 != e && (c += dp + e + be);
                    0 != f && (c += tn + (Z + f + Hm) + be);
                    1 != g && (c += ap + g + be);
                    if (1 != j) {
                        if (6 == F.Zb || F.Na != k && 536.26 >= F.xa) j -= 1, 1 < j && (j = 1);
                        c += Fl + j + be
                    }
                    1 != m && (c += em + m + be);
                    1 == n(a, kn) && !b && (d = n(a, Gi, 0), e = n(a, Ji, 0), f = n(a, Fi, nd), g = n(a, Ei, 0), 0 == d && 0 == e && 0 == g || (d = K(d) + $ + K(e) + $ + K(g) + $ + eb(f), c += Mm + d + be));
                    c == Z && (c = no);
                    b == h ? (a[H][ca.wa + tl] = c, a[H][tl] = c, c = a[H][lb], qa(a[H], no), qa(a[H], a[H][lb] + (Z + a[Hb]).substring(0, 0)), qa(a[H], c)) : (a[H][ca.wa + dn] = c, a[H].filter = c)
                }
            }

            function xd(a) {
                Xg(a,
                    p)
            }

            function yd(a) {
                Xg(a, h)
            }

            function uf(a) {
                var b = n(a, $k),
                    c = n(a, al),
                    d = n(a, Zk),
                    e = n(a, nj);
                b == k || (c == k || d == k || e == k) || (a[H].textShadow = (0 == b && 0 == c && 0 == e) == h ? no : Z + K(b) + $ + K(c) + $ + K(e) + $ + eb(d))
            }

            function re(a) {
                if (1 == n(a, kn, 0)) Xg(a);
                else {
                    var b = n(a, Gi),
                        c = n(a, Ji),
                        d = n(a, Fi),
                        e = n(a, Ei),
                        f = n(a, kn, 0);
                    if (!(b == k || c == k || d == k || e == k))
                        for (var g = [ca.wa + Dl, Ai, El, Dl], j = 0 == b && 0 == c && 0 == e, b = (2 == f ? Gn : Z) + K(b) + $ + K(c) + $ + K(e) + $ + eb(d), c = 0; c < g[X]; c++) j == h ? a[H][Eb] ? a[H][Eb](g[c]) : a[H].removeProperty(g[c]) : a[H][g[c]] = b
                }
            }

            function se(a) {
                var b =
                    n(a, Uh, Z),
                    c = n(a, Th, Z),
                    d = n(a, Ym, 0),
                    e = n(a, Tl, 1) * n(a, di, 1),
                    f = n(a, Ul, 1) * n(a, ei, 1),
                    g = n(a, jn, 0),
                    j = n(a, Op, 0),
                    m = n(a, kl, 0),
                    l = n(a, Qh),
                    q = n(a, Sh),
                    g = g * r.PI / 180,
                    j = j * r.PI / 180,
                    t = Z,
                    u = 0 != d || 0 != m || 1 != e || 1 != f || 0 != g || 0 != j,
                    s = a[xb];
                a[H].borderTopWidth != Z && (s += ea(a[H].borderTopWidth));
                a[H].borderBottomWidth != Z && (s += ea(a[H].borderBottomWidth));
                var x = a[ac];
                a[H].borderLeftWidth != Z && (x += ea(a[H].borderLeftWidth));
                a[H].borderRightWidth != Z && (x += ea(a[H].borderRightWidth));
                b != Z && (t += $ + b);
                c != Z && (t += $ + c);
                b = k;
                if (u == h) var c = n(a, wp, 0.5) *
                    x,
                    y = n(a, xp, 0.5) * s,
                    b = [1, 0, 0, 1, 0, 0],
                    b = ne(b, c, y),
                    b = Bj(b, r.PI * ((d + m) / 180)),
                    b = [b[0] * e, b[1] * e, b[2] * f, b[3] * f, b[4], b[5]],
                    b = Cj(b, g, j),
                    b = ne(b, -c, -y),
                    t = t + ($ + (ca.pb + Ze + b[0] + fe + b[2] + ge + b[1] + he + b[3] + ie));
                l != k && (t += $ + l);
                q != k && (t += $ + q);
                a[H].filter = t;
                if (u == h) {
                    e = d = k;
                    s = [{
                        x: 0,
                        y: 0
                    }, {
                        x: x,
                        y: 0
                    }, {
                        x: 0,
                        y: s
                    }, {
                        x: x,
                        y: s
                    }];
                    for (x = 0; x < s[X]; x++) {
                        f = b[0] * s[x].x + b[2] * s[x].y + b[4];
                        g = b[1] * s[x].x + b[3] * s[x].y + b[5];
                        if (d == k || f < d) d = f;
                        if (e == k || g < e) e = g
                    }
                    d = ea(d[hc](0));
                    e = ea(e[hc](0));
                    V(a, Vh, d);
                    V(a, Wh, e);
                    Ba(a[H], n(a, Ph, 0) + d);
                    a[H].top = n(a, Oh, 0) + e
                }
            }

            function zd(a) {
                var b = Yg(a),
                    c = b == p ? k : n(a, Ph),
                    d = b == p ? k : n(a, Oh),
                    e = n(a, ml, 0),
                    f = n(a, nl, 0),
                    g = n(a, mj, 0),
                    j = n(a, Ym, 0),
                    m = n(a, kl, 0),
                    l = n(a, Tl, 1) * n(a, di, 1),
                    q = n(a, Ul, 1) * n(a, ei, 1),
                    t = n(a, jn, 0),
                    u = n(a, Op, 0),
                    s = n(a, ci),
                    x = 0 != n(a, hl, 0),
                    y = n(a, Em) == Go,
                    C = n(a, wp, 0.5),
                    T = n(a, xp, 0.5),
                    b = Z,
                    D = n(a, Dm) == Ii;
                if (D == h) {
                    var N = ka(me(M[a.id])),
                        O = N[ac];
                    0 == O && (O = n(N, Hl, 0));
                    var na = N[xb];
                    0 == na && (na = n(N, im, 0));
                    var N = n(a, Hl, 0),
                        B = n(a, im, 0);
                    0 != N && 0 != O && (l *= O / N);
                    0 != B && 0 != na && (q *= na / B)
                }
                if (s == k) {
                    s = p;
                    O = Wa(a);
                    O = A[O].v;
                    for (na = M[a.id]; na != k && O[na] != k;)
                        if (na =
                            O[na].bF, na != k && O[na] != k && (O[na].cQ != k || O[na].cR != k || Jc == h && 0 != (O[na].bS & 256))) {
                            s = h;
                            break
                        } V(a, ci, s)
                }
                s = ef == h && -1 == a[vc][$b](Mh) && 1 == l && 1 == q && s == p && y == p && D == p && !(x == h && 50 <= F.Wa);
                if (10 <= F.$ && 0 == j && (1 != l || 1 != q) && 0 == n(a, Bi, 0) && 0 == n(a, Ci, 0) && 0 == n(a, Di, 0) && 0 == n(a, xi, 0)) j = 1E-5;
                c != k && (b += gd + K(c, 2) + be);
                d != k && (b += hd + K(d, 2) + be);
                0 != e && (b += id + K(e) + be);
                0 != m && n(a, ll) == Pi && (b += ad + (Z + m + Hm) + be);
                0 != j && (b += ad + (Z + j + Hm) + be);
                if (F.eb == h) {
                    if (0 != g || s == h) b += cd + (Z + g + Hm) + be;
                    0 != f && (b += bd + (Z + f + Hm) + be)
                }
                1 != l && (b += dd + l + be);
                1 != q && (b +=
                    ed + q + be);
                if (0 != t || 0 != u) b += fd + (Z + t + Hm) + de + (Z + u + Hm) + be;
                c = Z + (Z + 100 * C + Ld) + $ + (Z + 100 * T + Ld);
                a[H][ca.wa + Kp] = c;
                a[H].MozTransformOrigin = c;
                a[H].OTransformOrigin = c;
                a[H][Ne] = c;
                a[H][Kp] = c;
                a[H][Ue] = b;
                a[H].MozTransform = b;
                a[H].OTransform = b;
                a[H][Me] = b;
                a[H].transform = b
            }

            function oc(a) {
                9 > F.$ ? se(a) : zd(a);
                fa == h && Ic(a)
            }

            function Zg(a) {
                function b(a, b) {
                    var j = b == h ? (r.abs(e) + 180) % 360 : (360 - r.abs(e) + 270) % 360;
                    return Z + a + Pn + (Z + j + Hm) + de + eb(c) + de + eb(d) + ae
                }
                if (Jb(a) != k) ud(a);
                else {
                    var c = n(a, ho);
                    if (!(c == k || c == Z)) {
                        var d = n(a, Rn);
                        if (!(d ==
                                k || d == Z)) {
                            var e = n(a, Nn);
                            e != k && (F.xa != k ? oa(a[H], b(ca.wa, p)) : F.lc != k ? oa(a[H], b(Ie, p)) : 10 > F.$ ? a[H][Pe] = b(Z, p) : oa(a[H], 15 > F[bc] ? b(Oe, p) : b(Z, h)))
                        }
                    }
                }
            }

            function Xj(a) {
                var b = 0 == n(a, Nm, 1) && n(a, Wi) == k && n(a, $i) == k && n(a, Xi) == k && n(a, jl) == k;
                if (n(a, gi, p) != b) {
                    var c = n(a, Cp);
                    b == h ? (a[Y](Rk, h), P.ti(a, k)) : (a[Eb](Rk), P.ti(a, c));
                    V(a, gi, b)
                }
            }

            function Yj(a) {
                var b = a[H][lb];
                qa(a[H], n(a, Zl, p) == h ? no : n(a, Po, Z));
                b == no && vf(M[a.id])
            }

            function Nb(a) {
                Kc[a.id] = k;
                Lc(a)
            }

            function Lc(a) {
                try {
                    if (kf == h) - 1 == Ia(te, a) && te[z](a);
                    else {
                        var b = n(a, ol,
                                36),
                            c = Yg(a),
                            d = M[a.id],
                            e = me(d),
                            f = hf(e),
                            g = Hg(e),
                            j = hf(d),
                            m = n(a, Vi, 0),
                            l = n(a, Yk, 0),
                            q = n(a, Hl, k),
                            t = n(a, im, k),
                            u = e = h;
                        q == k && (e = p, q = j[G]);
                        t == k && (u = p, t = j[L]);
                        var s = nb(d),
                            x = ob(d),
                            y = x - t,
                            j = m,
                            C = l,
                            T = s,
                            D = x,
                            N = p;
                        if (Jc == h && 36 != b) {
                            var O = 0 != (b & 1),
                                na = 0 != (b & 4),
                                A = 0 != (b & 2),
                                B = 0 != (b & 8),
                                J = 0 != (b & 32),
                                E = 0 != (b & 16),
                                Q = 0 != (b & 64) && A == h && E == h,
                                U = 0 != (b & 128) && A == h && E == h,
                                N = 0 != (b & 256) && (A == h || E == h),
                                S = 0 == f[G] ? 0 : g[G] / f[G],
                                P = 0 == f[L] ? 0 : g[L] / f[L];
                            A == h && (T = O == h && na == h ? s + (g[G] - f[G]) : r[Cb](s * S));
                            O == h && na == h && A == p ? (b = m + s / 2, j = r[Cb](b * S - s / 2)) : O == h && na ==
                                p && A == h ? j = g[G] - f[G] + m - (T - s) : O == h && na == p ? j = g[G] - f[G] + m : O == p && na == p && (j = r[Cb](m * S));
                            E == h && (D = B == h && J == h ? x + (g[L] - f[L]) : r[Cb](x * P));
                            B == h && J == h && E == p ? C = r[Cb]((l + x / 2) * P - x / 2) : B == h && J == p && E == h ? C = g[L] - f[L] + l - (D - x) : B == h && J == p ? C = g[L] - f[L] + l : B == p && J == p && (C = r[Cb](l * P));
                            if ((Q == h || U == h) == h) g = T, f = D, l = T / s, S = D / x, P = l, Q == h ? P = l <= S ? l : S : U == h && (P = l >= S ? l : S), T = r[Cb](s * P), D = r[Cb](x * P), Q = g - T, U = f - D, O == h && na == p ? j += Q : O == h && na == h && (j += r[Cb](Q / 2)), B == h && J == p ? C += U : B == h && J == h && (C += r[Cb](U / 2))
                        }
                        var R = r.max(0, T - (s - q)),
                            W = r.max(0, D - y),
                            y = p;
                        if (fa == h) {
                            var aa = n(a, ai, 0),
                                ha = n(a, bi, 0);
                            V(a, ai, R);
                            V(a, bi, W);
                            y = aa != R || ha != W
                        }
                        e == h ? (N == h && (j += n(a, wp, 0.5) * (T - s), V(a, di, r.max(0, T / s)), R = q), pa(a[H], K(R, 2))) : pa(a[H], Z);
                        u == h ? (N == h && (C += n(a, xp, 0.5) * (D - x), V(a, ei, r.max(0, D / x)), W = t), ua(a[H], K(W, 2))) : ua(a[H], Z);
                        if (8 > F.$) {
                            var ca = w[Vb](En + a.id);
                            ca != k && (q = function () {
                                pa(ca[H], K(a[ac]));
                                ua(ca[H], K(a[xb]))
                            }, 0 == a[ac] && 0 == a[xb] ? v[fc](q, 0) : q())
                        }
                        if (9 > F.$) {
                            n(a, Ym) != k && se(a);
                            var ia = a[jc][Ra][Rm + a.id];
                            ia != k && (ia[Y](dq, R), ia[Y](on, W))
                        }
                        V(a, Oh, C);
                        V(a, Ph, j);
                        c == p && (C += n(a,
                            Wh, 0), j += n(a, Vh, 0), a[H].top = K(C), Ba(a[H], K(j)));
                        if (c == h || N == h) 9 > F.$ ? se(a) : zd(a);
                        fa == h && (y == h ? Ic(a) : mc(a));
                        n(a, jm) != k == h && Hj(a);
                        if (n(a, Dm) == Hi) {
                            var la = Zj(d);
                            0 < la[X] && zd(ka(la[0]))
                        }
                        $g == p && $j()
                    }
                } catch (sa) {}
            }

            function Tj(a) {
                a != k && 0 === a[$b](eq) && (a = sn + a);
                return a
            }

            function wf(a) {
                return a[uc](/'/g, Nd)
            }

            function Ia(a, b) {
                if (a[$b]) return a[$b](b);
                for (var c = 0; c < a[X]; c++)
                    if (a[c] == b) return c;
                return -1
            }

            function ak(a) {
                return typeof a == lp && ((7 == a[X] || 4 == a[X]) && a[Hc](0) == md || 0 == a[$b](Uo) && a[$b](ae) == a[X] - 1)
            }

            function bk(a,
                b, c) {
                var d = c.da,
                    e = Ob(a, c),
                    f = a.d,
                    g = a.i,
                    j = a.o,
                    m = d == p ? a.b : k,
                    l = m == k ? c.da ? a.e : a.s : m,
                    m = d == h ? a.b : k,
                    q = m == k ? c.da ? a.s : a.e : m,
                    t = a.f,
                    m = ka(j),
                    u = r.min(1, (b - e) / f);
                d == h && (u = 1 - u);
                var s = 1;
                if (t == Vi) s = 1 == u ? 1 : 0;
                else if (t == Yk) s = u;
                else if (typeof Ad[t] === gn) s = Ca(c), u = d == h ? s - e - f : e, s = Ad[t](d == h ? s - b - u : b - e, u, f);
                else a: {
                    for (var s = Ad[t], x = e = k, f = 0; f < s[X]; f++) {
                        for (var y = s[f], C = 0; C < y.ea[X]; C++) {
                            x = y.ea[C];
                            if (x[Ma].x >= u) {
                                s = e != k ? e[Ma].y + (x[Ma].y - e[Ma].y) * (u - e[Ma].x) / (x[Ma].x - e[Ma].x) : x[Ma].y;
                                break a
                            }
                            e = x
                        }
                        e = k
                    }
                    s = x[Ma].y
                }
                u = l;
                e = a.a;
                if (pd[t] &&
                    2 == pd[t].p) u = s;
                else if (e != ba) {
                    d = ah[e];
                    if (a.b != k) {
                        if (c.rb[e] == k && (d = a.o, l = a.a, l != ba)) {
                            q = ah[l];
                            a = {};
                            t = [];
                            for (f = x = C = 0; f < q.va[X]; f++) {
                                y = q.va[f];
                                if (0 == f) var C = nb(d),
                                    x = ob(d),
                                    T = aa[d].b,
                                    C = aa[d].a + C / 2 - y.sa.x,
                                    x = T + x / 2 - y.sa.y;
                                t[z]({
                                    sa: {
                                        x: y.sa.x + C,
                                        y: y.sa.y + x
                                    },
                                    La: {
                                        x: y.La.x + C,
                                        y: y.La.y + x
                                    },
                                    Ha: {
                                        x: y.Ha.x,
                                        y: y.Ha.y
                                    },
                                    Ia: {
                                        x: y.Ia.x,
                                        y: y.Ia.y
                                    },
                                    length: 0,
                                    ea: []
                                });
                                x = C = 0
                            }
                            a.va = t;
                            xa(a, qf(a.va, h));
                            c.rb[l] = a;
                            l = ka(d);
                            if (n(l, ll) == Pi) {
                                for (var D, l = 0; l < c.ra[X]; l++)
                                    if (q = c.ra[l], q.i == kl) {
                                        D = q;
                                        break
                                    } D != k && (a = ck(a, 0, d), D.b = a.Ra)
                            }
                        }
                        d = c.rb[e]
                    }
                    c =
                        ck(d, s, j);
                    g == Vi ? (u = c.x, n(m, ll) == Pi && W(m, kl, c.Ra)) : g == Yk && (u = c.y)
                } else if (d == h && (s = 1 - s), typeof l == po || typeof q == po) c = bh(l), j = bh(q), u = c + (j - c) * s;
                else if (ak(l) == h && ak(q) == h) {
                    c = oe(l);
                    j = oe(q);
                    D = [];
                    for (u = 0; 4 > u; u++) D[u] = c[u] + (j[u] - c[u]) * s;
                    u = dk(D)
                } else if (g == jm && 0 != s && 1 != s) {
                    if ((a.cf == k || a.ct == k) && Pg(a), j = c.da ? a.ct : a.cf, (a.cf == k || a.ct == k) && Pg(a), a = c.da ? a.cf : a.ct, j && a && (c = s, u = j, D = j[ic], s = a[ic], D && s && D[X] == s[X])) {
                        u = [];
                        for (a = 0; a < D[X]; a++) {
                            e = [];
                            for (d = 0; 8 > d; d++) l = D[a][d], e[z](l + (s[a][d] - l) * c);
                            u[z](e)
                        }
                        u = {
                            path: u,
                            closed: j[Qa]
                        }
                    }
                } else if (1 == s || d == h && 0 != s) u = q;
                W(m, g, u);
                fa == h && Jg(m, g, u, b)
            }

            function ob(a, b) {
                var c = ka(a),
                    d = n(c, b == h ? bi : im, 0),
                    e = 0;
                0 == d ? d = c[xb] : e = n(c, jj, 0) + n(c, gj, 0);
                return d + e + (n(c, Di, 0) + n(c, xi, 0))
            }

            function nb(a, b) {
                var c = ka(a),
                    d = n(c, b == h ? ai : Hl, 0),
                    e = 0;
                0 == d ? d = c[ac] : e = n(c, hj, 0) + n(c, ij, 0);
                return d + e + (n(c, Ci, 0) + n(c, Bi, 0))
            }

            function ck(a, b, c) {
                var d;
                d = a[X];
                var e = 0,
                    f, g = 0,
                    g = {};
                if (0 > b || 1 < b) {
                    var j = e = f = k,
                        m = 1,
                        l = b;
                    if (0 > b) {
                        var q = a.va[0];
                        2 <= q.ea[X] && (f = q.ea[0], e = q.ea[1], j = f)
                    } else m = -1, l = 1 - b, q = a.va[a.va[X] - 1], 2 <= q.ea[X] &&
                        (f = q.ea[q.ea[X] - 2], j = e = q.ea[q.ea[X] - 1]);
                    if (f != k && e != k) {
                        a = m * (e[Ma].x - f[Ma].x);
                        b = m * (e[Ma].y - f[Ma].y);
                        d *= l;
                        0 == b ? (g.y = 0, g.x = d) : (g.y = r[Ua](r.pow(d, 2) / (r.pow(a, 2) / r.pow(b, 2) + 1)), g.x = g.y * a / b);
                        if (0 < a && 0 < g.x || 0 > a && 0 > g.x) g.x *= -1;
                        if (0 < b && 0 < g.y || 0 > b && 0 > g.y) g.y *= -1;
                        g.x += j[Ma].x;
                        g.y += j[Ma].y;
                        g.Ra = ek(f[Ma], e[Ma])
                    }
                } else if (0 == d) g = {
                    x: a.va[0].sa.x,
                    y: a.va[0].sa.y,
                    Ra: 0
                };
                else {
                    if (1 == b) d = a.va, f = d[d[X] - 1], g = 1;
                    else {
                        for (g = 0; g < a.va[X]; g++) {
                            q = a.va[g];
                            if ((q[X] + e) / d > b) {
                                f = q;
                                break
                            }
                            e += q[X]
                        }
                        g = (b - e / d) / (f[X] / d);
                        d = f[X] * g;
                        for (b = a = g = 0; b <
                            f.ea[X]; b++)
                            if (e = f.ea[b], a + e[X] <= d) a += e[X], g = b;
                            else break;
                        g = (g + (d - a) / (g + 1 < f.ea[X] ? f.ea[g + 1] : f.ea[f.ea[X] - 1])[X]) / (f.ea[X] - 1)
                    }
                    g = fk(f, g)
                }
                d = g;
                d.x -= nb(c) / 2;
                d.y -= ob(c) / 2;
                return d
            }

            function ch(a, b, c) {
                for (var d = b.Ca; d < c[X]; d++) {
                    var e = c[d],
                        f = Ob(e, b),
                        g = e.o,
                        j = e.i;
                    if (a >= f) {
                        if (b.Ca = d + 1, rb[g][j] == b.ca)
                            if (1 == e.p && b.fa == h) {
                                if (e = A[U].v[g].aH, f = ka(g), e == h && f[ub] && (f.autoplay = h, f = f[ub](), f !== ba)) f[cm](lq())
                            } else 0 == e.p && b.qa[z](e)
                    } else break
                }
                c = [];
                for (d = 0; d < b.qa[X]; d++) g = b.qa[d], f = Ob(g, b), f = Da(f + g.d, b), a < f ? g.i == Vi ||
                    g.i == Yk ? c[z](g) : bk(g, a, b) : (f = ka(g.o), e = b.da == h ? g.b : k, W(f, g.i, e == k ? b.da ? g.s : g.e : e), b.qa[bb](d, 1), d--);
                for (d = 0; d < c[X]; d++) bk(c[d], a, b);
                c = Ca(b);
                g = b.da == p ? b.fb : b.sb;
                if (g != k && 0 != g[X]) {
                    for (d = 0; d < b.ya[X]; d++) {
                        var m = b.ya[d],
                            e = m.b,
                            j = la(e),
                            f = j.pa.q,
                            l = f == p ? m[cc] : 86400,
                            f = b.da == p ? Da(m[mb] + l, b) : Da(c - m[mb], b);
                        if (a >= f) {
                            if (Bd[e] == b.ca) {
                                var q = m.G;
                                b.da == p && (q = m.z ? q - l : q + l);
                                q = Da(r.max(0, q), j);
                                Cd(j, p);
                                f = Mc(q, j, h, h, p);
                                f == p && Mb(e, q, h)
                            }
                            b.ya[bb](d, 1);
                            d--
                        }
                    }
                    for (d = b.Pa; d < g[X]; d++)
                        if (m = g[d], e = m.b, j = la(e), j != k && (f = j.pa.q, l = f ==
                                p ? m[cc] : 86400, f = b.da == p ? m[mb] : Da(c - m[mb] - l, b), a >= f)) {
                            b.Pa = d + 1;
                            var q = m.z,
                                t = m.E,
                                n = t,
                                s = m.G;
                            b.da == h && (s = q ? s - l : s + l, s = Da(s, j), q = !q);
                            var x = s;
                            if (t) {
                                f = a - f;
                                if (f > l) n = p, f = l;
                                else b.ya[z](m);
                                x = q ? x - f : x + f;
                                x = Da(r.max(0, x), j)
                            }
                            if (n) {
                                if (f = Xb(s, e, h, h)) continue;
                                q && Cd(j, q);
                                if (s != x && (f = Xb(x, e, h, h))) continue;
                                b.fa ? (ue(j, b.ja), wd(e, q, p, p)) : Mb(e, k)
                            } else t == p && Mb(e, k), Xb(x, e, p, h);
                            Bd[e] = b.ca
                        }
                }
            }

            function Mc(a, b, c, d, e) {
                kf = h;
                for (var f = b.ia, g = b.da ? b.ab : b.ra, j = [], m = r.min(a * b.ja, Ca(b)), l = b.Ca; l < g[X]; l++) {
                    var q = g[l],
                        t = Ob(q, b);
                    q.p == xf &&
                        ((b.fa == h || e == h) && m >= t) && j[z](q)
                }
                e = p;
                if (0 == j[X] || d == p) ch(m, b, g);
                else {
                    for (var q = d = 0, n = b.fa, s = b.da, l = 0; l < j[X]; l++) {
                        var x = j[l],
                            t = Ob(x, b);
                        if (e == h && d < t) break;
                        if (!(c == p && t != m)) {
                            if (0 == q || q != t) ch(t, b, g), q = t;
                            for (var x = x.s.a, y = [], C = p, T = 0; T < x[X]; T++) {
                                var D = x[T];
                                7 == D.p && D.b == b.ca && (D.r = t, C = h);
                                0 == t && 3 == D.p && D.b == b.ca || y[z](D)
                            }
                            if (0 != y[X]) {
                                var N;
                                b.pa[I](Hl) && (N = b.pa.c);
                                var O;
                                N ? pc[I](N) ? O = pc[N][Bc]() : ha[I](N) && (O = ha[N][Bc]) : O = va();
                                ia(O, y)({
                                    type: si,
                                    timelineName: b.pa.n
                                })
                            }
                            if (f != b.ia || b.ia == k || n != b.fa || C || s != b.da) e =
                                h, d = t
                        }
                    }
                    e == p && ch(m, b, g)
                }
                if (fa == h && b.Ja == h && b.fa == h) Ej(b.qc, a);
                else return Kg(), e
            }

            function Ob(a, b) {
                return b.da ? Da(Ca(b) - a.d - a.t, b) : a.t
            }

            function gk() {
                for (var a, b = h, c = Bb(h) / 1E3, d = 0; d < Pb[X]; d++) {
                    var e = Pb[d];
                    if (!(e.ia == k || e.fa == p || e.Ja == h)) {
                        var f = c - e.ia,
                            g = e.da ? e.ab : e.ra;
                        Mc(f, e, h, h) && (f = c - e.ia);
                        if (e.fa != p) {
                            var j = Ca(e);
                            if (f * e.ja <= j) {
                                if (0 < e.qa[X]) a = 0;
                                else if (e.Ca < g[X] && (g = Da((Ob(g[e.Ca], e) - f * e.ja) / e.ja, e), a == k || g < a)) a = g;
                                g = e.da == p ? e.fb : e.sb;
                                if (0 < e.ya[X]) a = 0;
                                else if (e.Pa < g[X] && (g = g[e.Pa], g = Da(((e.da == p ? g[mb] :
                                        Da(j - g[mb] - g[cc], e)) - f * e.ja) / e.ja, e), g < a || a == k)) a = g
                            }
                        }
                    }
                }
                if (fa == h)
                    for (d = 0; d < Ea[X]; d++)
                        if (j = Ea[d], e = la(j.ca), e != k && e.fa == h) {
                            e.ac != k && (e.ia += c - e.ac);
                            for (var f = r.max(0, c - e.ia), g = j, m = B.Composite.allBodies(g.oa.world), l = p, q = 0; q < m[X]; q++) {
                                var t = m[q],
                                    u = w[Vb](t.elementId),
                                    s = n(u, il, 0),
                                    x = Ia(g.jb, t.elementId);
                                if (-1 == x) {
                                    2 == s && Ig(u) == p && t.Ga != k ? (t = u, x = zb(t), s = x.oa.world, t = x.Qa[M[t.id]], t.Ga != k && (B.World.remove(s, t.Ga), delete t.Ga), mc(u, h)) : 1 == s && Ig(u) == p && (B.Body.setVelocity(t, {
                                        x: 0,
                                        y: 0
                                    }), B.Body.setAngularVelocity(t,
                                        0));
                                    for (t = 0; t < td[X]; t++) V(u, Z + td[t] + Jl, k), V(u, Z + td[t] + Il, k)
                                } else {
                                    g.jb[bb](x, 1);
                                    for (t = 0; t < td[X]; t++) {
                                        var x = td[t],
                                            y = k,
                                            C = n(u, Z + x + Il, []);
                                        4 <= C[X] && (l = C[0], C = C[C[X] - 2], y = (C.value - l.value) / (C.time - l.time) * (1 / 60), l = h);
                                        V(u, Z + x + Jl, y)
                                    }
                                    2 == s && (t = u, x = zb(t), s = x.oa.world, t = x.Qa[M[t.id]], t.Ga == k && (x = B.Constraint[Ha]({
                                        pointA: E(t[Wb].x, t[Wb].y),
                                        bodyB: t,
                                        length: 0.01,
                                        stiffness: 1,
                                        angularStiffness: 1,
                                        render: {
                                            strokeStyle: od,
                                            lineWidth: 3
                                        }
                                    }), B.World.add(s, x), t.Ga = x));
                                    n(u, Kl, p) == h && (mc(u), V(u, Kl, p))
                                }
                            }
                            l == h && le(g);
                            Ej(j, f);
                            a: {
                                f =
                                B.Composite.allBodies(j.oa.world);
                                for (j = 0; j < f[X]; j++)
                                    if (f[j].isSleeping == p) {
                                        f = p;
                                        break a
                                    } f = h
                            }
                            b = b && f;
                            e.ac = f == h ? c : k
                        } yf = k;
                0 === a || b == p ? rd() : a != k && v[fc](function () {
                    zf = p;
                    gk()
                }, 1E3 * a)
            }

            function hk(a, b) {
                var c = a.fb,
                    d = [];
                if (c != k)
                    for (var e = 0; e < c[X]; e++) {
                        var f = c[e].b,
                            g = la(f);
                        g == k || -1 != Ia(d, f) || (Dd(g), b == h && dh(g, h), Xb(0, f, p, h), d[z](f))
                    }
            }

            function Xb(a, b, c, d) {
                Af(b);
                var e = la(b);
                if (e != k) return ue(e, 1), -1 == Ia(Pb, e) && (Mb(b), Pb[z](e)), b = Ca(e), a > b && (a = e.pa.q == h ? r.max(0, a - r[Ec](a / b) * b) : b), e.da == h && (a = b - a), d == h && (a = Da(a,
                    e)), e.Ca = 0, e.Pa = 0, e.qa = [], e.ya = [], d = Bb(ba) / 1E3, e.ia = d - a, e.na = d - e.ia, e.fa == h && (v[Sa](e.Da), e.Da = v[fc](function () {
                    Ed(e)
                }, 1E3 * ((b - a) / e.ja))), dh(e, p), hk(e, p), eh(e, 0), ik(e, a), a = Mc(a, e, p, h, c), rd(), a
            }

            function Nc(a, b) {
                var c = la(a);
                if (c == k) return 0;
                var d = 0;
                c.fa == h ? (d = Bb(ba) / 1E3 - c.ia, d *= c.ja) : d = c.na;
                var e = Ca(c);
                b == h && c.da == h && (d = e - d);
                d = r.max(0, d);
                return d = r.min(e, d)
            }

            function ik(a, b) {
                for (var c = {}, d = a.da ? a.ab : a.ra, e = 0; e < d[X]; e++) {
                    var f = d[e];
                    if (0 == f.p) {
                        var g = f.o,
                            j = f.i;
                        if (rb[g][j] == a.ca) {
                            var m = a.da ? f.e : f.s,
                                l = a.da ?
                                p : f.r;
                            Ob(f, a) >= b && (c[g] == k && (c[g] = {}), l != h && c[g][j] == k && (l = ka(g), m == ba && (a.da == h && 0 == f.d) && (m = f.s), W(l, j, m)), c[g][j] = h)
                        }
                    }
                }
            }

            function wd(a, b, c, d) {
                Af(a);
                var e = la(a);
                e != k && (c && ue(e, 1), Cd(e, b), e.fa == p && (e.ia != k ? e.na == Ca(e) ? d && Lb(a, k, b) : (e.fa = h, e.ia = Bb(ba) / 1E3 - e.na / e.ja, v[Sa](e.Da), e.Da = v[fc](function () {
                    Ed(e)
                }, 1E3 * ((Ca(e) - e.na) / e.ja)), e.Ja != h && (eh(e, e.na), e.Ca = 0, e.Pa = 0, e.qa = [], e.ya = []), Mc(e.na / e.ja, e, p, p)) : (d == h || 0 == e.na) && Lb(a, k, b)), rd())
            }

            function Mb(a, b, c) {
                for (var d in Bd) Bd[I](d) != p && Bd[d] == a && Mb(d,
                    k);
                Af(a);
                a = la(a);
                a != k && a.fa == h && (ue(a, 1), a.na = b != k ? b : Bb(ba) / 1E3 - a.ia, a.fa = p, v[Sa](a.Da), c == h && (a.pa != k && a.na == a.pa.d) && Ed(a))
            }

            function Ed(a) {
                if (!(fa == h && a.Ja == h) && (a.ja = 1, !Mc(Ca(a), a, h, h)))
                    if (a.pa.q == h) Lb(a.ca, k, a.da);
                    else if (Dd(a), ve != k && Bf == a.ca) a = ve, Bf = ve = k, a();
                else if (a = {
                        type: ti,
                        timelineName: a.pa.n
                    }, Ab(a, k) !== p) {
                    var b = va();
                    if (b != k) {
                        var c = A[Cf(Oc(U))].F;
                        c != k && ia(b, c.a)(a)
                    }
                }
            }

            function Da(a, b) {
                return fa == h && b.Ja == h ? Df(a, 60) : Df(a, b.pa.f)
            }

            function Df(a, b) {
                var c = r[Ec](a);
                return c + r[Gb]((a - c) * b) / b
            }

            function Ca(a) {
                return fa ==
                    h && a.Ja == h ? 86400 : Da(a.pa.d, a)
            }

            function rd() {
                if (zf !== h) {
                    zf = h;
                    var a = function (a) {
                        v[fc](a, 1E3 / 60)
                    };
                    (v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || a)(function () {
                        zf = p;
                        gk()
                    })
                }
            }

            function Dd(a) {
                v[Sa](a.Da);
                a.Ca = 0;
                a.Pa = 0;
                a.qa = [];
                a.ya = [];
                a.sc = k;
                a.ia = k;
                a.fa = p;
                a.ja = 1;
                a.na = Ca(a);
                a = Ia(Pb, a); - 1 != a && Pb[bb](a, 1)
            }

            function jk(a) {
                for (var b = 0; b < Pb[X]; b++) {
                    var c = Pb[b];
                    if (!(a != k && c.ca == a.ca))
                        for (var d = 0; d < c.qa[X]; d++) rb[c.qa[d].o][c.qa[d].i] != c.ca && (c.qa[bb](d, 1), d--)
                }
            }

            function eh(a,
                b) {
                for (var c = a.ra, d = 0; d < c[X]; d++) {
                    var e = c[d],
                        f = e.o,
                        g = e.i,
                        e = Da(Ob(e, a) + e.d, a);
                    rb[f] === ba && (rb[f] = {});
                    if (e >= b && (cb[f] === ba || cb[f][g] === ba || cb[f][g] == a.ca)) rb[f][g] = a.ca
                }
                jk(a)
            }

            function Lb(a, b, c) {
                Af(a);
                for (var d = 0; d < sb[X]; d++) {
                    var e = sb[d];
                    e.ca == a && Dd(e)
                }
                var f = la(a);
                if (f != k)
                    if (f.sc = b, Pb[z](f), A[U].T[f.ca] == k && f.Ab == ba && f.Ja != h) Ed(f);
                    else if (a = c == p, f.Ja != h && (dh(f, a), Cd(f, c), eh(f, 0), ik(f, 0)), f.fa = h, f.Ca = 0, f.Pa = 0, f.qa = [], f.ya = [], f.rb = {}, f.ia = Bb(ba) / 1E3, v[Sa](f.Da), f.Da = v[fc](function () {
                        Ed(f)
                    }, 1E3 * (Ca(f) /
                        f.ja)), hk(f, a), f.Ja == h || 0 < f.ra[X] || 0 < f.fb[X]) Mc(0, f, h, h, p), rd()
            }

            function Af(a) {
                var b = la(a);
                if (b == k || b.pa == k || b.pa.q != h) Bd[a] = k
            }

            function dh(a, b) {
                for (var c = 0; c < a.ra[X]; c++) {
                    var d = a.ra[c],
                        e = d.o,
                        f = d.i,
                        g = d.r;
                    try {
                        if (g == h && aa[e][f] != k && (b || d.b == k)) d.b = aa[e][f], f == jm && Pg(d)
                    } catch (j) {}
                }
            }

            function la(a) {
                for (var b = 0; b < sb[X]; b++) {
                    var c = sb[b];
                    if (c.ca == a) return c
                }
                for (var d in ha)
                    if (ha[I](d) != p)
                        for (var e = ha[d].Hb, b = 0; b < e[X]; b++)
                            if (c = e[b], c.ca == a) return c;
                return k
            }

            function qc(a) {
                var b = A[U].T,
                    c;
                for (c in b)
                    if (b[I](c) !=
                        p && b[c].n == a) {
                        var d = p,
                            e = A[U].U,
                            f;
                        for (f in e)
                            if (e[I](f) != p) {
                                var g = e[f].V;
                                for (a in g)
                                    if (g[I](a) != p && g[a] == c) {
                                        d = h;
                                        break
                                    } if (d == h) break
                            } if (d == p) return c
                    } if (-1 != Ia(kk, a[Fc]())) return In;
                qe(Bh + a + Qd);
                return k
            }

            function we(a, b, c, d) {
                b = {
                    Ca: 0,
                    qa: [],
                    ra: b,
                    ca: a,
                    fb: c.b,
                    fa: p,
                    na: 0,
                    ja: 1,
                    da: p,
                    ya: [],
                    Ab: d,
                    pa: c,
                    rb: {}
                };
                for (c = 0; c < sb[X]; c++) sb[c].ca == a && (Dd(sb[c]), sb[bb](c, 1), c -= 1);
                sb[z](b);
                return b
            }

            function Cd(a, b) {
                var c = Nc(a.ca, p);
                if (b != a.da) {
                    a.da = b;
                    b == h && a.ab == k && (a.ab = a.ra[tb](0), a.ab.sort(function (b, c) {
                        var d = Ob(b, a),
                            j =
                            Ob(c, a);
                        return d == j ? c.k - b.k : d - j
                    }));
                    b == h && a.sb == k && (a.sb = a.fb[tb](0), a.sb.sort(function (b, c) {
                        var d = Da(b[mb] + b[cc], a),
                            j = Da(c[mb] + c[cc], a);
                        return d == j ? (d = b[mb], j = c[mb], d == j ? c.F - b.F : j - d) : j - d
                    }));
                    var d = Ca(a);
                    a.qa = [];
                    a.Ca = 0;
                    a.Pa = 0;
                    a.ya = [];
                    a.na = Da(d - a.na, a);
                    lk(a, d - c);
                    a.ia != k && (c = Da(Bb(ba) / 1E3 - a.ia, a), Mc(c, a, p, p))
                }
            }

            function ue(a, b) {
                if (a.ja != b) {
                    var c = Nc(a.ca, p);
                    a.ja = b;
                    lk(a, c)
                }
            }

            function lk(a, b) {
                a.ia != k && (a.ia = Bb(ba) / 1E3 - b / a.ja, a.fa == h && (v[Sa](a.Da), a.Da = v[fc](function () {
                    Ed(a)
                }, 1E3 * ((Ca(a) - b) / a.ja))))
            }

            function mk(a,
                b) {
                var c = qc(a);
                b == ba && (b = 0);
                Lb(c, k, 1 == b ? h : p)
            }

            function Ug(a, b, c) {
                b = A[U].T[b];
                if (b != k) {
                    b = b.a;
                    for (var d = ka(c), e = 0; e < b[X]; e++) {
                        var f = b[e];
                        if (f.o == c) {
                            var f = f.i,
                                g = fh[c];
                            g != k && g[f] != k && (W(d, f, g[f]), g[f] = k)
                        }
                    }
                    a = a ? a : v[Qb];
                    if (a[La] == $n || a[La] == Jo || a[La] == yi) b = A[U].v[c].aM, b != k && Vj(a, b, c)
                }
            }

            function Vj(a, b, c) {
                var d = A[U].T[b];
                if (d != k) {
                    var d = d.a,
                        e = ka(c),
                        f = A[U].v[c].aM;
                    f != k && f != b && Ug(a, f, c);
                    var g = A[U].v[c].aN;
                    a = a ? a : v[Qb];
                    a[La] != $n && (a[La] != Jo && a[La] != yi && g != k && g != b && f != b) && Ug(a, g, c);
                    for (a = 0; a < d[X]; a++) f = d[a], f.o ==
                        c && (b = f.i, f = f.e, f != k && (g = fh[c], g == k && (g = {}, fh[c] = g), g[b] == k && (g[b] = aa[c][b]), W(e, b, f)))
                }
            }

            function W(a) {
                for (var b = arguments, c = 1; c < b[X]; c += 2) {
                    var d = b[c],
                        e = b[c + 1];
                    if ("undefined" != typeof e) try {
                        var f = P[d];
                        f != k && (aa[M[a.id]][d] = e, f(a, e))
                    } catch (g) {
                        qe(yg + d + ug + e + Wc + g)
                    }
                }
            }

            function nk(a, b) {
                if (b == Eo) {
                    var c = M[a.id],
                        d = zb(a);
                    return d != k ? d.Qa[c] : k
                }
                if (b == Fo) return d = zb(a), d != k ? d.oa : k;
                d = ok[b];
                if (d == k) return k;
                var e = d.HYP_r,
                    c = M[a.id],
                    c = aa[c][e];
                return c != k ? c : d.HYP_s
            }

            function eb(a) {
                9 > F.$ && 0 == a[$b](Vo) && (a = dk(oe(a), h));
                return a
            }

            function dk(a, b) {
                if (1 == a[3] || b == h) {
                    for (var c = ca.xb, d = md, e = 0; 3 > e; e++) d += c[Hc](a[e] / 16) + c[Hc](a[e] % 16);
                    return d
                }
                return Wo + ea(a[0]) + de + ea(a[1]) + de + ea(a[2]) + de + da(a[3]) + ae
            }

            function K(a, b) {
                var c = r.pow(10, b == k ? 0 : b);
                return Z + r[Gb](a * c) / c + No
            }

            function oe(a) {
                var b = [0, 0, 0, 1];
                if (0 == a[$b](Uo)) {
                    var c = a[$b]($d),
                        d = a[$b](ae);
                    if (3 < d - c) {
                        a = a.substring(c + 1, d).split(de);
                        for (c = 0; c < a[X]; c++) b[c] = da(a[c])
                    }
                } else {
                    a[Hc](0) == md && (a = a[tb](1));
                    a = a.toUpperCase();
                    for (var d = 3 == a[X] ? 0 : 1, e = ca.xb, c = 0; 3 > c; c++) b[c] = 16 * e[$b](a[Hc](c *
                        (1 + d))) + e[$b](a[Hc](c * (1 + d) + d))
                }
                return b
            }

            function bh(a) {
                typeof a != po && (a = da(a));
                return isNaN(a) ? 0 : a
            }

            function gh(a, b, c, d) {
                Ef = p;
                c != k && delete A[U].T[c];
                qa(b[H], yl);
                W(b, ml, 0, mj, 0);
                V(b, $h, cf);
                W(b, Yk, 0, Vi, 0, iq, 1, Nm, 1);
                c = A[U].a;
                c != k ? (pa(b[H], Zf), pa(S[H], c + Ld)) : (pa(b[H], K(A[U].Y)), pa(S[H], b[H][G]));
                c = A[U].b;
                c != k ? (ua(b[H], Zf), ua(S[H], c + Ld)) : (ua(b[H], K(A[U].Z)), ua(S[H], b[H][L]));
                Kc[S.id] = k;
                Kc[b.id] = k;
                for (c = 0; c < A[X]; c++) {
                    var e = ka(A[c].o);
                    e != k && e != b && qa(e[H], no)
                }
                aa[M[a.id]] && (a != k && a != b) && (a[Y](Rk, h), W(a, ml,
                    0, mj, 0, Yk, 0, Vi, 0, iq, 0, Nm, 1), V(a, $h, cf));
                S[H][Se] = k;
                S[H][ca.wa + Lp] = en;
                S[H][Ke] = k;
                S[H].perspective = k;
                if (9 > F.$) {
                    a = Fd(a);
                    for (c = 0; c < a[X]; c++) e = n(a[c], Ym), e != k && W(a[c], Ym, e)
                }
                e = [];
                a = A[U].v;
                for (var f in a)
                    if (a[I](f) != p) {
                        var g = a[f],
                            j = g.cL;
                        if (j != k && (e[z](j), c = pk(g, j, b, p), d == h)) {
                            g = Fd(c);
                            for (c = 0; c < g[X]; c++)
                                for (var m = g[c], l = a[M[m.id]], q = 0; 2 > q; q++)
                                    for (var t = 0; t < xe[X]; t++) {
                                        var u = xe[t];
                                        if (l[I](u) != p) {
                                            var s = 0 == q ? p : h;
                                            if (u == ej || u == fj) s = 0 == q ? h : p;
                                            s != p && W(m, u, l[u])
                                        }
                                    }
                            j = ha[j].Hb;
                            for (c = 0; c < j[X]; c++) sb[z](j[c])
                        }
                    } j = w[Vb](Lh);
                for (f in ha)
                    if (ha[I](f) != p) {
                        g = p;
                        for (c = 0; c < e[X]; c++)
                            if (e[c] === f) {
                                g = h;
                                break
                            } g == p && (c = ha[f][Bc], c[dc][vc] == Kh && (c = c[dc]), j[Fb](c))
                    } S[Eb](Rk);
                S[Eb](Qk);
                b[Eb](Rk);
                if (d == h) {
                    Lb(In, k, p);
                    if (fa == h) {
                        rc();
                        for (c = 0; c < Ea[X]; c++) d = Ea[c], la(d.ca).fa != h && Lb(d.ca, k, p)
                    }
                    d = Fd(va());
                    for (c = 0; c < d[X]; c++)
                        if (g = d[c], sd(g) != p) {
                            if (j = a[M[g.id]].cL) {
                                f = ha[j];
                                if (f.mc) continue;
                                f.mc = h
                            }
                            f = {
                                type: qi
                            };
                            Ab(f, g);
                            (e = n(g, Ql)) && ia(g, e.a)(f)
                        } c = {
                        type: mi
                    };
                    Ab(c, va()) !== p && (d = A[Cf(M[b.id])].A, d != k && (d = d.a, ia(va(), d)(c)));
                    c = Wa(b);
                    b = hh(b);
                    for (d = 0; d <
                        b[X]; d++)
                        if (f = b[d], a = w[Vb](f), f = A[c].v[M[f]], f != k)
                            for (e = 0; e < Ff[X]; e++) j = Ff[e], f[I](j) != p && W(a, j, f[j])
                }
            }

            function pk(a, b, c, d) {
                var e = ha[b][Bc];
                aa[M[e.id]] = k;
                var f = w[Sc](a.k);
                Aa(f, [Jh, a.cP][Ta]($).trim());
                f.id = e.id;
                f[H].pointerEvents = Vk;
                for (f[H][Io] = Vk; 0 < e[Gc][X];) f[Fb](e[Gc][0]);
                e[dc] && (e[dc][Fb](f), e[dc][Cc](e));
                e = f;
                b = ha[b].element = e;
                if (b[dc] && b[dc][vc] == Kh) {
                    b = b[dc];
                    var f = b[H],
                        g = Z;
                    if (a.bR != k || a.aY != k) g = A[U].p;
                    f[Se] = g;
                    f.MozPerspective = g;
                    f.perspective = g
                }
                c[Fb](b);
                qk(a, e, e.id, d);
                return e
            }

            function rk(a,
                b) {
                var c = Wa(a),
                    d = hh(a);
                Kg();
                if (fa == h) {
                    for (var e = 0; e < d[X]; e++) {
                        var f = d[e];
                        sd(w[Vb](f)) == h && Og(f)
                    }
                    Ib += 1
                }
                for (e = 0; e < d[X]; e++) {
                    var f = d[e],
                        g = w[Vb](f),
                        j = A[c].v[M[f]];
                    j != k && qk(j, g, f, b)
                }
                if (fa == h) {
                    Eg();
                    for (c = 0; c < Ea[X]; c++) d = Ea[c], d.ca == k && (e = d, f = Jn + e[wc], e.ca = f, d = k, Mg(e) == h && (d = M[e[wc]]), e = {
                        Ja: h,
                        ra: [],
                        ca: f,
                        qc: e,
                        Ab: d
                    }, d != k ? ha[d].Hb[z](e) : sb[z](e));
                    c = function () {
                        for (var b = a[vc] == Mh, c = hh(a), d = 0; d < c[X]; d++) {
                            var e = w[Vb](c[d]),
                                f = Mg(zb(e));
                            (b == h && f == p || b == p) && mc(e)
                        }
                    };
                    c();
                    v[fc](c, 0)
                }
            }

            function hh(a) {
                a = Fd(a);
                for (var b = [], c = 0; c < a[X]; c++) b[z](a[c].id);
                return b
            }

            function sk(a, b) {
                var c = ka(a);
                aa[a] = {};
                var d = [],
                    e = A[b].v,
                    f;
                for (f in e)
                    if (e[I](f) != p) {
                        var g = e[f],
                            j = g.cL;
                        j && d[z](j)
                    } var e = c[kb](Nh),
                    m = A[e].v,
                    l = [],
                    q = [],
                    t = 0;
                for (f in m)
                    if (m[I](f) != p && (g = m[f], j = g.cL)) {
                        for (var u = p, s = 0; s < d[X]; s++)
                            if (d[s] === f) {
                                u = h;
                                break
                            } var x = ha[j][Bc],
                            y = x;
                        y[dc][vc] == Kh && (y = x[dc]);
                        if (u) {
                            if (aa[M[x.id]]) {
                                g = x;
                                for (u = s = 0; g && g.id != J;) s += n(g, Vi, 0), u += n(g, Yk, 0), g = g[dc];
                                W(x, Vi, s, Yk, u)
                            }
                            S[Fb](y);
                            ha[j].kc ? Fa(y[H], y[H][Tc] + 100) : (q[z](y), y[H][Tc] > t && (t = y[H][Tc]))
                        } else l[z]([g,
                            j
                        ]);
                        if (ha[j].Ub == p) {
                            fa == h && Og(Yb[j]);
                            rk(y, h);
                            ha[j].Ub = h;
                            j = Fd(y);
                            for (s = 0; s < j[X]; s++) V(j[s], hi, h);
                            y[dc] != k && y[dc][Cc](y)
                        }
                    } for (s = 0; s < q[X]; s++) x = q[s], Fa(x[H], x[H][Tc] - t - 1);
                rk(c, p);
                for (s = 0; s < l[X]; s++) g = l[s][0], j = l[s][1], pk(g, j, c, h);
                d = {
                    type: ni
                };
                Ab(d, c);
                f = A[e].dA;
                f != k && ia(c, f.a)(d)
            }

            function qk(a, b, c, d) {
                if (n(b, hi, p) != h) {
                    var e = [bl, ol, Dm, wp, xp, Yk, Vi, Hl, im, Hn, kn, jm, Mi],
                        f = M[c];
                    aa[f] == k && (aa[f] = {});
                    var f = Wa(b),
                        g = A[f].U[M[c]];
                    if (g) {
                        var j = function (a) {
                            var b = g.V[a];
                            if (b != k) return b;
                            if (-1 != Ia(kk, a[Fc]())) return g.W;
                            qe(Bh + a + Qd);
                            return k
                        };
                        pc[M[c]] = {
                            symbolName: function () {
                                return g.n
                            },
                            element: function () {
                                return b
                            },
                            getSymbolInstancesByName: function (a) {
                                a = tk(a);
                                for (var c = [], d = 0; d < a[X]; d++)
                                    for (var e = a[d], f = e[Bc]()[yc]; f != k;) {
                                        if (f == b) {
                                            c[z](e);
                                            break
                                        }
                                        f = f[yc]
                                    }
                                return c
                            },
                            startTimelineNamed: function (a, b) {
                                Lb(j(a), k, 1 == b ? h : p)
                            },
                            pauseTimelineNamed: function (a) {
                                Mb(j(a), k)
                            },
                            continueTimelineNamed: function (a, b, c) {
                                wd(j(a), 1 == b ? h : p, h, c)
                            },
                            goToTimeInTimelineNamed: function (a, b) {
                                Xb(a, j(b), p, p)
                            },
                            currentTimeInTimelineNamed: function (a) {
                                return Nc(j(a),
                                    h)
                            },
                            durationForTimelineNamed: function (a) {
                                a = la(j(a));
                                return Ca(a)
                            },
                            currentDirectionForTimelineNamed: function (a) {
                                return la(j(a)).da ? 1 : 0
                            },
                            isPlayingTimelineNamed: function (a) {
                                return la(j(a)).fa
                            }
                        }
                    }
                    oq == p && a.bE == k && V(b, $h, Wf);
                    V(b, Fm, a.dY);
                    for (c = 0; c < e[X]; c++) f = e[c], W(b, f, a[f]);
                    fa == h && a.bM != k && W(b, Ym, 0);
                    xe[z](Ml, Nl, Ol, Pl, Ql, Ll);
                    for (var m in a)
                        if (a[I](m) != p) {
                            e = h;
                            for (c = 0; c < Ff[X]; c++)
                                if (Ff[c] == m) {
                                    e = p;
                                    break
                                } if (e != p) {
                                if (d == h)
                                    for (c = 0; c < xe[X]; c++)
                                        if (xe[c] == m) {
                                            e = p;
                                            break
                                        } e != p && W(b, m, a[m])
                            }
                        } F.$ != k && a.bE == k && (b[H].behavior =
                        Rp + Pc(Ee) + Rd)
                }
            }

            function rq() {
                ye[bb](0, 1)
            }

            function Gf(a) {
                ye[z](Hf(a));
                v[fc](rq, 2500)
            }

            function sq(a) {
                for (var b = 0; b < ye[X]; b++) {
                    var c = Hf(a);
                    25 > r.abs(c.x - ye[b].x) && 25 > r.abs(c.y - ye[b].y) && (a.stopPropagation(), a[gb]())
                }
            }

            function tk(a) {
                var b = [],
                    c = A[U].U,
                    d;
                for (d in c) c[I](d) != p && c[d].n == a && b[z](pc[d]);
                return b
            }

            function Uj(a) {
                var b = {
                        type: ui,
                        customBehaviorName: a
                    },
                    c = If[a];
                if (c != k)
                    for (var d = 0; d < c[X]; d++) c[d](b);
                for (var e in ha) ha[I](e) != p && (c = ha[e].Ob[a], c != k && c(b));
                Ab(b, k)
            }

            function uk(a, b, c) {
                c ? ha[c].Ob[a] = b :
                    (c = If[a], c == k && (c = [], If[a] = c), c[z](b))
            }

            function ih(a, b, c, d) {
                function e(a) {
                    a = a ? a : v[Qb];
                    (32 == a.keyCode || 13 == a.keyCode) && f(a)
                }

                function f(a) {
                    a = a ? a : v[Qb];
                    if (a[La] == Zn) {
                        for (var e = p, f = 0; f < ze[X]; f++)
                            if (ze[f] == c) {
                                e = h;
                                break
                            } if (e == h) return;
                        ze[z](c)
                    } else if (a[La] == Yn) {
                        e = Wa(b);
                        if (A[e].v[M[b.id]] == k) return;
                        a || (a = v[Qb]);
                        for (e = w.elementFromPoint(a[Rb], a[Sb]); e != k && e != this && e.nodeName != yh;) e = e[dc];
                        if (e == this) return;
                        ze = []
                    } else if (-1 != Ia([Wn, $n, Jo], a[La])) {
                        if (a[Ub] == h || 0 != a[wb]) return
                    } else a[La] == Jp ? 0 < a[gc][X] && Gf(a[gc][0]) :
                        a[La] == Hp && 0 < a[ec][X] && Gf(a[ec][0]);
                    if (d == h && (a[La] == Vn || a[La] == $n || a[La] == Hp)) {
                        if (0 < Jf) return;
                        Kf = h
                    }
                    c(a)
                }
                if (a == dm || a == $n) a = 11 <= F.$ && (ja.pointerEnabled || v.PointerEvent) ? Jo : 11 <= F.$ && ja.msPointerEnabled ? yi : $n;
                Ya(a, f, b, h);
                a == dm ? Ya(Ln, e, b, h) : a == Wn ? Ya(Kn, e, b, h) : a == $n && Ya(Mn, e, b, h)
            }

            function Za(a, b, c, d) {
                ih(a, b, c, d);
                a == Zn ? ih(Yn, b, lq(), d) : a == Yn && ih(Zn, b, lq(), d)
            }

            function Qc(a, b, c) {
                c = {
                    Aa: k,
                    Ka: Sm,
                    Ya: 0,
                    Sa: k,
                    lb: 0,
                    Ib: 0,
                    yb: 0,
                    Xb: 0,
                    Sb: 0,
                    Tb: 0,
                    Kb: k,
                    Jb: k,
                    ta: k,
                    ma: p,
                    wb: p,
                    options: b,
                    Lb: c,
                    Ma: a
                };
                Ya(Jp, vk(c), a, h);
                if (b.ka == Lm ||
                    b.ka == vp) {
                    var d = a == w ? S : a,
                        e = d[H].touchAction;
                    if (e == k || e == Z) e = xo;
                    if (b[Dc] == k || b[Dc] == On || b[Dc] == Yo) e = e[uc](wo, Z);
                    if (b[Dc] == k || b[Dc] == Km || b[Dc] == Pp) e = e[uc](yo, Z);
                    d[H].msTouchAction = e;
                    d[H].touchAction = e
                }
                b.ka != zp && Ya(Wn, vk(c), a, h)
            }

            function tq(a) {
                function b() {
                    v[fc](function () {
                        gh(e, e, k, p)
                    }, 0);
                    l != k && (v[Sa](l.Rb), qa(l.sE[H], no));
                    q != k && (v[Sa](q.Rb), qa(q.sE[H], no))
                }

                function c(b, c, d) {
                    b = Sj(a[b], a[c]);
                    if (-1 == b) return k;
                    c = jh(Va[b]);
                    var f = Oc(c);
                    sk(f, U);
                    var l = ka(f);
                    c = 0 == g ? sc(c) : tc(c);
                    Gd(e, l, p, p);
                    W(l, m, d ? -1 * c : j);
                    d =
                        v[fc](function () {
                            qa(l[H], yl);
                            vf(f)
                        }, 0);
                    return {
                        o: f,
                        size: c,
                        sE: l,
                        cI: b,
                        Rb: d
                    }
                }

                function d(a, b, c) {
                    return {
                        i: Ag,
                        t: a,
                        d: 0,
                        s: {
                            a: c ? c : [{
                                p: Sg,
                                hc: function () {
                                    vd(b, Lf, 0)
                                }
                            }]
                        },
                        p: xf
                    }
                }
                var e = va(),
                    f = M[e.id],
                    g = a.c,
                    j = 0 == g ? sc(U) : tc(U),
                    m = 0 == g ? Vi : Yk,
                    l = c(Co, Do, h),
                    q = c(io, ko, p),
                    n = fi + m,
                    u = [],
                    s = 0;
                q != k && (fb(u, m, 0, 2, im, f, -1 * j, 0), fb(u, m, 0, 2, im, q.o, 0, j), u[z](d(0, q.cI)), s += 2);
                var x = s;
                u[z](d(x, k, [{
                    p: 7,
                    b: n
                }, {
                    p: Sg,
                    hc: b
                }]));
                l != k && (fb(u, m, s, 2, Nm, f, 0, j), f = -1 * l.size, fb(u, m, s, 2, Nm, l.o, f, f + j), s += 2, u[z](d(s, l.cI)));
                we(n, u, {
                    i: n,
                    n: n,
                    f: 30,
                    d: s,
                    a: u,
                    b: [],
                    fc: b
                }).na = x;
                return {
                    b: n,
                    c: g,
                    A: 0 == g ? 0 : 1,
                    y: h,
                    K: 1.5 * (j / 2),
                    p: a.p
                }
            }

            function wk(a, b) {
                for (var c = {
                        Ta: 1,
                        gc: h,
                        ka: Lm
                    }, d = b.a, e = h, f = 0; f < d[X]; f++) {
                    var g = d[f],
                        j = g.p;
                    0 != j && (e = p);
                    10 == j && g.b != k ? (c.ga == k && (c.ga = []), c.ga[z]({
                        b: g.b,
                        c: g.c,
                        A: g.A,
                        y: g.y,
                        K: 100 / g.K
                    })) : 11 == j ? c.za = a : 16 == j && (c.Za == k && (c.Za = []), c.Za[z](g))
                }
                e == p && Qc(a, c, ia(a, d))
            }

            function vk(a) {
                return function (b) {
                    a.gb = p;
                    a.hb = p;
                    for (var c = b.target || b.srcElement, d = va(); c != k && c != d;) {
                        if (c[H] && (c[H].overflow == cp || c[H].overflow == Vk)) {
                            a.gb = 0 < c.scrollWidth - c[ac];
                            a.hb = 0 < c.scrollHeight -
                                c[xb];
                            break
                        }
                        c = c[dc]
                    }
                    c = a.gb == p && a.hb == p;
                    a.ma = b[La] == Jp;
                    if (a.ma) 0 < b[gc][X] && (a[xc].ka == zp && c == h) && Gf(b[gc][0]), a.Ya = b[gc][X];
                    else {
                        if (b[Ub] == h || 0 != b[wb]) return;
                        b[gb] && c == h && b[gb]()
                    }
                    if (a.ma == p || 1 === a.Ya) {
                        a.Ka = hp;
                        a.Aa = k;
                        c = [];
                        for (d = 0; 5 >= d; d++) c[z]({
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            },
                            lastPosition: {
                                x: 0,
                                y: 0
                            }
                        });
                        a.Sa = c;
                        a.Ua = ba;
                        a.wb = p;
                        var c = a.ma ? b[gc][0] : b,
                            e;
                        e = function (b) {
                            kh(a);
                            a.Ka = am;
                            Mf(b, a)
                        };
                        a.ta = e;
                        b = a.ma ? a.Ma : w;
                        a.ma ? Ya(Gp, a.ta, b, p) : v.self != v.top && Ya(Yn, function (a) {
                            (a.relatedTarget === w.documentElement || a.toElement ===
                                k) && e(a)
                        }, b, p);
                        c = Hf(c);
                        d = a.Sa[0];
                        d[zc].x = c.x;
                        d.end.x = c.x;
                        d[Ga].x = c.x;
                        d[zc].y = c.y;
                        d.end.y = c.y;
                        d[Ga].y = c.y;
                        xk(a, c);
                        a.Kb = function (b) {
                            if (!(a.Ka === Sm || a.Ka === am))
                                if (Kf == h) a.ta(b);
                                else {
                                    var c = a[xc];
                                    if (a.mb == p == h) {
                                        Jf++;
                                        a.mb = h;
                                        if (c.Za != k) {
                                            var d = h;
                                            if (c.ga == k) c.ga = [];
                                            else
                                                for (var e = 0; e < c.ga[X]; e++) {
                                                    var l = c.ga[e],
                                                        q = l.b,
                                                        t = la(q);
                                                    16 == l.p && (t.fa != h ? (c.ga[bb](e, 1), e--) : (d = p, a.qb = h))
                                                }
                                            if (d)
                                                for (e = 0; e < c.Za[X]; e++)
                                                    if (d = c.Za[e], (0 != d.c || a.gb == p) && (1 != d.c || a.hb == p)) d = tq(d), c.ga[z](d)
                                        }
                                        if (c.ka == Lm) {
                                            Ae == h && a.ta(b);
                                            a.Ma != w &&
                                                (Ae = h);
                                            if (c.ga != k)
                                                for (e = 0; e < c.ga[X]; e++) {
                                                    q = c.ga[e].b;
                                                    t = la(q);
                                                    Mb(q, k);
                                                    Cd(t, p);
                                                    a.Ib = Nc(t.ca, p);
                                                    for (var d = t.ra, u = 0; u < d[X]; u++) {
                                                        var s = d[u].o,
                                                            x = d[u].i;
                                                        cb[s] === ba && (cb[s] = {});
                                                        cb[s][x] = t.ca
                                                    }
                                                }
                                            c.za != k && (e = M[c.za.id], a.Sb = n(c.za, Ph, aa[e].a), a.Tb = n(c.za, Oh, aa[e].b), rb[e] != ba && (rb[e].a = k, rb[e].b = k, jk(k)), cb[e] === ba && (cb[e] = {}), cb[e].a = Pm, cb[e].b = Pm, fa == h && mc(c.za));
                                            Mf(b, a)
                                        }
                                    }
                                    var d = Hf(a.ma ? b[gc][0] : b),
                                        y = a.Sa[0];
                                    y[Ga].x = y.end.x;
                                    y[Ga].y = y.end.y;
                                    a.yb = a.Xb;
                                    y.end.x = a.ma ? b[gc][0].pageX : d.x;
                                    y.end.y = a.ma ? b[gc][0].pageY :
                                        d.y;
                                    u = Bb();
                                    a.Xb = u;
                                    u -= a.lb;
                                    a.Aa = yk(y[zc], y.end, u);
                                    a.ma && (a.Ya = b[gc][X]);
                                    a.Ka = ao;
                                    if (c.ka == Lm) {
                                        s = a.gb == p && a.hb == p;
                                        if (c.ga != k)
                                            for (e = 0; e < c.ga[X]; e++)
                                                if (l = c.ga[e], 0 == l.c && a.gb == h || 1 == l.c && a.hb == h) {
                                                    a.ta(b);
                                                    return
                                                } b[gb] && s == h && b[gb]();
                                        9 > F.$ && (a.Ma.ondragstart = function (a) {
                                            return a == k ? p : h
                                        });
                                        var s = x = 0,
                                            C = 1,
                                            T = 1;
                                        if (a.Ma != k)
                                            for (var D = me(M[a.Ma.id]); D != k && D != J;) e = ka(D), x += n(e, Vi, 0), s += n(e, Yk, 0), C *= n(e, Tl, 1), C *= n(e, di, 1), T *= n(e, Ul, 1), T *= n(e, ei, 1), D = me(D);
                                        if (c.ga != k) {
                                            for (var N = c.ga, N = [], O = 5 <= pb(y.end, y[zc]), e = 0; e <
                                                c.ga[X]; e++) {
                                                l = c.ga[e];
                                                if (16 == l.p && a.qb == p)
                                                    if (O == p) continue;
                                                    else if (q = l.b, !(0 == l.c && (a.Aa == On || a.Aa == Yo)) && !(1 == l.c && (a.Aa == Pp || a.Aa == Km))) {
                                                    t = la(q);
                                                    t = t.pa.fc;
                                                    t != k && t();
                                                    c.ga[bb](e, 1);
                                                    e--;
                                                    continue
                                                } else a.Ib = Nc(q, p);
                                                N[z](l)
                                            }
                                            a.qb = a.qb || O;
                                            for (e = 0; e < N[X]; e++)
                                                if (l = N[e], q = l.b, t = la(q)) {
                                                    var t = Ca(t),
                                                        O = zk(l),
                                                        A;
                                                    O == Yo ? A = (y.end.x - y[zc].x) / C : O == On ? A = (y[zc].x - y.end.x) / C : O == Pp ? A = (y[zc].y - y.end.y) / T : O == Km && (A = (y.end.y - y[zc].y) / T);
                                                    l = A / l.K;
                                                    l += a.Ib;
                                                    l = r.min(t, l);
                                                    l = r.max(0, l);
                                                    Xb(l, q, p, h)
                                                } else a.ta(b)
                                        }
                                        c.za != k && (e = M[c.za.id],
                                            A = a.Sb + (y.end.x - y[zc].x) / C, y = a.Tb + (y.end.y - y[zc].y) / T, Jc == p ? (D = Hg(D), T = nb(e), A = r.max(A, -T / 2 - x), A = r.min(A, D[G] - T / 2 - x), e = ob(e), y = r.max(y, -e / 2 - s), y = r.min(y, D[L] - e / 2 - s)) : (D = Aj(c.za, A, y), A = D.x, y = D.y), c = c.za, W(c, Vi, A, Yk, y), fa == h && (Jg(c, Vi, A, u / 1E3), Jg(c, Yk, y, u / 1E3), V(c, Kl, h), c = zb(c), le(c)));
                                        Mf(b, a)
                                    } else c.ka == vp ? 1 < a.Ya ? a.ta(b) : (b[gb] && a.Aa == c[Dc] && b[gb](), A = c[Dc] == Yo || c[Dc] == On ? y.end.x : y.end.y, D = p, D = c[Dc] == Yo || c[Dc] == Km ? 20 < a.Ua - A : 20 < A - a.Ua, c = a.Aa === c[Dc] || 100 > u, (D || c == p || Ae == h) && a.ta(b)) : c.ka == zp && 5 < pb(y[zc],
                                        y.end) && a.ta(b);
                                    xk(a, d)
                                }
                        };
                        Ya(a.ma ? Ip : Xn, a.Kb, b, p);
                        a.Jb = function (b) {
                            if (!(a.Ka === Sm || a.Ka === am) && !(b[gc] && 0 < b[gc][X])) {
                                for (var c = a.Ma == w, e = va(), d = a.Ma; d != k;) {
                                    if (d == e) {
                                        c = h;
                                        break
                                    }
                                    d = d[yc]
                                }
                                if (Kf == h && 0 < Jf || c == p) a.ta(b);
                                else {
                                    c = a[xc];
                                    b[La] == Hp && 0 < b[ec][X] && c[La] == zp && Gf(b[ec][0]);
                                    var l = Bb(),
                                        q = l - a.lb,
                                        e = a.Sa[0];
                                    a.Aa = yk(e[zc], e.end, q);
                                    a.Ka = Sm;
                                    cb = {};
                                    var d = 1 === a.Ya || !a.ma,
                                        n = 0 !== e.end.x;
                                    if (c.ka == Lm) {
                                        if (a.mb == p) {
                                            kh(a);
                                            return
                                        }
                                        if (c.ga != k) {
                                            d = (l - a.yb) / 1E3;
                                            for (n = 0; n < c.ga[X]; n++) {
                                                var u = c.ga[n],
                                                    l = u.b,
                                                    q = la(l),
                                                    s = u.y;
                                                if (q) {
                                                    var x =
                                                        Ca(q),
                                                        y = zk(u),
                                                        C = u.K,
                                                        A = p,
                                                        D = p,
                                                        N = 1;
                                                    if (s == h)
                                                        if (s = 0, s = 0 == u.c ? r.abs(e[Ga].x - e.end.x) / d : r.abs(e[Ga].y - e.end.y) / d, s *= 2, 20 < s) A = h, D = u, N = Ak(e[Ga], e.end), D = (0 == D.c ? 90 <= N || -90 >= N ? On : Yo : 0 >= N && -180 <= N ? Pp : Km) != y, N = s / C;
                                                        else {
                                                            C = y = Nc(q.ca, p);
                                                            for (u = s = 0; u < q.ra[X]; u++) {
                                                                var O = q.ra[u];
                                                                if (O.p == xf) {
                                                                    for (var F = O.s.a, B = p, J = 0; J < F[X]; J++) {
                                                                        var M = F[J];
                                                                        if (7 == M.p && M.b != k && M.b == l) {
                                                                            B = h;
                                                                            break
                                                                        }
                                                                    }
                                                                    B == h && (O = O.t, F = r.abs(O - y), F < C && (C = F, s = O))
                                                                }
                                                            }
                                                            x - y < C && (s = x, C = x - y);
                                                            0 != C && (A = h, D = s < y, N = r.abs(s - y) / 0.2)
                                                        } Cd(q, D);
                                                    ue(q, N);
                                                    A == h && q.na != x ? wd(l, D, p, p) : Xb(D ?
                                                        x - q.na : q.na, l, h, h)
                                                }
                                            }
                                        }
                                        Mf(b, a)
                                    } else c.ka == vp ? (l = a.Aa === c[Dc], d = d && n && l, e = pb(e[zc], e.end), d && e > c.ib ? (b = {
                                        type: pi + c[Dc][Hc](0).toUpperCase() + c[Dc][tb](1) + zg
                                    }, a.Lb(b)) : a.ta(b)) : c.ka == zp ? 1500 > q && a.Lb(b) : a.ta(b);
                                    kh(a)
                                }
                            }
                        };
                        Ya(a.ma ? Hp : $n, a.Jb, b, p);
                        b.setCapture && b.setCapture();
                        a.lb = Bb();
                        a.yb = a.lb;
                        a.mb = p;
                        Ae = Kf = a.qb = p
                    }
                }
            }

            function kh(a) {
                if (a.wb != h) {
                    a.wb = h;
                    cb = {};
                    var b = a.ma ? a.Ma : w;
                    b.releaseCapture && b.releaseCapture();
                    Be(a.ma ? Ip : Xn, a.Kb, b);
                    Be(a.ma ? Hp : $n, a.Jb, b);
                    a.ma ? Be(Gp, a.ta, b) : Be(Yn, a.ta, b);
                    a[xc].ka == Lm && (Ae = p);
                    a.mb == h && Jf--;
                    fa == h && a[xc] && mc(a[xc].za)
                }
            }

            function Mf(a, b) {
                b[xc].gc == h && (a.hypeGesturePhase = b.Ka, a.hypeGestureXPosition = b.Sa[0].end.x, a.hypeGestureYPosition = b.Sa[0].end.y, b.Lb(a))
            }

            function Be(a, b, c) {
                var d = Jb(c);
                d != k && (c = d);
                c[Rc] ? c[Rc](a, b, p) : c[Pa] && c[Pa](so + a, b)
            }

            function Ya(a, b, c, d) {
                var e = Jb(c);
                e != k && (c = e);
                e = {
                    eventType: a,
                    handler: b,
                    element: c
                };
                d && Nf[z](e);
                c[ab] ? c[ab](a, b, F.Gb ? {
                    passive: p
                } : p) : c[Tb] && c[Tb](so + a, b);
                Xj(c)
            }

            function Hf(a) {
                var b = {};
                if (a.pageX || a.pageY) b.x = a.pageX, b.y = a.pageY;
                else if (a[Rb] ||
                    a[Sb]) b.x = a[Rb] + w[yb].scrollLeft + w.documentElement.scrollLeft, b.y = a[Sb] + w[yb].scrollTop + w.documentElement.scrollTop;
                return b
            }

            function zk(a) {
                var b;
                0 == a.c ? 0 == a.A ? b = Yo : 1 == a.A && (b = On) : 1 == a.c && (0 == a.A ? b = Pp : 1 == a.A && (b = Km));
                return b
            }

            function xk(a, b) {
                var c = a[xc],
                    d = c[Dc] == Yo || c[Dc] == On ? b.x : b.y;
                a.Ua = a.Ua == ba ? d : c[Dc] == Yo || c[Dc] == Km ? r.max(a.Ua, d) : r.min(a.Ua, d)
            }

            function yk(a, b, c) {
                a = Ak(a, b);
                c = r.min(45, 45 * c / 2E3);
                if (a >= 135 + c || a <= -135 - c) return On;
                if (a <= 45 - c && a >= -45 + c) return Yo;
                if (a < -45 - c && a > -135 + c) return Pp;
                if (a >
                    45 + c && a < 135 - c) return Km
            }

            function Ak(a, b) {
                var c = r[Db](b.y - a.y, b.x - a.x);
                return r[Gb](180 * c / r.PI)
            }

            function Tg(a) {
                for (var b = Hd[a], c = {}, d = 0; d < b[X]; d++) c[Na[b[d]].t] = Pc(b[d]);
                b = -1 != je[$b](fq) && F.Na != k && 537 <= F.xa;
                b = pq == h && ("undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext) && -1 == v[Ma].href[$b](an) && -1 == je[$b](zn) && b == p && ja.onLine != p && F[bc] == k ? Bk : 9 > F.$ ? uq : Ck;
                d = {};
                d.Fb = F.Na != k && 603 > F.xa;
                var e = Of[a];
                if (e == k) {
                    try {
                        e = new b(a, c)
                    } catch (f) {
                        b == Bk && (e = new Ck(a))
                    }
                    e.yc = a;
                    e.cb = c;
                    e.options = d;
                    e.Eb =
                        function () {
                            var a = [],
                                b;
                            for (b in e.cb) e.cb[I](b) != p && a[z](b);
                            return a.sort()
                        }
                }
                return e
            }

            function qq(a, b) {
                var c = Tg(a);
                ta(c, b);
                c[ub]()
            }

            function Dk(a) {
                a = Hd[a];
                if (a != k) {
                    for (var b = 1 < v.devicePixelRatio, c = p, d = k, e = 0; e < a[X]; e++) {
                        var f = a[e],
                            g = Na[f].t;
                        if (g == wg) d = f, c = h;
                        else if (g == xg) {
                            if (c == p || b == h) d = f;
                            if (b == h) break
                        } else c == p && (d = f)
                    }
                    return d
                }
            }

            function lh(a, b) {
                var c = Ia(Zb, a); - 1 != c && Zb[bb](c, 1);
                0 >= Zb[X] ? Ek() : b == h && mh == p && (mh = h, v[fc](function () {
                    Fk()
                }, 1))
            }

            function Fk() {
                0 >= Zb[X] || (mh = p, Gk(Zb[0], h))
            }

            function Gk(a, b) {
                var c =
                    Na[a].p;
                if (1 == c)
                    if (c = Na[a].g, c != k && Dk(c) != a) lh(a, b);
                    else {
                        var c = new Image,
                            d = function () {
                                lh(a, b)
                            },
                            e = Pc(a);
                        c.onload = d;
                        c.onerror = d;
                        c.onabort = d;
                        c.src = e;
                        c.Ac = a
                    }
                else 2 == c && (c = function () {
                    for (var c = Hd[Na[a].g], e = 0; e < c[X]; e++) {
                        var d = c[e];
                        Na[d].p != k && lh(d, b)
                    }
                }, d = Tg(Na[a].g), F.Na != k && 536.26 > F.xa || 9 > F.$ ? v[fc](c, 1) : d.load(c, c))
            }

            function Ek() {
                df != k && df(p, S);
                if (Ab({
                        type: ji
                    }, S) !== p)
                    if (-1 == Dg) vd(qb);
                    else {
                        Id = h;
                        for (var a = -1, b = 0; b < Va[X]; b++) {
                            for (var c = Va[b].X, d = 0; d < c[X]; d++)
                                if (c[d] == Dg) {
                                    a = b;
                                    break
                                } if (-1 != a) break
                        } - 1 == a &&
                            (a = 0);
                        qb = a;
                        Pf(Dg)
                    }
            }

            function Pc(a) {
                var b = Na[a];
                if (b == k) return Z;
                var c = b.n;
                a = Z;
                b.r != h && (a += je + bf);
                a += c;
                b = Ab({
                    type: li,
                    url: a
                });
                typeof b === lp && (a = b);
                return a
            }

            function Cf(a) {
                for (var b = 0; b < A[X]; b++)
                    if (A[b].o == a) return b;
                return -1
            }

            function Oc(a) {
                a = A[a];
                return a == k ? k : a.o
            }

            function va() {
                return ka(Oc(U))
            }

            function Fd(a) {
                if (a.getElementsByClassName) return a.getElementsByClassName(Ih);
                var b = /(^|\s)HYPE_element(\s|$)/;
                a = a || w;
                a = a.all ? a.all : a[hb](ce);
                for (var c = [], d, e = a[X], f = 0; f < e; f++) d = a[f], b.test(d[vc]) && c[z](d);
                return c
            }

            function fb(a, b, c, d, e, f, g, j, m) {
                a[z]({
                    i: b,
                    t: c,
                    d: d,
                    f: e,
                    o: f,
                    s: g,
                    e: j,
                    r: m,
                    p: 0
                })
            }

            function nh(a, b, c, d, e) {
                b = {
                    i: a,
                    n: a,
                    f: 30,
                    d: b,
                    a: c,
                    b: []
                };
                S[Y](Qk, h);
                S[Y](Rk, h);
                A[U].T[a] = b;
                we(a, c, b);
                Bf = a;
                ve = function () {
                    gh(d, e, a, h)
                };
                Lb(a, k, p)
            }

            function Gd(a, b, c, d) {
                var e = S[dc][Hb],
                    f = a[kb](Nh),
                    g = b[kb](Nh);
                if (aa[M[a.id]]) {
                    var j = sc(f),
                        m = tc(f);
                    W(a, Hl, j, im, m)
                }
                a = sc(g);
                g = tc(g);
                W(b, Hl, a, im, g);
                c && (c = j, a > c && (c = a), pa(S[H], K(c)), Kc[S.id] = k, S[H].margin == Vk && W(b, Vi, r.max(0, (j < a ? e < c ? e - j : c - j : e < c ? e - a : c - a) / 2)));
                d && (b = m, g > b && (b = g), ua(S[H], K(b)))
            }

            function tc(a) {
                var b = S[dc].offsetHeight,
                    c = A[a].b;
                return c != k ? c / 100 * b : A[a].Z
            }

            function sc(a) {
                var b = S[dc][Hb],
                    c = A[a].a;
                return c != k ? c / 100 * b : A[a].Y
            }

            function Pf(a, b, c, d) {
                if (!(Oc(a) == k || Ef == h)) {
                    c == k && (c = 1.1);
                    c = Df(c, 60);
                    Ef = h;
                    var e = function () {
                            d != k && d();
                            sb = [];
                            If = {};
                            var e = va();
                            Jc = A[a].a != k || A[a].b != k ? h : p;
                            var f = Oc(a),
                                g = U,
                                j = va();
                            if (j != k) {
                                for (var m = j[hb](Vp), l = 0; l < m[X]; l++) m[l][kc] && m[l][kc]();
                                j = j[hb](Qm);
                                for (l = 0; l < j[X]; l++) 0 == j[l].id[$b](Rm) && za(j[l][yc], Z)
                            }
                            l = Pb[tb](0);
                            for (j = 0; j < l[X]; j++) l[j].Ab == ba && Dd(l[j]);
                            var j = [],
                                q;
                            for (q in pc)
                                if (pc[I](q) != p) {
                                    var l = p,
                                        n;
                                    for (n in lc)
                                        if (lc[I](n) != p) {
                                            for (m = 0; m < lc[n][X]; m++)
                                                if (q == lc[n][m]) {
                                                    l = h;
                                                    break
                                                } if (l == h) break
                                        } l == p && j[z](q)
                                } for (l = 0; l < j[X]; l++) delete pc[j[l]];
                            ze = [];
                            if (fa == h) {
                                q = [];
                                for (n = 0; n < Ea[X]; n++) l = Ea[n], Mg(l) == p && q[z](l);
                                for (n = 0; n < q[X]; n++) l = Lg(q[n][wc]), l != k && (l = Ia(Ea, l), -1 != l && Ea[bb](l, 1))
                            }
                            U = Cf(f);
                            q = ka(f);
                            n = q[kb](Nh);
                            fa == h && Og(k);
                            if (F.Na != k && (l = va(), l != k)) {
                                l = l[hb](Vp);
                                for (j = 0; j < l[X]; j++) {
                                    m = l[j];
                                    za(m, Z);
                                    var t = m.outerHTML,
                                        s = m[dc];
                                    s[Cc](m);
                                    za(s, s.innerHTML + t)
                                }
                            }
                            if (pe !=
                                k) {
                                for (l = 0; l < rf[X]; l++) rf[l].destroy();
                                rf = []
                            }
                            sk(f, g);
                            var f = A[n].T,
                                u;
                            for (u in f) f[I](u) != p && (g = A[U].T[u], g.s == ba && we(u, g.a, g));
                            u = {
                                C: Kn,
                                D: Mn,
                                E: Ln
                            };
                            for (var B in u) u[I](B) == p || A[n][B] == k || (f = ia(va(), A[n][B].a), g = u[B], Jd[g] = f, w[ab] ? w[ab](g, f, p) : w[Tb] && w[Tb](so + g, f));
                            B = A[n].L;
                            for (l = 0; l < B[X]; l++) u = B[l].B, f = ia(va(), B[l].a), uk(u, f, k);
                            B = {
                                G: On,
                                H: Yo,
                                I: Pp,
                                J: Km
                            };
                            for (var E in B)
                                if (B[I](E) != p && (u = A[n][E])) {
                                    u = u.a;
                                    f = h;
                                    for (l = 0; l < u[X]; l++)
                                        if (0 != u[l].p) {
                                            f = p;
                                            break
                                        } f == p && (u = ia(va(), u), Qc(q, {
                                            Ta: 1,
                                            direction: B[E],
                                            ib: 30,
                                            ka: vp
                                        },
                                        u))
                                }(E = A[n].K) && wk(w, E);
                            E = va();
                            if (2 == b) {
                                Gd(e, E, h, h);
                                var K = c,
                                    Q = [];
                                Fa(E[H], 1);
                                fb(Q, Nm, 0, K, Yk, M[E.id], 0, 1);
                                if (e != k)
                                    if (Fa(e[H], 0), uj == p) {
                                        var P = M[e.id];
                                        fb(Q, Nm, 0, K, Yk, P, 1, 0)
                                    } else if (e[H][G] != E[H][G] || e[H][L] != E[H][L]) P = M[e.id], fb(Q, Nm, K / 2, K / 2, Yk, P, 1, 0);
                                W(E, Nm, 0);
                                nh(Xh, K, Q, e, E);
                                qa(E[H], yl)
                            } else if (3 == b && F.eb == h) {
                                Gd(e, E, h, h);
                                B = c;
                                u = fb;
                                f = W;
                                g = S[H];
                                g[Se] = ag;
                                g.MozPerspective = ag;
                                g.perspective = ag;
                                g[ca.wa + Lp] = Ko;
                                g.MozTransformStyle = Ko;
                                g[Lp] = Ko;
                                q = S[Hb];
                                g = q / 4;
                                q /= 2;
                                n = -1 * g;
                                l = -1 * q;
                                j = B / 2;
                                t = E[kb](Nh);
                                m = sc(t);
                                t = tc(t);
                                s = [];
                                e != k && (K = M[e.id], V(e, $h, Wf), P = e[kb](Nh), Q = sc(P), P = tc(P), f(e, iq, 1, ml, 0, Hl, Q, im, P), u(s, Vi, 0, j, im, K, 0, q), u(s, ml, 0, j, im, K, 0, -300), u(s, mj, 0, j, im, K, 0, -20), u(s, iq, 0, j, Vi, K, 1, 0));
                                var R = M[E.id];
                                V(E, $h, Wf);
                                u(s, Vi, 0, j, im, R, n, l);
                                u(s, ml, 0, j, im, R, -600, -300);
                                u(s, mj, 0, j, im, R, 50, 40);
                                u(s, iq, 0, j, Vi, R, 0, 1);
                                e != k && (u(s, Vi, j, j, Nm, K, q, g), u(s, ml, j, j, Nm, K, -300, -600), u(s, mj, j, j, Nm, K, -20, -50), (Q != m || P != t) && u(s, Nm, j, j, im, K, 1, 0));
                                u(s, Vi, j, j, Nm, R, l, 0);
                                u(s, ml, j, j, Nm, R, -300, 0);
                                u(s, mj, j, j, Nm, R, 40, 0);
                                f(E, Vi, g, ml, -600, mj, 50, iq, 0,
                                    Hl, m, im, t);
                                nh(Zh, B, s, e, E);
                                qa(E[H], yl)
                            } else 4 == b || 5 == b || 6 == b || 7 == b ? (K = c, Q = [], u = e[kb](Nh), f = E[kb](Nh), P = sc(u), B = sc(f), u = tc(u), f = tc(f), 5 == b || 4 == b ? (Gd(e, E, p, h), P != B && (fb(Q, Hl, 0, K, Hl, J, P, B), aa[J] = {}, aa[J].c = P, aa[J].d = u > f ? u : f, aa[J].a = 0, aa[J].b = 0)) : (Gd(e, E, h, p), u != f && (fb(Q, im, 0, K, Hl, J, u, f), aa[J] = {}, aa[J].c = P > B ? P : B, aa[J].d = u, aa[J].a = 0, aa[J].b = 0)), g = Vi, q = B, n = -1 * B, 5 == b ? (q = -1 * P, n = P) : 6 == b ? (g = Yk, q = -1 * u, n = u) : 7 == b && (g = Yk, q = f, n = -1 * f), e != k && (l = M[e.id], W(e, Hl, P, im, u), fb(Q, g, 0, K, Hl, l, 0, q)), fb(Q, g, 0, K, Hl, M[E.id], n, 0),
                                W(E, Hl, B, im, f, g, n), nh(Yh, K, Q, e, E), qa(E[H], yl)) : (Gd(e, E, p, p), gh(e, E, k, h));
                            rc()
                        },
                        f = p,
                        g = va();
                    g[Eb](Rk);
                    if (Hk == h && g != k) {
                        var g = Cf(Oc(U)),
                            j = {
                                type: oi
                            };
                        if (Ab(j, va()) !== p) {
                            var m = A[g].B;
                            if (m != k) {
                                for (var l = m.a, q = ia(va(), l), m = 0; m < l[X]; m++) {
                                    var t = l[m],
                                        u = t.b;
                                    3 == t.p && (u != k && A[g].T[u] != k) && (f = h, Bf = u, ve = e)
                                }
                                q(j)
                            }
                        }
                        j = Fd(va());
                        for (m = 0; m < j[X]; m++) l = j[m], sd(l) != p && !A[g].v[M[l.id]].cL && (q = {
                            type: ri
                        }, Ab(q, l), (t = n(l, Ll)) && ia(l, t.a)(q));
                        for (var s in Jd) Jd[I](s) != p && (w[Rc] ? w[Rc](s, Jd[s], p) : w[Pa] && w[Pa](so + s, Jd[s]));
                        Jd = {};
                        for (m =
                            0; m < Nf[X]; m++) s = Nf[m], Be(s.eventType, s.handler, s[Bc]);
                        Nf = []
                    }
                    Hk = h;
                    f == p && e()
                }
            }

            function vd(a, b, c) {
                Id = p;
                var d = Va[a];
                d == k || Ef == h || (d = jh(d), Pf(d, b, c, function () {
                    qb = a
                }))
            }

            function oh(a) {
                for (var b = [], c = 0; c < a.X[X]; c++) {
                    var d = a.X[c],
                        e = A[d];
                    b[z]({
                        _: d,
                        name: e.n,
                        breakpoint: e.d,
                        width: e.Y,
                        height: e.Z
                    })
                }
                return b
            }

            function Ik(a, b) {
                for (var c = oh(b), d = 0; d < c[X]; d++)
                    if (c[d].name == a) return c[d]._;
                return -1
            }

            function ph() {
                for (var a = [], b = 0; b < Va[X]; b++) a[z](Va[b].n);
                return a
            }

            function V(a, b, c) {
                a = a.id;
                a = M[a] || a;
                var d = aa[a];
                d == k && (d = {}, aa[a] = d);
                d[b] = c
            }

            function n(a, b, c) {
                c = "undefined" != typeof c ? c : k;
                a = a.id;
                a = aa[M[a] || a];
                if (a == k) return c;
                b = a[b];
                return b == k ? c : b
            }

            function Ab(a, b) {
                var c = v.HYPE_eventListeners;
                if (c != k) {
                    for (var d, e = 0; e < c[X]; e++)
                        if (c[e][La] == a[La] && c[e].callback != k && (d = c[e].callback(ca.API, b, a), d === p)) return p;
                    return d
                }
            }

            function Jk(a) {
                var b = w[hb](nn)[0];
                b || (b = w[Sc](Jm), w[yb][Fb](b));
                b[Fb](a)
            }

            function Kk(a) {
                a = a[uc](/\|/g, He)[uc](/\`/g, fn)[uc](/\@/g, Up)[uc](/\?/g, Fn)[uc](/\$/g, Tn)[uc](/\^/g, Ye);
                ef == p && (a = a[uc](/rotateY\(0\)/g,
                    no));
                var b = w[Sc](Jm),
                    c = w.xmlEncoding == k ? Pd : Z;
                za(b, c + sg + a + gg + c);
                Jk(b)
            }

            function Ce(a, b) {
                var c = b.f,
                    d = r[Ec](a);
                return Df(d + 100 * (a - d) / c, c)
            }

            function vq() {
                for (var a in qh) qh[I](a) != p && (pd[a] = {
                    q: qh[a]
                });
                for (var b in pd)
                    if (pd[I](b) != p)
                        if (a = pd[b].q, typeof a === lp) Ad[b] = eval(a);
                        else {
                            for (var c = [], d = 0; d < a[X]; d++) {
                                var e = a[d];
                                c[z]({
                                    sa: {
                                        x: e[0],
                                        y: e[1]
                                    },
                                    La: {
                                        x: e[2],
                                        y: e[3]
                                    },
                                    Ha: {
                                        x: e[4],
                                        y: e[5]
                                    },
                                    Ia: {
                                        x: e[6],
                                        y: e[7]
                                    },
                                    length: 0,
                                    ea: []
                                })
                            }
                            qf(c, p);
                            Ad[b] = c
                        }
            }

            function qf(a, b, c, d, e) {
                var f = 0;
                d == k && (d = 100);
                c == k && (c = 100);
                for (var g = 0; g <
                    a[X]; g++) {
                    var j = a[g],
                        m = 0,
                        l = d;
                    e == h && j.sa.x == j.La.x && j.sa.y == j.La.y && j.Ia.x == j.Ha.x && j.Ia.y == j.Ha.y ? l = 2 : (l = pb(j.sa, j.Ia), l = r[Cb](r.max(r.min(l / 2, d), c)));
                    for (var q = j.sa, n = 0; n < l; n++) {
                        var u = fk(j, n / (l - 1)),
                            s = {};
                        s.location = u;
                        b && (q = pb(u, q), m += q, xa(s, q));
                        j.ea[z](s);
                        q = u
                    }
                    f += m;
                    xa(j, m)
                }
                return f
            }

            function fk(a, b) {
                var c = Kd(a.sa, a.La, b),
                    d = Kd(a.La, a.Ha, b),
                    e = Kd(a.Ha, a.Ia, b),
                    f = Kd(c, d, b),
                    d = Kd(d, e, b),
                    f = Kd(f, d, b),
                    g = p,
                    j = d;
                d.x == f.x && d.y == f.y && (c.x == f.x && c.y == f.y ? j = e : (j = c, g = h));
                f.Ra = ek(f, j);
                g == h && (f.Ra += 180);
                return f
            }

            function ek(a,
                b) {
                var c = 0,
                    c = b.x == a.x ? b.y >= a.y ? 90 : -90 : 180 * r.atan((b.y - a.y) / (b.x - a.x)) / r.PI;
                b.x < a.x && (c += 180);
                return c
            }

            function Kd(a, b, c) {
                return {
                    x: a.x + (b.x - a.x) * c,
                    y: a.y + (b.y - a.y) * c,
                    Ra: 0
                }
            }

            function pb(a, b) {
                return r[Ua]((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y))
            }

            function Lk(a, b, c) {
                var d = w[Sc](Jm),
                    e = d[H];
                Aa(d, Kh);
                wa(e, pj);
                e.top = cf;
                Ba(e, cf);
                pa(e, Zf);
                ua(e, Zf);
                if (b.bR != k || b.aY != k) e[Se] = c, e.MozPerspective = c, e.perspective = c;
                e.pointerEvents = no;
                e[Io] = no;
                d[Fb](a);
                return d
            }

            function Mk(a, b, c, d) {
                var e = w[Sc](b.k);
                d = d[tb](0);
                d[z](b.cP);
                Aa(e, d[Ta]($).trim());
                e.id = Nk(c, b.i, un);
                e[Y](Nh, a._);
                e[H].pointerEvents = Vk;
                e[H][Io] = Vk;
                b.w != k && za(e, b.w);
                return e
            }

            function Wa(a) {
                var b = U;
                a != k && (a = a[kb](Nh), a != k && (b = ea(a)));
                return b
            }

            function Zj(a) {
                var b = [],
                    c = Wa(w[Vb](Yb[a])),
                    d = A[c].v,
                    e;
                for (e in d)
                    if (d[I](e) != p) {
                        var f = d[e];
                        (f.bF == a || f.bF == k && a == A[c].o) && b[z](e)
                    } return b
            }

            function me(a) {
                var b = Wa(w[Vb](Yb[a]));
                a = A[b].v[a];
                return a == k ? k : a.bF
            }

            function vf(a) {
                if (Jc != p) {
                    Kc = {};
                    a = Zj(a);
                    for (var b = 0; b < a[X]; b++) {
                        var c = a[b],
                            d = ka(c);
                        Lc(d);
                        vf(c)
                    }
                }
            }

            function rc() {
                if (!(0 <
                        Zb[X])) {
                    if (Id == p && rh == p) {
                        rh = h;
                        var a = jh(Va[qb]);
                        U != a && Pf(a, Lf, 0);
                        rh = p
                    }
                    Jc == h && (vf(k), fa == h && le(zb(k)))
                }
            }

            function jh(a) {
                var b = oh(a),
                    c = b[0]._;
                if (1 != b[X]) {
                    var d = S[yc][Hb];
                    if (0 != d)
                        for (var e = 0; e < b[X] && !(b[e].breakpoint > d); e++) c = b[e]._
                }
                b = A[c].n;
                d = Ab({
                    type: ki,
                    layoutName: b,
                    sceneName: a.n
                }, S);
                typeof d === lp && d != b && (a = Ik(d, a), -1 != a && (c = a));
                return c
            }

            function Hg(a) {
                var b = Yb[Oc(U)];
                a != k && (b = Yb[a]);
                a = Kc[b];
                a == k && (a = w[Vb](b), a = {
                    width: a[Hb],
                    height: a.offsetHeight
                }, Kc[b] = a);
                return a
            }

            function hf(a) {
                var b = 0,
                    c = 0;
                a == k ? (b =
                    w[Vb](Yb[a]), a = Wa(b), b = A[a].Y, c = A[a].Z) : (b = nb(a), c = ob(a));
                return {
                    width: b,
                    height: c
                }
            }

            function Yg(a) {
                return (F.xa != k || 3.5 <= F.Xa || 10 <= F.$) && n(a, $h) == Wf
            }

            function Kg() {
                kf = p;
                $g = h;
                for (var a = 0; a < te[X]; a++) Lc(te[a]);
                $g = p;
                $j();
                te = []
            }

            function $j() {
                pe == k || sh == h || (sh = h, v[fc](function () {
                    sh = p;
                    pe.refreshAll()
                }, 0))
            }

            function sd(a) {
                var b = Wa(a);
                return A[b].U[M[a.id]] != k || n(a, Rl) != k ? h : p
            }

            function Nk(a, b, c) {
                var d = b;
                if (d == k || w[Vb](d) != k) {
                    do d = c + th(); while (w[Vb](d) != k)
                }
                Yb[a] = d;
                M[d] = a;
                return uh[b != k ? b : d] = d
            }

            function ka(a) {
                return w[Vb](Yb[a])
            }

            function Bb(a) {
                if (yf != k && a != h) return yf;
                var b = (new Date).getTime();
                a == h && (yf = b);
                return b
            }

            function th() {
                for (var a = Z, b = ca.xb + Hh, c = 0; 20 > c; c++) var d = r[Ec](r.random() * b[X]),
                    a = a + b.substring(d, d + 1);
                return a
            }

            function qe(a) {
                v.console && v.console.log(a)
            }

            function Ck(a) {
                var b = this;
                Of[a] = b;
                b.bb = function () {
                    var a = w[Sc](Tk);
                    b.ua = a;
                    for (var d = b.Eb(), e = 0; e < d[X]; e++) {
                        var f = d[e],
                            g = w[Sc](fp);
                        g[Y](gp, b.cb[f]);
                        g[Y](Np, f);
                        a[Fb](g)
                    }
                    w[yb][Fb](a);
                    return a
                };
                b.load = function (a, d) {
                    if (!(b.Ba == h || b.Oa == h)) {
                        var e = b.bb(d),
                            f = function () {
                                v[Sa](b.bc);
                                b.Ba != h && (b.Oa = p, b.Ba = h, a != k && a(b), b.$a == h && b[ub]())
                            },
                            g = function () {
                                v[Sa](b.bc);
                                b.Ba != h && (b.Oa = p, d != k && d(b))
                            };
                        e[ab](bm, f, h);
                        e[ab](oj, g, h);
                        e[ab](Um, g, h);
                        b.bc = v[fc](g, 15E3);
                        b.Oa = h;
                        ja.onLine == k || ja.onLine == h ? e.load() : f()
                    }
                };
                ra(b, function () {
                    if (b.Ba != h) {
                        if (b.Oa == h) {
                            b.$a = h;
                            return
                        }
                        b.Ba = h
                    }
                    b.ua == k && b.bb(k);
                    try {
                        ta(b.ua, b.loop), b.ua.currentTime = 0
                    } catch (a) {}
                    var d = b.ua[ub]();
                    if (d !== ba) d[cm](lq())
                });
                ya(b, function () {
                    b.Ba != h ? b.$a = p : b.ua != k && b.ua[kc]()
                })
            }

            function Bk(a) {
                var b = this;
                Of[a] = b;
                b.load = function (a, d) {
                    if (!(b.Ba ==
                            h || b.Oa == h)) {
                        b.Oa = h;
                        var e = b.tc();
                        if (e == k) d(b);
                        else {
                            -1 == e[$b](vg) && (e = Z + e + vg);
                            var f = new XMLHttpRequest;
                            f.open(Gh, e, h);
                            f.responseType = Sk;
                            f.onload = function () {
                                b.Oa = p;
                                b.Ba = h;
                                b.Cb = f.response;
                                a != k && a(b);
                                b.$a == h && b[ub]()
                            };
                            f.onerror = function () {
                                b.Oa = p;
                                d != k && d(b)
                            };
                            try {
                                f.send()
                            } catch (g) {}
                        }
                    }
                };
                ra(b, function () {
                    b.Mb();
                    var a = v.HYPE_gac_740;
                    a == k && (a = new(v.AudioContext || v.webkitAudioContext), v.HYPE_gac_740 = a);
                    a.resume != k && a.resume();
                    b.source = a.createBufferSource();
                    b[Ac].connect(a.destination);
                    ta(b[Ac], b.loop);
                    b[xc].Fb ==
                        h && b.ub();
                    b.Ba != h ? (b.$a = h, b.load()) : b.Cb != k ? (a.decodeAudioData(b.Cb, function (a) {
                        b.ec = a;
                        b[Ac].buffer = a;
                        b[xc].Fb != h && b.ub()
                    }), b.Cb = k) : (b[Ac].buffer = b.ec, b[xc].Fb != h && b.ub())
                });
                ya(b, function () {
                    b.Ba != h ? b.$a = p : b.Mb()
                });
                b.ub = function () {
                    try {
                        if (b[Ac] != k)
                            if (b[Ac].noteOn != k) b[Ac].noteOn(0);
                            else b[Ac][zc](0)
                    } catch (a) {}
                };
                b.Mb = function () {
                    try {
                        b[Ac] != k && (b[Ac].noteOff != k ? b[Ac].noteOff(0) : b[Ac].stop(0))
                    } catch (a) {}
                };
                b.tc = function () {
                    if (b.Bb != k) return b.Bb;
                    for (var a = w[Sc](Tk), d = b.Eb(), e = 0; e < d[X]; e++) {
                        var f = d[e];
                        b.Bb =
                            b.cb[f];
                        if (a.canPlayType(f) != lo && a.canPlayType(f) != Z) break
                    }
                    return b.Bb
                }
            }

            function uq(a) {
                var b = this;
                Of[a] = b;
                b.bb = function (a, d) {
                    var e = w[Sc](Qm);
                    b.ua = e;
                    for (var f = b.Eb(), g = 0; g < f[X]; g++) {
                        var j = f[g];
                        if (j != Uk) {
                            e[Y](gp, b.cb[j]);
                            e[Y](gm, Ki);
                            e[Y](Wk, d ? Ki : Fh);
                            e[Y](Xk, d ? Ki : Fh);
                            e[Y](dq, cf);
                            e[Y](on, cf);
                            pa(e[H], Vf);
                            ua(e[H], Vf);
                            break
                        }
                    }
                    w[yb][Fb](e);
                    return e
                };
                b.load = function (a, d) {
                    b.ua == k && b.bb(d);
                    a != k && a(b)
                };
                ra(b, function () {
                    b.ua == k && b.bb(k, h);
                    try {
                        b.ua.SetIsLooping(b.loop)
                    } catch (a) {}
                    try {
                        b.ua[Ja]()
                    } catch (d) {
                        v[fc](function () {
                                b[ub]()
                            },
                            100)
                    }
                });
                ya(b, function () {
                    if (b.ua != k) try {
                        b.ua.Stop()
                    } catch (a) {
                        v[fc](function () {
                            b[kc]()
                        }, 100)
                    }
                })
            }
            var ca = this,
                S = w[Vb](J),
                Sg = 4,
                Lf = 1,
                xf = 2,
                Ff = [Xl, Yl],
                xe = [Wi, Zi, Yi, $i, Xi, jl, ej, fj, pl, Wl],
                kk = [Ep, kq, Dp, mn, fm, jq, ep],
                ok = {
                    "physics-body-type": {
                        HYP_r: il
                    },
                    "physics-bounce": {
                        HYP_r: ql,
                        HYP_s: 0.5
                    },
                    "physics-friction": {
                        HYP_r: rl,
                        HYP_s: 0.1
                    },
                    "physics-air-drag": {
                        HYP_r: Vl,
                        HYP_s: 0.01
                    },
                    "physics-density": {
                        HYP_r: sl,
                        HYP_s: 0.001
                    },
                    top: {
                        HYP_r: Yk
                    },
                    left: {
                        HYP_r: Vi
                    },
                    width: {
                        HYP_r: Hl
                    },
                    height: {
                        HYP_r: im
                    },
                    "background-image": {
                        HYP_x: h,
                        HYP_r: $l
                    },
                    rotateZ: {
                        HYP_r: Ym,
                        HYP_s: 0
                    },
                    scaleX: {
                        HYP_r: Tl,
                        HYP_s: 1
                    },
                    scaleY: {
                        HYP_r: Ul,
                        HYP_s: 1
                    },
                    "z-index": {
                        HYP_r: iq
                    },
                    opacity: {
                        HYP_r: Nm,
                        HYP_s: 1
                    }
                },
                qb = 0,
                U = 0,
                sb = [],
                Pb = [],
                rb = {},
                cb = {},
                Bd = {},
                pc = {},
                ha = {},
                zf = p,
                Hd = {},
                Zb = [],
                mh = p,
                aa = {},
                fh = {},
                ze = [],
                Jd = {},
                ve = k,
                Bf = k,
                Yb = {},
                M = {},
                uh = {},
                Ok = 0,
                Ef = p,
                Nf = [],
                ah = {},
                Ad = {},
                Hk = p,
                Jc = p,
                kf = p,
                $g = p,
                te = [],
                Kc = {},
                If = {},
                qh = {
                    d: [
                        [0, 0, 0.42, 0, 1, 1, 1, 1]
                    ],
                    e: [
                        [0, 0, 0, 0, 0.58, 1, 1, 1]
                    ],
                    c: [
                        [0, 0, 0.42, 0, 0.58, 1, 1, 1]
                    ]
                },
                Id = p,
                rh = p,
                pe = v.HYPE_w_740,
                rf = [],
                sh = p,
                yf = k;
            ca.xb = Uf;
            ca.wa = Qe;
            ca.pb = Mo;
            var Ae = p,
                Jf = 0,
                Kf = p,
                ye = [];
            ca.z_o =
                function () {
                    0 == Ok && (Ok = th());
                    df != k && df(h, S);
                    ef = ef && F.xa != k;
                    F.Na != k && w[yb][ab](Ip, lq(), F.Gb ? {
                        passive: p
                    } : p);
                    Yb[J] = J;
                    M[J] = J;
                    uh[J] = J;
                    for (var a = 0; a < A[X]; a++) {
                        var b = A[a].T,
                            c;
                        for (c in b)
                            if (b[I](c) != p) {
                                var d = b[c];
                                d.d = Ce(d.z, d);
                                for (var e = 0; e < d.a[X]; e++) {
                                    var f = d.a[e];
                                    f.t = Ce(f.y, d);
                                    f.d = Ce(f.z, d);
                                    f.p == k ? f.p = 0 : f.p == xf && (f.d = 0);
                                    f.r == k && (f.r = p);
                                    f.k = e
                                }
                                e = d.b;
                                for (f = 0; f < e[X]; f++) {
                                    var g = e[f];
                                    g.startTime = Ce(g.C, d);
                                    g.duration = Ce(g.D, d)
                                }
                            }
                    }
                    Kk(Xe);
                    nq == h && Kk(Qi);
                    for (a = 0; a < sj[X]; a++) b = sj[a], c = w[Sc](Jm), za(c, b), Jk(c), 9 > F.$ &&
                        (b = b.match(/('|")(http.*?css.*?)('|")/), b != k && 2 <= b[X] && w.createStyleSheet(b[2]));
                    v[fc](rc, 120);
                    v[fc](rc, 1200);
                    a = w[Sc](Jm);
                    a.id = Lh;
                    qa(a[H], no);
                    a[Y](Rk, h);
                    S[Fb](a);
                    for (b = 0; b < A[X]; b++) {
                        c = A[b];
                        d = w[Sc](Jm);
                        e = d[H];
                        Aa(d, Mh);
                        d.id = Nk(c.o, k, vn);
                        d[Y](Nh, c._);
                        uj != p && (e.backgroundColor = eb(c.c));
                        qa(e, no);
                        d[Y](Rk, h);
                        e.overflow = pn;
                        wa(e, pj);
                        pa(e, K(c.Y));
                        ua(e, K(c.Z));
                        F.eb == h && 11 > F.$ && (e.perspective = c.p);
                        S[Fb](d);
                        var e = c.v,
                            j;
                        for (j in e)
                            if (e[I](j) != p && (f = e[j], (g = f.cL) && ha[g] == k)) {
                                var m = c.T,
                                    l = [],
                                    q;
                                for (q in m)
                                    if (m[I](q) !=
                                        p) {
                                        var n = c.T[q],
                                            u = n.a;
                                        n.s == g && (n = we(q, u, n, g), l[z](n))
                                    } m = Mk(c, f, j, [Ih, vi]);
                                if (F.eb == h && (F.$ == k || 11 <= F.$)) n = Lk(m, f, c.p), n[Y](Nh, c._), a[Fb](n);
                                else a[Fb](m);
                                ha[g] = {
                                    element: m,
                                    Hb: l,
                                    kc: f.cS,
                                    Ub: p,
                                    Ob: []
                                }
                            } l = c.O;
                        for (u = 0; u < l[X]; u++)
                            if (j = l[u], e[I](j) != p && (f = e[j], g = f.cL, !(f.cM == h || g))) {
                                var m = Mk(c, f, j, [Ih]),
                                    g = k,
                                    s;
                                for (s in lc)
                                    if (lc[I](s) != p) {
                                        for (n = 0; n < lc[s][X]; n++)
                                            if (j == lc[s][n]) {
                                                g = s;
                                                break
                                            } if (g != k) break
                                    } F.eb == h && (F.$ == k || 11 <= F.$) ? (n = Lk(m, f, c.p), g ? ha[g][Bc][Fb](n) : d[Fb](n)) : g ? ha[g][Bc][Fb](m) : d[Fb](m)
                            }
                    }
                    for (j = 0; j <
                        A[X]; j++) {
                        q = A[j].T;
                        for (var x in q)
                            if (q[I](x) != p) {
                                s = q[x].j;
                                for (var y in s)
                                    if (s[I](y) != p) {
                                        a = s[y];
                                        b = {};
                                        c = [];
                                        for (d = 0; d < a[X]; d++) e = a[d], c[z]({
                                            sa: {
                                                x: e[0],
                                                y: e[1]
                                            },
                                            La: {
                                                x: e[2],
                                                y: e[3]
                                            },
                                            Ha: {
                                                x: e[4],
                                                y: e[5]
                                            },
                                            Ia: {
                                                x: e[6],
                                                y: e[7]
                                            },
                                            length: 0,
                                            ea: []
                                        });
                                        b.va = c;
                                        xa(b, qf(c, h));
                                        ah[y] = b
                                    }
                            }
                    }
                    vq();
                    if (fa == h) {
                        var C, B;
                        "undefined" !== typeof w.hidden ? (C = pn, B = $p) : "undefined" !== typeof w.wc ? (C = bo, B = co) : "undefined" !== typeof w.xc ? (C = eo, B = fo) : "undefined" !== typeof w.Bc && (C = bq, B = cq);
                        "undefined" === typeof w[ab] || "undefined" === typeof w[C] || w[ab](B,
                            function () {
                                if (w[C])
                                    for (var a = 0; a < Ea[X]; a++) {
                                        var b = Ea[a];
                                        b.ca != k && Mb(b.ca)
                                    } else
                                        for (a = 0; a < Ea[X]; a++) b = Ea[a], b.ca != k && wd(b.ca)
                            }, p)
                    }
                    for (var D in Na) Na[I](D) != p && (x = Na[D].g, x != k && (y = Hd[x], y == k && (y = [], Hd[x] = y), y[z](D)));
                    for (var E in Na) Na[I](E) != p && Na[E].p != k && -1 == Ia(Zb, E) && Zb[z](E);
                    D = Zb[tb](0);
                    if (0 == D[X]) Ek();
                    else if (9 > F.$) Fk();
                    else
                        for (E = 0; E < D[X]; E++) Gk(D[E], p);
                    v[ab] ? (v[ab](To, function () {
                        Id = p;
                        rc()
                    }), v[ab](vo, function () {
                        v[fc](rc, 1)
                    })) : v[Tb] && v[Tb](to, function () {
                        Id = p;
                        rc()
                    });
                    if (ke && (S[H][Te] = Xo, S[ab])) {
                        D = [dm, $n, Jo, yi, Wn, Zn];
                        for (E = 0; E < D[X]; E++) S[ab](D[E], sq, h)
                    }
                };
            var F;
            var $a = function (a) {
                    return (a = ja && ja[Ka] && ja[Ka].match(a)) && a[1]
                },
                Q = {};
            if (ja) {
                if (ja.userAgentData != k)
                    for (var vh = ja.userAgentData.brands, Qf = 0; Qf < vh[X]; Qf++)
                        if (-1 != vh[Qf].brand[$b](Ah)) {
                            Q.Wa = da(vh[Qf].version);
                            Q.xa = 537.36;
                            break
                        } Q.Wa == k && (Q.$ = da($a(/MSIE (\d+\.\d+)/)) || da($a(/(Trident)/) && $a(/rv:(\d+\.\d+)/)) || da($a(/Edge\/(\d+\.\d+)/)) || k, Q.lc = da($a(/Gecko\/(\d+)/)) || k, Q.Xa = da($a(/Firefox\/(\d+\.\d+)/)) || k, Q.xa = da(!Q.$ && $a(/AppleWebKit\/(\d+\.\d+)/)) ||
                    k, Q.Wa = da(Q.xa && $a(/Chrome\/(\d+\.\d+)/)) || k, Q.Zb = da(Q.xa && $a(/Safari\/(\d+\.\d+)/) && $a(/Version\/(\d+\.\d+)/)) || k, Q.opera = da($a(/Opera\/(\d+\.\d+)/) && $a(/Version\/(\d+\.\d+)/)) || $a(/Opera\/(\d+\.\d+)/) || da(Q.xa && $a(/OPR\/(\d+\.\d+)/)) || k, Q.dc = -1 < ja[Ka][ib](Cg) || k, Q.nc = -1 < ja[Ka][ib](wn) || k, Q.oc = -1 < ja[Ka][ib](xn) || k, Q.pc = -1 < ja[Ka][ib](yn) || k);
                Q.Na = Q.nc || Q.oc || Q.pc || k;
                Q.Yb = w.compatMode == zh || k;
                Q.eb = Q.xa != k || 10 <= Q.Xa || 10 <= Q.$;
                for (var wh in Q)(Q[wh] === k || isNaN(Q[wh])) && delete Q[wh];
                Q[bc] && Q.$ && delete Q.$;
                Q.Gb = p;
                try {
                    var Pk = Object.defineProperty({}, zo, {
                        get: function () {
                            Q.Gb = h
                        }
                    });
                    v[ab](Bp, k, Pk);
                    v[Rc](Bp, k, Pk)
                } catch (wq) {}
            }
            F = Q;
            var P = {
                    i: nc,
                    cP: nc,
                    b: Lc,
                    a: Lc,
                    c: Nb,
                    d: Nb,
                    bQ: function (a) {
                        Yg(a) == h && zd(a)
                    },
                    bS: Lc,
                    t: function (a, b) {
                        a[H].fontSize = K(b)
                    },
                    s: function (a, b) {
                        a[H].fontFamily = b
                    },
                    v: function (a, b) {
                        a[H].fontWeight = b
                    },
                    u: function (a, b) {
                        a[H].fontStyle = b
                    },
                    H: function (a, b) {
                        a[H].textDecoration = b
                    },
                    F: function (a, b) {
                        a[H].textAlign = b
                    },
                    G: function (a, b) {
                        a[H].color = eb(b)
                    },
                    X: function (a, b) {
                        a[H].letterSpacing = K(b)
                    },
                    E: function (a, b) {
                        a[H].wordSpacing =
                            K(b)
                    },
                    Y: function (a, b) {
                        a[H].lineHeight = K(b)
                    },
                    aX: Wj,
                    aW: Wj,
                    f: oc,
                    bR: zd,
                    aY: zd,
                    cQ: oc,
                    cR: oc,
                    gW: oc,
                    uB: oc,
                    tX: oc,
                    tY: oc,
                    bO: oc,
                    bP: nc,
                    e: function (a, b) {
                        if (9 > F.$ || F.$ != k && F.Yb) {
                            if (1 == ea(b)) V(a, Uh, Z), V(a, Th, Z);
                            else {
                                var c = Bg + r[Gb](100 * b) + ae;
                                V(a, Uh, ca.pb + Ve + c);
                                V(a, Th, c[Fc]());
                                a[H].backgroundColor == Z && a[H].backgroundImage == Z && w[Vb](En + a.id) == k && oa(a[H], Rp + wf(Pc(Ge)) + Rd)
                            }
                            se(a)
                        }
                        a[H].opacity = b;
                        a[H].MozOpacity = b;
                        Xj(a)
                    },
                    aP: function (a, b) {
                        a[H].cursor = b
                    },
                    bD: function (a, b) {
                        a[H][ca.wa + Sp] = b;
                        a[H].MozUserSelect = b;
                        a.onselectstart =
                            function () {
                                return b != no
                            }
                    },
                    N: function (a, b) {
                        a[H].borderLeftWidth = K(b);
                        Nb(a)
                    },
                    O: function (a, b) {
                        a[H].borderRightWidth = K(b);
                        Nb(a)
                    },
                    P: function (a, b) {
                        a[H].borderTopWidth = K(b);
                        Nb(a)
                    },
                    M: function (a, b) {
                        a[H].borderBottomWidth = K(b);
                        Nb(a)
                    },
                    B: function (a, b) {
                        a[H].borderLeftColor = eb(b)
                    },
                    C: function (a, b) {
                        a[H].borderRightColor = eb(b)
                    },
                    D: function (a, b) {
                        a[H].borderTopColor = eb(b)
                    },
                    A: function (a, b) {
                        a[H].borderBottomColor = eb(b)
                    },
                    J: function (a, b) {
                        a[H].borderLeftStyle = b
                    },
                    K: function (a, b) {
                        a[H].borderRightStyle = b
                    },
                    L: function (a, b) {
                        a[H].borderTopStyle =
                            b
                    },
                    I: function (a, b) {
                        a[H].borderBottomStyle = b
                    },
                    aK: function (a, b) {
                        b = typeof b != po ? b : K(b);
                        a[H].borderTopLeftRadius = b;
                        a[H].MozBorderRadiusTopleft = b;
                        9 > F.$ && tf(a);
                        fa == h && Ic(a)
                    },
                    aL: function (a, b) {
                        b = typeof b != po ? b : K(b);
                        a[H].borderTopRightRadius = b;
                        a[H].MozBorderRadiusTopright = b;
                        9 > F.$ && tf(a);
                        fa == h && Ic(a)
                    },
                    aI: function (a, b) {
                        b = typeof b != po ? b : K(b);
                        a[H].borderBottomLeftRadius = b;
                        a[H].MozBorderRadiusBottomleft = b;
                        9 > F.$ && tf(a);
                        fa == h && Ic(a)
                    },
                    aJ: function (a, b) {
                        b = typeof b != po ? b : K(b);
                        a[H].borderBottomRightRadius = b;
                        a[H].MozBorderRadiusBottomright =
                            b;
                        9 > F.$ && tf(a);
                        fa == h && Ic(a)
                    },
                    bE: function (a, b) {
                        za(a, Z);
                        var c, d = Hd[b];
                        if (d != k) {
                            for (var e = 0; e < d[X]; e++) {
                                var f = d[e],
                                    g = Na[f].t,
                                    f = Pc(f),
                                    j = a[jc][Sc](fp);
                                j.src = f;
                                g != k && (F.Wa == k || g != Xp) && j[Y](Np, g);
                                a[Fb](j);
                                c == k && (g != Wp && g != Yp) && (c = f)
                            }
                            if (c != k && 9 > F.$) {
                                d = a[jc][Sc](Jm);
                                Aa(d, Ih);
                                for (e = 0; e < a.attributes[X]; e++) g = a.attributes.item(e), d[Y](g.name, g.value);
                                if (a.hasChildNodes)
                                    for (e = 0; e < a[Gc][X]; e++) d[Fb](a[Gc].item(e));
                                d[H].cssText = a[H].cssText;
                                a[dc].replaceChild(d, a);
                                e = Zm;
                                g = d[kb](hm);
                                if (g != k && (g == hm || g == Wf || g == Ki ||
                                        g == Mp)) e = Mp;
                                g = Zm;
                                f = d[kb](Qn);
                                if (f != k && (f == Qn || f == Wf || f == Ki || f == Mp)) g = Mp;
                                f = Yf;
                                j = d[kb](go);
                                if (j != k && (j == go || j == Wf || j == Ki || j == Mp)) f = cf;
                                za(d, kg + c + Td + d[H][G] + Wd + d[H][L] + Vd + d.id + Xd + d.id + Ud + e + Yd + g + Zd + f + Sd);
                                ra(d, function () {
                                    P[Ja](a[jc][Ra][Rm + a.id], h)
                                });
                                ya(d, function () {
                                    P[Ja](a[jc][Ra][Rm + a.id], p)
                                })
                            }
                        }
                    },
                    Play: function (a, b) {
                        try {
                            if (a == h) b[Ja]();
                            else b.Stop()
                        } catch (c) {
                            v[fc](function () {
                                P[Ja](b, a)
                            }, 100)
                        }
                    },
                    aH: function (a) {
                        a.autoplay = p
                    },
                    aO: function (a, b) {
                        a[Y](hm, b);
                        a.controls = 0 != b;
                        var c = a[jc][Ra][Rm + a.id];
                        if (c != k && 9 >
                            F.$) try {
                            c.SetControllerVisible(0 != ea(b))
                        } catch (d) {
                            v[fc](function () {
                                P.aO(a, b)
                            }, 100)
                        }
                    },
                    dA: function (a, b) {
                        a[Y](Ho, b)
                    },
                    aR: function (a, b) {
                        a.muted = 0 != b;
                        a.volume = 0 != b ? Tf : Xf;
                        var c = a[jc][Ra][Rm + a.id];
                        if (c != k && 9 > F.$) try {
                            c.SetMute(0 != ea(b))
                        } catch (d) {
                            v[fc](function () {
                                P.aR(a, b)
                            }, 100)
                        }
                    },
                    aQ: function (a, b) {
                        a[Y](Qn, b);
                        ta(a, 0 != b);
                        var c = a[jc][Ra][Rm + a.id];
                        if (c != k && 9 > F.$) try {
                            c.uc(0 != ea(b))
                        } catch (d) {
                            v[fc](function () {
                                P.aQ(a, b)
                            }, 100)
                        }
                    },
                    j: function (a, b) {
                        wa(a[H], b)
                    },
                    r: Yj,
                    cY: Yj,
                    aG: function (a, b) {
                        a[Y](Fp, b);
                        a[Y](rj, b)
                    },
                    dB: function (a,
                        b) {
                        a[Y](Zo, b)
                    },
                    g: function (a, b) {
                        Jb(a) != k ? ud(a) : a[H].backgroundColor = eb(b)
                    },
                    n: Zg,
                    m: Zg,
                    l: Zg,
                    h: function (a, b) {
                        var c = Dk(b);
                        c != k && (c = Pc(c), W(a, $l, c))
                    },
                    cZ: function (a, b) {
                        if (Jb(a) != k) ud(a);
                        else if ((3.6 > F.Xa || 9 > F.$) && (a[H].backgroundRepeat == k || a[H].backgroundRepeat == Z || a[H].backgroundRepeat == mo)) {
                            var c = En + a.id,
                                d = w[Vb](c);
                            d != k ? d.src = b : (d = w[Sc](Dn), d.src = b, d.id = c, wa(d[H], pj), pa(d[H], Zf), ua(d[H], Zf), d[H].top = cf, Ba(d[H], cf), Fa(d[H], Fe), a[Fb](d));
                            V(d, Rh, d.src);
                            9 > F.$ && b.substr(b[X] - 4)[Fc]() == af && (d.src = Pc(Ge), c = wf(b)[uc](/\%/gi,
                                Md), V(d, Sh, ca.pb + We + c + Rd), V(d, Qh, ca.pb + $e), se(d));
                            Lc(a)
                        } else oa(a[H], Rp + wf(b) + Rd)
                    },
                    q: function (a, b) {
                        a[H].backgroundSize = b;
                        a[H][ca.wa + vl] = b;
                        a[H].MozBackgroundSize = b
                    },
                    o: function (a, b) {
                        a[H].backgroundOrigin = b;
                        a[H][ca.wa + ul] = b;
                        a[H].MozBackgroundOrigin = b
                    },
                    p: function (a, b) {
                        if (Jb(a) != k) ud(a);
                        else {
                            if (b != k && b != mo) {
                                var c = w[Vb](En + a.id);
                                c != k && (oa(a[H], Rp + wf(n(c, Rh)) + Rd), c[dc][Cc](c))
                            }
                            a[H].backgroundRepeat = b
                        }
                    },
                    x: function (a, b) {
                        a[H].overflow = b
                    },
                    aT: function (a, b) {
                        a[H].paddingLeft = K(b);
                        Nb(a)
                    },
                    aU: function (a, b) {
                        a[H].paddingRight =
                            K(b);
                        Nb(a)
                    },
                    aV: function (a, b) {
                        a[H].paddingTop = K(b);
                        Nb(a)
                    },
                    aS: function (a, b) {
                        a[H].paddingBottom = K(b);
                        Nb(a)
                    },
                    S: re,
                    T: re,
                    R: re,
                    Q: re,
                    gg: re,
                    bB: uf,
                    bC: uf,
                    bA: uf,
                    aZ: uf,
                    bL: function (a) {
                        xd(a);
                        F.Wa != k && a[H][Ue] == Z && (a[H][Ue] = no)
                    },
                    bG: xd,
                    bH: xd,
                    bI: xd,
                    bJ: xd,
                    bK: xd,
                    BDbL: yd,
                    BDbG: yd,
                    BDbH: yd,
                    BDbI: yd,
                    BDbJ: yd,
                    BDbK: yd,
                    Z: function (a, b) {
                        a[H].wordWrap = b
                    },
                    yy: function (a, b) {
                        a[H].whiteSpace = b
                    },
                    y: function (a, b) {
                        a[H].whiteSpaceCollapsing = b
                    },
                    z: function (a, b) {
                        Fa(a[H], b);
                        a[dc][vc] == Kh && Fa(a[dc][H], b)
                    },
                    aA: function (a, b) {
                        var c = ia(a, b.a);
                        ke && (Qc(a, {
                            Ta: 1,
                            ka: zp
                        }, c), a[H][Te] = Xo);
                        Za(dm, a, c, h)
                    },
                    aD: function (a, b) {
                        Za(Zn, a, ia(a, b.a), p)
                    },
                    aC: function (a, b) {
                        Za(Yn, a, ia(a, b.a), p)
                    },
                    aE: function (a, b) {
                        var c = ia(a, b.a);
                        ke && (Za(Hp, a, c, h), a[H][Te] = Xo);
                        Za($n, a, c, h)
                    },
                    aB: function (a, b) {
                        var c = ia(a, b.a);
                        if (ke) {
                            var d = h;
                            if (F.Na != k)
                                for (var e = b.a, f = 0; f < e[X]; f++)
                                    if (5 == e[f].p && e[f].k == h) {
                                        d = p;
                                        break
                                    } d == h && Za(Jp, a, c, h);
                            a[H][Te] = Xo
                        }
                        Za(Wn, a, c, h)
                    },
                    bN: function (a, b) {
                        wk(a, b)
                    },
                    cW: function (a, b) {
                        var c = ia(a, b.a);
                        9 > F.$ ? c() : Rj(a, c, Tm)
                    },
                    cX: function (a, b) {
                        9 > F.$ || Rj(a, ia(a, b.a), Xm)
                    },
                    cG: function (a,
                        b) {
                        Qc(a, {
                            Ta: 1,
                            direction: Yo,
                            ib: 30,
                            ka: vp
                        }, ia(a, b.a))
                    },
                    cH: function (a, b) {
                        Qc(a, {
                            Ta: 1,
                            direction: On,
                            ib: 30,
                            ka: vp
                        }, ia(a, b.a))
                    },
                    cI: function (a, b) {
                        Qc(a, {
                            Ta: 1,
                            direction: Pp,
                            ib: 30,
                            ka: vp
                        }, ia(a, b.a))
                    },
                    cJ: function (a, b) {
                        Qc(a, {
                            Ta: 1,
                            direction: Km,
                            ib: 30,
                            ka: vp
                        }, ia(a, b.a))
                    },
                    cK: nc,
                    cF: nc,
                    aM: function (a, b) {
                        Za(Zn, a, Vg(a, b), p);
                        Za(Yn, a, sf(a, b), p)
                    },
                    aN: function (a, b) {
                        ke && (Za(Jp, a, Vg(a, b), p), Za(Ip, a, sf(a, b), p), Za(Hp, a, sf(a, b), p), a[H][Te] = Xo);
                        Za(Wn, a, Vg(a, b), p);
                        Za($n, a, sf(a, b), p)
                    },
                    V: Wg,
                    U: Wg,
                    W: Wg,
                    w: function (a, b) {
                        var c = w[Vb](En + a.id),
                            c = c != k ? c.cloneNode(h) : k;
                        za(a, b);
                        for (var d = a[hb](bp), e = 0; e < d[X]; e++) {
                            var f = d[e];
                            if (f.src == k || f.src == Z)(v.execScript || function (a) {
                                v.eval.call(v, a)
                            })(f.text || f.textContent)
                        }
                        c != k && a[Fb](c)
                    },
                    bT: function (a, b) {
                        for (var c = 0; c < b[X]; c++) uk(b[c].B, ia(a, b[c].a), b[c].cL)
                    },
                    cV: function (a, b) {
                        P.bT(a, b)
                    },
                    dX: function (a, b) {
                        a[H][Cn] = b;
                        b == Go && (F.Xa != k ? a[H][Cn] = Je : 10 > F.Zb && (a[H][Cn] = Re), a[H][Le] = jo)
                    },
                    aF: function (a, b) {
                        a[H].cssText += Uc + b
                    },
                    dY: function (a, b) {
                        if (!(a.tagName[Fc]() != An && n(a, Mi) != k))
                            for (var c = 0; c < b[X]; c++) {
                                var d =
                                    b[c][0],
                                    e = Z;
                                1 < b[c][X] && (e = b[c][1]);
                                try {
                                    a[Y](d, e)
                                } catch (f) {}
                            }
                    },
                    k: lq(),
                    dW: nc,
                    bF: function (a, b) {
                        var c = a,
                            d = a[dc];
                        d != k && d[vc] == Kh && (c = d);
                        var d = ka(b),
                            e = c[dc];
                        d == k || (d == c || d == a || d == e) || (e[Cc](c), d[Fb](c))
                    },
                    ti: function (a, b) {
                        b == k ? a[Eb](yp) : a[Y](yp, b)
                    },
                    cN: function (a, b) {
                        Jb(a) != k && (b = no, db(a));
                        a[H].pointerEvents = b;
                        a[H][Io] = b;
                        if (11 > F.$) {
                            var c = function (b) {
                                b = b ? b : v[Qb];
                                if (a[H][Io] == no) {
                                    var c = a[H][lb];
                                    qa(a[H], no);
                                    var f = w.elementFromPoint(b[Rb], b[Sb]);
                                    qa(a[H], c ? c : Z);
                                    w.createEvent ? (b[gb](), c = w.createEvent(zi), c.initMouseEvent(b[La],
                                        b.bubbles, b.cancelable, b.view, b.detail, b.screenX, b.screenY, b[Rb], b[Sb], b[Ub], b.altKey, b.shiftKey, b.metaKey, b[wb], k), f.dispatchEvent(c)) : (c = w.createEventObject(), c.clientX = b[Rb], c.clientY = b[Sb], f.fireEvent(so + b[La], c), event.cancelBubble = h)
                                }
                            };
                            Ya(yi, c, a, h);
                            Ya($n, c, a, h);
                            Ya(Wn, c, a, h);
                            Ya(dm, c, a, h)
                        }
                    }
                },
                Of = {},
                Kj = function b(c) {
                    var d = this;
                    d.copy = function () {
                        var c = new b;
                        c.ba = d.ba[tb](0);
                        c.Ea = Oa(d.Ea);
                        c.Fa = Oa(d.Fa);
                        return c
                    };
                    d.vb = function () {
                        for (var c = new b, f = 0; f < d.ba[X]; f++) c.ba[z](Qg(d.ba[f]));
                        c.Ea = Oa(d.Ea);
                        c.Fa =
                            Oa(d.Fa);
                        return c
                    };
                    d.ic = function (b) {
                        var c = b[ic];
                        if (!c || 0 == c[X]) return [];
                        var d = [],
                            j;
                        a: {
                            if ((j = b[ic]) && 1 == j[X])
                                if (j = j[0], pf(sa(j, 0), sa(j, 6)) == h) {
                                    j = h;
                                    break a
                                } j = p
                        }
                        if (j == h) j = c[0], b = sa(j, 0), d[z](Kb(b, b, b));
                        else
                            for (var m = c[X], l = 0; l < m - (b[Qa] == h ? 1 : 0); l++) j = c[l], 0 == l && d[z](Kb(sa(j, 0), sa(j, 2), Pj(b))), l + 1 == m && b[Qa] == p ? d[z](Kb(sa(j, 6), Oj(b, l), sa(j, 4))) : d[z](Kb(sa(j, 6), sa(c[l + 1], 2), sa(j, 4)));
                        return d
                    };
                    d.Nb = function (b) {
                        for (var c = d.ba[tb](0), g = -1, j = -1, m = 0, l = 0, n = 0; n < c[X]; n++) {
                            var t = c[n];
                            if (t.nb == h) m++;
                            else {
                                if (0 < m) {
                                    if (-1 !=
                                        j) {
                                        if (j = Nj(c[j], t, m), t = c, m = n - m - 1, !(m >= t[X]))
                                            for (var u = 0; u < j[X]; u++) t[m + u] = j[u]
                                    } else l = m;
                                    m = 0
                                } - 1 == g && (g = n);
                                j = n
                            }
                        }
                        if (0 < l + m && 1 < c[X] && -1 != g && -1 != j)
                            if (g = c[g], t = c[j], b[Qa] == h) {
                                j = Nj(t, g, l + m);
                                for (n = 0; n < j[X]; n++) c[(d.ba[X] - m - 1 + n) % d.ba[X]] = j[n]
                            } else {
                                for (n = 0; n < l; n++) c[n] = Kb(g.aa, g.aa, g.aa);
                                for (n = 0; n < m; n++) c[d.ba[X] - m + n] = Kb(t.aa, t.aa, t.aa)
                            } l = {
                            closed: b[Qa]
                        };
                        g = [];
                        if (1 == c[X]) t = c[0], m = Rg(t.aa, t.aa, t.aa, t.aa), g[z](m);
                        else if (1 < c[X]) {
                            for (n = 1; n < c[X]; n++) m = c[n - 1], t = c[n], m = Rg(m.aa, m.ha, t.la, t.aa), g[z](m);
                            b[Qa] == h && (m = c[c[X] -
                                1], t = c[0], m = Rg(m.aa, m.ha, t.la, t.aa), g[z](m))
                        }
                        l.path = g;
                        return l
                    };
                    d.bounds = function () {
                        if (0 == d.ba[X]) return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        for (var b = ma[jb], c = -ma[jb], g = ma[jb], j = -ma[jb], m = 0; m < d.ba[X]; m++) {
                            var l = d.ba[m].aa;
                            l.x < b && (b = l.x);
                            l.x > c && (c = l.x);
                            l.y < g && (g = l.y);
                            l.y > j && (j = l.y)
                        }
                        return {
                            x: b,
                            y: g,
                            width: c - b,
                            height: j - g
                        }
                    };
                    d.zb = function (b) {
                        for (var c = 0; c < d.ba[X]; c++) {
                            var g = d.ba[c];
                            g.aa.x += b.x;
                            g.aa.y += b.y;
                            g.ha.x += b.x;
                            g.ha.y += b.y;
                            g.la.x += b.x;
                            g.la.y += b.y
                        }
                        d.Ea.x += b.x;
                        d.Ea.y += b.y
                    };
                    d.$b = function (b) {
                        for (var c = 0; c < d.ba[X]; c++) {
                            var g =
                                d.ba[c];
                            g.aa.x *= b.x;
                            g.aa.y *= b.y;
                            g.ha.x *= b.x;
                            g.ha.y *= b.y;
                            g.la.x *= b.x;
                            g.la.y *= b.y
                        }
                        d.Fa.x *= b.x;
                        d.Fa.y *= b.y
                    };
                    d.jc = function (b) {
                        for (var c = 0, g = 0; g < d.ba[X]; g++)
                            for (var j = 0; j < b.ba[X]; j++)
                                if (pf(d.ba[g].aa, b.ba[j].aa) == h) {
                                    c += 1;
                                    break
                                } return c
                    };
                    d.reverse = function () {
                        for (var b = [], c = d.ba[X] - 1; 0 <= c; c--) {
                            var g = d.ba[c];
                            b[z](Kb(g.aa, g.la, g.ha))
                        }
                        d.ba = b
                    };
                    d.rc = function (b) {
                        var c = d.ba[tb](0);
                        b -= c[X] * r[Ec](b / c[X]);
                        c[z].apply(c, c[bb](0, b));
                        d.ba = c
                    };
                    d.cc = function () {
                        for (var b = [d], c = 1; c < d.ba[X]; c++) {
                            var g = d.copy();
                            g.rc(c);
                            b[z](g)
                        }
                        return b
                    };
                    d.ba = c != k ? d.ic(c) : [];
                    d.Ea = E(0, 0);
                    d.Fa = E(1, 1)
                };
            P.dC = function (b) {
                var c = Jb(b),
                    d = n(b, jm),
                    e = n(b, tm, 0),
                    f = Z,
                    g = d[ic],
                    d = d[Qa];
                if (g && 0 < g[X]) {
                    for (var j = sa(g[0], 0), f = f + (xi + j.x[hc](2) + $ + j.y[hc](2)), j = 0; j < g[X]; j++) {
                        var m = g[j],
                            l = sa(m, 0),
                            q = sa(m, 2),
                            t = sa(m, 4),
                            m = sa(m, 6),
                            u = 0.5 > pb(l, q),
                            s = 0.5 > pb(m, t);
                        u == h && s == h ? f += Yc + m.x[hc](2) + $ + m.y[hc](2) : (u == h && (q = l), s == h && (t = m), f += Xc + q.x[hc](2) + $ + q.y[hc](2) + ee + t.x[hc](2) + $ + t.y[hc](2) + ee + m.x[hc](2) + $ + m.y[hc](2))
                    }
                    d == h && (f += Zc)
                }
                c[Y](im, f);
                0 == e && db(b);
                fa == h && Ic(b)
            };
            P.dD = db;
            P.dE = db;
            P.dF =
                db;
            P.dG = db;
            P.dH = db;
            P.dM = db;
            P.dN = db;
            P.dI = db;
            P.dJ = db;
            P.dK = db;
            P.dL = db;
            P.dO = ud;
            P.dP = ud;
            P.dV = nc;
            var B = v.Matter,
                Ea = [],
                Ib = 0,
                td = [Vi, Yk, Ym];
            B && !B.Common.sin && (B.Common.sin = function (b) {
                    return da(r.sin(b)[hc](8))
                }, B.Common.cos = function (b) {
                    return da(r.cos(b)[hc](8))
                }, B.Common.sqrt = function (b) {
                    return da(r[Ua](b)[hc](8))
                }, B.Common.abs = function (b) {
                    return da(r.abs(b)[hc](8))
                }, B.Common.atan2 = function (b, c) {
                    return da(r[Db](b, c)[hc](8))
                }, B.Common.acos = function (b) {
                    return da(r.acos(b)[hc](8))
                }, B.Sleeping._motionWakeThreshold =
                0.2, B.Sleeping._motionSleepThreshold = 0.1);
            P.bM = mc;
            P.bU = ff;
            P.bV = ff;
            P.cT = ff;
            P.bW = ff;
            P.dZ = nc;
            ca.API = {
                kSceneTransitionInstant: Lf,
                kSceneTransitionCrossfade: 2,
                kSceneTransitionSwap: 3,
                kSceneTransitionPushLeftToRight: 4,
                kSceneTransitionPushRightToLeft: 5,
                kSceneTransitionPushBottomToTop: 6,
                kSceneTransitionPushTopToBottom: 7,
                kPhysicsBodyTypeDead: 0,
                kPhysicsBodyTypeStatic: 1,
                kPhysicsBodyTypeDynamic: 2,
                kHypeGesturePhaseStart: hp,
                kHypeGesturePhaseMove: ao,
                kHypeGesturePhaseEnd: Sm,
                kHypeGesturePhaseCancel: am,
                documentName: function () {
                    return R
                },
                documentId: function () {
                    return J
                },
                sceneNames: ph,
                customData: {},
                currentSceneName: function () {
                    return Va[qb].n
                },
                currentSceneId: function () {
                    return va().id
                },
                layoutsForSceneNamed: function (b) {
                    b = b != k ? Ia(ph(), b) : qb;
                    return oh(Va[b])
                },
                currentLayoutName: function () {
                    return A[U].n
                },
                showLayoutNamed: function (b) {
                    b = Ik(b, Va[qb]); - 1 != b && (Id = h, Pf(b, Lf, 0))
                },
                showSceneNamed: function (b, c, d) {
                    b = Ia(ph(), b);
                    vd(b, c, d)
                },
                showNextScene: function (b, c) {
                    vd(qb + 1, b, c)
                },
                showPreviousScene: function (b, c) {
                    vd(qb - 1, b, c)
                },
                playTimelineNamed: mk,
                startTimelineNamed: mk,
                goToTimeInTimelineNamed: function (b, c) {
                    var d = qc(c);
                    Xb(b, d, p, p)
                },
                pauseTimelineNamed: function (b) {
                    b = qc(b);
                    Mb(b, k)
                },
                continueTimelineNamed: function (b, c, d) {
                    b = qc(b);
                    c == ba && (c = 0);
                    wd(b, 1 == c ? h : p, h, d)
                },
                getElementById: function (b) {
                    var c = uh[b];
                    c == k && (c = b);
                    return w[Vb](c)
                },
                setElementProperty: function (b, c, d, e, f) {
                    var g = {
                            easein: im,
                            easeout: Nm,
                            easeinout: Hl,
                            linear: Yk
                        },
                        j = ok[c];
                    if (j != k && (j.HYP_x != h && (d = bh(d)), nk(b, c) != d)) {
                        c = j.HYP_r;
                        var m = M[b.id],
                            j = Z + m + c,
                            l = [il, iq, $l];
                        0 < e && -1 == Ia(l, c) ? (b = k, f != k && (typeof f === gn ? (b = th(), Ad[b] =
                            f) : b = g[f]), b == k && (b = Hl), f = [], fb(f, c, 0, e, b, m, 1, d, h), d = {
                            i: j,
                            n: j,
                            f: 30,
                            d: e,
                            a: f,
                            b: []
                        }, A[U].T[j] = d, we(j, f, d), Lb(j, k, p)) : (rb[m] != ba && (rb[m][c] = j, c == $l && (rb[m].h = j)), e = la(j), e != k && Dd(e), W(b, c, d))
                    }
                },
                getElementProperty: nk,
                functions: function () {
                    return tj
                },
                resourcesFolderURL: function () {
                    return je
                },
                relayoutIfNecessary: rc,
                kDirectionForward: 0,
                kDirectionReverse: 1,
                currentTimeInTimelineNamed: function (b) {
                    b = qc(b);
                    return Nc(b, h)
                },
                durationForTimelineNamed: function (b) {
                    var c = qc(b);
                    b = 0;
                    c = la(c);
                    c != k && (b = Ca(c));
                    return b
                },
                currentDirectionForTimelineNamed: function (b) {
                    b =
                        qc(b);
                    b = la(b);
                    var c = 0;
                    b != k && (c = b.da ? 1 : 0);
                    return c
                },
                isPlayingTimelineNamed: function (b) {
                    var c = qc(b);
                    b = p;
                    c = la(c);
                    c != k && (b = c.fa);
                    return b
                },
                triggerCustomBehaviorNamed: Uj,
                getSymbolInstanceById: function (b) {
                    if (b != k) return pc[M[b]]
                },
                getSymbolInstancesByName: tk
            }
        };
        v.HYPE == k && (v.HYPE = v.HYPE_740F, v.HYPE.documents = {});
        var R = [];
        v.HYPE_dtl_740F != k && (R = v.HYPE_dtl_740F[tb](0));
        v.HYPE_dtl_740F = [];
        for (var J = 0; J < R[X]; J++) R[J]()
    })();
})();