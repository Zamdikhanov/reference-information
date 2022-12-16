export default function zamdikhanovCanvas() {
    let canvas = document.getElementById('zamdikhanov') as HTMLCanvasElement;
    let container = document.getElementById('zamdikhanov_container') as HTMLElement;

    let ctx: CanvasRenderingContext2D;
    let w: number;
    let h: number;

    if (!canvas || !container) return;

    ctx = canvas.getContext('2d')!;
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;

    ctx.lineJoin = 'round';

    var canvas3 = document.createElement('canvas');
    var ctx3 = canvas3.getContext('2d');
    canvas3.width = w;
    canvas3.height = h;

    let dotsArray = [
        [
            //z
            [2, 0],
            [38, 0],
            [74, 0],
            [74, 23],
            [65, 46],
            [55, 69],
            [46, 92],
            [36, 115],
            [27, 138],
            [73, 138],
            [73, 161],
            [36, 161],
            [0, 161],
            [0, 138],
            [9, 115],
            [19, 92],
            [28, 69],
            [38, 46],
            [47, 23],
            [2, 23],
            [2, 0],
        ],
        [
            //a
            [108, 0],
            [142, 0],
            [146, 23],
            [149, 46],
            [153, 69],
            [157, 92],
            [161, 115],
            [164, 138],
            [168, 161],
            [143, 161],
            [140, 138],
            [108, 138],
            [105, 161],
            [82, 161],
            [86, 138],
            [89, 115],
            [93, 92],
            [97, 69],
            [101, 46],
            [105, 23],
            [108, 0],
        ],
        [
            //a
            [124, 23],
            [127, 46],
            [130, 69],
            [134, 92],
            [137, 115],
            [111, 115],
            [115, 92],
            [118, 69],
            [121, 46],
            [124, 23],
        ],
        [
            //m
            [181, 0],
            [217, 0],
            [220, 23],
            [224, 46],
            [227, 69],
            [231, 92],
            [234, 115],
            [237, 92],
            [241, 69],
            [244, 46],
            [248, 23],
            [251, 0],
            [287, 0],
            [287, 23],
            [287, 46],
            [287, 69],
            [287, 92],
            [287, 115],
            [287, 138],
            [287, 161],
            [263, 161],
            [263, 138],
            [263, 115],
            [263, 92],
            [263, 69],
            [263, 46],
            [259, 69],
            [255, 92],
            [251, 115],
            [247, 138],
            [243, 161],
            [223, 161],
            [219, 138],
            [215, 115],
            [212, 92],
            [208, 69],
            [204, 46],
            [204, 69],
            [204, 92],
            [204, 115],
            [204, 138],
            [204, 161],
            [181, 161],
            [181, 138],
            [181, 115],
            [181, 92],
            [181, 69],
            [181, 46],
            [181, 23],
            [181, 0],
        ],
        [
            //d
            [307, 0],
            [331, 0],
            [358, 0],
            [382, 23],
            [382, 46],
            [382, 69],
            [382, 92],
            [382, 115],
            [382, 138],
            [358, 161],
            [331, 161],
            [307, 161],
            [307, 138],
            [307, 115],
            [307, 92],
            [307, 69],
            [307, 46],
            [307, 23],
            [307, 0],
        ],
        [
            //d
            [331, 23],
            [358, 23],
            [358, 46],
            [358, 69],
            [358, 92],
            [358, 115],
            [358, 138],
            [331, 138],
            [331, 115],
            [331, 92],
            [331, 69],
            [331, 46],
            [331, 23],
        ],
        [
            //i
            [401, 0],
            [425, 0],
            [425, 23],
            [425, 46],
            [425, 69],
            [425, 92],
            [425, 115],
            [425, 138],
            [425, 161],
            [401, 161],
            [401, 138],
            [401, 115],
            [401, 92],
            [401, 69],
            [401, 46],
            [401, 23],
            [401, 0],
        ],
        [
            //k
            [445, 0],
            [469, 0],
            [469, 23],
            [469, 46],
            [469, 69],
            [480, 46],
            [492, 23],
            [503, 0],
            [528, 0],
            [516, 23],
            [504, 46],
            [497, 60],
            [507, 92],
            [514, 115],
            [521, 138],
            [528, 161],
            [503, 161],
            [496, 138],
            [488, 115],
            [481, 92],
            [469, 115],
            [469, 138],
            [469, 161],
            [445, 161],
            [445, 138],
            [445, 115],
            [445, 92],
            [445, 69],
            [445, 46],
            [445, 23],
            [445, 0],
        ],
        [
            //h
            [542, 0],
            [566, 0],
            [566, 23],
            [566, 46],
            [566, 69],
            [594, 69],
            [594, 46],
            [594, 23],
            [594, 0],
            [618, 0],
            [618, 23],
            [618, 46],
            [618, 69],
            [618, 92],
            [618, 115],
            [618, 138],
            [618, 161],
            [594, 161],
            [594, 138],
            [594, 115],
            [594, 92],
            [566, 92],
            [566, 115],
            [566, 138],
            [566, 161],
            [542, 161],
            [542, 138],
            [542, 115],
            [542, 92],
            [542, 69],
            [542, 46],
            [542, 23],
            [542, 0],
        ],
        [
            //a
            [658, 0],
            [692, 0],
            [696, 23],
            [699, 46],
            [703, 69],
            [707, 92],
            [711, 115],
            [714, 138],
            [718, 161],
            [693, 161],
            [690, 138],
            [658, 138],
            [655, 161],
            [632, 161],
            [636, 138],
            [639, 115],
            [643, 92],
            [647, 69],
            [651, 46],
            [655, 23],
            [658, 0],
        ],
        [
            //a
            [674, 23],
            [677, 46],
            [680, 69],
            [684, 92],
            [687, 115],
            [661, 115],
            [665, 92],
            [668, 69],
            [671, 46],
            [674, 23],
        ],
        [
            //n
            [731, 0],
            [755, 0],
            [763, 23],
            [772, 46],
            [780, 69],
            [788, 92],
            [788, 69],
            [788, 46],
            [788, 23],
            [788, 0],
            [812, 0],
            [812, 23],
            [812, 46],
            [812, 69],
            [812, 92],
            [812, 115],
            [812, 138],
            [812, 161],
            [788, 161],
            [780, 138],
            [772, 115],
            [763, 92],
            [755, 69],
            [755, 92],
            [755, 115],
            [755, 138],
            [755, 161],
            [731, 161],
            [731, 138],
            [731, 115],
            [731, 92],
            [731, 69],
            [731, 46],
            [731, 23],
            [731, 0],
        ],
        [
            //o
            [853, 0],
            [881, 0],
            [905, 23],
            [905, 46],
            [905, 69],
            [905, 92],
            [905, 115],
            [905, 138],
            [881, 161],
            [853, 161],
            [829, 138],
            [829, 115],
            [829, 92],
            [829, 69],
            [829, 46],
            [829, 23],
            [853, 0],
        ],
        [
            //o
            [853, 23],
            [881, 23],
            [881, 46],
            [881, 69],
            [881, 92],
            [881, 115],
            [881, 138],
            [853, 138],
            [853, 115],
            [853, 92],
            [853, 69],
            [853, 46],
            [853, 23],
        ],
        [
            //v
            [917, 0],
            [941, 0],
            [944, 23],
            [947, 46],
            [947, 46],
            [950, 69],
            [952, 92],
            [952, 92],
            [955, 115],
            [958, 138],
            [961, 115],
            [964, 92],
            [967, 69],
            [970, 46],
            [973, 23],
            [976, 0],
            [999, 0],
            [995, 23],
            [992, 46],
            [988, 69],
            [985, 92],
            [981, 115],
            [978, 138],
            [974, 161],
            [941, 161],
            [938, 138],
            [934, 115],
            [931, 92],
            [927, 69],
            [924, 46],
            [920, 23],
            [917, 0],
        ],
    ];

    type TmovingDot = {
        originalX: number;
        originalY: number;
        offsetX: number;
        offsetY: number;
    };

    let movingDots: TmovingDot[][] = recalculateCoord(dotsArray);

    function recalculateCoord(dotsArray: number[][][]) {
        return dotsArray.map((dotsLetter) => {
            let width = 1000;
            let height = 161;
            let widthPercent = 0.99;
            let kX = (w * widthPercent) / width;
            let deltaXCanvas = (w - w * widthPercent) / 2;
            let deltaYCanvas = (h - height * kX) / 2;
            return dotsLetter.map((dotArr) => {
                return {
                    originalX: dotArr[0] * kX + deltaXCanvas,
                    originalY: dotArr[1] * kX + deltaYCanvas,
                    offsetX: 0,
                    offsetY: 0,
                };
            });
        });
    }

    let mouse = { x: w / 2, y: h / 2 };

    function setPos(e: MouseEvent) {
        let { offsetX, offsetY } = e;
        mouse.x = offsetX;
        mouse.y = offsetY;
    }

    function isInsideCircle(dx: number, dy: number, R: number) {
        if (dx > R) return false;
        if (dy > R) return false;
        if (dx + dy <= R) return true;
        if (dx * dx + dy * dy <= R * R) {
            return true;
        } else {
            return false;
        }
    }

    function mouseChangeDotsCoord(incomingDotsArr: TmovingDot[][], timeStamp = 0) {
        let maxChangePx = 20;
        let countWave = 3;
        let period = 3000 / 6;
        let angle = (Math.PI * (timeStamp + period / countWave + period * 0.5)) / (period * 2);
        let radiusK = Math.sin(angle);
        let R = ((w / 10) * 2) / 3 + Math.abs(radiusK) * (((w / 10) * 1) / 3);

        incomingDotsArr.map((dotsLetter) => {
            return dotsLetter.forEach((dotObj) => {
                let dx = Math.abs(dotObj.originalX - mouse.x);
                let dy = Math.abs(dotObj.originalY - mouse.y);
                if (isInsideCircle(dx, dy, R)) {
                    let gyp = (dx * dx + dy * dy) ** 0.5;
                    dotObj.offsetX =
                        dotObj.originalX - mouse.x > 0
                            ? ((dx * (R - gyp)) / gyp / R) ** 0.5 * maxChangePx
                            : -(((dx * (R - gyp)) / gyp / R) ** 0.5) * maxChangePx;
                    dotObj.offsetY =
                        dotObj.originalY - mouse.y > 0
                            ? ((dy * (R - gyp)) / gyp / R) ** 0.5 * maxChangePx
                            : -(((dy * (R - gyp)) / gyp / R) ** 0.5) * maxChangePx;
                } else {
                    dotObj.offsetX = 0;
                    dotObj.offsetY = 0;
                }
            });
        });
    }

    function dotsArrayDraw(arr: TmovingDot[][]) {
        let widthPercent = 0.99;
        let kX = (w * widthPercent) / 1000;
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
            let symbolArr = arr[i];
            let arrSymbolLength = symbolArr.length;
            ctx.lineWidth = Math.ceil(1 * kX);
            ctx.strokeStyle = 'rgba(55,55,55,1)';
            ctx.fillStyle = 'transparent';
            ctx.beginPath();
            ctx.moveTo(
                symbolArr[0].originalX + symbolArr[0].offsetX,
                symbolArr[0].originalY + symbolArr[0].offsetY,
            );
            for (let j = 0; j < arrSymbolLength; j++) {
                ctx.lineTo(
                    symbolArr[j].originalX + symbolArr[j].offsetX,
                    symbolArr[j].originalY + symbolArr[j].offsetY,
                );
            }
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.lineWidth = Math.ceil(2 * kX);
            ctx.strokeStyle = 'rgba(55,55,55,1)';
            ctx.fillStyle = 'white';
            for (let j = 0; j < arrSymbolLength; j++) {
                ctx.beginPath();
                ctx.moveTo(
                    symbolArr[j].originalX + symbolArr[j].offsetX,
                    symbolArr[j].originalY + symbolArr[j].offsetY,
                );
                ctx.arc(
                    symbolArr[j].originalX + symbolArr[j].offsetX,
                    symbolArr[j].originalY + symbolArr[j].offsetY,
                    Math.ceil(2 * kX),
                    0,
                    2 * Math.PI,
                    false,
                );
                ctx.stroke();
                ctx.fill();
            }
        }
    }

    function throttle(callee: () => any, timeout: number) {
        let timer: number | ReturnType<typeof setTimeout> = 0;
        return function perform(...args: []) {
            if (timer) return;
            timer = setTimeout(() => {
                callee(...args);
                clearTimeout(timer);
                timer = 0;
            }, timeout);
        };
    }

    function cursorWaveDraw(timeStamp: number) {
        if (!ctx3) return;
        let countWave = 3;
        let period = 3000;

        ctx3.shadowColor = `none`;
        ctx3.clearRect(0, 0, w, h);

        ctx3.beginPath();
        ctx3.arc(mouse.x, mouse.y, 2, 0, 2 * Math.PI, false);
        ctx3.lineWidth = 2;
        ctx3.strokeStyle = `rgba(255, 80, 0, 1)`;
        ctx3.shadowColor = `none`;
        ctx3.fillStyle = 'transparent';
        ctx3.stroke();

        for (let i = 0; i < countWave; i++) {
            let angle = (Math.PI * (timeStamp + (period * i) / countWave)) / (period * 2);
            let radiusK = Math.tan(angle) > 0 ? Math.sin(angle) : Math.cos(angle);
            let r = 1 + Math.abs(radiusK) * (w / 20 - 1);
            ctx3.beginPath();
            ctx3.arc(mouse.x, mouse.y, r, 0, 2 * Math.PI, false);
            ctx3.lineWidth = 3;
            ctx3.strokeStyle = `rgba(255, 80, 0, ${1 - Math.abs(radiusK)})`;
            ctx3.shadowOffsetX = 0;
            ctx3.shadowOffsetY = 0;
            ctx3.shadowBlur = 20;
            ctx3.shadowColor = `rgba(0, 0, 255, ${1 - Math.abs(radiusK)})`;
            ctx3.fillStyle = 'transparent';
            ctx3.stroke();
        }

        ctx3.shadowColor = `transparent`;
    }

    type Tshoot = {
        x: number;
        y: number;
        shootTime: number;
        word: string;
    };

    let shootArr: Tshoot[] = [];
    let isShoot = false;

    function shoot(timeStamp: number) {
        if (!ctx3) return;
        let period = 1000;
        let word1 = 'паф';
        let word2 = 'тра-та-та';
        let word3 = 'возьми на работу';
        if (isShoot) {
            let word = word1.toUpperCase();
            if (shootArr.length > 3) word = word2.toUpperCase();
            if (shootArr.length > 5) word = word3.toUpperCase();
            shootArr.push({ x: mouse.x, y: mouse.y, shootTime: timeStamp, word: word });
            isShoot = false;
        }
        for (let i = 0; i < shootArr.length; i++) {
            let deltaTime = timeStamp - shootArr[i].shootTime;
            if (shootArr[i].word === word3) deltaTime = (timeStamp - shootArr[i].shootTime) / 3;
            ctx3.fillStyle = `rgba(255, 80, 0, ${1 - deltaTime / period})`;
            ctx3.font = `${h / 10 + Math.round((((3 * h) / 10) * deltaTime) / period)}px Arial`;
            ctx3.textAlign = 'center';
            ctx3.textBaseline = 'middle';
            ctx3.fillText(shootArr[i].word, shootArr[i].x, shootArr[i].y);
            if (deltaTime > period) shootArr.shift();
        }
    }

    let idRequestAnimationFrame: number;

    function render(timeStamp: number = 0) {
        ctx.clearRect(0, 0, w, h);

        ctx.drawImage(canvas3, 0, 0, w, h);
        cursorWaveDraw(timeStamp);
        shoot(timeStamp);
        mouseChangeDotsCoord(movingDots, timeStamp);
        dotsArrayDraw(movingDots);

        idRequestAnimationFrame = window.requestAnimationFrame(render);
    }

    ctx.drawImage(canvas3, 0, 0, w, h);
    dotsArrayDraw(movingDots);
    cursorWaveDraw(0);

    const updateCanvasSize = throttle(() => {
        w = canvas.width = container.clientWidth;
        h = canvas.height = container.clientHeight;
        canvas3.width = w;
        canvas3.height = h;
        movingDots = recalculateCoord(dotsArray);
        render();
    }, 100);

    window.addEventListener('resize', updateCanvasSize);
    canvas.addEventListener(`mousemove`, setPos);
    canvas.addEventListener(`mouseover`, () => render());
    canvas.addEventListener(`click`, () => {
        isShoot = true;
    });
    canvas.addEventListener(`mouseout`, () => {
        window.cancelAnimationFrame(idRequestAnimationFrame);
    });
}
