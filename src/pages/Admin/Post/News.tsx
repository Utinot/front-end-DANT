import { DeleteOutlined, EditOutlined, FlagOutlined } from "@ant-design/icons";
import { Divider, Radio, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { ListCv, removeShowNews } from "../../../api/home";
import moment from "moment";
import { format } from "date-fns";
import { toast } from "react-toastify";


const Post: React.FC = () => {
  const [listCV, setListCV] = useState<any>([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const { data } = await ListCv();
      setListCV(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(listCV?.data);

  const onRemove: SubmitHandler<any> = async (id: any) => {
    const confim = window.confirm("bạn có muốn xóa không");
    if (confim) {
      await removeShowNews(id).then(() => getNews());
      toast.success("Đã xóa thành công");
    }
  };

  const columns: ColumnsType<any> = [
    {
      title: "Avatar",
      dataIndex: `avatar`,
      render: (theImageURL) => (
        <img alt={theImageURL} src={theImageURL} width={100} />
      ),
    },
    {
      title: "Tên ứng viên",
    },
    {
      title: "Số điện thoại",
    },
    {
      title: "Vị trí ứng tuyển",
    },
    {
      title: "Thời gian làm việc",
    },
    {
      title: "Thời gian ứng tuyển",
      dataIndex: 20,
    },
    {
      title: "Bài ứng tuyển",
      dataIndex: 20,
    },
    {
      title: "Link CV",
      dataIndex: 20,
    },
    {
      title: "Trạng Thái",
      dataIndex: "nháp",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id: string) => (
        <div>
          <a
            href={`/admin/post/editnews/${id}`}
            className="p-2 circle text-black bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
          >
            <EditOutlined />
          </a>
          <a
            className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
            onClick={() => onRemove(id)}
          >
            <DeleteOutlined />
          </a>
        </div>
      ),
    },
  ];
  const dataSource = listCV.data?.map((item: any) => {
    // console.log(moment(item.end_job_time).format("DD"));
    // const currentDate = moment().daysInMonth();
    // const end_job_time = moment(item.end_job_time).daysInMonth();
    // const remaining_day = Number(end_job_time) - Number(currentDate);
    // console.log(`end_time : ${end_job_time}`);
    // console.log(`current_time : ${currentDate}`);
    // console.log(`remaining_day : ${remaining_day}`);

    return {
      key: item.cv_id,
      id: item.cv_id,
      avatar: item.avatar,
      title: item.title,
      // getprofession: item.getprofession,
      // job_time: currentDate,
      // end_job_time: moment(item.end_job_time).format("DD-MM-YYYY"),
      // remaining_day: remaining_day,
    };
  });

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} ></Table>
      <p></p>
    </div>
  );
};

export default Post;
