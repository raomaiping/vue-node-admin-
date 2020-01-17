<template>
  <div class="fillContainer">
    <el-table v-if="tableData.length > 0" :data="tableData" style="width: 100%" max-height="450" border>
      <el-table-column type="index" label="序号" width='70' align="center"> </el-table-column>
      <el-table-column prop="date" label="创建时间" width='250' align="center"> </el-table-column>
      <el-table-column prop="type" label="收支类型" width='120' align="center"> </el-table-column>
      <el-table-column prop="describe" label="收支描述" width='120' align="center"> </el-table-column>
      <el-table-column prop="income" label="收入" width='120' align="center">
        <template slot-scope="scope">
          <span style="color:#00d053">{{ scope.row.income }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="expend" label="支出" width='120' align="center">
        <template slot-scope="scope">
          <span style="color:#f56767">{{ scope.row.expend }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="cash" label="账户现金" width='120' align="center">
        <template slot-scope="scope">
          <span style="color:#4db3ff">{{ scope.row.cash }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" width='150' align="center"> </el-table-column>
      <el-table-column label="操作" prop="operation" align="center" fixed="right" witdh="180">
        <template slot-scope="scope">
          <el-button size="small" type="warning" icon="edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" icon="delete" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
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
    },
    handleEdit(index, row) {
      console.log(123);
    },
    handleDelete(index, row) {
      console.log(456);
    }
  }
};
</script>
<style  scoped>
.fillcontain {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>