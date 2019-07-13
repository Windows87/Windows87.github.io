function setTerminalStyle(name, element, end = 0) {
  setTimeout(() => {
    if(name.length === end) {
      element.innerText = name;

    } else {
      let show = `${name.substring(0, end)}|`;
      element.innerText = show;
      setTerminalStyle(name, element, ++end);
    }
  }, 100);
}

function start() {
  setTerminalStyle('YURI FARIA', document.querySelector('h1'));
  setTerminalStyle('Full Stack Developer', document.querySelector('h2'));
}

start();