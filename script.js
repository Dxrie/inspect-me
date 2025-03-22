// _S4sada21fw}

document.addEventListener('DOMContentLoaded', function() {
    const content = document.body.innerHTML;
    document.body.innerHTML = `<div class="container">${content}</div>`;

    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.innerHTML = p.innerHTML.replace(
            /(Accounting|Computer Science|Marketing|industry demands|practical skills)/g,
            '<span class="highlight">$1</span>'
        );
    });

    // Create achievements section
    const achievementsDiv = document.createElement('div');
    achievementsDiv.className = 'achievements';
    achievementsDiv.innerHTML = `
        <h2>Key Highlights</h2>
        <ul>
            <li>Strong Accounting program focusing on financial management</li>
            <li>Comprehensive Computer Science curriculum covering IT and programming</li>
            <li>Dynamic Marketing training with real-world business strategies</li>
        </ul>
    `;
    document.querySelector('.container').appendChild(achievementsDiv);
});
