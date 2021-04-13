$(function () {
  const throttle = function (func, delay) {
    let prev = Date.now();
    return function () {
      const context = this;
      const args = arguments;
      const now = Date.now();
      if (now - prev >= delay) {
        func.apply(context, args);
        prev = Date.now();
      }
    };
  };
  const debounce = (fn, wait) => {
    let timeout = null;
    return function () {
      if (timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(fn, wait);
    };
  };

  const isTouch = () => {
    return navigator.maxTouchPoints > 0;
  };

  const onMousemove = () => {
    const pageX = $(document).width();
    const pageY = $(document).height();
    const handleMousemove = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const xAxis = ((mouseX / pageX) * 100 - 50) / 2;
      const yAxis = (mouseY / pageY) * 100 - 50;
      $(".ghost-eyes").css("transform", `translate(${xAxis}%,${yAxis}%`);
    };
    $(document).off("mousemove touchmove", handleMousemove);
    $(document).on("mousemove touchmove", handleMousemove);
  };

  onTouchmove = () => {
    const pageX = $(document).width();
    const pageY = $(document).height();
    const handleTouchmove = (event) => {
      const mouseX = event.targetTouches[0].pageX;
      const mouseY = event.targetTouches[0].pageY;
      const xAxis = ((mouseX / pageX) * 100 - 50) / 2;
      const yAxis = (mouseY / pageY) * 100 - 50;
      $(".ghost-eyes").css("transform", `translate(${xAxis}%,${yAxis}%`);
    };
    $(document).off("touchmove", handleTouchmove);
    $(document).on("touchmove", handleTouchmove);
  };
  onMousemove();
  if (isTouch()) {
    onTouchmove();
  }

  $(window).on("rize", debounce(onMousemove, 500));

  //   今日诗词
  jinrishici.load(function (result) {
    if (result.status === "success") {
      const data = result.data;
      const shiciStr = data.content.replace("。", "").split("，").join("<br>");
      $("#shici").html(shiciStr);
    }
  });
});
