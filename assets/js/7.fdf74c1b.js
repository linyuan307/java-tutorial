(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{496:function(t,e,s){"use strict";s.r(e);var a=s(30),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javaweb-之-filter-和-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javaweb-之-filter-和-listener"}},[t._v("#")]),t._v(" JavaWeb 之 Filter 和 Listener")]),t._v(" "),s("p",[t._v("引入了 Servlet 规范后，你不需要关心 Socket 网络通信、不需要关心 HTTP 协议，也不需要关心你的业务类是如何被实例化和调用的，因为这些都被 Servlet 规范标准化了，你只要关心怎么实现的你的业务逻辑。这对于程序员来说是件好事，但也有不方便的一面。所谓规范就是说大家都要遵守，就会千篇一律，但是如果这个规范不能满足你的业务的个性化需求，就有问题了，因此设计一个规范或者一个中间件，要充分考虑到可扩展性。Servlet 规范提供了两种扩展机制："),s("strong",[t._v("Filter")]),t._v("和"),s("strong",[t._v("Listener")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" Filter")]),t._v(" "),s("p",[s("strong",[t._v("Filter 是过滤器，这个接口允许你对请求和响应做一些统一的定制化处理")]),t._v("。")]),t._v(" "),s("p",[t._v("Filter 提供了过滤链（Filter Chain）的概念，一个过滤链包括多个 Filter。客户端请求 request 在抵达 Servlet 之前会经过过滤链的所有 Filter，服务器响应 response 从 Servlet 抵达客户端浏览器之前也会经过过滤链的所有 FIlter。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/1559054413341.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"过滤器方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤器方法"}},[t._v("#")]),t._v(" 过滤器方法")]),t._v(" "),s("p",[t._v("Filter 接口有三个方法：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("init")]),t._v("：初始化 "),s("code",[t._v("Filter")])]),t._v(" "),s("li",[s("code",[t._v("destroy")]),t._v("：销毁 "),s("code",[t._v("Filter")])]),t._v(" "),s("li",[s("code",[t._v("doFilter")]),t._v("：将请求传给下个 "),s("code",[t._v("Filter")]),t._v(" 或 "),s("code",[t._v("Servlet")])])]),t._v(" "),s("p",[s("code",[t._v("init")]),t._v(" 和 "),s("code",[t._v("destroy")]),t._v(" 方法只会被调用一次；"),s("code",[t._v("doFilter")]),t._v(" 每次有客户端请求都会被调用一次。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * web 程序启动时调用此方法, 用于初始化该 Filter\n\t * @param config\n\t *            可以从该参数中获取初始化参数以及ServletContext信息等\n\t * @throws ServletException\n\t */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterConfig")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * 客户请求服务器时会经过\n\t *\n\t * @param request\n\t *            客户请求\n\t * @param response\n\t *            服务器响应\n\t * @param chain\n\t *            过滤链, 通过 chain.doFilter(request, response) 将请求传给下个 Filter 或\n\t *            Servlet\n\t * @throws ServletException\n\t * @throws IOException\n\t */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")]),t._v(" chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * web 程序关闭时调用此方法, 用于销毁一些资源\n\t */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"过滤器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤器配置"}},[t._v("#")]),t._v(" 过滤器配置")]),t._v(" "),s("p",[s("code",[t._v("Filter")]),t._v(" 需要配置在 "),s("code",[t._v("web.xml")]),t._v(" 中才能生效。一个 "),s("code",[t._v("Filter")]),t._v(" 需要配置 "),s("code",[t._v("<filter>")]),t._v(" 与 "),s("code",[t._v("<filter-mapping>")]),t._v(" 标签。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<filter>")]),t._v(" 配置 Filter 名称，实现类以及初始化参数。")]),t._v(" "),s("li",[s("code",[t._v("<filter-mapping>")]),t._v(" 配置什么规则下使用该 Filter。")]),t._v(" "),s("li",[s("code",[t._v("<filter>")]),t._v(" 的 filterName 与 "),s("code",[t._v("<filter-mapping>")]),t._v(" 的 filterName 必须匹配。")]),t._v(" "),s("li",[s("code",[t._v("<url-pattern>")]),t._v(" 配置 URL 的规则，可以配置多个，可以使用通配符（"),s("code",[t._v("*")]),t._v("）。")]),t._v(" "),s("li",[s("code",[t._v("<dispatcher>")]),t._v(" 配置到达 Servlet 的方式，有 4 种取值：REQUEST、FORWARD、INCLUDE、ERROR。可以同时配置多个 "),s("code",[t._v("<dispatcher>")]),t._v("。如果没有配置任何 "),s("code",[t._v("<dispatcher>")]),t._v("，默认为 REQUEST。\n"),s("ul",[s("li",[t._v("REQUEST - 表示仅当直接请求 Servlet 时才生效。")]),t._v(" "),s("li",[t._v("FORWARD - 表示仅当某 Servlet 通过 FORWARD 到该 Servlet 时才生效。")]),t._v(" "),s("li",[t._v("INCLUDE - JSP 中可以通过 "),s("code",[t._v("<jsp:include>")]),t._v(" 请求某 Servlet。仅在这种情况表有效。")]),t._v(" "),s("li",[t._v("ERROR - JSP 中可以通过 "),s("code",[t._v('<%@ page errorPage="error.jsp" %>')]),t._v(" 指定错误处理页面。仅在这种情况表有效。")])])])]),t._v(" "),s("h2",{attrs:{id:"listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[t._v("#")]),t._v(" Listener")]),t._v(" "),s("p",[t._v("监听器（"),s("code",[t._v("Listener")]),t._v("）用于监听 web 应用程序中的"),s("code",[t._v("ServletContext")]),t._v(", "),s("code",[t._v("HttpSession")]),t._v("和 "),s("code",[t._v("ServletRequest")]),t._v("等域对象的创建与销毁事件，以及监听这些域对象中的属性发生修改的事件。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("Listener")]),t._v(" 不需要关注该类事件时怎样触发或者怎么调用相应的 "),s("code",[t._v("Listener")]),t._v("，只要记住该类事件触发时一定会调用相应的 "),s("code",[t._v("Listener")]),t._v("，遵循 Servlet 规范的服务器会自动完成相应工作。")]),t._v(" "),s("h3",{attrs:{id:"监听器的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听器的分类"}},[t._v("#")]),t._v(" 监听器的分类")]),t._v(" "),s("p",[t._v("在 Servlet 规范中定义了多种类型的监听器，它们用于监听的事件源分别为"),s("code",[t._v("ServletContext")]),t._v("，"),s("code",[t._v("HttpSession")]),t._v("和"),s("code",[t._v("ServletRequest")]),t._v("这三个域对象\nServlet 规范针对这三个对象上的操作，又把多种类型的监听器划分为三种类型：")]),t._v(" "),s("ol",[s("li",[t._v("监听域对象自身的创建和销毁的事件监听器。")]),t._v(" "),s("li",[t._v("监听域对象中的属性的增加和删除的事件监听器。")]),t._v(" "),s("li",[t._v("监听绑定到 HttpSession 域中的某个对象的状态的事件监听器。")])]),t._v(" "),s("h3",{attrs:{id:"监听对象的创建和销毁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听对象的创建和销毁"}},[t._v("#")]),t._v(" 监听对象的创建和销毁")]),t._v(" "),s("h4",{attrs:{id:"httpsessionlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpsessionlistener"}},[t._v("#")]),t._v(" HttpSessionListener")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("HttpSessionListener")]),t._v(" 接口用于监听 "),s("code",[t._v("HttpSession")]),t._v(" 对象的创建和销毁。")])]),t._v(" "),s("ul",[s("li",[t._v("创建一个 "),s("code",[t._v("Session")]),t._v(" 时，激发 "),s("code",[t._v("sessionCreated (HttpSessionEvent se)")]),t._v(" 方法")]),t._v(" "),s("li",[t._v("销毁一个 "),s("code",[t._v("Session")]),t._v(" 时，激发 "),s("code",[t._v("sessionDestroyed (HttpSessionEvent se)")]),t._v(" 方法。")])]),t._v(" "),s("h4",{attrs:{id:"servletcontextlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servletcontextlistener"}},[t._v("#")]),t._v(" ServletContextListener")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("ServletContextListener")]),t._v(" 接口用于监听 "),s("code",[t._v("ServletContext")]),t._v(" 对象的创建和销毁事件。")])]),t._v(" "),s("p",[t._v("实现了 "),s("code",[t._v("ServletContextListener")]),t._v(" 接口的类都可以对 "),s("code",[t._v("ServletContext")]),t._v(" 对象的创建和销毁进行监听。")]),t._v(" "),s("ul",[s("li",[t._v("当 "),s("code",[t._v("ServletContext")]),t._v(" 对象被创建时，激发 "),s("code",[t._v("contextInitialized (ServletContextEvent sce)")]),t._v(" 方法。")]),t._v(" "),s("li",[t._v("当 "),s("code",[t._v("ServletContext")]),t._v(" 对象被销毁时，激发 "),s("code",[t._v("contextDestroyed(ServletContextEvent sce)")]),t._v(" 方法。")])]),t._v(" "),s("p",[s("code",[t._v("ServletContext")]),t._v(" 域对象创建和销毁时机：")]),t._v(" "),s("ul",[s("li",[t._v("创建：服务器启动针对每一个 Web 应用创建 "),s("code",[t._v("ServletContext")])]),t._v(" "),s("li",[t._v("销毁：服务器关闭前先关闭代表每一个 web 应用的 "),s("code",[t._v("ServletContext")])])]),t._v(" "),s("h4",{attrs:{id:"servletrequestlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servletrequestlistener"}},[t._v("#")]),t._v(" ServletRequestListener")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("ServletRequestListener")]),t._v(" 接口用于监听 "),s("code",[t._v("ServletRequest")]),t._v(" 对象的创建和销毁。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Request")]),t._v(" 对象被创建时，监听器的 "),s("code",[t._v("requestInitialized(ServletRequestEvent sre)")]),t._v(" 方法将会被调用")]),t._v(" "),s("li",[s("code",[t._v("Request")]),t._v(" 对象被销毁时，监听器的 "),s("code",[t._v("requestDestroyed(ServletRequestEvent sre)")]),t._v(" 方法将会被调用")])]),t._v(" "),s("p",[s("code",[t._v("ServletRequest")]),t._v(" 域对象创建和销毁时机：")]),t._v(" "),s("ul",[s("li",[t._v("创建：用户每一次访问都会创建 request 对象")]),t._v(" "),s("li",[t._v("销毁：当前访问结束，request 对象就会销毁")])]),t._v(" "),s("h3",{attrs:{id:"监听对象的属性变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听对象的属性变化"}},[t._v("#")]),t._v(" 监听对象的属性变化")]),t._v(" "),s("p",[t._v("域对象中属性的变更的事件监听器就是用来监听 "),s("code",[t._v("ServletContext")]),t._v("、"),s("code",[t._v("HttpSession")]),t._v("、"),s("code",[t._v("HttpServletRequest")]),t._v(" 这三个对象中的属性变更信息事件的监听器。\n这三个监听器接口分别是 "),s("code",[t._v("ServletContextAttributeListener")]),t._v("、"),s("code",[t._v("HttpSessionAttributeListener")]),t._v(" "),s("code",[t._v("和 ServletRequestAttributeListener")]),t._v("，这三个接口中都定义了三个方法来处理被监听对象中的属性的增加，删除和替换的事件，同一个事件在这三个接口中对应的方法名称完全相同，只是接受的参数类型不同。")]),t._v(" "),s("h4",{attrs:{id:"attributeadded-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributeadded-方法"}},[t._v("#")]),t._v(" attributeAdded 方法")]),t._v(" "),s("p",[t._v("当向被监听对象中增加一个属性时，web 容器就调用事件监听器的 "),s("code",[t._v("attributeAdded")]),t._v(" 方法进行响应，这个方法接收一个事件类型的参数，监听器可以通过这个参数来获得正在增加属性的域对象和被保存到域中的属性对象\n各个域属性监听器中的完整语法定义为：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeAdded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContextAttributeEvent")]),t._v(" scae"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeReplaced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSessionBindingEvent")]),t._v(" hsbe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeRmoved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequestAttributeEvent")]),t._v(" srae"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"attributeremoved-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributeremoved-方法"}},[t._v("#")]),t._v(" attributeRemoved 方法")]),t._v(" "),s("p",[t._v("当删除被监听对象中的一个属性时，web 容器调用事件监听器的 "),s("code",[t._v("attributeRemoved")]),t._v(" 方法进行响应\n各个域属性监听器中的完整语法定义为：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeRemoved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContextAttributeEvent")]),t._v(" scae"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeRemoved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSessionBindingEvent")]),t._v(" hsbe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeRemoved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequestAttributeEvent")]),t._v(" srae"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"attributereplaced-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributereplaced-方法"}},[t._v("#")]),t._v(" attributeReplaced 方法")]),t._v(" "),s("p",[t._v("当监听器的域对象中的某个属性被替换时，web 容器调用事件监听器的 "),s("code",[t._v("attributeReplaced")]),t._v(" 方法进行响应\n各个域属性监听器中的完整语法定义为：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeReplaced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContextAttributeEvent")]),t._v(" scae"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeReplaced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSessionBindingEvent")]),t._v(" hsbe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeReplaced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequestAttributeEvent")]),t._v(" srae"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"监听-session-内的对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听-session-内的对象"}},[t._v("#")]),t._v(" 监听 Session 内的对象")]),t._v(" "),s("p",[t._v("保存在 Session 域中的对象可以有多种状态：")]),t._v(" "),s("ul",[s("li",[t._v("绑定（"),s("code",[t._v('session.setAttribute("bean",Object)')]),t._v("）到 "),s("code",[t._v("Session")]),t._v(" 中；")]),t._v(" "),s("li",[t._v("从 "),s("code",[t._v("Session")]),t._v(" 域中解除绑定（"),s("code",[t._v('session.removeAttribute("bean")')]),t._v("）；")]),t._v(" "),s("li",[t._v("随 "),s("code",[t._v("Session")]),t._v(" 对象持久化到一个存储设备中；")]),t._v(" "),s("li",[t._v("随 "),s("code",[t._v("Session")]),t._v(" 对象从一个存储设备中恢复。")])]),t._v(" "),s("p",[t._v("Servlet 规范中定义了两个特殊的监听器接口 "),s("code",[t._v("HttpSessionBindingListener")]),t._v(" 和"),s("code",[t._v("HttpSessionActivationListener")]),t._v(" 来帮助 JavaBean 对象了解自己在 Session 域中的这些状态。")]),t._v(" "),s("p",[t._v("实现这两个接口的类不需要 "),s("code",[t._v("web.xml")]),t._v(" 文件中进行注册。")]),t._v(" "),s("h4",{attrs:{id:"httpsessionbindinglistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpsessionbindinglistener"}},[t._v("#")]),t._v(" HttpSessionBindingListener")]),t._v(" "),s("p",[s("code",[t._v("HttpSessionBindingListener")]),t._v(" 接口的 JavaBean 对象可以感知自己被绑定或解绑定到 "),s("code",[t._v("Session")]),t._v(" 中的事件。")]),t._v(" "),s("ul",[s("li",[t._v("当对象被绑定到 "),s("code",[t._v("HttpSession")]),t._v(" 对象中时，web 服务器调用该对象的 "),s("code",[t._v("valueBound(HttpSessionBindingEvent event)")]),t._v(" 方法。")]),t._v(" "),s("li",[t._v("当对象从 "),s("code",[t._v("HttpSession")]),t._v(" 对象中解除绑定时，web 服务器调用该对象的 "),s("code",[t._v("valueUnbound(HttpSessionBindingEvent event)")]),t._v(" 方法。")])]),t._v(" "),s("h4",{attrs:{id:"httpsessionactivationlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpsessionactivationlistener"}},[t._v("#")]),t._v(" HttpSessionActivationListener")]),t._v(" "),s("p",[t._v("实现了 "),s("code",[t._v("HttpSessionActivationListener")]),t._v(" 接口的 JavaBean 对象可以感知自己被活化(反序列化)和钝化(序列化)的事件。")]),t._v(" "),s("ul",[s("li",[t._v("当绑定到 "),s("code",[t._v("HttpSession")]),t._v(" 对象中的 JavaBean 对象将要随 "),s("code",[t._v("HttpSession")]),t._v(" 对象被序列化之前，web 服务器调用该 JavaBean 对象的 "),s("code",[t._v("sessionWillPassivate(HttpSessionEvent event)")]),t._v(" 方法。这样 JavaBean 对象就可以知道自己将要和 "),s("code",[t._v("HttpSession")]),t._v(" 对象一起被序列化到硬盘中.")]),t._v(" "),s("li",[t._v("当绑定到 "),s("code",[t._v("HttpSession")]),t._v(" 对象中的 JavaBean 对象将要随 "),s("code",[t._v("HttpSession")]),t._v(" 对象被反序列化之后，web 服务器调用该 JavaBean 对象的 "),s("code",[t._v("sessionDidActive(HttpSessionEvent event)")]),t._v(" 方法。这样 JavaBean 对象就可以知道自己将要和 "),s("code",[t._v("HttpSession")]),t._v(" 对象一起被反序列化回到内存中")])]),t._v(" "),s("h2",{attrs:{id:"filter-和-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-和-listener"}},[t._v("#")]),t._v(" Filter 和 Listener")]),t._v(" "),s("p",[t._v("Filter 和 Listener 的本质区别：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Filter 是干预过程的")]),t._v("，它是过程的一部分，是基于过程行为的。")]),t._v(" "),s("li",[s("strong",[t._v("Listener 是基于状态的")]),t._v("，任何行为改变同一个状态，触发的事件是一致的。")])]),t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Filter")]),t._v(" 的示例源码："),s("a",{attrs:{href:"https://github.com/dunwu/javatech/tree/master/codes/javaee-tutorial/javaee-tutorial-filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("Listener")]),t._v(" 的示例源码："),s("a",{attrs:{href:"https://github.com/dunwu/javatech/tree/master/codes/javaee-tutorial/javaee-tutorial-listener",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/intro/100027701",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入拆解 Tomcat & Jetty"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/4189495/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Web 整合开发王者归来"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);