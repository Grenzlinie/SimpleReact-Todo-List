## 简介
学习react做的，一个简单的实现增查删改的项目。
## 相关知识点
1. 拆分组件、实现静态组件
2. 动态初始化列表，确定数据放在哪个组件的state中
    ——某个组件使用：放在自身的state中
    ——某些组件使用：放在共同的父组件的state中(状态提升：)
3. 父子组件通信:
    ——父组件向子组件传递：通过props传递
    ——子组件向父组件传递：通过回调函数传递，也是传递props，父组件提前给子组件传递函数
4. 状态在哪里，操作状态的方法就在哪里
5. 注意className、style的写法，defaultChecked、checked，defaultValue、value之间的区别。

## 启动方式
npm start