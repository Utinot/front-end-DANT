import { FileJpgOutlined, LaptopOutlined, LoadingOutlined, ManOutlined, PoundOutlined, StarOutlined, TeamOutlined, TrophyOutlined } from "@ant-design/icons";
import axios from "axios";
import { id } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Outlet, useParams } from "react-router-dom";
import { defaultAriaLiveMessages } from "react-select/dist/declarations/src/accessibility";
import { createNews, detailCan } from "../api/home";
import { updateProfilecom } from "../api/profile";

type Props = {};

const Detail = (props: Props) => {
  const [getJob, setGetjob] = useState<any>([])
  const [avatar, setAvatar] = useState("");
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({});

  useEffect(() => {
    getData(id);
  }, []);

  const getData = async (id: any) => {
    const { data } = await detailCan(id);
    setGetjob(data)
  };
  const detailJob = getJob.job?.[0]

  const onupdateCom: SubmitHandler<any> = async (dataform: any) => {
    const formData = new FormData();
    formData.append("file", avatar);
    formData.append("upload_preset", "dtertjeta");
    const {
      data: { url },
    } = await axios.post(
      `https://api.cloudinary.com/v1_1/dtertjeta/image/upload`,
      formData
    );
    const product = {
      ...dataform,
      logo: url,
    };
    const { data } = await createNews(product)
    console.log(product);
    
  }

  const uploadImg = async (e: any) => {
    setAvatar(e.target.files[0]);
  };

  console.log(detailJob);

  console.log(getJob.relate?.[0][0].getskill);

  return (
    <div>
      <section className="bg-light py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="bg-white rounded px-3 py-4 mb-4">
                <div className="jbd-01 d-flex align-items-center justify-content-between">
                  <div className="jbd-flex d-flex align-items-center justify-content-start">
                    <div className="jbd-01-thumb">
                      <img
                        src={detailJob?.logo}
                        className="img-fluid"
                        width={90}
                      />
                    </div>
                    <div className="jbd-01-caption pl-3">
                      <div className="tbd-title">
                        <h4 className="mb-0 ft-medium fs-md">
                          {detailJob?.title}
                        </h4>
                      </div>
                      <div className="jbl_location mb-3">
                        <span>
                          <i className="lni lni-map-marker mr-1" />
                          {detailJob?.getlocation.name}
                        </span>
                      </div>
                      <div className="jbl_info01">
                        <span className="px-2 py-1 ft-medium medium rounded theme-cl theme-bg-light mr-2">
                          {detailJob?.get_wage.name}
                        </span>
                      </div>
                      <div className="jbl_location mb-3">
                        <span>
                          <i className="lni lni-map-marker mr-1" />
                          <span>Hạn nộp</span> {detailJob?.end_job_time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="jbd-01-right text-right hide-1023">
                    <div className="jbl_button mb-2">
                      <a
                        data-toggle="modal" data-target="#exampleModal1"
                        className="btn rounded theme-bg-light theme-cl fs-sm ft-medium"
                      >
                        Xin ứng tuyển
                      </a>
                    </div>
                    <div className="jbl_button">
                      <a
                        href="javascript:void(0);"
                        className="btn rounded bg-white border fs-sm ft-medium"
                      >
                        Xem công ty
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded mb-4">
                <div className="jbd-01 px-3 py-4">
                  <div className="contenCTTD">
                    <div className="icongach"></div>
                    <h1>Chi tiết tin tuyển dụng</h1>
                    <h4> Thông tin chung</h4>
                    <div className="contenTTC">
                      <div className="item">
                        <div className="icon">
                          <ManOutlined />
                        </div>
                        <span>Giới tính</span>
                        <p>{detailJob?.sex}</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <LaptopOutlined />
                        </div>
                        <span>Hình thức làm việc</span>
                        <p>{detailJob?.get_time_work.name}</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <TeamOutlined />
                        </div>
                        <span>số lượng tuyển</span>
                        <p>{detailJob?.Quatity}</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <TrophyOutlined />
                        </div>
                        <span>cấp bậc</span>
                        <p>{detailJob?.getwk_form.name}</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <StarOutlined />
                        </div>
                        <span>kinh nghiệm</span>
                        <p>{detailJob?.get_experience.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Mô tả công việc</h5>
                    <p>
                      {detailJob?.describe}
                    </p>
                  </div>
                  <div className="jbd-details mb-3">
                    <h5>Yêu cầu:</h5>
                    <div className="position-relative row">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Strong core PHP Hands on experience.
                            </h6>
                          </div>
                        </div>
                        {detailJob?.Candidate_requirements}
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Strong Expertise in CodeIgniter Framework .
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jbd-details mb-4">
                    <div className="other-details">
                      <h5 className="ft-medium fs-md">kỹ năng chính</h5>
                      <ul className="p-0 skills_tag text-left">
                        {detailJob?.getskill.map((item: any) => (
                          <li>
                            <span className="px-2 py-1 medium skill-bg rounded text-dark">
                              {item.name}
                            </span>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Quyền lợi</h5>
                    <div className="other-details">
                      <div className="details ft-medium">
                        <span>
                          {detailJob?.benefit}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="jbd-02 px-3 py-3 br-top">
                  <div className="jbd-02-flex d-flex align-items-center justify-content-between">
                    <div className="jbd-02-social">
                      <ul className="jbd-social">
                        <li>
                          <i className="ti-sharethis" />
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="ti-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="ti-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="ti-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="ti-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="jbd-02-aply">
                      <div className="jbl_button mb-2">
                        <a
                          href="#"
                          className="btn btn-md rounded gray fs-sm ft-medium mr-2"
                        >
                          lưu việc làm
                        </a>
                        <a
                          href="#"
                          className="btn btn-md rounded theme-bg text-light fs-sm ft-medium"
                        >
                          Ứng tuyển
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded px-3 py-4 mb-4">
                <div className="contenCTTD">
                  <div className="icongach"></div>
                  <h1>Việc làm liên quan</h1>
                </div>
                {getJob.relate?.[0].map((item: any) => (
                  <div>
                    <div className="jbd-01 d-flex align-items-center justify-content-between">
                      <div className="jbd-flex d-flex align-items-center justify-content-start">

                        <div className="jbd-01-thumb">
                          <img
                            src={item.logo}
                            className="img-fluid"
                            width={90}
                          />
                        </div>
                        <div className="jbd-01-caption pl-3">
                          <div className="tbd-title">
                            <h4 className="mb-0 ft-medium fs-md">
                              {item.title}
                            </h4>
                          </div>
                          <div className="jbl_location mb-3">
                            <span>
                              <i className="lni lni-map-marker mr-1" />
                              {/* {item.getlocation.name} */}
                            </span>
                            <span className="medium ft-medium text-warning ml-3">
                              Part Time
                            </span>
                          </div>
                          <div className="jbl_info01">
                            {getJob.relate?.[0][0].getskill.map((skill: any) => (
                              <span className="px-2 py-1 ft-medium medium rounded theme-cl theme-bg-light mr-2">
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="jbd-01-right text-right hide-1023">
                        <div className="jbl_button mb-2">
                          <a
                            href="javascript:void(0);"
                            className="btn rounded theme-bg-light theme-cl fs-sm ft-medium"
                          >
                            Apply This Job
                          </a>
                        </div>
                        <div className="jbl_button">
                          <a
                            href="javascript:void(0);"
                            className="btn rounded bg-white border fs-sm ft-medium"
                          >
                            View Company
                          </a>
                        </div>
                      </div>

                    </div>
                    <hr />
                  </div>

                ))}


              </div>
            </div>
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="jb-apply-form bg-white rounded py-3 px-4 box-static">
                <h4 className="ft-medium fs-md mb-3">
                  Bạn thích công việc này
                </h4>
                <form className="_apply_form_form">
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      Email của bạn
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="themezhub@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      Số điện thoại :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+91 245 256 2548"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      Tải lên CV của bạn : <p>pdf</p>
                    </label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        <FileJpgOutlined />
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="terms_con">
                      <input
                        id="aa3"
                        className="checkbox-custom"
                        name="Coffee"
                        type="checkbox"
                      />
                      <label htmlFor="aa3" className="checkbox-custom-label">
                        I agree to pirvacy policy
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-md rounded theme-bg text-light ft-medium fs-sm full-width"
                    >
                      Apply For This Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* modal */}
      <form onSubmit={handleSubmit(onupdateCom)}>
        <div>
          <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Ứng tuyển {detailJob?.title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-body">
                    <div id="old-apply" style={{ display: 'none' }}>
                      <div className="row">
                        <div className="col-sm-8"><p><strong>Sử dụng CV đã ứng tuyển</strong></p></div>
                        <div className="col-sm-4 text-right"><a href="#" className="btn btn-default btn-sm" id="btn-new-apply"><i className="fa fa-pencil" /> Thay đổi</a></div>
                      </div>
                      <div style={{ marginTop: 8, border: '1px dashed #ccc', padding: '5px 10px' }}>
                        <table>
                          <tbody><tr>
                            <th>CV</th>
                            <td style={{ paddingLeft: 5 }}>: <a href="https://www.topcv.vn/cv-ung-tuyen/20a915c43f91a8e2b0e9d92c00783064/VQRtZmFfDy5XZHh0PDU0IgAnJE" target="blank" className="text-highlight">Đăng ký thực tập front-end <small><i>(Click để xem)</i></small></a></td>
                          </tr>
                          </tbody></table>
                        <input type="hidden" name="last_apply_id" />
                      </div>
                    </div>
                    <div id="new-apply" style={{ display: 'block' }}>
                      <div id="frm-select-cv-online">
                        <div className="text-right" style={{ marginBottom: 10 }}>
                          {/* <a href="#" className="btn-sm btn btn-default btn-old-apply"><i className="fa fa-undo" /> Dùng CV đã nộp</a> */}
                          <div className="custom-file">
                            <input type="file" className="custom-file-input"
                              {...register('logo', { required: true })}
                              onChange={uploadImg}
                            />
                            <label className="custom-file-label" htmlFor="customFile">
                              <i className="fa fa-user" />Tải Cv Lên
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <label>Chọn CV đã tải lên: <span className="italic text-primary text-small"><i className="fa fa-thumbs-o-up" /> Khuyên dùng</span></label>
                            <ul className="cv-choosen">
                              <li className="radio-choose-active">
                                <input id="apply-cv-f37d8a03bd44a418a363c6f77465db2c" type="radio" name="cvid" defaultValue="f37d8a03bd44a418a363c6f77465db2c" defaultChecked />
                                <label htmlFor="apply-cv-f37d8a03bd44a418a363c6f77465db2c"> Đăng ký thực tập front-end <a className="text-highlight" target="_blank" href="https://www.topcv.vn/xem-cv/VQYCXVtVUwdaBlJSUQIEWlkAVFVbAVIGBFBTBwdb2c">(Xem)</a></label>
                              </li>
                            </ul>
                          </div>
                          <div className="col-xs-6">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* end modal */}
      {/* ============================ Job Details End ================================== */}
    </div>
  );
};

export default Detail;
