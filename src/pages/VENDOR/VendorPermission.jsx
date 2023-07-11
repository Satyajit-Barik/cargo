import React from 'react'
import { Link } from 'react-router-dom'

const VendorPermission = () => {
    return (
        <>
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18"> Role-Based Permission</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/vendor">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item"><Link to="/vendors">Vendors</Link>
                                            </li>
                                            <li className="breadcrumb-item active"> Role-Based Permission</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="ml-auto float-end">
                                            <Link to="/vendors"
                                                className="btn btn-secondary btn-sm btn-rounded waves-effect waves-light"><i
                                                    className="dripicons-backspace me-1"></i> Back</Link>
                                        </div>
                                        <h4 className="card-title mb-4">Add Permissions</h4>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Role</th>
                                                    <th className="text-center">Dashboard</th>
                                                    <th className="text-center">Can Book</th>
                                                    <th className="text-center">Basic Reportingr</th>
                                                    <th className="text-center">Advance Reporting</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="my-auto">
                                                            Super Admin
                                                        </h6>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" defaultChecked />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" defaultChecked />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="my-auto">
                                                            Marketing
                                                        </h6>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="my-auto">
                                                            Revenue
                                                        </h6>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="container_check">
                                                            <input type="checkbox" name="Returned" value="Returned"
                                                                className="required" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}

                {/* <!-- Transaction Modal --> */}
                {/* <div className="modal fade" id="ErrorModal" tabindex="-1" role="dialog" aria-labelledby="ErrorModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="ErrorModalLabel">Device Error</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive">
                                            <table className="table align-middle mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th className="align-middle">Serial Number</th>
                                                        <th className="align-middle">Battery Type</th>
                                                        <th className="align-middle">Cell Chenistry</th>
                                                        <th className="align-middle">No. of cells (Series)</th>
                                                        <th className="align-middle">No. of cells (Parallel)</th>
                                                        <th className="align-middle">Cell Capacity</th>
                                                        <th className="align-middle">GPS Enabled/Not</th>
                                                        <th className="align-middle">Warrenty Period</th>
                                                        <th className="align-middle">Date of Manufacturing</th>
                                                        <th className="align-middle">Assigned Mobile Number</th>
                                                        <th className="align-middle" style={{ width: "180px" }}>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>AITPL/01/221221/0006</td>
                                                        <td>Industrial</td>
                                                        <td>Liion</td>
                                                        <td>18</td>
                                                        <td>18</td>
                                                        <td></td>
                                                        <td><span className="badge bg-success">Yes</span></td>
                                                        <td>12month</td>
                                                        <td>12/04/2022</td>
                                                        <td>9830098300 </td>
                                                        <td>
                                                            <Link to="device-analys.html" title="View Details"><i
                                                                className="mdi mdi-file-eye font-size-24 me-2 text-info"></i></Link>
                                                            <Link to="#" title="Edit Battery Details"><i
                                                                className="mdi mdi-lead-pencil font-size-24 me-2"></i></Link>
                                                            <Link to="device-config-details.html"
                                                                title="Device Configuration"><i
                                                                    className="mdi mdi-application-cog font-size-24 text-danger"></i></Link>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>AITPL/01/221221/0006</td>
                                                        <td>Industrial</td>
                                                        <td>Liion</td>
                                                        <td>18</td>
                                                        <td>18</td>
                                                        <td></td>
                                                        <td><span className="badge bg-danger">No</span></td>
                                                        <td>12month</td>
                                                        <td>12/04/2022</td>
                                                        <td>9830098300 </td>
                                                        <td>
                                                            <Link to="device-analys.html" title="View Details"><i
                                                                className="mdi mdi-file-eye font-size-24 me-2 text-info"></i></Link>
                                                            <Link to="#" title="Edit Battery Details"><i
                                                                className="mdi mdi-lead-pencil font-size-24 me-2"></i></Link>
                                                            <Link to="device-config-details.html"
                                                                title="Device Configuration"><i
                                                                    className="mdi mdi-application-cog font-size-24 text-danger"></i></Link>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>AITPL/01/221221/0006</td>
                                                        <td>Industrial</td>
                                                        <td>Liion</td>
                                                        <td>18</td>
                                                        <td>18</td>
                                                        <td></td>
                                                        <td><span className="badge bg-success">Yes</span></td>
                                                        <td>12month</td>
                                                        <td>12/04/2022</td>
                                                        <td>9830098300 </td>
                                                        <td>
                                                            <Link to="device-analys.html" title="View Details"><i
                                                                className="mdi mdi-file-eye font-size-24 me-2 text-info"></i></Link>
                                                            <Link to="#" title="Edit Battery Details"><i
                                                                className="mdi mdi-lead-pencil font-size-24 me-2"></i></Link>
                                                            <Link to="device-config-details.html"
                                                                title="Device Configuration"><i
                                                                    className="mdi mdi-application-cog font-size-24 text-danger"></i></Link>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- end modal --> */}

                {/* <!-- subscribeModal --> */}
                {/* <div className="modal fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel"
                    aria-hidden="true" style={{ display: "none" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mb-4">
                                    <div className="avatar-md mx-auto mb-4">
                                        <div className="avatar-title bg-light rounded-circle text-primary h1">
                                            <i className="mdi mdi-email-open"></i>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-xl-10">
                                            <h4 className="text-primary">Subscribe !</h4>
                                            <p className="text-muted font-size-14 mb-4">Subscribe our newletter and get
                                                notification to stay update.</p>

                                            <div className="input-group bg-light rounded">
                                                <input type="email" className="form-control bg-transparent border-0"
                                                    placeholder="Enter Email address" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" />

                                                <button className="btn btn-primary" type="button" id="button-addon2">
                                                    <i className="bx bxs-paper-plane"></i>
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- end modal --> */}
            </div>
        </>
    )
}

export default VendorPermission