# Sublime Text 最佳插件列表

2014/07/25 · 工具与资源：

> 收集的Sublime Text最佳插件，很全。

## 最佳的Sublime Text 插件

朋友们你们好！我尝试着收集了最佳的ST插件，这些插件真的会改善你的工作流程。
我搜索了很多网站，下面是我的成果。

## WebInspector

在 JavaScript调试方面，这是一个令人惊讶的工具，Sublime上的完整的代码检查工具。

功能：
使用绝对路径储存在用户设置中的项目断点，控制台，分步和断点调试器，栈追踪。
这些都能够很棒的工作！而且Mozilla还提供了一个插件Fireplay让你连接到Firefox 开发工具和最简单的调试器JSHint.


## Emmet

编辑器中最流行的插件之一。
Emmet，前身Zen Coding也是web开发者提高生产力最有效的方法之一。
按下Tab键，Emmet就能把一个缩写展开成一个HTML和CSS代码块，我想提一下Hayaku-集合了方便的层叠样式表缩写。


Git

这个插件的实质，看一下它的名字就知道了–它提供了使用我们的最爱的编辑器直接和Git协同工作的机会。
使用这种方式与Git协同工作会节省您大量的时间。
首先：您不需要时常的在Sublime和终端间相互切换。
另外：它具有tag自动补全功能，写add就足够了，而不是git add -A。
最后：它具有快速提交功能(quick)，一个命令添加所有变化并全部提交。

如果你只是想利用Git来获取远程仓库的内容，我推荐使用Nettuts+ Fetch.
有个叫Glue的插件，会在界面下方显示一个小窗口，你可以在那里写Shell脚本。
这样一来，你的编辑器就不仅仅局限于使用Git了。

## GitGutter & Modific

这些插件可以高亮相对于上次提交有所变动的行，换句话说是实时的diff工具。

## BracketHighlighter

好极了！打开和折叠代码的某一部分就应该是这个样子的。

## EditorConfig

EditorConfig帮助开发者在不同的编辑器，IDE之间定义和维护统一的编程风格。
EditorConfig工程包含一个文件，定义了编程风格，文本编辑器插件集合，让编辑器可以读取该文件并依照它来定义风格。
例如.editorconfig文件：

```code
	; html-script: false ]# top-most EditorConfig file
	root = true

	# Unix-style newlines with a newline ending every file
	[*]
	end_of_line = lf
	insert_final_newline = true

	# 4 space indentation
	[*.py]
	indent_style = space
	indent_size = 4

	# Tab indentation (no size specified)
	[*.js]
	indent_style = tab

	# Indentation override for all JS under lib directory
	[lib/**.js]
	indent_style = space
	indent_size = 2

	# Matches the exact files either package.json or .travis.yml
	[{package.json,.travis.yml}]
	indent_style = space
	indent_size = 2

	; html-script: false ]# top-most EditorConfig file
	root = true
	 
	# Unix-style newlines with a newline ending every file
	[*]
	end_of_line = lf
	insert_final_newline = true
	 
	# 4 space indentation
	[*.py]
	indent_style = space
	indent_size = 4
	 
	# Tab indentation (no size specified)
	[*.js]
	indent_style = tab
	 
	# Indentation override for all JS under lib directory
	[lib/**.js]
	indent_style = space
	indent_size = 2
	 
	# Matches the exact files either package.json or .travis.yml
	[{package.json,.travis.yml}]
	indent_style = space
	indent_size = 2
``` 

## Sublimall

一个简洁的插件，可以让你在不同的Sublime Text 编辑器间同步所有的配置(设置，插件，打开的文件等). 
所有的一切都是免费的，你只需要创建一个账户即可,是BufferScroll的一个更简约的替代品。

译者注：现在暂时无法注册
> Max registration reach
I’m sorry about that, don’t forget that it’s a beta version of Sublimall.
Registrations will been soon re-opened!
Geoffrey.

## AllAutocomplete

传统的Sublime Text自动补全插件仅仅在当前文件下工作。
AllAutocomplete 可以搜索全部打开的标签页，这将极大的简化开发进程。

## CodeIntel，实现了一些IDE的功能并且为一些语言提供了“代码情报”：

JavaScript, Mason, XBL, XUL, RHTML, SCSS, Python,
HTML, Ruby, Python3, XML, Sass, XSLT, Django, 
HTML5, Perl, CSS, Twig, Less, Smarty, Node.js, 
Tcl, TemplateToolkit, PHP.

# SublimeREPL

REPL: read-execute-print-loop




