
> **组件名：uni-load-more**
> 代码块： `uLoadMore`

用于列表中，做滚动加载使用，展示 loading 的各种状态。

### 基本用法

在 ``template`` 中使用组件

```html
<uni-load-more :status="more"></uni-load-more>
```

## API

### LoadMore Props

|属性名|类型|	可选值|默认值	|说明|
|:-:|:-:|:-:|:-:|:-:|
|iconSize|Number|-|24|指定图标大小|
|status|String	|more/loading/noMore|more|loading 的状态|
|showIcon|Boolean|-|true|是否显示 loading 图标|
|iconType|String|snow/circle/auto|auto|指定图标样式|
|color|String|-|#777777	|图标和文字颜色|
|contentText|Object|-|{contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}|各状态文字说明	|

#### Status Options
|参数名称|说明|
|:-:|:-:|
|more|loading前|
|loading|loading前中	|
|more|没有更多数据	|

#### IconType Options
|参数名称|说明|
|:-:|:-:|
|snow|ios雪花加载样式|
|circle	|安卓环形加载样式|
|auto|根据平台自动选择加载样式	|




> **说明**
> `iconType`为`snow`时，在`APP-NVUE`平台不可设置大小，在非`APP-NVUE`平台不可设置颜色



### LoadMore Events

|事件名					|说明				|返回值						|
|:-:						|:-:				|:-:						|
|clickLoadMore	|点击加载更多时触发	|e.detail={status:'loading'}|



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/load-more/load-more](https://hellouniapp.dcloud.net.cn/pages/extUI/load-more/load-more)