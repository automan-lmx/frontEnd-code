# CSS计数器基本概念
利用伪元素的content，使用CSS2.1 的两个属性控制自动编号
'content-increment'和 'content-reset'.通过这些属性定义的计数器
用于 'content'属性的 counter()或者 counters() 函数
- content-reset 必须设置
content-reset: 计数器名称[,默认值number]
- content-increment 计数器增量
'counter-increment'属性接受一个或多个计数器名（标识符），每个后面都可以跟一个可选的整数。这个整数表示每次出现该元素时计数器递增几。默认增量是 1，可以接受 0 和负数
counter-increment: 计数器名称[, 增量];      /* 增加计数器值 */
- content 显示计数器
content: counter(计数器名称[,显示的风格])
或者
content: counters(计数器名称,嵌套时拼接字符串[,可选的显示风格])
注意： 在有嵌套的作用域下，要使用 counters() 因为counter 只会显示当前作用域下计数器的值，如果要生成嵌套作用域的计数器就得用 counters 函数。

## 嵌套计数器与作用域

计数器是“自嵌套的（self-nesting）”，如果重置一个位于后代元素或者伪元素中的计数器，会自动创建一个新的计数器实例。这对 HTML 中的列表之类的场景来说很重要，这种场景下，元素自身可以嵌套任意深度，不用为每一层定义唯一命名的计数器
> 计数器的作用域从文档中具有'counter-reset'该计数器的第一个元素开始，包括该元素的后代、后续兄弟及其后代。

## 应用的场景
- 生成嵌套列表（文章目录标签）
- 计算已经勾选的复选框
- 自动追踪文档条目

参考链接： https://mp.weixin.qq.com/s/QdSgdTJImaRARGAgevnMAA

