import { FileJpgOutlined, LaptopOutlined, LoadingOutlined, ManOutlined, PoundOutlined, StarOutlined, TeamOutlined, TrophyOutlined } from "@ant-design/icons";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Detail = (props: Props) => {
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
                        src="assets/img/c-1.png"
                        className="img-fluid"
                        width={90}
                      />
                    </div>
                    <div className="jbd-01-caption pl-3">
                      <div className="tbd-title">
                        <h4 className="mb-0 ft-medium fs-md">
                          Senior UI/UX Web Designer in USA
                        </h4>
                      </div>
                      <div className="jbl_location mb-3">
                        <span>
                          <i className="lni lni-map-marker mr-1" />
                          San Francisco, USA
                        </span>
                        <span className="medium ft-medium text-warning ml-3">
                          Part Time
                        </span>
                      </div>
                      <div className="jbl_info01">
                        <span className="px-2 py-1 ft-medium medium rounded theme-cl theme-bg-light mr-2">
                          Magento
                        </span>
                        <span className="px-2 py-1 ft-medium medium rounded text-danger bg-light-danger mr-2">
                          WordPress
                        </span>
                        <span className="px-2 py-1 ft-medium medium rounded text-purple bg-light-purple">
                          Laravel
                        </span>
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
              </div>
              <div className="bg-white rounded mb-4">
                <div className="jbd-01 px-3 py-4">
                  <div className="contenCTTD">
                    <div className="icongach"></div>
                    <h1>Chi ti???t tin tuy???n d???ng</h1>
                    <h4> Th??ng tin chung</h4>
                    <div className="contenTTC">
                      <div className="item">
                        <div className="icon">
                          <ManOutlined />
                        </div>
                        <span>Gi???i t??nh</span>
                        <p>nam</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <PoundOutlined />
                        </div>
                        <span>ti???t ki???m</span>
                        <p>nam</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <LaptopOutlined />
                        </div>
                        <span>H??nh th???c l??m vi???c</span>
                        <p>112222 tri???u</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <TeamOutlined />
                        </div>
                        <span>s??? l?????ng tuy???n</span>
                        <p>112222 tri???u</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <TrophyOutlined />
                        </div>
                        <span>c???p b???c</span>
                        <p>112222 tri???u</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <StarOutlined />
                        </div>
                        <span>kinh nghi???m</span>
                        <p>112222 tri???u</p>
                      </div>
                    </div>
                  </div>
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">M?? t??? c??ng vi???c</h5>
                    <p>
                      Ch??ng t??i ??ang t??m ki???m m???t Nh?? ph??t tri???n PHP ch???u tr??ch
                      nhi???m qu???n l?? c??c d???ch v??? back-end v?? trao ?????i d??? li???u
                      gi???a m??y ch??? v?? ng?????i d??ng. Tr???ng t??m ch??nh c???a b???n s??? l??
                      ph??t tri???n t???t c??? logic ph??a m??y ch???, ?????nh ngh??a v?? duy
                      tr?? c?? s??? d??? li???u trung t??m
                    </p>
                    <p>
                      Tr??n to??n m???ng l?????i c???a m??nh, ch??ng t??i c??? g???ng cung c???p
                      c??c d???ch v??? nhanh ch??ng, d???a tr??n hi???u su???t, t???p trung v??o
                      ng??nh v?? h??? tr??? c??ng ngh???, ph???n ??nh ki???n ??????th???c ???????c chia
                      s??? v??? c??c ng??nh c??ng nghi???p ?????a ph????ng v?? to??n c???u c??ng
                      nh?? kinh nghi???m c???a ch??ng t??i v??? m??i tr?????ng kinh doanh ???n
                      ?????.
                    </p>
                  </div>
                  <div className="jbd-details mb-3">
                    <h5>Y??u c???u:</h5>
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
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Understanding of MVC design pattern.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Expertise in PHP, MVC Frameworks and good
                              technology exposure of Codeigniter .
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Basic understanding of front-end technologies,
                              such as JavaScript, HTML5, and CSS3
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Good knowledge of relational databases, version
                              control tools and of developing web services.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Proficient understanding of code versioning tools,
                              such as Git.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Y??u c???u ???ng vi??n</h5>
                    <div className="other-details">
                      <div className="details ft-medium">
                        <label className="text-muted">Role</label>
                        <span className="text-dark">
                          Database Architect / Designer
                        </span>
                      </div>
                      <h5 className="ft-medium fs-md">k??? n??ng ch??nh</h5>
                      <ul className="p-0 skills_tag text-left">
                        <li>
                          <span className="px-2 py-1 medium skill-bg rounded text-dark">
                            Joomla
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Quy???n l???i</h5>
                    <div className="other-details">
                      <div className="details ft-medium">
                        <span className="text-dark">L????NG V?? TH?????NG:</span>
                        <h6 className="mb-0 ml-3 text-muted fs-sm">
                          - Strong core PHP Hands on experience.
                        </h6>
                        <span className="text-dark">????I NG??? & PH??C L???I::</span>
                        <h6 className="mb-0 ml-3 text-muted fs-sm">
                          - Strong core PHP Hands on experience.
                        </h6>
                        <span className="text-dark">CH??? ????? NGH??? PH??P:</span>
                        <h6 className="mb-0 ml-3 text-muted fs-sm">
                          - Strong core PHP Hands on experience.
                        </h6>
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
                          Save This Job
                        </a>
                        <a
                          href="#"
                          className="btn btn-md rounded theme-bg text-light fs-sm ft-medium"
                        >
                          Apply Job
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded px-3 py-4 mb-4">
                <div className="contenCTTD">
                  <div className="icongach"></div>
                  <h1>Vi???c l??m li??n quan</h1>
                </div>
                <div className="jbd-01 d-flex align-items-center justify-content-between">
                  <div className="jbd-flex d-flex align-items-center justify-content-start">
                    <div className="jbd-01-thumb">
                      <img
                        src="assets/img/c-1.png"
                        className="img-fluid"
                        width={90}
                      />
                    </div>
                    <div className="jbd-01-caption pl-3">
                      <div className="tbd-title">
                        <h4 className="mb-0 ft-medium fs-md">
                          Senior UI/UX Web Designer in USA
                        </h4>
                      </div>
                      <div className="jbl_location mb-3">
                        <span>
                          <i className="lni lni-map-marker mr-1" />
                          San Francisco, USA
                        </span>
                        <span className="medium ft-medium text-warning ml-3">
                          Part Time
                        </span>
                      </div>
                      <div className="jbl_info01">
                        <span className="px-2 py-1 ft-medium medium rounded theme-cl theme-bg-light mr-2">
                          Magento
                        </span>
                        <span className="px-2 py-1 ft-medium medium rounded text-danger bg-light-danger mr-2">
                          WordPress
                        </span>
                        <span className="px-2 py-1 ft-medium medium rounded text-purple bg-light-purple">
                          Laravel
                        </span>
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
                <div className="jbd-01 d-flex align-items-center justify-content-between">
                  <div className="jbd-flex d-flex align-items-center justify-content-start">
                    <div className="jbd-01-thumb">
                      <img
                        src="assets/img/c-1.png"
                        className="img-fluid"
                        width={90}
                      />
                    </div>
                    <div className="jbd-01-caption pl-3">
                      <div className="tbd-title">
                        <h4 className="mb-0 ft-medium fs-md">
                          Senior UI/UX Web Designer in USA
                        </h4>
                      </div>
                      <div className="jbl_location mb-3">
                        <span>
                          <i className="lni lni-map-marker mr-1" />
                          San Francisco, USA
                        </span>
                        <span className="medium ft-medium text-warning ml-3">
                          Part Time
                        </span>
                      </div>
                      <div className="jbl_info01">
                        <span className="px-2 py-1 ft-medium medium rounded theme-cl theme-bg-light mr-2">
                          Magento
                        </span>
                        <span className="px-2 py-1 ft-medium medium rounded text-danger bg-light-danger mr-2">
                          WordPress
                        </span>
                        <span className="px-2 py-1 ft-medium medium rounded text-purple bg-light-purple">
                          Laravel
                        </span>
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
            </div>
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="jb-apply-form bg-white rounded py-3 px-4 box-static">
                <h4 className="ft-medium fs-md mb-3">
                  B???n th??ch c??ng vi???c n??y
                </h4>
                <form className="_apply_form_form">
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      H??? v?? t??n
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      Email c???a b???n
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="themezhub@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      S??? ??i???n tho???i :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+91 245 256 2548"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark mb-1 ft-medium medium">
                      T???i l??n CV c???a b???n : <p>pdf</p>
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
      {/* ============================ Job Details End ================================== */}
    </div>
  );
};

export default Detail;
