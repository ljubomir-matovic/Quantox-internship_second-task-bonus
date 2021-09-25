let clickable = document.getElementsByClassName("question");
const showElement = (e) => {
    if (!e.target.classList.contains("active")) {
        let activeQuestions = document.querySelectorAll(".active");
        [...activeQuestions].forEach((element) => {
            element.classList.remove("active");
        });
    }
        let parent = e.target.parentElement.parentElement;
        let classLists = [parent.querySelector("img.question").classList, parent.querySelector(".answer").classList, parent.querySelector("p.question").classList];
        classLists.forEach((c) => {
            if (c.contains("active"))
                c.remove("active");
            else
                c.add("active");
        });
};
[...clickable].forEach(element => {
    element.addEventListener("click", showElement);
});