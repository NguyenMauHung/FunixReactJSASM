import React, { Component } from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponents';
import Staff from './StaffComponents';
import Departments from './DepartmentsComponent';
import Salary from './SalaryComponent';
import StaffDetail from './StaffDetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

class Main extends Component {

    StaffWithId = ({ match }) => {
        var { staffList } = this.props;
        return (
            <StaffDetail staffDetail={staffList.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
            />
        );
    }

    render() {

        var { staffList } = this.props;

        // Add Salary to Object Staffs
        staffList.map((staff) => {
            let salary = staff.salaryScale * 3000000 + staff.overTime * 200000;
            staff.salary = salary;
        })

        // Render Staff Detail

        return (
            <div>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={() => <Staff />} />
                        <Route path="/staffs" component={() => <Staff />} exact />
                        <Route path="/staffs/:staffId" component={this.StaffWithId} />
                        <Route path="/departments" component={() => <Departments />} exact />
                        <Route path="/salary" component={() => <Salary />} exact />
                        <Redirect from="/home" to="/" exact />
                    </Switch>
                    <Footer />
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        staffList: state.staffList
    }
}

export default withRouter(connect(mapStateToProps, null)(Main));