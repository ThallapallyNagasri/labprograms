const os = require('os');
const path = require('path');
const util = require('util');
const EventEmitter = require('events');
class SystemInfoEmitter extends EventEmitter {}
const systemInfoEmitter = new SystemInfoEmitter();
systemInfoEmitter.on('getSystemInfo', () => {
    console.log('Operating System:', os.type());
    console.log('Platform:', os.platform());
    console.log('CPU Architecture:', os.arch());
    console.log('System Uptime:', os.uptime(), 'seconds');
    console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
    console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');
    console.log('Home Directory:', os.homedir());
    const userFilePath = path.join(os.homedir(), 'documents', 'file.txt');
    console.log('User File Path:', userFilePath);
    console.log('File Name:', path.basename(userFilePath)); // Get file name
    console.log('File Extension:', path.extname(userFilePath)); // Get extension
    const systemInfo = {
        os: os.type(),
        platform: os.platform(),
        uptime: os.uptime(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
    };
    console.log('System Info Object:', util.inspect(systemInfo, { showHidden: false, depth: null }));
    const formattedString = util.format('System Info: OS: %s, Uptime: %d seconds', systemInfo.os, systemInfo.uptime);
    console.log(formattedString);
});
systemInfoEmitter.emit('getSystemInfo');
