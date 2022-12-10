import React from 'react'
import Footer from '../../../layout/DefaultLayout/Footer/Footer'
import Header from '../../../layout/DefaultLayout/Header/Header'
import './cv.css'

type Props = {}

const Cv = (props: Props) => {
    return (
        <div >
            <Header />
            <div className='box container-fluid row'>
                <div className='col-8 p-5'>
                    <div className=' container-fuld'>
                        <div className=' shadow p-3 mb-5 bg-white rounded '>
                            <div className="box-title box-cv container p-2 ">
                                <div className="text-create ">
                                    <button className="btn btn-info rounded-pill">Tạo
                                        mới</button>
                                </div>
                                <h2 className="box-name"><span>Quản lý CV</span></h2>
                            </div>
                            <div className="row justify-content-md-center">
                                <div className="col-lg-5 card-body ">
                                    <div className="hover hover-2 text-white rounded"><img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg" />
                                        <div className="hover-overlay" />
                                        <div className="hover-2-content px-5 py-4">
                                            <div className="hover-2-description ">
                                                <h6 className="text-left px-3 py-4 text-white">Được apdate ngày
                                                </h6>
                                                <a href="{{ route('quan-ly-cv.destroy', $item->id) }}" className="btn btn-danger text-white" style={{ marginLeft: 5 }}><span className="material-symbols-outlined">
                                                    delete
                                                </span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 card-body">
                                    <div className="hover hover-2 text-white rounded"><img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg" />
                                        <div className="hover-overlay" />
                                        <div className="hover-2-content px-5 py-4">
                                            <div className="hover-2-description ">
                                                <h6 className="text-left px-3 py-4">Được apdate ngày
                                                </h6>
                                                <a href="{{ route('quan-ly-cv.destroy', $item->id) }}" className="btn btn-search" style={{ marginLeft: 5 }}><span className="material-symbols-outlined">
                                                    delete
                                                </span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='job-fit show-dow box-group'>
                        <div className="box-group-header">
                            <div className="box-group-title mb-12px">
                                Việc làm phù hợp với bạn
                            </div>
                            <p>Để nhận được gợi ý việc làm chính xác hơn, hãy <a target="_blank" href="https://www.topcv.vn/cai-dat-goi-y-viec-lam" className="text-highlight">tùy chỉnh cài đặt gợi ý việc làm</a>.</p>
                        </div>
                        <div className="box-group-body">
                            <div className="suggestion-jobs">
                                <div id="suggestion_job_511163" data-job-id={511163} data-job-position="item_suggest_job_511163" data-box="SuggestJobBox" data-jr-id="realtime-v2.4::1670524392409-00ff4f::4ee1d8ffc8c34a60b252dcf8490e9571::3" className="item-job job-ta job-item  bg-highlight ">
                                    <div className="company-logo">
                                        <img src="https://cdn.topcv.vn/48/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg" className="w-100" alt="Tổ chức Giáo dục và Đào tạo Apollo Việt Nam" title="Chuyên Viên Tư Vấn (15-20 Triệu/Tháng ) - Quận 7(HCM), Khu Vực Hà Nội" />
                                    </div>
                                    <div className="company-info">
                                        <h4 className="title">
                                            <a data-toggle="tooltip" data-placement="top" data-container="body" className=" underline-box-job " href="https://www.topcv.vn/viec-lam/chuyen-vien-tu-van-15-20-trieu-thang-quan-7hcm-khu-vuc-ha-noi/511163.html?ta_source=JobSuggestInManagerCV&jr_i=realtime-v2.4%3A%3A1670524392409-00ff4f%3A%3A4ee1d8ffc8c34a60b252dcf8490e9571%3A%3A3" data-original-title="Chuyên Viên Tư Vấn (15-20 Triệu/Tháng ) - Quận 7(HCM), Khu Vực Hà Nội">Chuyên Viên Tư Vấn (15-20 Triệu/Tháng ) - Quận 7(HCM), Khu Vực Hà Nội</a>
                                            <span className="icon-verified-employer level-five">
                                                <i className="fa-solid fa-circle-check" data-toggle="tooltip" data-html="true" data-placement="top" data-original-title="
  <b>Nhà tuyển dụng</b><span> đã được xác thực:</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã xác thực email tên miền công ty</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã xác thực số điện thoại</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã được duyệt Giấy phép kinh doanh</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Tài khoản NTD được tạo tối thiểu 6 tháng</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Chưa có lịch sử bị báo cáo tin đăng</span><br>" /></span>
                                        </h4>
                                        <h5 className="company-title">
                                            <a href="https://www.topcv.vn/cong-ty/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam/9681.html">Tổ chức Giáo dục và Đào tạo Apollo Việt Nam</a>
                                        </h5>
                                        <div className="box-label">
                                            <label className="salary">7-20 triệu</label>
                                            <label className="address" data-toggle="tooltip" data-html="true" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hà Nội: Bắc Từ Liêm, Long Biên, Tây Hồ, Nam Từ Liêm, Thanh Xuân, Hai Bà Trưng, Đống Đa, Hoàng Mai<br/>Hồ Chí Minh</p>">Hà Nội, Hồ Chí Minh</label>
                                            <label className="time">1 năm trước</label>
                                        </div>
                                    </div>
                                    <div className="action-job">
                                        <p>
                                            Còn <strong>22</strong> ngày để ứng tuyển
                                        </p>
                                        <div className="label-vip">
                                        </div>
                                        <div className="action">
                                            <div className="save-job">
                                                <div id="box-save-job-511163" className="box-save-job  box-save-job-hover   job-notsave " style={{ width: 23 }}>
                                                    <a href="javascript:void(0)" className="btn-save save" data-id={511163} data-title="Chuyên Viên Tư Vấn (15-20 Triệu/Tháng ) - Quận 7(HCM), Khu Vực Hà Nội">
                                                        <span id="save-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-light fa-heart" />
                                                    </a>
                                                    <a href="javascript:void(0)" className="btn-unsave unsave text-highlight" data-toggle="tooltip" data-id={511163} data-title="Chuyên Viên Tư Vấn (15-20 Triệu/Tháng ) - Quận 7(HCM), Khu Vực Hà Nội" data-placement="top" data-container="body" data-original-title="Bỏ lưu">
                                                        <span id="unsave-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-solid fa-heart" />
                                                    </a>
                                                </div> </div>
                                            <div className="to-trash">
                                                <button className="btn btn-trash btn-ignore-job-suggest" data-job-id={511163}>
                                                    <i className="fa-light fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="suggestion_job_283299" data-job-id={283299} data-job-position="item_suggest_job_283299" data-box="SuggestJobBox" data-jr-id="realtime-v2.4::1670524392409-00ff4f::0866390167664ab48e9406a0aaba9974::4" className="item-job job-ta job-item  bg-highlight ">
                                    <div className="company-logo">
                                        <img src="https://cdn.topcv.vn/48/company_logos/tap-doan-y-te-amv-group-5f97a57aa3b37.jpg" className="w-100" alt="Tập Đoàn Y Tế AMV GROUP" title="Nhân Viên Kinh Doanh/ Trình Dược Viên Miền Bắc (10 Triệu Trở Lên)" />
                                    </div>
                                    <div className="company-info">
                                        <h4 className="title">
                                            <a data-toggle="tooltip" title data-placement="top" data-container="body" className=" underline-box-job " href="https://www.topcv.vn/viec-lam/nhan-vien-kinh-doanh-trinh-duoc-vien-mien-bac-10-trieu-tro-len/283299.html?ta_source=JobSuggestInManagerCV&jr_i=realtime-v2.4%3A%3A1670524392409-00ff4f%3A%3A0866390167664ab48e9406a0aaba9974%3A%3A4" data-original-title="Nhân Viên Kinh Doanh/ Trình Dược Viên Miền Bắc (10 Triệu Trở Lên)">Nhân Viên Kinh Doanh/ Trình Dược Viên Miền Bắc (10 Triệu Trở Lên)</a>
                                            <span className="icon-verified-employer level-five">
                                                <i className="fa-solid fa-circle-check" data-toggle="tooltip" data-html="true" data-placement="top" data-original-title="
  <b>Nhà tuyển dụng</b><span> đã được xác thực:</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã xác thực email tên miền công ty</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã xác thực số điện thoại</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã được duyệt Giấy phép kinh doanh</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Tài khoản NTD được tạo tối thiểu 6 tháng</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Chưa có lịch sử bị báo cáo tin đăng</span><br>" /></span>
                                        </h4>
                                        <h5 className="company-title">
                                            <a href="https://www.topcv.vn/cong-ty/tap-doan-y-te-amv-group/932.html">Tập Đoàn Y Tế AMV GROUP</a>
                                        </h5>
                                        <div className="box-label">
                                            <label className="salary">Trên 10 triệu</label>
                                            <label className="address" data-toggle="tooltip" data-html="true" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hà Nội<br/>Hà Nam<br/>Thái Nguyên<br/>Bắc Kạn<br/>Lào Cai: TP Lào Cai<br/>Lạng Sơn<br/>Hải Phòng<br/>Quảng Ninh<br/>Nam Định<br/>Hoà Bình</p>">Hà Nam &amp; 9 nơi khác</label>
                                            <label className="time">2 năm trước</label>
                                        </div>
                                    </div>
                                    <div className="action-job">
                                        <p>
                                            Còn <strong>68</strong> ngày để ứng tuyển
                                        </p>
                                        <div className="label-vip">
                                        </div>
                                        <div className="action">
                                            <div className="save-job">
                                                <div id="box-save-job-283299" className="box-save-job  box-save-job-hover   job-notsave " style={{ width: 23 }}>
                                                    <a href="javascript:void(0)" className="btn-save save" data-id={283299} data-title="Nhân Viên Kinh Doanh/ Trình Dược Viên Miền Bắc (10 Triệu Trở Lên)">
                                                        <span id="save-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-light fa-heart" />
                                                    </a>
                                                    <a href="javascript:void(0)" className="btn-unsave unsave text-highlight" data-toggle="tooltip" data-id={283299} data-title="Nhân Viên Kinh Doanh/ Trình Dược Viên Miền Bắc (10 Triệu Trở Lên)" data-placement="top" data-container="body" data-original-title="Bỏ lưu">
                                                        <span id="unsave-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-solid fa-heart" />
                                                    </a>
                                                </div> </div>
                                            <div className="to-trash">
                                                <button className="btn btn-trash btn-ignore-job-suggest" data-job-id={283299}>
                                                    <i className="fa-light fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="suggestion_job_169011" data-job-id={169011} data-job-position="item_suggest_job_169011" data-box="SuggestJobBox" data-jr-id="realtime-v2.4::1670524392409-00ff4f::7bf0e9842710416b85fbdacdde3946e6::14" className="item-job job-ta job-item ">
                                    <div className="company-logo">
                                        <img src="https://cdn.topcv.vn/48/company_logos/j9F3hJ7MESa3ADdJPCrolITdoxNeu5Kf_1655366428____bcf2ded015c2fa7b6cc03e669098a04a.png" className="w-100" alt="CÔNG TY CỔ PHẦN CÔNG NGHỆ DU LỊCH BESTPRICE" title="Chuyên Viên Marketing Online" />
                                    </div>
                                    <div className="company-info">
                                        <h4 className="title">
                                            <a data-toggle="tooltip" data-placement="top" data-container="body" className=" underline-box-job " href="https://www.topcv.vn/viec-lam/chuyen-vien-marketing-online/169011.html?ta_source=JobSuggestInManagerCV&jr_i=realtime-v2.4%3A%3A1670524392409-00ff4f%3A%3A7bf0e9842710416b85fbdacdde3946e6%3A%3A14" data-original-title="Chuyên Viên Marketing Online">Chuyên Viên Marketing Online</a>
                                        </h4>
                                        <h5 className="company-title">
                                            <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-cong-nghe-du-lich-bestprice/29195.html">CÔNG TY CỔ PHẦN CÔNG NGHỆ DU LỊCH BESTPRICE</a>
                                        </h5>
                                        <div className="box-label">
                                            <label className="salary">8-12 triệu</label>
                                            <label className="address" data-toggle="tooltip" data-html="true" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hà Nội: Hoàn Kiếm</p>">Hà Nội</label>
                                            <label className="time">3 năm trước</label>
                                        </div>
                                    </div>
                                    <div className="action-job">
                                        <p>
                                            Còn <strong>5</strong> ngày để ứng tuyển
                                        </p>
                                        <div className="label-vip">
                                        </div>
                                        <div className="action">
                                            <div className="save-job">
                                                <div id="box-save-job-169011" className="box-save-job  box-save-job-hover   job-notsave " style={{ width: 23 }}>
                                                    <a href="javascript:void(0)" className="btn-save save" data-id={169011} data-title="Chuyên Viên Marketing Online">
                                                        <span id="save-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-light fa-heart" />
                                                    </a>
                                                    <a href="javascript:void(0)" className="btn-unsave unsave text-highlight" data-toggle="tooltip" data-id={169011} data-title="Chuyên Viên Marketing Online" data-placement="top" data-container="body" data-original-title="Bỏ lưu">
                                                        <span id="unsave-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-solid fa-heart" />
                                                    </a>
                                                </div> </div>
                                            <div className="to-trash">
                                                <button className="btn btn-trash btn-ignore-job-suggest" data-job-id={169011}>
                                                    <i className="fa-light fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="suggestion_job_819714" data-job-id={819714} data-job-position="item_suggest_job_819714" data-box="SuggestJobBox" data-jr-id="realtime-v2.4::1670524392409-00ff4f::a1c0f902baf149cc83a52bf16e879ac1::15" className="item-job job-ta job-item ">
                                    <div className="company-logo">
                                        <img src="https://cdn.topcv.vn/48/company_logos/qw9dD3RzKpXR1Qj4g5eFpWkPxjC7cCPK_1654653182____d6042078c9f12f9a159f10ce83357c97.jpg" className="w-100" alt="Công ty TNHH Phát triển Aroma" title="Chuyên Viên Marketing (Content, Landing Page)" />
                                    </div>
                                    <div className="company-info">
                                        <h4 className="title">
                                            <a data-toggle="tooltip" title data-placement="top" data-container="body" className=" underline-box-job " href="https://www.topcv.vn/viec-lam/chuyen-vien-marketing-content-landing-page/819714.html?ta_source=JobSuggestInManagerCV&jr_i=realtime-v2.4%3A%3A1670524392409-00ff4f%3A%3Aa1c0f902baf149cc83a52bf16e879ac1%3A%3A15" data-original-title="Chuyên Viên Marketing (Content, Landing Page)">Chuyên Viên Marketing (Content, Landing Page)</a>
                                        </h4>
                                        <h5 className="company-title">
                                            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-phat-trien-aroma/105512.html">Công ty TNHH Phát triển Aroma</a>
                                        </h5>
                                        <div className="box-label">
                                            <label className="salary">7-14 triệu</label>
                                            <label className="address" data-toggle="tooltip" data-html="true" title data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hà Nội: Đống Đa</p>">Hà Nội</label>
                                            <label className="time">2 tháng trước</label>
                                        </div>
                                    </div>
                                    <div className="action-job">
                                        <p>
                                            Còn <strong>27</strong> ngày để ứng tuyển
                                        </p>
                                        <div className="label-vip">
                                        </div>
                                        <div className="action">
                                            <div className="save-job">
                                                <div id="box-save-job-819714" className="box-save-job  box-save-job-hover   job-notsave " style={{ width: 23 }}>
                                                    <a href="javascript:void(0)" className="btn-save save" data-id={819714} data-title="Chuyên Viên Marketing (Content, Landing Page)">
                                                        <span id="save-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-light fa-heart" />
                                                    </a>
                                                    <a href="javascript:void(0)" className="btn-unsave unsave text-highlight" data-toggle="tooltip" data-id={819714} data-title="Chuyên Viên Marketing (Content, Landing Page)" data-placement="top" data-container="body" data-original-title="Bỏ lưu">
                                                        <span id="unsave-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-solid fa-heart" />
                                                    </a>
                                                </div> </div>
                                            <div className="to-trash">
                                                <button className="btn btn-trash btn-ignore-job-suggest" data-job-id={819714}>
                                                    <i className="fa-light fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="suggestion_job_823503" data-job-id={823503} data-job-position="item_suggest_job_823503" data-box="SuggestJobBox" data-jr-id="realtime-v2.4::1670524392409-00ff4f::56f98dad5b904b5ab712e0ed4087606d::16" className="item-job job-ta job-item ">
                                    <div className="company-logo">
                                        <img src="https://cdn.topcv.vn/48/company_logos/VLuTWvExCXwU5L22ABJ3MdFzPVr2R8pA_1657850480____bf0e76e0ebd6d0d1e0354967ab296098.png" className="w-100" alt="Công Ty Cổ Phần Vitamin Shoppe Việt Nam" title="Chuyên Viên Marketing (Marketing Executive)" />
                                    </div>
                                    <div className="company-info">
                                        <h4 className="title">
                                            <a data-toggle="tooltip" title data-placement="top" data-container="body" className=" underline-box-job " href="https://www.topcv.vn/viec-lam/chuyen-vien-marketing-marketing-executive/823503.html?ta_source=JobSuggestInManagerCV&jr_i=realtime-v2.4%3A%3A1670524392409-00ff4f%3A%3A56f98dad5b904b5ab712e0ed4087606d%3A%3A16" data-original-title="Chuyên Viên Marketing (Marketing Executive)">Chuyên Viên Marketing (Marketing Executive)</a>
                                        </h4>
                                        <h5 className="company-title">
                                            <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-vitamin-shoppe-viet-nam/110876.html">Công Ty Cổ Phần Vitamin Shoppe Việt Nam</a>
                                        </h5>
                                        <div className="box-label">
                                            <label className="salary">10-13 triệu</label>
                                            <label className="address" data-toggle="tooltip" data-html="true" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hà Nội: Đống Đa</p>">Hà Nội</label>
                                            <label className="time">2 tháng trước</label>
                                        </div>
                                    </div>
                                    <div className="action-job">
                                        <p>
                                            Còn <strong>22</strong> ngày để ứng tuyển
                                        </p>
                                        <div className="label-vip">
                                        </div>
                                        <div className="action">
                                            <div className="save-job">
                                                <div id="box-save-job-823503" className="box-save-job  box-save-job-hover   job-notsave " style={{ width: 23 }}>
                                                    <a href="javascript:void(0)" className="btn-save save" data-id={823503} data-title="Chuyên Viên Marketing (Marketing Executive)">
                                                        <span id="save-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-light fa-heart" />
                                                    </a>
                                                    <a href="javascript:void(0)" className="btn-unsave unsave text-highlight" data-toggle="tooltip" data-id={823503} data-title="Chuyên Viên Marketing (Marketing Executive)" data-placement="top" data-container="body" data-original-title="Bỏ lưu">
                                                        <span id="unsave-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-solid fa-heart" />
                                                    </a>
                                                </div> </div>
                                            <div className="to-trash">
                                                <button className="btn btn-trash btn-ignore-job-suggest" data-job-id={823503}>
                                                    <i className="fa-light fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="suggestion_job_443718" data-job-id={443718} data-job-position="item_suggest_job_443718" data-box="SuggestJobBox" data-jr-id="realtime-v2.4::1670524392409-00ff4f::ceb06dee5a1c4dceafde25783d4a54c2::20" className="item-job job-ta job-item ">
                                    <div className="company-logo">
                                        <img src="https://cdn.topcv.vn/48/company_logos/alphaway-technology-5caab0647b064.jpg" className="w-100" alt="Alphaway Technology" title="Chuyên Viên Truyền Thông Nội Bộ" />
                                    </div>
                                    <div className="company-info">
                                        <h4 className="title">
                                            <a data-toggle="tooltip" data-placement="top" data-container="body" className=" underline-box-job " href="https://www.topcv.vn/viec-lam/chuyen-vien-truyen-thong-noi-bo/443718.html?ta_source=JobSuggestInManagerCV&jr_i=realtime-v2.4%3A%3A1670524392409-00ff4f%3A%3Aceb06dee5a1c4dceafde25783d4a54c2%3A%3A20" data-original-title="Chuyên Viên Truyền Thông Nội Bộ">Chuyên Viên Truyền Thông Nội Bộ</a>
                                            <span className="icon-verified-employer level-five">
                                                <i className="fa-solid fa-circle-check" data-toggle="tooltip" data-html="true" title data-placement="top" data-original-title="
  <b>Nhà tuyển dụng</b><span> đã được xác thực:</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã xác thực email tên miền công ty</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã xác thực số điện thoại</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Đã được duyệt Giấy phép kinh doanh</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Tài khoản NTD được tạo tối thiểu 6 tháng</span><br>
  <span><i class='fa-solid fa-circle-check color-green'></i> Chưa có lịch sử bị báo cáo tin đăng</span><br>" /></span>
                                        </h4>
                                        <h5 className="company-title">
                                            <a href="https://www.topcv.vn/cong-ty/alphaway-technology/19580.html">Alphaway Technology</a>
                                        </h5>
                                        <div className="box-label">
                                            <label className="salary">Thoả thuận</label>
                                            <label className="address" data-toggle="tooltip" data-html="true" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hà Nội: Thanh Xuân</p>">Hà Nội</label>
                                            <label className="time">1 năm trước</label>
                                        </div>
                                    </div>
                                    <div className="action-job">
                                        <p>
                                            Còn <strong>22</strong> ngày để ứng tuyển
                                        </p>
                                        <div className="label-vip">
                                        </div>
                                        <div className="action">
                                            <div className="save-job">
                                                <div id="box-save-job-443718" className="box-save-job  box-save-job-hover   job-notsave " style={{ width: 23 }}>
                                                    <a href="javascript:void(0)" className="btn-save save" data-id={443718} data-title="Chuyên Viên Truyền Thông Nội Bộ">
                                                        <span id="save-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-light fa-heart" />
                                                    </a>
                                                    <a href="javascript:void(0)" className="btn-unsave unsave text-highlight" data-toggle="tooltip" data-id={443718} data-title="Chuyên Viên Truyền Thông Nội Bộ" data-placement="top" data-container="body" data-original-title="Bỏ lưu">
                                                        <span id="unsave-job-loading" style={{ display: 'none' }}>
                                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ width: 20 }} />
                                                        </span>
                                                        <i className="fa-solid fa-heart" />
                                                    </a>
                                                </div> </div>
                                            <div className="to-trash">
                                                <button className="btn btn-trash btn-ignore-job-suggest" data-job-id={443718}>
                                                    <i className="fa-light fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <a href="https://www.topcv.vn/viec-lam-phu-hop" className="btn btn-suggestion-more btn-primary-hover" target="_blank">
                                    Xem tất cả việc làm phù hợp
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-4 p-5'>
                    <div className="conten1 shadow p-3 mb-5 bg-white rounded fl-10 ">
                        <div className='d-flex'>
                            <div>

                                <img className='' src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559672/cld-sample-2.jpg" alt="Avatar" />
                            </div>
                            <div className='pl-3'>
                                <p>Chào mừng tộc trở lại</p>
                                <p>Coder người tày</p>
                                <div className="account-type btn btn-secondary ">
                                    <span >
                                        Tài khoản đã xác thực
                                    </span>
                                </div>
                                <div className="  mt-2">
                                    <span>
                                        <a href="" className="btn btn btn-success vip">Nâng cấp tài khoản</a>
                                    </span>

                                </div>


                            </div>
                        </div>
                        <div className='conten2 p-4'>
                            <div className="row">

                            </div>

                            <p>Bật tìm việc để nhận được nhiều cơ hội việc làm tốt nhất từ TopCV.</p>
                            <p>
                                <div className='row '>
                                    <div className='col-sm-6 '>
                                        <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
                                        &nbsp; <label htmlFor="html">CV online</label><br />
                                    </div>
                                    <div className='col-sm-6'>
                                        &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                                        &nbsp; <label htmlFor="html">It Word CV</label><br />
                                    </div>

                                </div>
                                <p>Cho phép các Nhà tuyển dụng đã được TopCV xác thực xem CV Online để có thể liên hệ với bạn.</p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cv