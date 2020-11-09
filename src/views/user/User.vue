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
          <el-cascader
              v-model="userVo.deptCode"
              :options="formInline.dept"
              ref="cascader"
              clearable
              filterable
              :show-all-levels="false"
              :props="{ expandTrigger: 'hover',checkStrictly: true, emitPath: false, value: 'deptCode', label: 'deptName'}"
              @change="handleChange">
            <template slot-scope="{ node, data }">
              <span>{{ data.deptName }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="userVo.realName" clearable placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="公民身份号码">
          <el-input v-model="userVo.gmsfhm" clearable placeholder="请输入公民身份号码"></el-input>
        </el-form-item>
        <el-form-item label="警号">
          <el-input v-model="userVo.jh" clearable placeholder="请输入警号"></el-input>
        </el-form-item>
        <el-form-item label="用户状态">
          <el-select v-model="userVo.status" clearable placeholder="请选择用户状态">
            <el-option
                v-for="item in formInline.statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetUserVo" icon="el-icon-refresh">重置</el-button>
            <el-button type="primary" @click="getUserList" icon="el-icon-search">查询</el-button>
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
            type="index"
            label="#"
            :index="indexMethod">
        </el-table-column>
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
            label="最后登录地址"
            width="120">
        </el-table-column>
        <el-table-column
            prop="status"
            label="是否禁用"
            width="120">
          <template slot-scope="scope" >
            <el-switch
                style="display: block"
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#eeeeee"
                :active-value="1"
                :inactive-value="0">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
            label="操作">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button type="primary" size="small" icon="el-icon-edit"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="danger" size="small" icon="el-icon-delete"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="权限" placement="top">
            <el-button type="warning" size="small" icon="el-icon-s-tools"></el-button>
          </el-tooltip>
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
import {findUserList} from '../../api/user';
import {findDeptTree} from "../../api/dept";

export default {
  name: "User",
  data() {
    return {
      userVo:{
        deptName: '',
        realName: '',
        deptCode: '',
        status:'',
        jh: '',
        gmsfhm: ''
      },
      formInline: {
        deptMap: [],
        statusOptions: [{
          value: '',
          label: '全部'
        }, {
          value: '0',
          label: '有效'
        }, {
          value: '1',
          label: '禁用'
        }],
        dept: [],
      },
      tableData: [],
      currentPage: 1,
      total: 1,
      pageSize: 20
    }
  },
  // Vue生命周期函数，在组件被创建的时候进行执行，
  // 在这里可以执行一些数据初始化的操作
  created() {
    this.getUserList();
    this.getDeptList();
  },
  methods: {
    async getUserList(){
      const {data} = await findUserList(this.currentPage,this.pageSize,this.userVo);

      // 使用es6的数据解构语法是这样写，
      // 代表的是定义一个常量，这个常量自动接收返回数据中的data属性的值
      // const {data} = await findUserList();
      this.total = data.data.total;
      this.tableData = data.data.records;

    },
    async getDeptList(){
      const {data} = await findDeptTree();
      this.formInline.deptMap = data.data.records;
      let root = null;
      if (this.formInline.deptMap && this.formInline.deptMap.length) {
        root = { id: 0, parentId: null, children: [] };
        const group = {};
        for (let deptMapElement of this.formInline.deptMap) {
          if (deptMapElement.deptParentId !== null && deptMapElement.deptParentId !== undefined) {
            if (!group[deptMapElement.deptParentId]) {
              group[deptMapElement.deptParentId] = [];
            }
            group[deptMapElement.deptParentId].push(deptMapElement);
          }
        }

        const queue = [];
        queue.push(root);
        while (queue.length) {
          const node = queue.shift();
          node.children = group[node.id] && group[node.id].length ? group[node.id] : null;
          if (node.children) {
            queue.push(...node.children);
          }
        }
      }
      this.formInline.dept = root.children;
    },
    onSubmit() {
      console.log('submit!');
    },

    handleSizeChange(val) {
      this.pageSize = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getUserList();
    },
    indexMethod(index) {
      return (this.currentPage-1)*this.pageSize+(index + 1);
    },
    // 这里获取到的value是最终选中的节点按照层级组成的数组
    handleChange(value) {
      console.log(this.userVo.deptCode,value);
      // 这里待完善 根据value获取对应的deptName
      // 主要是清空存在问题
      if (value !== null){
        console.log((this.formInline.deptMap.filter(e => e.deptCode===value)[0]).deptName);
      }
    },
    resetUserVo() {
      this.userVo.deptCode = '';
      this.userVo.deptName = '';
      this.userVo.gmsfhm = '';
      this.userVo.jh = '';
      this.userVo.realName = '';
      this.userVo.status = ''
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