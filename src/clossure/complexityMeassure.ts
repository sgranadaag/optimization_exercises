export const complexityMeassure = (callBack: Function) => {
    const startTime = performance.now();
    const startCpu = process.cpuUsage();

    callBack();

    const endTime = performance.now();
    const cpu = process.cpuUsage(startCpu);

    console.log({
        wallTime: `${(endTime - startTime).toFixed(2)} ms`,
        cpuUser: `${cpu.user / 1000} ms`,
        cpuSystem: `${cpu.system / 1000} ms`
    });
}