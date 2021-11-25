import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CodesProvider {


  public BASE_URL_PROD="http://127.0.0.1:8000/api/";
  public BASE_URL_SERV_1="https://www.manpuriaproducts.org/saarthi/public/index.php/api/";
  public BASE_URL_SERV_2="https://api.fastdeliveryindia.com/public/index.php/api/";
  public BASE_URL="https://www.atkindia.com/public/index.php/api/";

  public BASE_URL_REPORT="http://report.atkindia.com/public/api/";
  public BASE_URL_REPORT_DOWNLOAD="http://report.atkindia.com/public/";

  public BASE_URL_REPORT_TEST="http://127.0.0.1:8001/api/";
  public BASE_URL_REPORT_DOWNLOAD_TEST="http://127.0.0.1:8001/";


  public GET_REGISTRATION_INFO=this.BASE_URL+"getregistrationinfo";
  public SAVE_REGISTRATION_INFO=this.BASE_URL+"saveregistrationinfo";
  public LOGIN=this.BASE_URL+"login";

  public SAVE_VEHICLE_DETAILS=this.BASE_URL+"savevehicledetails";
  public UPDATE_VEHICLE_DETAILS=this.BASE_URL+"updatevehiclebyvehicleid";
  public DELETE_VEHICLE_DETAILS=this.BASE_URL+"deletevehiclebyid";
  public UPDATE_WORK_DETAILS=this.BASE_URL+"updatevehiclestatus";
  public GET_UPDATE_WORK_DETAILS=this.BASE_URL+"getupdatevehiclestatus";
  public SAVE_WORK_PART=this.BASE_URL+"saveworkpart";
  public GET_WORK_PART=this.BASE_URL+"getworkpart";
  public UPDATE_WORK_UPDATE=this.BASE_URL+"updatevehiclestatusbyid";
  public UPDATE_WORK_DELETE=this.BASE_URL+"deletevehiclestatusbyid";
  public GET_VEHICLE_DETAILS = this.BASE_URL+"getvehicledetailsbysrthid";

  public UPDATE_PROFILE = this.BASE_URL+"updateprofile";
  public GET_PROFILE = this.BASE_URL+"getprofile";


  public SAVE_REASON=this.BASE_URL+"savedriverreason";
  public GET_REASON=this.BASE_URL+"getdriverreason";
  public DELETE_REASON = this.BASE_URL+"deletedriverreason";

  public ADD_EXPENSE_BILL=this.BASE_URL+"adddriverexpensebill";
  public GET_EXPENSE_BILL_BY_SRTH_ID=this.BASE_URL+"getdriverexpensebillbysrthid";
  public GET_EXPENSE_BILL_BY_WORKER_ID=this.BASE_URL+"getdriverexpensebillbyworkerid";

  public GET_EXPENSE_BILL_BY_WORKER_ID_UNPAID=this.BASE_URL+"getdriverexpensebillbyworkeridunpaid";

  public DELETE_BILL_EXPENSE = this.BASE_URL+"deletebillbybillid";
  public UPDATE_BILL_EXPENSE = this.BASE_URL+"updatebillbybillid";

  public DELETE_PAYMENT = this.BASE_URL+"deletepayment";
  public UPDATE_PAYMENT = this.BASE_URL+"editpayment";
  
  public UPDATE_VEHICLE_DRIVER=this.BASE_URL+"updatevehicledriver";

  public GET_DISPLAY_BILL_BY_WORKER_ID=this.BASE_URL+"getdisplaybillbyworkerid";
  
  public CREATE_WORKER=this.BASE_URL+"createworker";
  public GET_WORKER=this.BASE_URL+"getworkerbysrrthid";
  public UPDATE_WORKER=this.BASE_URL+"updateworker";
  public DELETE_WORKER=this.BASE_URL+"deleteworker";

  public CREATE_PAYMENT=this.BASE_URL+"createpayment";

  public GET_VEHICLE_BY_WORKER_ID = this.BASE_URL+"getvehiclehistorybyworkerid";

  public GET_BILL_DETAILS_BY_BILL_ID = this.BASE_URL + "getbilldetailsbybillid";


  public SAVE_COMPLAINTS=this.BASE_URL+"savecomplaints";
  public GET_COMPLAINTS=this.BASE_URL+"getcomplaintsbysrthid";
  public UPDATE_COMPLAINTS = this.BASE_URL + "updatecomplaintsbycomplaintid";
  public SOLVE_COMPLAINTS = this.BASE_URL + "solvecomplaintbyid";
  public DELETE_COMPLAINTS=this.BASE_URL+"deletecomplaintbyid";

  public UPDATE_DOCUMENT_BILL=this.BASE_URL+"updatedocumentbill";

  public SAVE_PROBLEM=this.BASE_URL+"saveproblem";
  public GET_PROBLEM=this.BASE_URL+"getproblembysrthid";

  public SAVE_PROBLEM_PARTS=this.BASE_URL+"saveproblemparts";
  public GET_PROBLEM_PARTS=this.BASE_URL+"getbillproblemparts";

  public UPDATE_DOCUMENT_INFO = this.BASE_URL+"updatedocumentinfo";
  public GET_DOCUMENT_INFO = this.BASE_URL+"getdocumentinfo";
  public GET_DOCUMENT_INFO_BY_SRTH_ID=this.BASE_URL+"getdocumentinfobysrthid";


  public GET_LAST_BILL_ID = this.BASE_URL+"getlastbillid";

  public SAVE_IMAGE=this.BASE_URL+"saveimage";
  public GET_IMAGE_BY_IMAGE_ID=this.BASE_URL+"getimagebyimageid";
  public GET_IMAGE_BY_WORKER_TYPE=this.BASE_URL+"getimagebyworkertype";
  public GET_IMAGE_BY_TYPE_WORKER_TYPE=this.BASE_URL+"getimagebytypeworkertype";


  public SAVE_EXCHANGE_PART=this.BASE_URL+"savevehicleexchangeinfo";
  public GET_EXCHANGE_PART=this.BASE_URL+"getvehicleexchangeinfo";

  public GET_BILL_FOR_VEHICLE=this.BASE_URL+"getallbillsforvehicle";
  public GET_BILL_SUMMARY = this.BASE_URL+"getbillsummary";

  public GET_IMAGES_BY_SRTH_ID=this.BASE_URL+"getimagebysrthid";


  public GET_LAST_COMPLAINTS_ID=this.BASE_URL+"getlastcomplaintid";


  public GET_FUEL_PRICES="https://fuelprice-api-india.herokuapp.com/price/West-Bengal/KOLKATA";



  //Reports

  public SHOP_BILL_REPORT = this.BASE_URL_REPORT + "shopbillreportweb";
  public SHOP_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "shopbillreport";
  public SHOP_BUY_REPORT = this.BASE_URL_REPORT + "shopbuyreportweb";
  public SHOP_BUY_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "shopbuyreportapi";


  public MECHANIC_BILL_REPORT = this.BASE_URL_REPORT + "mechanicbillreportapi";
  public MECHANIC_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "mechanicbillreportweb";
  public MECHANIC_BUY_REPORT = this.BASE_URL_REPORT + "mechanicbuyreportapi";
  public MECHANIC_BUY_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "mechanicbuyreportweb";


  public FULL_REPORT = this.BASE_URL_REPORT + "fullreportapi";
  public FULL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "fullreportweb";

  public DOCUMENT_BILL_REPORT = this.BASE_URL_REPORT + "documentbillreportapi";
  public DOCUMENT_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "documentbillreportweb";


  public DOCUMENT_DATE_REPORT = this.BASE_URL_REPORT + "documentdatereportapi";
  public DOCUMENT_DATE_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "documentdatereportweb";

  public VEHICLE_WORK_REPORT = this.BASE_URL_REPORT + "vehicleworkreportapi";
  public VEHICLE_WORK_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "vehicleworkreportweb";

  public VEHICLE_BILL_REPORT = this.BASE_URL_REPORT + "vehiclebillreportapi";
  public VEHICLE_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "vehiclebillreportweb";

  

  



  public K_ACCOUNT_INFO="accountinfo";
  public SELECTED_WORK_PART="selectedworkpart";
  public DETAILS="details";
  public ADDED_VEHICLE_ID="addedvehicleid";
  public SELECTED_REASON="selectedreason";
  public DATE="date";


  constructor(public http: HttpClient) {
    console.log('Hello CodesProvider Provider');
  }


}