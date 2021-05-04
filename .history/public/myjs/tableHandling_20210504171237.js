$(document).ready(function () {
  $("#sort").DataTable({
    scrollY: "300px",
    iDisplayLength: 6,
    info: false,
    dom:
      '<"top">rt<"bottom"<"row"<"col-3 mt-1 pull-left"f><"col-9"p>>><"clear">',
  });
});
