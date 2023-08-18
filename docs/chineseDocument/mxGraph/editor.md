## mxEditor
```javascript
    // 创建图形编辑器实例
    var editor = new mxEditor();
```
### graph
```javascript
    var graph = editor.graph;
```
#### allowEval
在 mxGraph 中，allowEval 属性是一个用于控制是否允许在加载图形数据时执行 JavaScript 代码的属性。该属性的值是一个布尔值，如果设置为 true，则允许执行 JavaScript 代码；如果设置为 false，则禁止执行 JavaScript 代码。

当您使用 mxGraph 加载保存的图形数据时，有时可能会在 XML 数据中包含一些嵌入的 JavaScript 代码。这些代码可以在加载时执行，以实现特定的功能或行为。但是，执行嵌入的 JavaScript 代码可能会带来安全风险，因此 mxGraph 提供了 allowEval 属性，允许您选择是否允许执行这些代码。

默认情况下，allowEval 属性的值为 false，这意味着 mxGraph 在加载图形数据时不会执行嵌入的 JavaScript 代码。如果您确定图形数据是安全的，并且需要执行其中的 JavaScript 代码，您可以将 allowEval 设置为 true。

以下是一个示例，演示如何设置 allowEval 属性：
```javascript
// 设置 allowEval 属性为 true，允许执行嵌入的 JavaScript 代码
graph.allowEval = true;

// 加载图形数据
var xmlString = '<mxGraphModel>...</mxGraphModel>';
var doc = mxUtils.parseXml(xmlString);
var codec = new mxCodec(doc);
codec.decode(doc.documentElement, graph.getModel());
```
请注意，启用 allowEval 属性可能会导致潜在的安全问题，因此在加载未知或不受信任的图形数据时要格外谨慎。只有在您确信图形数据的来源和内容时，才应该考虑将 allowEval 设置为 true。