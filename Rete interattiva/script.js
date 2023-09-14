window.addEventListener("load", function () {
  console.log("All assets are loaded");

  var network = document.querySelector("#network");
  console.log(network, network.contentDocument);

  nodes = network.contentDocument.querySelectorAll("circle");

  document.getElementById("node-id").innerHTML = "NODE";

  nodes.forEach((node) => {
    node.addEventListener("mouseover", function (event) {
      color = node.getAttribute("fill");
      nodeId = node.getAttribute("class").slice(3);
      document.getElementById("node-id").innerHTML = nodeId;
      document.getElementById("node-id").style.backgroundColor = color;
    });

    node.addEventListener("click", function (event) {
      color = node.getAttribute("fill");
      nodeId = node.getAttribute("class").slice(3);
      url_start = "";

      switch (color) {
        case "#71d1b3":
          url_start = "https://en.wikipedia.org/wiki/";
          break;
        case "#f08d30":
          url_start = "https://commons.wikimedia.org/wiki/";
          break;
        case "#2fa1ea":
          url_start = "https://en.wikipedia.org/wiki/User:";
          break;

        default:
          url_start = "";
          break;
      }
      window.open(url_start + nodeId, "_blank");
    });
  });

  document.getElementById("zoom-in").addEventListener("click", function () {
    w = document.getElementById("network").clientWidth * 1.5;
    document.getElementById("network").style.width = w;
  });

  document.getElementById("zoom-out").addEventListener("click", function () {
    w = document.getElementById("network").clientWidth * 0.5;
    document.getElementById("network").style.width = w;
  });
});
