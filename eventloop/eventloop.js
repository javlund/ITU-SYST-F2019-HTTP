let lastTime = new Date().getTime();

function printTimePassed() {
  const now = new Date().getTime();
  console.log((now - lastTime) + ' millisekunder er gået siden sidste gang');
  lastTime = now;
}

function spendTime() {
  const dummy = [];
  for (let i = 0; i < 10000000; i++) {
    dummy.push(new Object());
  }
}

printTimePassed();
setTimeout(printTimePassed, 1000);
spendTime();