function deleteItem(item) {
    var i = item.parentNode.parentNode.rowIndex;
    document.getElementById("cart-table").deleteRow(i);
}

function noticeBoughtItems(){
    alert("Bạn đã đặt hàng thành công!")
}