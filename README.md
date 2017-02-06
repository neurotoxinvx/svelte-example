# SVELTE — The magical disappearing UI framework

### 前言

如果你已经开发过 JavaScript 应用程序，你可能会遇到或者至少听说过像 React、Vue、Angular 这样的框架。这些工具都有一个共同的目标，让开发者可以轻松地建立流畅的交互式应用。

Svelte (发音: svelt) 和上面的框架有一个关键的区别：Svelte 不是在运行时解析你的 JavaScript 代码，在构建时你的代码被编译为可直接运行的 JavaScript 代码。 这意味着首屏加载的时候无需浪费时间在加载框架上，也为你节省了运行框架本身的时间。

正因为无需依赖框架本身，你可以轻松地在现有应用程序中渐进式的采用 Svelte ，或将某个组件作为独立包运行在任何地方。



### 快速开始

在这里我为大家提供了一个 Example ，可以直接访问地址  [Svelte-Example](https://neurotoxinvx.github.io/svelte-example/) 查看。

安装 && 启动

```shell
git clone https://github.com/neurotoxinvx/svelte-example.git
cd svelte-example
npm installcd svelte-example
npm run dev
```



### 常用 API

###### 注：下方的展示部分为图片演示，实际操作体验请启动后体验。



1、模板渲染

![01](http://static.galileo.xiaojukeji.com/static/tms/shield/01.png)

```html
<p>欢迎使用 {{ title }} ， {{ title }} 是一个 {{ type }} ，推崇组件 {{ describe }} 的方式。</p>

<style>

</style>

<script>
  export default {
    data() {
      return {
        title: 'Sevlte',
        type: '编译型框架',
        describe: '开箱即用'
      }
    }
  }
</script>
```



2、IF…ELSE

![02](http://static.galileo.xiaojukeji.com/static/tms/shield/02.png)

```html
{{#if type}}
<div>BLOCK TRUE</div>
{{else}}
<div>BLOCK FALSE</div>
{{/if}}

<button on:click="switchFirst(type)">switch</button>

<style>
  div {
    font-size: 14px;
  }

  button {
    margin-top: 10px;
  }
</style>

<script>
  export default {
    data() {
      return {
        type: true
      }
    },
    methods: {
      switchFirst(type) {
        type = !type;

        this.set({
          type: type
        })
      }
    }
  }
</script>
```



3、双向绑定

![03](http://static.galileo.xiaojukeji.com/static/tms/shield/03.png)

```html
<input type="text" bind:value="name" placeholder="ente your name">
<p>Hello {{name || 'stranger'}}!</p>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    }
  }
</script>
```



4、事件绑定

![04](http://static.galileo.xiaojukeji.com/static/tms/shield/04.png)

```html
<p>{{data}}</p>
<button on:click="add()">click me</button>

<style>

</style>

<script>
  export default {
    data() {
      return {
        data: 'DiDi'
      }
    },
    methods: {
      add() {
        let _data = this.get('data');
        this.set({
          data: _data + 'Di'
        })
      }
    }
  }
</script>
```



5、监听数据变化

![05](http://static.galileo.xiaojukeji.com/static/tms/shield/05.png)

```html
<p>打开控制台查看</p>
<p>{{data}}</p>
<button on:click="add()">click me</button>

<style>

</style>

<script>
  export default {
    data() {
      return {
        data: 'DiDi'
      }
    },
    methods: {
      add() {
        let _data = this.get('data');
        this.set({
          data: _data + 'Di'
        })
      }
    },
    onrender() {
      // 此处注意，监听时会触发一次回调函数，使用时请进行第一次判断

      const observer = this.observe('data', data => {
        console.log('新的数据是' + data);
      });

      // observer.cancel();
    }
  }
</script>
```



6、计算属性

![06](http://static.galileo.xiaojukeji.com/static/tms/shield/06.png)

```html
<p>
  现在时分, 北京时间 {{ hour }} 点  {{ minutes }} 分 {{ seconds }} 秒
</p>

<script>
  export default {
    data() {
      return {
        date: new Date()
      }
    },
    computed: {
      hour: date => date.getHours(),
      minutes: date => date.getMinutes(),
      seconds: date => date.getSeconds()
    }
  }
</script>
```



7、Props 传值到子组件

![07](http://static.galileo.xiaojukeji.com/static/tms/shield/07.png)

Wrap

```html
<Inner name="Neurotoxin" bind:count></Inner>

<button on:click="plus(count)">click me</button>

<script>
  import Inner from './Inner';

  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      plus(count) {
        this.set({
          count: count + 1
        })
      }
    },
    components: {
      Inner
    }
  }
</script>
```

Inner

```html
<p>Hello {{ name }}, this is inner component</p>
<p>The Number is {{ count }}</p>

<script>
  export default {
    data() {
      return {
        name: 'unKnown',
        count: 0
      }
    }
  }
</script>
```



8、REFs

![08](http://static.galileo.xiaojukeji.com/static/tms/shield/08.png)

Wrap

```html
<div id="refs">
  <Inner ref:inner></Inner>
  <button on:click="triggerInner()">click me</button>
</div>

<script>
  import Inner from './Inner';

  export default {
    data() {
      return {
        data: 'REFs Inner'
      }
    },
    methods: {
      triggerInner() {
        const inner = this.refs.inner;
        inner.change();
      }
    },
    components: {
      Inner
    }
  }
</script>
```

Inner

```html
<p>{{ data }}</p>

<script>
  export default {
    data() {
      return {
        data: 'REFs Inner'
      }
    },
    methods: {
      change() {
        this.set({
          data: Math.random()
        })
      }
    }
  }
</script>
```



9、Emit

![09](http://static.galileo.xiaojukeji.com/static/tms/shield/09.png)

Wrap

```html
<div>
  {{ thing }}
</div>

<Inner on:Bomb="action(event.thing)"></Inner>

<script>
  import Inner from './Inner';

  export default {
    data() {
      return {
        thing: 'Nothing'
      }
    },
    methods: {
      action(thing) {
        this.set({
          thing: thing
        });
      }
    },
    components: {
      Inner
    }
  }
</script>
```

Inner

```html
<script>
  export default {
    onrender() {
      let num = 0;

      setInterval(() => {
        this.fire('Bomb', {
          thing: num += 1
        })
      }, 1000);
    }
  }
</script>
```

### 自定义 Svelte 文件后缀

可能有的同学对于 .html 文件感觉有些不适应，我们可以将 .html 结尾的 Svelte 组件后缀改为 .svelte ，然后修改

`webpack.dev.conf.js` 中的

```js
module: {
    rules: [
      {
        test: /\(.html|.svelte)$/, // 这里加上对 svelte 文件的解析
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
```

此时，我们发现在编辑器中 .svelte 文件失去了语法高亮和自动补充，如果你使用的是 WebStorm ，可以打开 Preferences -> Editor -> File types 

![10](http://static.galileo.xiaojukeji.com/static/tms/shield/10.png)

手动添加，将 .svelte 文件识别为 HTML 即可



### 总结

经过上面的介绍，我们可以看到 Svelte 吸收了很多 Vue、React 中的精华部分，甚至连 svelte-loader 的模板也和 .vue 文件十分相似，对于熟悉 Vue、React  的同学来说上手非常的快速。

由于 Svelte 是一个编译型框架，打包后的文件大小相比基于其他框架开发的应用会小很多，所以非常适合开发 SDK 、插件。但是由于 Svelte 编译后的代码复用性相比 Vue、React、Angular 等具有 Runtime 的框架较差，我们对于用 Svelte 开发中大型应用依然持怀疑态度，但是无疑，在开发 SDK 插件方面， Svelte 几乎是目前最好的选择。
