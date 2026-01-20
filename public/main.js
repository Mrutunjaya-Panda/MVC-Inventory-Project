function deleteProductId(id) {
  let confirmDelete = confirm("Are you sure you want to delete this product?");
  if (confirmDelete) {
    fetch(`/delete-product/${id}`, { method: "POST" }).then((res) => {
      if (res.ok) {
        //reload the page to see the updated products list
        window.location.reload();
      }
    });
  }
}
