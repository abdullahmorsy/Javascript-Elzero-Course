let Title = "Elzero",
    Description = "Elzero Web School",
    Date = "25 / 10";
let markUp = `
<div class="card">
<h3>${Title}</h3>
<P>${Description}</P>
<span>${Date}</span>
</div>`;
let result = markUp.repeat(4);
document.write(result);
