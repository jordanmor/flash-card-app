const hint = document.querySelector('.card-hint');
if (hint) {
  const btn = document.createElement('button');
  btn.textContent = 'Show Hint';
  btn.className = ('card-hint-btn');
  hint.parentNode.insertBefore(btn, hint);
  hint.className = ('card-hint hide');
  
  btn.addEventListener("click", function() {
    this.className = 'card-hint-btn hide';
    hint.className = 'card-hint';
  });
}
