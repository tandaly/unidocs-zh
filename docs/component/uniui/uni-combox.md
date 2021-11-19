> **组件名：uni-combox**
> 代码块： `uCombox`


组合框组件。

### 平台兼容性说明

**暂不支持nvue**

### 基本用法

在 ``template`` 中使用组件
```html
<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
```

## API

### Combox Props

|属性名		|类型			|默认值		|说明								|
|:-:		|:-:			|:-:		|:-:								|
|label		|String			|-			|标签文字							|
|value		|String			|-			|combox的值							|
|labelWidth	|String			|auto		|标签宽度，有单位字符串，如:'100px'	|
|placeholder|String			|-			|输入框占位符						|
|candidates	|Array/String	|[]			|候选字段							|
|emptyTips	|String			|无匹配项	|无匹配项时的提示语					|

### Combox Events

|事件称名	|说明					|返回值												|
|:-:		|:-:					|:-:													|
|@input	|combox输入事件	|返回combox值|





## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/combox/combox](https://hellouniapp.dcloud.net.cn/pages/extUI/combox/combox)