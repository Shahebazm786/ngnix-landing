document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');
            
            // Close other open answers
            document.querySelectorAll('.answer').forEach(ans => {
                if (ans !== answer) {
                    ans.style.maxHeight = null;
                }
            });
            document.querySelectorAll('.question span').forEach(i => {
                if (i !== icon) {
                    i.textContent = '+';
                    i.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle the clicked answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = '+';
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '×';
                icon.style.transform = 'rotate(45deg)';
                icon.style.transition = 'transform 0.3s';
            }
        });
    });
});
