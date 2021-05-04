$(document).ready(function () {
  $("#sort").DataTable({
    iDisplayLength: 6,
    info: false,
    lengthChange: false,
    dom:
      '<"top">rt<"bottom"<"row"<"col-3 mt-1 pull-left"f><"col-9"p>>><"clear">',
  });
  $("#sort2").DataTable({
    bAutoWidth: false,
    aoColumns: [{ sWidth: "20%" }, { sWidth: "40%" }, { sWidth: "40%" }],
    iDisplayLength: 3,
    info: false,
    searching: false,
    bLengthChange: false,
    dom:
      '<"top">rt<"bottom"<"row"<"col-3 mt-1 pull-left"f><"col-9"p>>><"clear">',
  });
});
