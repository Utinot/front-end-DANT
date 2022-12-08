import { CloseOutlined, ExclamationCircleOutlined, FileJpgOutlined, ImportOutlined, LaptopOutlined, LoadingOutlined, ManOutlined, PoundOutlined, StarOutlined, TeamOutlined, ToTopOutlined, TrophyOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailCan } from "../api/home";
type Props = {};

const Detail = (props: Props) => {
  const [getJob, setGetjob] = useState<any>([])
  const { id } = useParams();
  useEffect(() => {
    getData(id);
  }, []);

  const getData = async (id: any) => {
    const { data } = await detailCan(id);
    setGetjob(data)
  };
  const detailJob = getJob.job?.[0]

  const [selectedFile, setSelectedFile] = React.useState<any>(null);
  const [test, check] = React.useState<any>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData = new FormData();
    if (test == 1) {
      formData.append("selectedFile", selectedFile);
    }
    const { data } = await axios({
      method: "POST",
      url: "http://192.168.1.43:8080/api/seeker/upload-cv",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0])
  }
  const defaultCv = (event: any) => {
    check(2);
  }
  const uploadCv = (event: any) => {
    check(1)
  }
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


      <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ứng Tuyền {detailJob?.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><CloseOutlined /></span>
              </button>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="btn btn-default mr-2 btn-custom-cv" onClick={defaultCv}><ImportOutlined /> Dùng CV đã nộp</a>
              <a href="#" className="btn btn-default mr-2 btn-custom-cv" onClick={uploadCv}><ToTopOutlined /> Tải lên CV từ máy tính</a>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="" id="new-apply" style={{ display: 'block', top: 0 }}>
                  <div id="frm-select-cv-online" >
                    <div className="p-3 rounded mx-auto d-block  ">
                      <div className="col-xs-6" style={{ top: 0 }}>
                        {test == 1 ? (
                          <>
                            <div className="float-left mt-custom-modal" style={{ marginLeft: 10 }}>
                              <strong className="input-label text-dark-gray">Tải lên CV từ máy tính</strong><br />
                              <span className="text-gray text-small">File doc, docx, pdf. Tối đa 5MB.</span>
                            </div>
                            <div className="float-left p-2" >

                              {/* <label className="form-label">Multiple files input example</label> */}
                              <input style={{ marginBottom: 30 }} type="file" id="input-b1" name="input-b1" className="form-control" data-browse-on-zone-click="true" multiple
                                onChange={handleFileSelect}
                              />
                              <div className="col-xs-12">
                                <div className="form-group align-center">
                                  <input type="checkbox" name="save_cv" className="checkbok" /><span className="switchery switchery-small switchery-default" style={{ boxShadow: 'rgb(223, 223, 223) 0px 0px 0px 0px inset', borderColor: 'rgb(223, 223, 223)', backgroundColor: 'rgb(255, 255, 255)', transition: 'border 0.4s ease 0s, box-shadow 0.4s ease 0s' }}><small style={{ left: 0, transition: 'background-color 0.4s ease 0s, left 0.2s ease 0s' }} /></span>
                                  <span style={{ marginLeft: 10 }}>Lưu CV (Dùng để quản lý trong <a target="_blank" className="text-highlight" href="">Hồ Sơ CV</a> và giúp nhà tuyển dụng tiếp cận bạn)</span>
                                </div>
                              </div>
                            </div>

                          </>
                        ) :
                          <div className="float-left">
                            <label><span className="custom-text">Chọn Cv Đã Tải Lên</span>: <span className="italic text-primary text-small"><i className="fa fa-thumbs-o-up" /> Khuyên Dùng</span></label>
                            <ul className="cv-choosen">
                              <li className='radio-choose-active float-left'>
                                <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
                                <label htmlFor="html">Đăng ký<a className="text-highlight" target="_blank" href="https://www.topcv.vn/xem-cv/VQYCXVtVUwdaBlJSUQIEWlkAVFVbAVIGBFBTBwdb2c">(Xem)</a></label><br />
                              </li>
                              <li className='radio-choose-active'>
                                <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                                <label htmlFor="css">Đăng ký thực tập front-end<a className="text-highlight" target="_blank" href="https://www.topcv.vn/xem-cv/VQYCXVtVUwdaBlJSUQIEWlkAVFVbAVIGBFBTBwdb2c">(Xem)</a></label><br />
                              </li>
                              <li className='radio-choose-active'>
                                <input type="radio" id="javascript" name="fav_language" defaultValue="JavaScript" />
                                <label htmlFor="javascript">Đăng ký thực tập front-end<a className="text-highlight" target="_blank" href="https://www.topcv.vn/xem-cv/VQYCXVtVUwdaBlJSUQIEWlkAVFVbAVIGBFBTBwdb2c">(Xem)</a></label></li>



                            </ul>


                          </div>
                        }
                        <div className="float-left">
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-success text-white" >Tải CV</button>
                          </div>
                          <ul className="cv-choosen justify-content-center border" style={{ padding: 10 }}>
                            <li className="w-100">
                              <div className="text-left">
                                <ExclamationCircleOutlined className="fa-solid fa-triangle-exclamation" style={{ color: "red" }} /> Lưu ý: <br /><br />
                                <p><span className="text-danger">1.</span> Ứng viên nên lựa chọn ứng tuyển bằng CV Online &amp; viết thêm mong muốn tại phần thư giới thiệu để được Nhà tuyển dụng xem CV sớm hơn.</p>
                                <p><span className="text-danger">2.</span> Để có trải nghiệm tốt nhất, bạn nên sử dụng các trình duyệt phổ biến như Google Chrome hoặc Firefox.</p>
                                <p className="text-red"><span className="text-danger">3.</span> Trước tình trạng gia tăng các hình thức lừa đảo việc làm trên internet được các cơ quan chức năng cảnh báo, TopCV xin lưu ý bạn một số dấu hiệu lừa đảo việc làm như sau:
                                </p>

                              </div>
                            </li>
                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >







      {/* end modal */}
      {/* ============================ Job Details End ================================== */}
    </div >
  );
};

export default Detail;
