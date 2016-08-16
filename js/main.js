// var contentContainer = $(".content-container");
// var rowSize = 7;
// var columnSize = 2;
// var projectSize = 2;
//
// var projectList = {
//     projects: [{
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/0.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "Datatopia",
//         "cover": "cover-img/1.png",
//         "link": "projects/datatopia.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/2.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/3.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/4.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/5.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/6.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/7.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/8.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/9.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }, {
//         "title": "The Cursor Toolbox",
//         "cover": "cover-img/10.png",
//         "link": "projects/the-cursor-toolbox.html"
//     }]
// }
//
// //console.log(projectList.projects[0].cover);
//
// var testImg = "cover-img/placeholder.png";
//
// for (var i = 0; i < rowSize; i++) {
//     var rowContainer = $('<div class="row-container">');
//     contentContainer.append(rowContainer);
//
//     var leftContainer = $('<div class="left-container">');
//     var rightContainer = $('<div class="right-container">');
//     rowContainer.append(leftContainer);
//     rowContainer.append(rightContainer);
//
//     function addContainer(side, img) {
//         var coverContainer = $('<div class="cover-container">');
//         var coverImage = $('<img class="cover-image">');
//         coverImage.attr('src', img);
//         coverContainer.append(coverImage);
//
//         var randomProject = randomPlace(projectSize);
//         for (var j = 0; j < projectSize; j++) {
//             var projectContainer = $('<div class="project-container">');
//             if (randomProject[j] == 0) {
//                 projectContainer.append(coverContainer);
//             }
//             if (side == 0) {
//                 leftContainer.append(projectContainer);
//             } else if (side == 1) {
//                 rightContainer.append(projectContainer);
//             }
//         }
//     }
//     if (i == 2) {
//         var blogLogo = $('<img id="blog-logo">');
//         blogLogo.attr('src', 'home-img/blog.png');
//         leftContainer.append(blogLogo);
//         //addContainer(1, projectList.projects[0].cover);
//     } else if (i == 4) {
//         var resumeLogo = $('<img id="resume-logo">');
//         resumeLogo.attr('src', 'home-img/resume.png');
//         rightContainer.append(resumeLogo);
//         //addContainer(0, projectList.projects[1].cover);
//     } else if (i == 6) {
//         var contactLogo = $('<img id="contact-logo">');
//         contactLogo.attr('src', 'home-img/contact.png');
//         leftContainer.append(contactLogo);
//         //addContainer(1, projectList.projects[2].cover);
//     } else {
//         console.log(i);
//         //if (i < projectList.projects.length - 4) {
//         //if (i % 2 == 0) {
//         if (2 * i + 1 <= rowSize) {
//             addContainer(0, projectList.projects[2 * i].cover);
//             addContainer(1, projectList.projects[2 * i + 1].cover);
//             //} else {
//             //addContainer(0, projectList.projects[i + 2].cover);
//             //}
//             //}
//         }
//     }
// }
//
// function randomPlace(size) {
//     randomList = [];
//     for (var i = 0; i < size / 2; i++) {
//         var randomNumOdd = Math.round(Math.random(0, projectSize - 1));
//         var randomNumEven = Math.abs(randomNumOdd - 1);
//         randomList.push(randomNumOdd);
//         randomList.push(randomNumEven);
//     }
//     return randomList;
// }
