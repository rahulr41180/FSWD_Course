
// os.arch(): Returns the operating system CPU architecture or which the Node.js binary was compiled. Possible values are 
// 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.

const os = require("os");

// System Information
console.log("OS Platform :", os.platform());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('OS Architecture:', os.arch());


// CPU information
console.log('CPU Cores list:', os.cpus());
console.log('CPU Cores length:', os.cpus().length);
console.log('Load Average:', os.loadavg());

// Dynamic Adjustment: Monitor system load and adjust workers dynamically

// javascript
// Copy
setInterval(() => {
  const load = os.loadavg()[0]; // 1-minute load average
  if (load > workerCount * 0.8) {
    // Consider adding more workers
  } else if (load < workerCount * 0.3) {
    // Consider reducing workers
  }
}, 60000);

// Memory information
console.log('Total Memory:', (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2), 'GB');
console.log('Free Memory:', (os.freemem() / (1024 * 1024 * 1024)).toFixed(2), 'GB');

// Network information
console.log('Hostname:', os.hostname());
console.log('Network Interfaces:', os.networkInterfaces());

// User information
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('User Info:', os.userInfo());

// Uptime
console.log('System Uptime:', (os.uptime() / 3600).toFixed(2), 'hours');