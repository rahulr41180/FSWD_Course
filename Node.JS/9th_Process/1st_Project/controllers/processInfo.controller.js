export const getProcessInfo = (req, res) => {
    res.json({
      pid: process.pid,
      platform: process.platform,
      nodeVersion: process.version,
      uptime: `${process.uptime().toFixed(2)} seconds`,
      memoryUsage: process.memoryUsage(),
      env: {
        port: process.env.PORT,
        mode: process.env.APP_MODE
      }
    });
  };
  