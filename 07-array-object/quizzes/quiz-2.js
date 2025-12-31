var goodS = [];
goodS[0] = "하이루";
goodS[1] = "배고파";
goodS[2] = "어려워";
goodS[3] = "좋은 글귀가 뭔데";
goodS[4] = "고양이 귀여워"
goodS[5] = "카피바라 귀여워";

var ranS = Math.floor(Math.random() * 6);
document.write("<p>&quot;" + goodS[ranS] + "&quot;</p>");