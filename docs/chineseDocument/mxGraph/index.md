---
outline: deep
---
## mxGraph 中文文档
### API 接口规范
---------
#### 概述

这个 JavaScript 库分为 8 个包。顶级 `mxClient` 类包括（或动态导入）其他所有内容。当前版本存储在 `mxClient.VERSION` 中。

编辑器包提供实现图编辑器所需的类。此包中的主类是 `mxEditor`。

视图和模型包实现由 mxGraph 表示的图形组件。它指的是一个 `mxGraphModel`，它包含 `mxCells`，并在 `mxGraphView` 中缓存单元格的状态。单元格是使用 `mxCellRenderer` 根据 `mxStylesheet` 中定义的外观绘制的。撤消历史记录在 `mxUndoManager` 中实现。要在图形上显示图标，可以使用 `mxCellOverlay`。验证规则使用 `mxMultiplicity` 定义。

处理程序、布局和形状包分别包含事件侦听器、布局算法和形状。图形事件侦听器包括用于橡皮筋选择的 `mxRubberband`、用于工具提示的 `mxTooltipHandler` 和用于基本单元格修改的 `mxGraphHandler`。`mxCompactTreeLayout` 实现了树布局算法，形状包提供了各种形状，这些形状是 mxShape 的子类。

`util` 包提供了实用程序类，包括用于复制粘贴的 `mxClipboard`、用于拖放的 `<mxDatatransfer>`、用于样式表键和值的 `mxConstant`、用于跨浏览器事件处理和通用函数的 `mxEvent` 和 `mxUtils`、用于国际化的 `mxResources` 和用于控制台输出的 `mxLog`。

io 包实现了一个通用的 `mxObjectCodec`，用于将 JavaScript 对象转换为 XML。主类是 `mxCodec` 。`mxCodecRegistry` 是自定义编解码器的全局注册表。

#### 事件
有三种不同类型的事件，即本机 DOM 事件、在 `mxEventSource` 中触发的 `mxEventObjects` 和在 `mxGraph` 中触发的 `mxMouseEvents`。

`mxEvent` 中提供了一些用于处理本机事件的帮助程序方法。它还负责解决 DOM 节点和 JavaScript 事件处理程序之间的循环，这可能会导致 IE6 中的内存泄漏。

`mxGraph` 中的大多数自定义事件都是使用 `mxEventSource` 实现的。它的侦听器是接受发送方和 `mxEventObject` 的函数。此外，`mxGraph` 类会触发特殊的 `mxMouseEvents`，这些事件使用鼠标侦听器进行处理，鼠标侦听器是提供鼠标按下、鼠标移动和鼠标向上方法的对象。

`mxEventSource` 中的事件使用 `mxEventSource.fireEvent` 触发。使用 `mxEventSource.addListener` 和 `mxEventSource.removeListener` 添加和删除侦听器。`mxGraph` 中的 `mxMouseEvents` 使用 `mxGraph.fireMouseEvent` 触发。侦听器分别使用 `mxGraph.addMouseListener` 和 `mxGraph.removeMouseListener` 进行添加和删除。

#### 键绑定
以下键绑定是为所有浏览器和平台上的客户端中的鼠标事件定义的：

- 按住 Control 键拖动：复制（克隆）所选单元格
- Shift-rightlick：显示上下文菜单
- Alt-Click：强制橡皮筋（又名选框）
- 控制选择：切换选择状态
- Shift-拖动：将偏移限制在一个方向上
- 移位控制拖动：平移（也称为 Shift-右拖动）

#### 配置
在加载客户端之前，可以定义以下全局变量，以分别指定其语言或基本路径。

- mxBasePath：指定 `mxClient.basePath` 中的路径。
- mxImageBasePath：指定 `mxClient.imageBasePath` 中的路径。
- mxLanguage：指定 `mxClient.language` 中资源的语言。
- mxDefaultLanguage：指定 `mxClient.defaultLanguage` 中的默认语言。
- mxLoadResources：指定是否应加载任何资源。默认值为 `true`。
- mxLoadStylesheets：指定是否应加载任何样式表。默认值为 `true`。

#### 保留字
mx 前缀用于 mxGraph 中的所有类和对象。mx 前缀可以看作是 mxGraph 中所有 JavaScript 代码的全局命名空间。不应在对象中使用以下字段名称。

- mxObjectId：如果对象与 `mxObjectIdentity` 一起使用
- as：如果对象是另一个对象的字段
- id：如果对象是编解码器中的 `idref`
- mxListenerList：与 `mxEvent` 一起使用时添加到 `DOM` 节点
- window._mxDynamicCode：暂时用于在 Safari 和 Chrome 中加载代码（请参阅 `mxClient.include` ）。
- _mxJavaScriptExpression：临时用于评估 Safari、Opera、Firefox 3 和 IE 中代码的全局变量（请参阅 `mxUtils.eval` ）。

#### 文件
库包含这些相对文件名。所有文件名都相对于 `mxClient.basePath`。
#### 内置图像
所有映像都是从 `mxClient.imageBasePath` 加载的，您可以更改该路径以反映您的环境。图像变量也可以单独更改。

- mxGraph.prototype.collapsedImage
- mxGraph.prototype.expandedImage
- mxGraph.prototype.warningImage
- mxWindow.prototype.closeImage
- mxWindow.prototype.minimizeImage
- mxWindow.prototype.normalizeImage
- mxWindow.prototype.maximizeImage
- mxWindow.prototype.resizeImage
- mxPopupMenu.prototype.submenuImage
- mxUtils.errorImage
- mxConstraintHandler.prototype.pointImage
在 `mxGraph.setCellWarning` 中使用的警告图像（不带扩展名的图像/警告）的基本名称在 `mxGraph.warningImage` 中定义。

#### 资源
`mxEditor` 和 `mxGraph` 类在类加载时将以下资源添加到 `mxResources`：

- 资源/编辑器*.属性
- 资源/图形*.属性
默认情况下，库附带英语和德语资源文件。

#### 图像
有关使用图像的建议。在 `HTML` 元素（如工具栏和上下文菜单）中使用 `GIF` 图像（256 个调色板），对图形组件内出现的所有图像使用 `PNG` 图像（24 位）。

- 对于 `HTML` 元素中的 `PNG` 图像，`Internet Explorer` 将忽略任何透明度信息。
- 对于图表内的 `GIF` 图像，Mac 上的 Firefox 将显示奇怪的颜色。此外，Mac 上仅显示动画 GIF 的第一个图像。
为了在应用程序运行时更快地呈现图像，可以使用以下代码预取图像：
```js
var image = new Image();
image.src = url_to_image;
```

#### 部署
客户端使用文档标题内的以下脚本标记添加到页面：
```js
<script type="text/javascript" src="js/mxClient.js"></script>
```
`mxClient.js` 文件的部署版本在单个文件中包含所有必需的代码。对于部署，需要完整的 `javascript/src` 目录。

#### 源代码
如果您是源代码客户，并且希望使用完整的源代码进行开发，则注释的源代码将包含在 `javascript/devel/source.zip` 文件中。它包含 `mxGraph` 中每个类的一个文件。要使用源代码，必须解压缩源 `.zip` 文件，并且必须更改 HTML 页面中的 `mxClient.js` URL，以引用源文件中未压缩.zip `mxClient.js` 。

#### 压缩
当将 `Apache2` 与 `mod_deflate` 一起使用时，您可以在 `src/js/.htaccess` 中使用以下指令来加速 `JavaScript` 源代码的加载：
```js
SetOutputFilter DEFLATE
```

#### 类
`mxGraph` 中有两种类型的“类”：类和单例（其中只有一个实例存在）。单例映射到变量名等于类名的全局对象。例如，`mxConstants` 是一个对象，其中所有常量都定义为对象字段。普通类映射到构造函数和定义实例字段和方法的原型。例如，`mxEditor` 是一个函数，`mxEditor.prototype` 是 `mxEditor` 函数创建的对象的原型。`mx` 前缀是一种约定，用于 `mxGraph` 包中的所有类，以避免与全局命名空间中的其他对象发生冲突。

#### 子类化
对于子类化，超类必须提供一个无参数或处理不带参数的调用的构造函数。此外，在扩展原型后，必须重新定义特殊的构造函数字段。例如，`mxEditor` 的超类是 `mxEventSource`。这在 `JavaScript` 中表示为首先通过将原型分配给超类的实例来“继承”超类的所有字段和方法，例如。`mxEditor.prototype = new mxEventSource（）` 并使用 `mxEditor.prototype.constructor = mxEditor` 重新定义构造函数字段。应用后一条规则，以便可以使用 `mxUtils.getFunctionName（obj.constructor）` 通过其构造函数的名称检索对象的类型。

#### 构造 函数
对于 `mxGraph` 中的子类化，应应用相同的方案。例如，要对 `mxGraph` 类进行子类化，首先必须为新类定义一个构造函数。构造函数使用 `mxGraph` 函数对象上的调用函数调用它可能具有的任何参数来调用超级构造函数，并显式传递每个参数：
```js
function MyGraph(container)
{
  mxGraph.call(this, container);
}
```
`MyGraph` 的原型继承自 `mxGraph`，如下所示。像往常一样，构造函数在扩展超类后重新定义：
```js
MyGraph.prototype = new mxGraph();
MyGraph.prototype.constructor = MyGraph;
```
您可能希望在上述代码之后定义与类关联的编解码器。此代码将在类加载时执行，并确保使用相同的编解码器对 `mxGraph` 和 `MyGraph` 的实例进行编码。
```js
var codec = mxCodecRegistry.getCodec(mxGraph);
codec.template = new MyGraph();
mxCodecRegistry.register(codec);
```

#### 功能
在 `MyGraph` 的原型中，`mxGraph` 的功能可以按如下方式扩展。
```js
MyGraph.prototype.isCellSelectable = function(cell)
{
  var selectable = mxGraph.prototype.isSelectable.apply(this, arguments);

  var geo = this.model.getGeometry(cell);
  return selectable && (geo == null || !geo.relative);
}
```
第一行中的超级调用是可选的。它是使用 `mxGraph` 原型的 `isSelectable` 函数对象上的 `apply` 函数完成的，使用特殊的 `this` 和参数变量作为参数。只有在超类中没有按如下方式替换函数时，才能调用超类函数，这是 `JavaScript` 中子类化的另一种方式。
```js
mxGraph.prototype.isCellSelectable = function(cell)
{
  var geo = this.model.getGeometry(cell);
  return selectable &&
      (geo == null ||
      !geo.relative);
}
```
如果需要完全替换函数定义，上述方案很有用。

为了向子类添加新的函数和字段，使用以下代码。下面的示例添加一个新函数来返回图形模型的 `XML` 表示形式：
```js
MyGraph.prototype.getXml = function()
{
  var enc = new mxCodec();
  return enc.encode(this.getModel());
}
```

#### 变量
同样，新字段的声明和定义如下。
```js
MyGraph.prototype.myField = 'Hello, World!';
```
请注意，分配给 `myField` 的值只创建一次，也就是说，`MyGraph` 的所有实例共享相同的值。如果需要特定于实例的值，则必须改为在构造函数中定义字段。
```js
function MyGraph(container)
{
  mxGraph.call(this, container);

  this.myField = new Array();
}
```
最后，使用以下代码创建 `MyGraph` 的新实例，其中容器是一个充当图形视图容器的 DOM 节点：
```js
var graph = new MyGraph(container);
```