import h from './h'
const vNodeTest3 = h('ul', { class: { box: true} }, [
  h('li',{}, 'p苹果'),
  h('li',{}, [
    h('span', {}, 'hello'),
    h('span', {}, 'word')
  ])
])
console.log(vNodeTest3)
