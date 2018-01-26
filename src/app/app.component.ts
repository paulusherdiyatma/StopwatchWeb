import { Component } from '@angular/core';
import '../assets/css/styles.css';

declare var require: any;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    timeHour = 0;
    timeMinute: number = 0;
    timeSecond = 0;
    timeMilisecond = 0;
    time = 0;
    timer: any;
    isCounting: boolean;

    start() {
        let me = this;
        me.isCounting = true;
        me.timer = window.setInterval(function () {
            me.startTime();
        }, 10);
    }

    stop() {
        let me = this;
        me.isCounting = false;
        window.clearInterval(me.timer);
    }

    reset() {
        let me = this;
        me.isCounting = false;
        window.clearInterval(me.timer);
        me.time = 0;
        me.timeHour = 0;
        me.timeMinute = 0;
        me.timeSecond = 0;
        me.timeMilisecond = 0;
    }

    startTime() {
        let me = this;
        me.time++;
        me.setMilisecond();
        me.setSecond();
        me.setMinute();
    }

    setMilisecond() {
        let me = this;
        me.timeMilisecond > 99 ? me.timeMilisecond = 0 : me.timeMilisecond++;
    }

    setSecond() {
        let me = this;
        if (me.time % 100 == 0) {
            me.timeSecond >= 59 ? me.timeSecond = 0 : me.timeSecond++;
        }
    }

    setMinute() {
        let me = this;
        if (me.time % 6000 == 0) {
            me.timeMinute >= 59 ? me.timeMinute = 0 : me.timeMinute++;
        }
    }

    setHour() {
        let me = this;
        if (me.time % 360000 == 0) me.timeHour++;
    }
}