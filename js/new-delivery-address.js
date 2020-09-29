
$(function () {
    $("#btnAdd").bind("click", function (e) {
    	e.preventDefault();
        $('#new-delivery-details').show();
    });
    $("#cancel").on("click", function (e) {
    	e.preventDefault();
        $('#new-delivery-details').hide();
    });
});
// function GetNewDeliveryAddressForm(value) {
//     return ('<div class="delivery-wrapper billing-information"><form><div class="row"><div class="col-lg-6 col-md-6 col-sm-6"><div class="form-group"><label>Name</label><input type="text" class="form-control" name="" placeholder="John Doe"></div></div></div></form></div>');
// }