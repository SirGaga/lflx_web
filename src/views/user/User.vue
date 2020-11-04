<template>
  <div>
    <!--  面包屑  -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="部门">
          <el-select v-model="formInline.dept.value" clearable  filterable placeholder="请选择">
            <el-option
                v-for="item in formInline.dept"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="formInline.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="警号">
          <el-input v-model="formInline.jh" placeholder="请输入警号"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group
              v-model="formInline.sex"
              @change="sexChange"
          >
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
            <el-radio :label="-1">全部</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit" icon="el-icon-refresh">重置</el-button>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
          <el-button type="success" @click="onSubmit" icon="el-icon-plus">添加</el-button>
          <el-button @click="onSubmit" icon="el-icon-download">导出</el-button>
        </el-form-item>
      </el-form>
      <!--  表格内容显示区域    -->
      <el-table
          :data="tableData"
          border
          style="width: 100%;"
          max-height="890" >
        <el-table-column
            prop="realName"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="jh"
            label="警号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="gmsfhm"
            label="公民身份号码"
            width="200">
        </el-table-column>

        <el-table-column
            prop="deptName"
            label="部门名称"
            width="500">
        </el-table-column>

        <el-table-column
            prop="lastLoginIp"
            label="最后登录地址">
        </el-table-column>
      </el-table>
      <el-pagination
          style="padding-top: 15px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 15, 20, 50, 100,200,1000]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      formInline: {
        username: '',
        jh: '',
        sex: 1,
        dept: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
      },
      tableData: [{
        realName: '管理员',
        jh: '000000',
        gmsfhm: '130130199009260014',
        deptName: '北京航天理想科技股份有限公司',
        lastLoginIp: ''
      }],
      currentPage: 1,
      total: 1,
      pageSize: 20
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    sexChange(value){
      alert(value);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>
.el-breadcrumb {
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 12px;
}
</style>