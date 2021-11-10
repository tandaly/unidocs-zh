## 概述

### 什么是符号表
符号表是内存地址与源码文件名、函数名称、行号的映射表。符号表通常包括以下信息：
```
<内存起始地址><内存结束地址><源码函数名称>[<源码文件名称:源码行号>]
```
应用正式发布后二进制代码中不再包含源码信息，应用发生异常（Crash）时可以捕获异常发生时的堆栈信息，但这些信息使用内存地址表示，这时候可以通过符号表进行解析还原成源码堆栈信息，从而方便开发者定位并解决异常问题。


### 什么是dsym文件
iOS平台中，dSYM文件是指具有调试信息的目标文件，存储着源码文件名、函数名、行号等信息，与可执行文件中的函数内存地址一一对应。
在XCode中编译后通常为：xxxx.app.dSYM，其中xxxx为应用程序的包名，如下所示：


### dsym文件的用途

## HBuilderX中云端打包配置生成符号表文件
