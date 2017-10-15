$(document).ready(() => {
  const tank = document.querySelector("#task").textContent;
  console.log(tank);

  $("#task").on("click", event => {
    const tank2 = $("#task").text("false");

    const tank3 = document.querySelector("#task").textContent;
    console.log(tank3);

    $.ajax({
      url: "/lists/:id/tasks",
      method: "PUT",
      data: {
        completed: JSON.stringify(tank3)
      }
    });
    // return false;
    // if (tank === "true") {
    //   let tank2 = $("#task").text("false");
    //
    //   // $.ajax({
    //   //   url: "/lists/:id/tasks",
    //   //   method: "PUT",
    //   //   data: {
    //   //     completed: tank2
    //   //   }
    //   // });
    // } else {
    //   let tank3 = $("#task").text("true");
    //
    //   // $.ajax({
    //   //   url: "/lists/:id/tasks",
    //   //   method: "PUT",
    //   //   data: {
    //   //     completed: tank3
    //   //   }
    //   // });
    // }
  });
});
