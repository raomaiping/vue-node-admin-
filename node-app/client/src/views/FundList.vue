<template>
  <el-table v-if="tableData.length > 0" :data="tableData" style="width: 100%" max-height="450" border>
    <el-table-column type="index" label="序号" width='70' align="center"> </el-table-column>
    <el-table-column prop="date" label="创建时间" width='250' align="center"> </el-table-column>
    <el-table-column prop="type" label="收支类型" width='150' align="center"> </el-table-column>
    <el-table-column prop="describe" label="收支描述" width='180' align="center"> </el-table-column>
    <el-table-column prop="income" label="收入" width='170' align="center"> </el-table-column>
    <el-table-column prop="expend" label="支出" width='170' align="center"> </el-table-column>
    <el-table-column prop="cash" label="账户现金" width='170' align="center"> </el-table-column>
    <el-table-column prop="remark" label="备注" width='170' align="center"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "fundlist",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      //获取表格数据
      this.$axios
        .get("/api/profiles")
        .then(res => {
          this.tableData = res.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style  scoped>
</style>