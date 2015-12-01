/**
 * Created by natha on 2015-11-24.
 */
var ComputerPart = require('./ComputerPart');

module.exports = function() {
    return {
        //object stuff here
        computercase: new ComputerPart(),
        processor: new ComputerPart(),
        motherboard: new ComputerPart(),
        ram: new ComputerPart(),
        powersupply: new ComputerPart(),
        graphicscard: new ComputerPart(),
        harddrive: new ComputerPart(),
        monitor: new ComputerPart(),
        keyboard: new ComputerPart(),
        webcam: new ComputerPart(),
        headset: new ComputerPart(),
        computer: new ComputerPart()
    }
};