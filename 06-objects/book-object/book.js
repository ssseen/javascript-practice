function Book(title, author, volume, price) {
   this.title = title;
   this.author = author;
   this.volume = volume;
   this.price = price;
}

var html = new Book("칸트의 집", "Ko", "608", "28,000");
var youtube = new Book('카피바라 동영상', '세연', '705', '50,000');
var python = new Book('점프 투 파이썬', '셍', '234', '12,000');

var booklist = [html, youtube, python];

document.write("<h1>책 제목으로 살펴보기</h1>");
for(var i=0; i<booklist.length; i++) {
   document.write("<p>" + booklist[i].title + "</p>");
}

document.write("<h1>책 가격으로 살펴보기</h1>");
for(var i=0; i<booklist.length; i++) {
   document.write("<p>" + booklist[i].price + "</p>");
}