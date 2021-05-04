$(document).ready(function () {
  $("#sort").DataTable({
    scrollY: "300px",
    iDisplayLength: 6,
    info: false,
    dom:
      '<"top">rt<"bottom"<"row"<"col-3 mt-1 pull-left"f><"col-9"p>>><"clear">',
  });
  $("#sort2").DataTable({
    bAutoWidth: false,
    scrollY: "200px",
    aoColumns: [{ sWidth: "30%" }, { sWidth: "35%" }, { sWidth: "35%" }],
    iDisplayLength: 3,
    info: false,
    searching: false,
    bLengthChange: false,
    dom:
      '<"top">rt<"bottom"<"row"<"col-3 mt-1 pull-left"f><"col-9"p>>><"clear">',
  });
});
