var array = [{"total_exec_qty":"286595","total_notional":"21820771.72","total_wt_arr_last_slp":"2.4364","total_num_ords":"1630","total_wt_ivwap_slp":"6.0969","total_wt_arr_slp":"1.7889","total_ord_qty":"576991"}];

var object = array[0];

console.log("this is your object: ",object);

var data = [{"total_exec_qty":"286595","total_notional":"21820771.72","total_wt_arr_last_slp":"2.4364","total_num_ords":"1630","total_wt_ivwap_slp":"6.0969","total_wt_arr_slp":"1.7889","total_ord_qty":"576991"}];

data = JSON.parse(JSON.stringify(data[0]));

console.log("here is the alternative: ", data);