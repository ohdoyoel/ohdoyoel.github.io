import BLOCKS from "./blocks.js";
const BLOCKS_KEYS = Object.entries(BLOCKS);

// dom
const playground = document.querySelector(".playground > ul");
const gameText = document.querySelector(".game-text");
const scoreDisplay = document.querySelector(".score");
const restartButton = document.querySelector(".game-text > button")

// config
const NUM_ROW = 20;
const NUM_COL = 10;
const DURATION = 1000;

// variable
let score = 0;
let downInterval;
let tempMovingBlock;
const movingBlock = {
    type: "",
    dirIdx: 0,
    x: 0,
    y: 3,
};
let gameOver = false;

// function
const prependNewLine = () => {
    const row = document.createElement("li");
    const rowUl = document.createElement("ul");
    for (let j = 0; j < NUM_COL; ++j) {
        const cell = document.createElement("li");
        rowUl.prepend(cell);
    }
    row.prepend(rowUl);
    playground.prepend(row);
}
const init = () => {
    score = 0;
    scoreUpdate(0);
    gameOver = false;
    gameText.style.display = "none";
    for (let i = 0; i < NUM_ROW; ++i) {
        prependNewLine();
    }
    generateNewBlock();
}
const showGameOverText = () => {
    gameText.style.display = "flex";
}
const scoreUpdate = (amount) => {
    score += amount;
    scoreDisplay.innerText = score;
}
const renderBlock = () => {
    const {type, dirIdx, x, y } = tempMovingBlock;
    const prevCells = document.querySelectorAll(".moving");
    prevCells.forEach(e => {
        e.classList.remove(type, "moving");
    })
    BLOCKS[type][dirIdx].forEach(e => {
        const _x = e[0] + x;
        const _y = e[1] + y;
        const target = playground.childNodes[_x].childNodes[0].childNodes[_y];
        if (_x == 0 && target.classList.contains("seized")) {
            gameOver = true;
            clearInterval(downInterval);
            showGameOverText();
        }
        target.classList.add(type, "moving");
    });
    const isToBeSezied = BLOCKS[type][dirIdx].some(e => {
        const _x = e[0] + x;
        const _y = e[1] + y;
        let res = false;
        if (_x + 1 < NUM_ROW) res = playground.childNodes[_x + 1].childNodes[0].childNodes[_y].classList.contains("seized");
        else res = true;
        return res;
    });
    if (isToBeSezied) {
        seizeBlock();
    }
}
const isValidPos = (nx, ny) => {
    if (NUM_ROW <= nx || nx < 0 || NUM_COL <= ny || ny < 0) return false;
    return true;
}
const isMoveAvailable = (dx, dy, dd) => {
    const {type, dirIdx, x, y} = tempMovingBlock;
    return BLOCKS[type][(dirIdx + dd) % 4].every(e => {
        const _x = e[0] + x + dx;
        const _y = e[1] + y + dy;
        return isValidPos(_x, _y);
    });
}
const moveBlock = (dx, dy, dd) => {
    if (isMoveAvailable(dx, dy, dd)) {
        tempMovingBlock.x += dx;
        tempMovingBlock.y += dy;
        tempMovingBlock.dirIdx = (tempMovingBlock.dirIdx + dd) % 4;
    }
    renderBlock();
}
const dropBlock = () => {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock(1, 0, 0);
        scoreUpdate(1);
    }, 10);
}
const seizeBlock = () => {
    const movingCells = document.querySelectorAll(".moving");
    movingCells.forEach(e => {
        e.classList.remove("moving");
        e.classList.add("seized");
    })
    scoreUpdate(50);
    checkMatch();
    generateNewBlock();
}
const checkMatch = () => {
    const childNodes = playground.childNodes;
    childNodes.forEach(row => {
        // const cells = row.childNodes[0].childNodes;
        // console.log(cells);
        // const matched = cells.every(cell => {
        //     return cell.classList.contains("seized");
        // });
        let matched = true;
        row.childNodes[0].childNodes.forEach((li) => {
            if(!li.classList.contains("seized")) matched = false;
        })
        if (matched) {
            scoreUpdate(100);
            row.remove();
            prependNewLine();
        }
    })
}
const generateNewBlock = () => {
    if (gameOver) return;
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock(1, 0, 0);
    }, DURATION);

    const rdIdx = Math.floor(Math.random() * BLOCKS_KEYS.length);
    movingBlock.type = BLOCKS_KEYS[rdIdx][0];
    tempMovingBlock = {...movingBlock};
    renderBlock();
}

// event handle
document.addEventListener("keydown", (e) => {
    if (gameOver) return;
    switch(e.key) {
        case "ArrowLeft":
            moveBlock(0, -1, 0);
            break;
        case "ArrowRight":
            moveBlock(0, 1, 0);
            break;
        case "ArrowDown":
            moveBlock(1, 0, 0);
            break;
        case "ArrowUp":
            moveBlock(0, 0, 1);
            break;
        case " ":
            dropBlock();
            break;
        default:
            break;
    }
})
restartButton.addEventListener("click", (e) => {
    playground.innerHTML = "";
    init();
})

// logic
init();
