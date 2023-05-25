<template>
  <div id=""></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 6, name: "部门6", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];
function arrayToTree() {
  const result = []; // 存放结果集
  const itemMap = {}; //
  arr.forEach((item) => {
    item.children = [];
    itemMap[item.id] = item;
    if (itemMap[item.pid]) {
      itemMap[item.pid].children.push(item);
    }
    if (item.pid === 0) {
      result.push(itemMap[item.id]);
    }
  });
  console.log(itemMap);
  return result;
}
console.log(arrayToTree());
</script>

<style lang="scss" scoped></style>
