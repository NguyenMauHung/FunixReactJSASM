import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const RenderSalary = ({ staff }) => {
    const formatDecimal = require("format-decimal");

    return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4" style={{ margin: "15px 0px" }}>
            <h5>{staff.name}</h5>
            <div style={{ paddingLeft: "25px", margin: "15px 0px" }}>Mã nhân viên : {staff.id}</div>
            <div style={{ paddingLeft: "25px", margin: "15px 0px" }}>Hệ số lương : {staff.salaryScale}</div>
            <div style={{ paddingLeft: "25px", margin: "15px 0px" }}>Số giờ làm thêm : {staff.overTime}</div>
            <div style={{ paddingLeft: "35px", margin: "15px 0px" }}>   Lương:{" "}
                {formatDecimal(staff.salary, {
                    decimal: ",",
                    thousands: ".",
                    precision: 0,
                })}{" "}</div>
        </div >

    );

};

function Salary({ salaryList, onSortSalary, onSortSalaryId, onCheckSalary }) {

    return (
        <div className="container" >
            <div className="row text-center">
                <h3 className="col-12">Bảng Lương Nhân Viên</h3>
                <h3 className="col-12">Sắp xếp nhân viên</h3>
                <ButtonGroup style={{ margin: "10px auto" }}>
                    <Button color={onCheckSalary === "name1" ? "success" : "primary"} onClick={() => onSortSalaryId(1)}>
                        <span className="fa fa-sort-alpha-asc pr-5">
                            Mã Nhân Viên Từ Thấp Đến Cao
                        </span>
                    </Button>
                    <Button color={onCheckSalary === "name-1" ? "success" : "primary"} onClick={() => onSortSalaryId(-1)}>
                        <span className="fa fa-sort-alpha-desc pr-5">
                            Mã Nhân Viên Từ Cao Xuống Thấp
                        </span>
                    </Button>
                    <Button color={onCheckSalary === "salary1" ? "success" : "primary"} onClick={() => onSortSalary(1)}>
                        <span class="fa fa-sort-amount-asc">Lương Nhân Viên Từ Thấp Đến Cao</span>
                    </Button>
                    <Button color={onCheckSalary === "salary-1" ? "success" : "primary"} onClick={() => onSortSalary(-1)}>
                        <span class="fa fa-sort-amount-desc">Lương Nhân Viên Từ Cao Xuống Thấp</span>
                    </Button>

                </ButtonGroup>
            </div>
            <div className="row">
                {salaryList.map((staff) => (
                    <RenderSalary staff={staff} />
                ))}
            </div>
        </div>


    );
}

export default Salary; 