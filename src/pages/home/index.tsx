import MyTable from "@/component/Table";
import MyForm, { FromData } from "@/component/form";
import { TabelColumns } from "@/types";
import React, { useState } from "react";
import NavBar from "@/component/navbar/navbar";

function Index() {
  // 链接钱包的按钮点击事件
  const btnClick = () => {
    console.log("btn");
  };
  // 表单通过验证的函数 data是用户填写的数据
  const formSubmit = (data: FromData) => {
    console.log(data);
  };
  // 点击 mint 时候的函数 item是点击的数据
  const mintClick = (item: TabelColumns) => {
    console.log(item);
  };
  // 点击搜索的函数
  const search = (str: string) => {
    console.log(str);
  };
  /**
   * 表格类型变动的函数
   * 1 是 ALL
   * 2 是 In-progress
   * 3 是 Ended
   * */
  const typeChange = (type: number) => {
    console.log(type);
  };
  // 修改page的函数 请在获取数据完毕后调用setCurrentPage
  const pageChange = (page: number) => {
    console.log(page);
    setCurrentPage(page);
  };
  // 表格数据
  const [dataSource, setData] = useState<TabelColumns[]>([
    {
      tick: "cnmd",
      contract: "0x75B80475bEE0535585cEF1B735e934D949c619e0",
      deployTime: "2023.06.2 23:40:24	",
      TMandLAPM: {
        TM: 10000,
        LAPM: 1000,
      },
      rollupSize: 1,
      frozenTime: "Free",
      condition: "Free",
      fundingRate: 1,
      progress: 100,
    },
  ]);
  // 表格的总条数 请在获取数据完成后调用setTotal
  const [total, setTotal] = useState(1);
  // 当期页
  const [currentPage, setCurrentPage] = useState(0);
  // 表格加载状态 加载中调用
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <NavBar btnClick={() => btnClick()}></NavBar>
      <MyForm
        submit={(data) => {
          formSubmit(data);
        }}
      ></MyForm>
      <MyTable
        currentPage={currentPage}
        total={total}
        loading={loading}
        dataSource={dataSource}
        mintClick={(item: TabelColumns) => {
          mintClick(item);
        }}
        search={(str: string) => {
          search(str);
        }}
        typeChange={(type: number) => {
          typeChange(type);
        }}
        pageChange={(page: number) => {
          pageChange(page);
        }}
      ></MyTable>
    </div>
  );
}

export default Index;
