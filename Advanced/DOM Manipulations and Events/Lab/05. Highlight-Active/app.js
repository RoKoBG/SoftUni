function focused() {
  const parent = document.querySelector("div");
  parent.addEventListener("focusin", onFocus);
  parent.addEventListener("focusout", onBlur);

  function onFocus(event) {
    event.target.parentElement.classList.add("focused");
  }
  function onBlur(event) {
    event.target.parentElement.classList.remove("focused");
  }
  // Judge variant
  // const inputs = Array.from(document.querySelectorAll('input'));
  // for (const input of inputs) {
  //     input.addEventListener('focus', () =>{
  //         input.parentElement.className='focused';
  //     });
  //     input.addEventListener('blur', () =>{
  //         input.parentElement.className=''
  //     });
  // }
}
