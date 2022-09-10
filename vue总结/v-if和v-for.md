# 在构建ast的时候，会先看静态节点，再看once，再看v-for,
# 如果同时出现会先执行v-for再执行v-ifv-if，会浪费性能
# 嵌套《template v-if》