import {sum} from "./sum";
import './index.scss';

const result = sum(1,3);
console.log(result);

document.querySelector('input', ({target}) => {
    const {value} = target;

    alert(sum(+value, 4));
})