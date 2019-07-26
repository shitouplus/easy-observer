#easy-observer
> 监听dom工具函数

+ 节点曝光
```js
exposure(nodes, callback, once)
```
| 参数     |  说明                       | 类型             | 默认值 |
| :---:    | :---:                      | :---:           | :---: |
| nodes    | 观测的节点列表               | Array           | ——
| callback | 节点曝光时的回调函数          | Function(node)  | ——
| once     | 是否只触发第一次曝光的回调函数 | Boolean         | true

+ 懒加载
```js
lazyLoad (nodes, callback, rootMargin)
```
| 参数       |  说明              |  类型           | 默认值          |
| :---:      | :---:             | :---:          | :---:           |
| nodes      | 观测的节点列表      | Array          | ——              |
| callback   | 节点曝光时的回调函数 | Function(node) | ——              |
| rootMargin | 节点相对视口的距离   | String         | 0px 0px 0px 0px |
